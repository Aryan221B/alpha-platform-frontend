import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment variables');
}

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getWorks() {
  try {
    return await client.fetch(`
      *[_type == "work"] | order(order asc) {
        _id,
        title,
        client,
        "slug": slug.current,
        mainImage,
        isFeatured,
        order,
      }
    `);
  } catch (error) {
    console.error('Error fetching works:', error);
    return [];
  }
}

export async function getWorkBySlug(slug: string) {
  try {
    return await client.fetch(`
      *[_type == "work" && slug.current == $slug][0] {
        _id,
        title,
        client,
        "slug": slug.current,
        mainImage,
        content,
        isFeatured,
      }
    `, { slug });
  } catch (error) {
    console.error('Error fetching work by slug:', error);
    return null;
  }
}
