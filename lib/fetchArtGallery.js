import { client } from "../sanity/lib/client";

export default async function fetchArtGallery() {
    const query = `*[_type == "artGallery"]{
        _id,
        artTitle,
        artDescription,
        "art": artImage.asset->url,
      }`;

    const artGallery = await client.fetch(
        query,
        {},
        { cache: 'no-store' }
    );
    return artGallery.map(event => (
        {
            id: event._id,
            title: event.artTitle,
            subtitle: event.artDescription,
            image: event.artImage,
        }
    ));
}