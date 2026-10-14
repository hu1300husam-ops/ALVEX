/**
 * Insights articles. Each article is complete and general: it explains a
 * practice, not an ALVEX result. No statistics, client names, projects or
 * testimonials are included. Publication dates are omitted until the owner
 * approves them.
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  image: { src: string; alt: string };
  readMinutes: number;
  body: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "verify-a-supplier-in-china",
    title: "How to verify a supplier in China before you place an order",
    excerpt:
      "Company registration, capacity and product checks that take place before deposits and volume commitments.",
    image: {
      src: "/images/insight-verification.jpg",
      alt: "Precision measuring tools resting on a table beside a small product sample",
    },
    readMinutes: 6,
    body: [
      {
        type: "p",
        text: "A supplier's website, catalogue and first email tell you what the company wants you to believe. Verification is the step where you check those claims against records and physical evidence before money or volume moves. It does not need to be slow, but it should happen in a fixed order.",
      },
      { type: "h2", text: "1. Confirm the legal entity" },
      {
        type: "p",
        text: "Ask for the full registered company name and the Unified Social Credit Code, an 18-character identifier printed on the business licence. The name on the licence should match the name on the quotation, the invoice and the contract. A trading company and a factory are different businesses, and you should know which one you are dealing with.",
      },
      {
        type: "p",
        text: "The national register, the National Enterprise Credit Information Publicity System, lets you search by company name or code and see whether the company is active, its registered address and its legal representative. Save a copy of the record with the date you checked it.",
      },
      { type: "h2", text: "2. Check the factory and its capacity" },
      {
        type: "p",
        text: "Many suppliers are trading companies that buy from several factories. That is not a problem in itself, but the production capacity you are shown may belong to a different site. Ask which factory will make your product, its address, the number of production lines, the number of workers and the main equipment used for your product.",
      },
      {
        type: "p",
        text: "Compare the answers with your order size. A supplier who has never produced a quantity close to yours may still be able to deliver, but you should plan for a longer first order, closer checks and clear milestones.",
      },
      { type: "h2", text: "3. Test the product, not only the paperwork" },
      {
        type: "p",
        text: "Request samples made from the production materials, not a showroom piece. Record the material, dimensions, finish, packaging and any certificates that apply to your market. A sample approved in writing becomes the reference for production, so write down what was approved and keep the photos.",
      },
      { type: "h2", text: "4. Put the agreed facts in writing" },
      {
        type: "ul",
        items: [
          "The specification and the approved sample, with photos and measurements",
          "The minimum order quantity and the production lead time from deposit to shipment",
          "The payment schedule and the milestone at which each payment is due",
          "The inspection standard, such as an AQL sampling plan, and who pays for it",
          "Who is responsible for packaging, labelling and export documents",
        ],
      },
      {
        type: "p",
        text: "If something important is only agreed by phone or chat, confirm it by email the same day. A short written summary protects both sides and makes the next conversation easier.",
      },
      { type: "h2", text: "When an in-person check is worth it" },
      {
        type: "p",
        text: "A factory visit or a pre-shipment inspection is most useful when the order is large, the product is technical, the quality tolerance is tight, or you are working with a supplier for the first time. A visit is not a guarantee, but it replaces an assumption with an observation.",
      },
    ],
  },
  {
    slug: "fob-or-cif-who-pays-for-what",
    title: "FOB or CIF: who pays for what, and when the risk moves",
    excerpt:
      "A practical guide to two common Incoterms, so you can compare supplier quotations on the same basis.",
    image: {
      src: "/images/insight-terms.jpg",
      alt: "A rolled route map on a dark table beside reading glasses and a pencil",
    },
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "Two quotations for the same product can look very different because the suppliers include different costs. Incoterms, the rules published by the International Chamber of Commerce, state which party pays for which part of the journey and when the risk of loss passes to the buyer. The current edition is Incoterms 2020.",
      },
      { type: "h2", text: "FOB: Free On Board" },
      {
        type: "p",
        text: "Under FOB, the seller delivers the goods when they are loaded on board the vessel at the named port of shipment, for example a port in China. From that point the buyer pays for the main carriage, the destination charges and the insurance, and bears the risk of loss or damage.",
      },
      {
        type: "p",
        text: "FOB quotations are easier to compare when you already have a freight forwarder, because you choose the carrier and the insurance. They are less useful if you need a supplier to handle the whole shipment.",
      },
      { type: "h2", text: "CIF: Cost, Insurance and Freight" },
      {
        type: "p",
        text: "Under CIF, the seller pays the cost of the goods, the freight to the named destination port and a minimum level of insurance. The risk still passes to the buyer once the goods are loaded at the port of origin, so the insurance the seller buys is the cover that matters if something goes wrong in transit. Read the policy and check what it covers before you rely on it.",
      },
      { type: "h2", text: "What to check in any quotation" },
      {
        type: "ol",
        items: [
          "The Incoterm and the named place, such as the port of shipment or the port of destination",
          "The currency and whether taxes, duties or handling charges are included",
          "Who arranges the carrier, the insurance and the export customs clearance",
          "The insurance level, if CIF or CIP is quoted",
          "The packaging and marking requirements that affect the freight cost",
        ],
      },
      {
        type: "p",
        text: "Ask the supplier to write the Incoterm and the named place on the quotation and the contract. A term without a named place is not enough to know where the risk moves.",
      },
      { type: "h2", text: "Our advice" },
      {
        type: "p",
        text: "Compare the quotations on the same Incoterm and the same destination before you compare prices. If one supplier quotes FOB and another quotes CIF, add the freight and insurance you would pay to the FOB price before you decide. This is a general explanation, not legal or customs advice; confirm the final terms with your freight forwarder or customs broker.",
      },
    ],
  },
  {
    slug: "prepare-for-a-supplier-meeting",
    title: "Preparing for a supplier meeting: a checklist for buyers",
    excerpt:
      "What to bring, what to ask and what to write down, whether the meeting takes place in person or online.",
    image: {
      src: "/images/insight-supplier-evaluation.jpg",
      alt: "A closed notebook, a pen and a calculator on a dark desk",
    },
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "A supplier meeting is most useful when both sides know what is being decided. Preparation takes less time than the negotiation it saves. The same checklist works for a video call, a meeting at the supplier's office or a meeting at a trade fair.",
      },
      { type: "h2", text: "Before the meeting" },
      {
        type: "ul",
        items: [
          "A written specification: materials, dimensions, tolerances, finish, packaging and labelling",
          "The target quantity for the first order and for a repeat order",
          "The target market and any certifications the product must meet there",
          "The price range you can accept, and the terms you cannot accept",
          "Two or three questions you need answered before you can decide",
        ],
      },
      { type: "h2", text: "Questions to ask" },
      {
        type: "ol",
        items: [
          "Which factory will produce the product, and what share of the work is done in-house?",
          "What is the minimum order quantity, and how does the unit price change at higher volumes?",
          "How long do samples take, and how long does production take after the sample is approved?",
          "What raw materials are used, and are there any materials with long lead times?",
          "How do you handle quality checks, and what happens if a batch does not meet the specification?",
          "What payment terms do you normally accept, and at which milestones?",
        ],
      },
      { type: "h2", text: "During the meeting" },
      {
        type: "p",
        text: "Ask for answers in the order of your priorities, and write down the figure, the date or the condition that was given. If a number changes during the conversation, ask whether it still applies. Language gaps are common, so repeat the point in short sentences and confirm it by writing it on a shared screen or a notepad.",
      },
      { type: "h2", text: "After the meeting" },
      {
        type: "p",
        text: "Send a short written summary the same day. Include the product, the quantity, the price and Incoterm, the lead time, the samples agreed and the open questions. The supplier should reply with corrections. Silence is not agreement, so ask for a written confirmation before you treat anything as settled.",
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
