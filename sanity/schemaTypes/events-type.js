export default {
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        {
            name: 'eventName',
            title: 'Event name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'eventDescription',
            title: 'Event Description',
            type: 'text',
            validation: Rule => Rule.required()
        },
        {
            name: 'eventImage',
            title: 'Event Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'registerLink',
            title: 'Register Link',
            type: 'url',
        },
        {
            name: 'rulebookLink',
            title: 'Rulebook Link',
            type: 'url',
        }
    ]
}