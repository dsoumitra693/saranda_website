import { client } from "@/sanity/lib/client";

export default async function fetchMeetUps() {
    const query = `*[_type == "meetup"] | order(eventDate desc){
                    _id,
                    cityName,
                    eventDate,
                    placeName,
                    status,
                    attendeeCount,
                    description,
                    registrationLink,
                    "eventImage": eventImage.asset->url
                }`;

    const meetUps = await client.fetch(
        query,
        {},
        { cache: 'no-store' }
    );

    return meetUps.map(meetUp => (
        {
            id: meetUp._id,
            name: meetUp.name,
            designation: meetUp.designation,
            profileImage: meetUp.image
        }
    ));
}