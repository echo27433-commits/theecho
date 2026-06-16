import type { ElementType } from "react";
import { Trophy, MessageSquare, Bot } from "lucide-react";

export type ProductPageItem = {
  id: string;
  title: string;
  tagline: string;
  headline: string;
  description: string;
  longDescription: string;
  icon: ElementType;
  color: string;
  gradient: string;
  features: string[];
  capabilities: string[];
  image: string;
  link: string;
  blogSlug: string;
  stat: { value: string; label: string };
};

export const productPageStats = [
  { value: "35%+", label: "Increase in customer retention" },
  { value: "70%+", label: "Customer queries automated" },
  { value: "55%+", label: "Reduction in support costs" },
  { value: "3X", label: "Higher campaign response rates" },
];

export const productsPageData: ProductPageItem[] = [
  {
    id: "loyalty",
    title: "Loyalty",
    tagline: "Reward. Retain. Repeat.",
    headline: "Build loyalty that lasts",
    description:
      "Build deep customer loyalty with personalized reward programs, engagement mechanics, and AI driven retention strategies that increase lifetime value.",
    longDescription:
      "Echo's Loyalty Platform uses predictive analytics to trigger personalized rewards and engagement campaigns at the exact moment a customer is most likely to churn or make a repeat purchase. Turn casual shoppers into brand advocates.",
    icon: Trophy,
    color: "#f20d14",
    gradient: "from-[#f20d14]/20 to-[#FF8C7A]/5",
    features: ["Reward programs", "Automated support", "Engagement tracking"],
    capabilities: [
      "Smart rewards with AI driven point allocation",
      "Targeted retention campaigns for at risk segments",
      "Real time loyalty metrics and program ROI dashboards",
    ],
    image: "/loyal.png",
    link: "/product/loyalty",
    blogSlug: "loyalty-programs-in-the-digital-age",
    stat: { value: "35%+", label: "Customer retention uplift" },
  },
  {
    id: "omnichannel",
    title: "Omnichannel Messaging Suite",
    tagline: "One inbox. Every channel.",
    headline: "Every channel, one conversation",
    description:
      "Engage audiences across WhatsApp, Email, SMS, RCS, Social, and Web with a single, unified messaging platform that eliminates silos and delays.",
    longDescription:
      "The Omnichannel Communication Suite centralizes all customer interactions across WhatsApp, SMS, email, RCS, Social, and web chat into a single unified dashboard, so your team never loses context and customers never repeat themselves.",
    icon: MessageSquare,
    color: "#3B82F6",
    gradient: "from-[#3B82F6]/20 to-[#60A5FA]/5",
    features: ["WhatsApp & SMS", "Email automation", "Unified inbox", "RCS", "Social"],
    capabilities: [
      "Unified inbox across WhatsApp, SMS, email, RCS, Social, and web",
      "Intelligent cross channel routing to the right agent or bot",
      "Rich media campaigns optimized for mobile first audiences",
    ],
    image: "/omnichnnel.png",
    link: "/product/omnichannel",
    blogSlug: "omnichannel-communication-strategies",
    stat: { value: "3X", label: "Campaign response rates" },
  },
  {
    id: "ai-platform",
    title: "AI Conversational Platform",
    tagline: "Agentic AI that understands.",
    headline: "AI that resolves, not just replies",
    description:
      "Deploy intelligent AI agents that resolve complex queries, deliver personalized self service, and learn from every conversation.",
    longDescription:
      "Go beyond rule based chatbots. Echo's Agentic AI understands context, intent, and sentiment to resolve queries instantly, escalate seamlessly to humans, and continuously improve from every interaction.",
    icon: Bot,
    color: "#A855F7",
    gradient: "from-[#A855F7]/20 to-[#C084FC]/5",
    features: ["Agentic AI", "Self service flows", "Smart routing"],
    capabilities: [
      "Context aware AI with sentiment and intent understanding",
      "Automated workflows that resolve repetitive tickets instantly",
      "Enterprise grade security with seamless human handoff",
    ],
    image: "/ai-converation.png",
    link: "/product/ai-platform",
    blogSlug: "why-businesses-are-moving-beyond-chatbots-to-agentic-ai",
    stat: { value: "70%+", label: "Queries automated" },
  },
];

export const productEcosystemCopy = {
  badge: "Our Platform",
  title: "One Ecosystem.",
  titleAccent: "Endless Possibilities.",
  subtitle:
    "Echo combines intelligent automation, omnichannel communication, and conversational AI into one unified platform designed to improve customer experience at scale.",
  mission:
    "Enable organizations to create seamless customer journeys through automation, personalization, and real time communication, turning every interaction into long term value.",
};
