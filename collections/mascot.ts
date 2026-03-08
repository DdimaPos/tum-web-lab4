import type { Collection } from "tinacms";

export const mascotCollection: Collection = {
  name: "mascot",
  label: "Website mascot",
  format: "json",
  path: "content/mascot",
  ui: {
    allowedActions: {
      delete: false,
      create: false,
    },
  },
  fields: [
    {
      type: "string",
      name: "mascotName",
      label: "Mascot name (used for Mascot image alt text)",
    },
    {
      type: "image",
      name: "mascotImage",
      label: "Image of the mascot",
    },
    {
      type: "string",
      name: "message",
      label: "Message shown by mascot on hover",
    },
  ],
};
