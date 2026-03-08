import type { Collection, TinaField } from "tinacms";

const heroSection: TinaField = {
  name: "hero",
  label: "Hero section content",
  type: "object",
  fields: [
    {
      type: "string",
      name: "heroTitle",
      label: "Hero Title",
    },
    {
      type: "string",
      name: "heroSubtitle",
      label: "Hero Subtitle",
    },
    {
      type: "string",
      name: "heroText",
      label: "Hero Text",
    },
    {
      type: "string",
      name: "heroCta",
      label: "Hero CTA button label",
    },
    {
      type: "image",
      name: "heroImage",
      label: "Hero Image",
    },
  ],
};

export const homepageCollection: Collection = {
  name: "homepage",
  path: "content/homepage",
  label: "Homepage Content",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  format: "json",
  fields: [heroSection],
};
