import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import createImageUrlBuilder from "@sanity/image-url";
import builder from "@sanity/image-url/lib/types/builder";
// import { urlFor } from './sanity';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  apiVersion: "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => {
  createImageUrlBuilder(config).image(source);
};

export const sanityClientTemp = imageUrlBuilder(config);

export function urlForTemp(source: any) {
  return sanityClientTemp.image(source);
}
