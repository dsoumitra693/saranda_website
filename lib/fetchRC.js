import { client } from "@/sanity/lib/client";

export default async function fetchRC() {
    const query = `*[_type == "rcMember"]{
        _id,
        name,
        region,
        "image": image.asset->url
      }`;

    const rc = await client.fetch(query);

    return rc.map(rc => (
        {
            id: rc._id,
            title: rc.name,
            subtitle: rc.region,
            image: rc.image
        }
    ));
}