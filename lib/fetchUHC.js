import { client } from "@/sanity/lib/client";

export default async function fetchUHC() {
    const query = `*[_type == "uhcMember"]{
        _id,
        name,
        designation,
        "image": image.asset->url
    }`;

    const uhcMembers = await client.fetch(
        query,
        {},
        { cache: 'no-store' }
    );

    // Define designation priority order
    const designationOrder = {
        "Secretary": 0,
        "Deputy Secretary": 1,
        "Web Admin": 2
    };

    return uhcMembers
        .map(uhcMember => ({
            id: uhcMember._id,
            title: uhcMember.name,
            subtitle: uhcMember.designation,
            image: uhcMember.image
        }))
        .sort((a, b) => {
            const orderA = designationOrder[a.subtitle] ?? 999;
            const orderB = designationOrder[b.subtitle] ?? 999;
            return orderA - orderB;
        });
}
