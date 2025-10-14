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

    const meetUpsData = meetUps.map(meetUp => (
        {
            id: meetUp._id,
            title: meetUp.cityName,
            date: meetUp.eventDate,
            place: meetUp.placeName,
            status: meetUp.status,
            attendeeCount: meetUp.attendeeCount,
            description: meetUp.description,
            registrationLink: meetUp.registrationLink,
            thumbnail: meetUp.eventImage,
        }
    ));

    const pastMeetUps = meetUpsData.filter(meetUp => meetUp.status === 'past');
    const upcomingMeetUps = meetUpsData.filter(meetUp => meetUp.status === 'upcoming');
    
    return { pastMeetUps, upcomingMeetUps };
}