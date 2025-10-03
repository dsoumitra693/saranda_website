import { client } from "@/sanity/lib/client";

export default async function fetchWebOps() {
    const query = `*[_type == "webopsMember"]{
        _id,
        name,
        details,
        "image": image.asset->url
      }`;

    const webOps = await client.fetch(query);

    return webOps.map(webOp => (
        {
            id: webOp._id,
            title: webOp.name,
            subtitle: webOp.details,
            image: webOp.image
        }
    ));
}