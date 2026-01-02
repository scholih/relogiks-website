import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from './config';

export const client = createClient({
  ...sanityConfig,
  useCdn: true,
});

// For fetching fresh data (in server components)
export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Helper to get client based on preview mode
export function getClient(preview = false) {
  return preview ? previewClient : client;
}
