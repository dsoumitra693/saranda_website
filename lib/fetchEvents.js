import { client } from "../sanity/lib/client";

export default async function fetchEvents() {
    const query = `*[_type == "event"]{
        _id,
        eventName,
        eventDescription,
        "eventImage": eventImage.asset->url,
        registerLink,
        rulebookLink
      }`;

    const events = await client.fetch(query);
    return events.map(event => (
        {
            id: event._id,
            title: event.eventName,
            subtitle: event.eventDescription,
            image: event.eventImage,
            registerLink: event.registerLink,
            rulebookLink: event.rulebookLink
        }
    ));
}