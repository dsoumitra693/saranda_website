export default {
    name: 'meetup',
    title: 'Meetup',
    type: 'document',
    fields: [
        {
            name: 'eventImage',
            title: 'Event Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required(),
            description: 'Upload an image for this meetup event'
        },
        {
            name: 'cityName',
            title: 'City Name',
            type: 'string',
            validation: Rule => Rule.required().min(2).max(50),
            description: 'Name of the city where the meetup takes place'
        },
        {
            name: 'eventDate',
            title: 'Event Date',
            type: 'datetime',
            validation: Rule => Rule.required(),
            description: 'Date and time of the meetup'
        },
        {
            name: 'placeName',
            title: 'Place/Venue',
            type: 'string',
            validation: Rule => Rule.required().min(2).max(100),
            description: 'Specific venue or landmark where the meetup will be held'
        },
        {
            name: 'status',
            title: 'Event Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Upcoming', value: 'upcoming' },
                    { title: 'Past', value: 'past' },
                    { title: 'Cancelled', value: 'cancelled' }
                ],
                layout: 'radio'
            },
            validation: Rule => Rule.required(),
            initialValue: 'upcoming'
        },
        {
            name: 'attendeeCount',
            title: 'Expected/Actual Attendees',
            type: 'number',
            validation: Rule => Rule.min(1).max(1000),
            description: 'Number of expected attendees (for upcoming) or actual attendees (for past events)'
        },
        {
            name: 'description',
            title: 'Event Description',
            type: 'text',
            validation: Rule => Rule.max(500),
            description: 'Brief description of the meetup (optional)'
        },
        {
            name: 'registrationLink',
            title: 'Registration Link',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https']
            }),
            description: 'Link for event registration (for upcoming events)'
        }
    ],
    preview: {
        select: {
            title: 'cityName',
            subtitle: 'placeName',
            media: 'eventImage',
            date: 'eventDate',
            status: 'status'
        },
        prepare(selection) {
            const { title, subtitle, media, date, status } = selection;
            const formattedDate = date ? new Date(date).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            }) : '';
            
            return {
                title: `${title} - ${formattedDate}`,
                subtitle: `${subtitle} (${status?.toUpperCase()})`,
                media
            };
        }
    },
    orderings: [
        {
            title: 'Event Date (Newest First)',
            name: 'eventDateDesc',
            by: [
                { field: 'eventDate', direction: 'desc' }
            ]
        },
        {
            title: 'Event Date (Oldest First)',
            name: 'eventDateAsc',
            by: [
                { field: 'eventDate', direction: 'asc' }
            ]
        },
        {
            title: 'City Name',
            name: 'cityName',
            by: [
                { field: 'cityName', direction: 'asc' }
            ]
        }
    ]
}
