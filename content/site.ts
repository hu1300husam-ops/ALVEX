/**
 * ALVEX structured content.
 * Only verified company information lives here. Anything not yet confirmed
 * is marked with `verified: false` so the UI can flag it during review.
 */

export const brand = {
  name: "ALVEX",
  /**
   * Official logo. Set `src` to a file in /public (e.g. "/brand/alvex-logo.svg")
   * and give its intrinsic size. `null` keeps the neutral typeset fallback.
   */
  logo: {
    src: "/brand/alvex_wordmark_original.png" as string | null,
    width: 1040,
    height: 237,
    alt: "ALVEX",
  },
  legalName: "ALVEX Company",
  positioning: "Your Business Bridge to China.",
  supportingLine: "Your Team on the Ground in China.",
  location: { country: "China", verified: true },
  description:
    "ALVEX supports international buyers and businesses with commercial activities in China, from sourcing and supplier verification to commercial coordination and trade support.",
} as const;

export const contact = {
  phone: { label: "+86 147 2700 7000", href: "tel:+8614727007000" },
  whatsapp: {
    label: "+86 147 2700 7000",
    href: "https://wa.me/8614727007000",
    // WhatsApp activity has not been confirmed by the client yet.
    verified: false,
  },
  email: { label: "alvextrade1@gmail.com", href: "mailto:alvextrade1@gmail.com" },
  wechat: { label: "wxid_ALVEXcompany", verified: true },
  social: { label: "ALVEX Company", handle: "alvexcompany", platform: null as string | null },
} as const;

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Our Operations", href: "#operations" },
  { label: "Events & Exhibitions", href: "#canton-fair" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  scope: string[];
};

/** Capabilities, not owned infrastructure. */
export const services: Service[] = [
  {
    slug: "product-supplier-sourcing",
    title: "Product & Supplier Sourcing",
    summary:
      "Turn a product idea or specification into a shortlist of suppliers in China, checked against your requirements.",
    scope: ["Product research", "Supplier shortlisting", "Quotation requests", "Sample requests"],
  },
  {
    slug: "supplier-verification",
    title: "Supplier Verification",
    summary:
      "Check whether a supplier is who they say they are, and whether their capacity matches the order before you commit.",
    scope: ["Company background checks", "Capacity review", "Factory visit coordination"],
  },
  {
    slug: "negotiation-commercial-support",
    title: "Negotiation & Commercial Support",
    summary:
      "Clear communication across language and business norms, so price, terms and payment milestones are agreed in writing.",
    scope: ["Price negotiation", "MOQ and lead time discussion", "Commercial terms review"],
  },
  {
    slug: "factory-visits-quality-control",
    title: "Factory Visits & Quality Control",
    summary:
      "On-site visits and inspections that give you facts about production, not just the supplier's own account.",
    scope: ["Factory visits", "Pre-shipment inspection", "Production follow-up"],
  },
  {
    slug: "trade-show-support",
    title: "Trade Show Support",
    summary:
      "Preparation, interpretation and meeting support at trade fairs, so you use the time on the floor well.",
    scope: ["Exhibitor shortlisting", "Interpretation", "Post-fair follow-up"],
  },
  {
    slug: "warehousing-consolidation-shipping",
    title: "Warehousing, Consolidation & Shipping Coordination",
    summary:
      "Coordination of logistics steps with partners where applicable. ALVEX coordinates these services; it does not own warehouses or fleets.",
    scope: ["Consolidation coordination", "Shipping documentation support", "Partner coordination"],
  },
];

export const howWeWork = [
  { step: "01", title: "Understand", text: "We learn what you are buying, the specification, the volume and the destination." },
  { step: "02", title: "Research", text: "We identify suppliers that fit the brief and report on what we found." },
  { step: "03", title: "Connect", text: "We open and run supplier communication in Chinese, keeping you in the loop." },
  { step: "04", title: "Verify", text: "We check company, capacity and product, and visit factories when it matters." },
  { step: "05", title: "Coordinate", text: "We manage samples, negotiation, production follow-up and trade documents." },
  { step: "06", title: "Deliver", text: "We support the handover of goods, and stay available for the next order." },
] as const;

export const canton = {
  before: {
    label: "Before the fair",
    text: "Supplier research, exhibitor shortlisting and preparation of your meeting plan.",
  },
  during: {
    label: "During the fair",
    text: "Interpretation, sourcing assistance, commercial meetings and negotiation support.",
  },
  after: {
    label: "After the fair",
    text: "Supplier verification, factory coordination, samples, quality checks and continued sourcing support.",
  },
} as const;

/** Topics from the brief. Articles are not yet written, so no dates or authors are shown. */
export const insightTopics = [
  "Supplier evaluation",
  "China sourcing",
  "Quality inspection",
  "Trade fairs",
  "Commercial negotiation",
  "Importing fundamentals",
  "MOQ and production lead times",
  "FOB and CIF",
  "Supplier verification",
] as const;
