import { groq } from 'next-sanity';

// Blog posts
export const postsQuery = groq`
  *[_type == "post" && language == $language] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    mainImage,
    publishedAt
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    category,
    mainImage,
    publishedAt,
    body
  }
`;

// Services
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    icon,
    headline,
    shortDescription,
    problem,
    solution,
    useCases,
    differentiator
  }
`;

// Pages
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug && language == $language][0] {
    _id,
    title,
    slug,
    description,
    body
  }
`;

// Newsletter subscribers count
export const subscriberCountQuery = groq`
  count(*[_type == "subscriber" && status == "active"])
`;
