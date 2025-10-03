// schemas/upperHouseCouncil
export const uhcMembers = {
    name: 'uhcMember',
    title: 'UHC Member',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Member Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'designation',
            title: 'Designation',
            type: 'string',
            validation: Rule => Rule.required()
        }
    ]
}


// schemas/regionalCoordinator
export const rcMembers = {
    name: 'rcMember',
    title: 'RC Member',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Member Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'region',
            title: 'Region',
            type: 'string',
            validation: Rule => Rule.required()
        }
    ]
}

// schemas/webopsTeam
export const webopsMembers = {
    name: 'webopsMember',
    title: 'WebOps Member',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Member Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
            validation: Rule => Rule.required()
        }
    ]
}