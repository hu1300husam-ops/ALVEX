/**
 * Detail content for each service page. Each entry describes how ALVEX runs
 * the service in general. It contains no client names, results, figures or
 * testimonials. Service titles and summaries live in content/site.ts.
 */

export type ServiceDetail = {
  slug: string;
  image: { src: string; alt: string };
  intro: string;
  steps: { title: string; text: string }[];
  /** What the buyer should expect to receive, in plain terms. */
  receive: string[];
  /** Questions it helps answer. */
  answers: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "product-supplier-sourcing",
    image: { src: "/images/insight-supplier-evaluation.jpg", alt: "A notebook, pen and calculator on a dark desk" },
    intro:
      "Sourcing starts with a clear brief. We turn your product idea or specification into a shortlist of suppliers in China, and we check each one against what you need before you invest time in samples.",
    steps: [
      { title: "Brief", text: "We agree the specification, target quantity, price range, certifications and destination market." },
      { title: "Research", text: "We identify suppliers that make similar products, and we note their scale, location and specialisation." },
      { title: "Shortlist", text: "We contact the most relevant suppliers and compare their answers on the same questions." },
      { title: "Samples", text: "We request samples from the shortlist and record what each one matches, and where it does not." },
    ],
    receive: [
      "A written brief that all suppliers answer against",
      "A shortlist with the reasons each supplier was included or left out",
      "Quotations on a common basis, with Incoterm and lead time stated",
    ],
    answers: [
      "Which suppliers can make this product to my specification?",
      "What does a realistic price and lead time look like?",
      "Which samples are worth testing before I commit?",
    ],
  },
  {
    slug: "supplier-verification",
    image: { src: "/images/insight-verification.jpg", alt: "Precision measuring tools beside a small product sample" },
    intro:
      "Verification checks that a supplier is the company it claims to be, and that its capacity matches your order. We do this before deposits and volume commitments, so the decision is based on records and observation.",
    steps: [
      { title: "Company record", text: "We check the registered name, legal status and registered address against the national register." },
      { title: "Capacity review", text: "We confirm which factory will produce your product, and whether its lines and staffing fit your order size." },
      { title: "Product check", text: "We compare samples with your specification, including materials, dimensions and finish." },
      { title: "Written summary", text: "We send you a summary of what was checked, what was confirmed, and what remains open." },
    ],
    receive: [
      "A verification summary dated and signed off by ALVEX",
      "Copies of the public register entries we consulted",
      "A list of open questions to resolve before you place an order",
    ],
    answers: [
      "Is this company a factory, a trader or both?",
      "Can the factory handle my volume and timeline?",
      "Is it safe to pay a deposit?",
    ],
  },
  {
    slug: "negotiation-commercial-support",
    image: { src: "/images/insight-terms.jpg", alt: "A rolled route map on a dark table beside reading glasses" },
    intro:
      "Negotiation is easier when every term is clear before the conversation starts. We communicate in Chinese and English, keep notes, and make sure price, MOQ, lead time and payment milestones are agreed in writing.",
    steps: [
      { title: "Priorities", text: "We agree with you which terms matter most: price, quantity, lead time, quality or payment." },
      { title: "Negotiation", text: "We put your position to the supplier, in their language and in a commercial tone." },
      { title: "Terms review", text: "We check the quotation for Incoterm, currency, packaging, taxes and warranty." },
      { title: "Confirmation", text: "We send the agreed terms in writing and wait for the supplier's confirmation." },
    ],
    receive: [
      "A written record of each commercial point discussed",
      "A review of the quotation against the Incoterm and destination",
      "A confirmed summary of price, MOQ, lead time and payment milestones",
    ],
    answers: [
      "What is a fair price for this specification and quantity?",
      "Which Incoterm should I use, and who pays for freight?",
      "Which payment milestones protect me?",
    ],
  },
  {
    slug: "factory-visits-quality-control",
    image: { src: "/images/service-factory.jpg", alt: "A clean industrial production line seen from a low angle" },
    intro:
      "A visit or inspection gives you facts about production, not only the supplier's account. We attend factory visits and inspections on your behalf, and we report what we observed, including what we could not check.",
    steps: [
      { title: "Plan", text: "We agree the scope: capacity, process, samples, packaging and the criteria to check." },
      { title: "Visit", text: "We attend the factory, observe production and review the samples in front of the team." },
      { title: "Inspect", text: "For shipments, we inspect the finished goods against the agreed inspection standard." },
      { title: "Report", text: "We send a written report with photos, the results and any corrective actions requested." },
    ],
    receive: [
      "A written visit or inspection report with dated photos",
      "The inspection standard and sampling method used",
      "A list of corrective actions and who is responsible for each",
    ],
    answers: [
      "Can this factory produce to my quality standard?",
      "Are the goods ready to ship, and do they match the sample?",
      "What needs fixing before the shipment leaves?",
    ],
  },
  {
    slug: "trade-show-support",
    image: { src: "/images/canton-hall.jpg", alt: "A long exhibition hall with glass ceilings and aisles lit in warm light" },
    intro:
      "Trade fairs have a lot of activity in a short time. We prepare your visit beforehand, support your meetings on the floor, and follow up afterwards so the contacts you made turn into decisions.",
    steps: [
      { title: "Before the fair", text: "We research exhibitors, shortlist the booths that match your brief, and plan your meeting schedule." },
      { title: "On the floor", text: "We provide interpretation and sourcing assistance, and help you ask the right questions." },
      { title: "Meetings", text: "We record each meeting's outcome and the next step that was agreed." },
      { title: "After the fair", text: "We follow up with suppliers, arrange verification and samples, and keep the sourcing on track." },
    ],
    receive: [
      "A pre-fair shortlist of exhibitors and a meeting plan",
      "Written notes from each meeting, with the agreed next step",
      "A post-fair follow-up list with owners and dates",
    ],
    answers: [
      "Which exhibitors should I prioritise with the time I have?",
      "How do I make the most of each meeting?",
      "How do I follow up after I return home?",
    ],
  },
  {
    slug: "warehousing-consolidation-shipping",
    image: { src: "/images/service-warehouse.jpg", alt: "A clean warehouse interior with neatly stacked pallets" },
    intro:
      "We coordinate the logistics steps around your order with partners where they apply. ALVEX coordinates these services. We do not own warehouses or fleets, and we tell you which party is responsible for each step.",
    steps: [
      { title: "Plan", text: "We agree the route, the Incoterm and who arranges each stage of the shipment." },
      { title: "Consolidate", text: "Where orders from several suppliers travel together, we coordinate the consolidation with a partner." },
      { title: "Documents", text: "We support the preparation of shipping and commercial documents, and check them against the order." },
      { title: "Handover", text: "We confirm the handover of goods and stay available for questions after the shipment." },
    ],
    receive: [
      "A written shipping plan that names the responsible party for each step",
      "A document checklist matched to your order and destination",
      "Confirmation of the handover, with any open issues recorded",
    ],
    answers: [
      "How do I combine orders from several suppliers?",
      "Who prepares the shipping documents, and who checks them?",
      "What must be ready before the goods leave the supplier?",
    ],
  },
];

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}
