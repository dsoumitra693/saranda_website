export const artGallery = {
    name: 'artGallery',
    title: 'Art Gallery',
    type: 'document',
    fields: [
        {
            name: 'artImage',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'artTitle',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'artDescription',
            title: 'Description',
            type: 'text',
            validation: Rule => Rule.required()
        },
    ]
}