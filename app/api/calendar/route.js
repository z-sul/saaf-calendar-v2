import { internalEvents } from "../../data/events";
import { buildCalendar, calendarResponse } from "../../lib/ics";

export async function GET() {
  return calendarResponse(buildCalendar(internalEvents));
}
