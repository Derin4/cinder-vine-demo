"use client";

import { useSearchParams } from "next/navigation";
import ReservationWidget from "./ReservationWidget";
import { timeSlots, availability } from "../_lib/data";

// Reads ?party=&date=&time= in the browser, so the page itself can be
// exported as plain static HTML.
export default function ReservationFromUrl() {
  const sp = useSearchParams();

  const partyN = parseInt(sp.get("party"), 10);
  const party = partyN >= 1 && partyN <= 6 ? partyN : 2;
  const dateRaw = sp.get("date");
  const date = /^\d{4}-\d{2}-\d{2}$/.test(dateRaw || "") ? dateRaw : "";
  const timeRaw = sp.get("time");
  const time =
    timeSlots.includes(timeRaw) && availability[timeRaw] > 0 ? timeRaw : "";

  return (
    <ReservationWidget
      initialParty={party}
      initialDate={date}
      initialTime={time}
    />
  );
}
