import type { Collection, TinaField } from "tinacms";

const heroSection: TinaField = {
  name: "hero",
  label: "Hero section content",
  type: "object",
  fields: [
    { type: "string", name: "heroTitle", label: "Hero Title" },
    { type: "string", name: "heroSubtitle", label: "Hero Subtitle" },
    { type: "string", name: "heroText", label: "Hero Text", ui: { component: "textarea" } },
    { type: "string", name: "heroCta", label: "Hero CTA button label" },
    { type: "image", name: "heroImage", label: "Hero Image" },
  ],
};

const aboutSection: TinaField = {
  name: "about",
  label: "About section",
  type: "object",
  fields: [
    {
      name: "cards",
      label: "About cards",
      type: "object",
      list: true,
      fields: [
        { type: "image", name: "image", label: "Image" },
        { type: "string", name: "imageAlt", label: "Image alt text" },
        { type: "string", name: "title", label: "Card title" },
        { type: "string", name: "description", label: "Card description", ui: { component: "textarea" } },
        { type: "string", name: "linkLabel", label: "Link label" },
        { type: "string", name: "linkHref", label: "Link href" },
      ],
    },
  ],
};

const faqSection: TinaField = {
  name: "faq",
  label: "FAQ section",
  type: "object",
  fields: [
    { type: "string", name: "title", label: "FAQ Title" },
    { type: "string", name: "subtitle", label: "FAQ Subtitle" },
    {
      name: "items",
      label: "FAQ items",
      type: "object",
      list: true,
      fields: [
        { type: "string", name: "question", label: "Question" },
        { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } },
      ],
    },
  ],
};

const contactSection: TinaField = {
  name: "contact",
  label: "Contact section",
  type: "object",
  fields: [
    { type: "string", name: "title", label: "Contact Title" },
    { type: "string", name: "text", label: "Contact Text", ui: { component: "textarea" } },
    { type: "image", name: "backgroundImage", label: "Background Image" },
    {
      name: "contactItems",
      label: "Contact items",
      type: "object",
      list: true,
      fields: [
        { type: "string", name: "ariaLabel", label: "Aria label" },
        { type: "string", name: "href", label: "Href" },
        { type: "string", name: "label", label: "Display label" },
        { type: "string", name: "icon", label: "SVG icon (raw HTML)" },
      ],
    },
  ],
};

const footerSection: TinaField = {
  name: "footer",
  label: "Footer section",
  type: "object",
  fields: [
    { type: "string", name: "title", label: "Footer title" },
    { type: "string", name: "text", label: "Footer text", ui: { component: "textarea" } },
    { type: "string", name: "phone", label: "Phone number" },
    { type: "string", name: "email", label: "Email address" },
    { type: "string", name: "copyright", label: "Copyright text" },
    {
      name: "links",
      label: "Navigation links",
      type: "object",
      list: true,
      fields: [
        { type: "string", name: "label", label: "Link label" },
        { type: "string", name: "href", label: "Link href" },
        { type: "string", name: "ariaLabel", label: "Aria label" },
      ],
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
  fields: [heroSection, aboutSection, faqSection, contactSection, footerSection],
};
