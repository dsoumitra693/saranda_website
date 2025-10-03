import EventPage from "@/components/events/event-page";
import { fetchEvents } from "@/lib";

export default async function Events() {
  const events = await fetchEvents();
  console.log(events)
  return <EventPage events={events} />
}
