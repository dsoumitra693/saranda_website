import { useEventsData } from "@/hooks/useEventsData";
import EventCard from "@/components/events/eventCard";

export default function Events() {
  const { events } = useEventsData();
  return (
    <>
      <div
        className="w-full min-h-screen bg-primary flex flex-col pt-10 bg-[url(/images/mist-forest1.png)] pt-[60px] md:pt-[80px] pb-[30px]"
        style={{
          backgroundImage: 'url("/images/mist-forest1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="grid place-items-center">
          {events.map((event, idx) => (
            <EventCard
              key={event.id}
              title={event.title}
              description={event.description}
              imageSrc={event.imageSrc}
              registerLink={event.registerLink}
              rulebookLink={event.rulebookLink}
            />
          ))}
        </div>
      </div>
    </>
  );
}
