import type { Collection } from "tinacms";

export const navigationCollection: Collection = {
  format: "json",
  name: "navList",
  label: "Navigation links",
  path: "content/navigation",
  fields: [
    { type: "string", name: "href", label: "Href" },
    { type: "string", name: "label", label: "Nav item label" },
  ],
};
