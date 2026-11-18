"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Visit" },
];

function Mark({ className = "" }) {
  return (
    <svg viewBox='0 0 24 24' className={className} aria-hidden='true'>
      <path
        fill='currentColor'
        d='M12.4 1.5c.6 4.4 5.6 6.6 5.8 12.1.2 4.7-2.6 8.9-6.2 8.9s-6.4-4.2-6.2-8.9c.2-3.6 2.4-5 3.6-7.6.7-1.5.8-3 3-4.5Z'
      />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !isHome || scrolled || open;

  return (
    <>
      <header
        className={`sticky top-0 z-50 h-20 text-cream transition-colors duration-300 ${
          solid
            ? "border-b border-cream/10 bg-char/95 backdrop-blur"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className='mx-auto flex h-full max-w-6xl items-center justify-between px-6'>
          <Link
            href='/'
            onClick={() => setOpen(false)}
            className='group flex items-center gap-2.5 font-display text-2xl tracking-wide'
          >
            <Mark className='h-5 w-5 text-ember transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-110' />
            Cinder &amp; Vine
          </Link>

          <nav className='hidden items-center gap-9 font-body text-sm text-cream/75 md:flex'>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`group relative py-1 transition-colors hover:text-cream ${
                  pathname === l.href ? "text-cream" : ""
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-mustard transition-all duration-300 ${
                    pathname === l.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className='flex items-center gap-5'>
            <a
              href='tel:5550184402'
              className='hidden font-body text-sm text-cream/70 transition-colors hover:text-cream lg:block'
            >
              (555) 018-4402
            </a>
            <Link
              href='/reservations'
              className='hidden bg-mustard px-5 py-2.5 font-body text-sm font-medium text-char transition-colors hover:bg-cream sm:block'
            >
              Reserve a table
            </Link>
            <button
              type='button'
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className='relative h-10 w-10 md:hidden'
            >
              <span
                className={`absolute left-2 right-2 h-px bg-cream transition-all duration-300 ${
                  open ? "top-5 rotate-45" : "top-3.5"
                }`}
              />
              <span
                className={`absolute left-2 right-2 h-px bg-cream transition-all duration-300 ${
                  open ? "top-5 -rotate-45" : "top-6"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-char px-6 pb-10 pt-28 text-cream transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className='flex flex-col gap-2'>
          {[{ href: "/", label: "Home" }, ...links].map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className='border-b border-cream/10 py-3 font-display text-5xl transition-transform duration-500'
              style={{
                transform: open ? "none" : "translateY(16px)",
                transitionDelay: open ? `${80 + i * 60}ms` : "0ms",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className='mt-auto space-y-4 font-body text-sm text-cream/60'>
          <p>118 Millrace Way, Old Mill District</p>
          <Link
            href='/reservations'
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className='block bg-mustard py-4 text-center font-medium text-char'
          >
            Reserve a table
          </Link>
        </div>
      </div>
    </>
  );
}
