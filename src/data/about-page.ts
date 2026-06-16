import type { ElementType } from "react";
import { Heart, MessageSquare, Bot, Shield, Target, Users, Globe2 } from "lucide-react";

export const aboutHero = {
  badge: "About Echo",
  title: "About",
  titleAccent: "Echo",
  subtitle:
    "Echo is an enterprise AI company headquartered in the UAE. We unify loyalty, omnichannel conversations, and intelligent automation, so brands connect with customers at scale, on every channel that matters.",
};

export const aboutStats = [
  { value: "500+", label: "Brands powered" },
  { value: "6", label: "Countries across MENA" },
  { value: "70%+", label: "Queries resolved by AI" },
  { value: "35%+", label: "Avg. retention uplift" },
];

export const aboutStory = {
  eyebrow: "Why we exist",
  title: "Customer relationships deserve better infrastructure",
  paragraphs: [
    "Most brands are drowning in channels but starving for connection. Loyalty programs sit in silos. Support teams repeat the same answers. Campaigns go out blind. Customers feel it, and they leave.",
    "Echo was built to fix that. One platform where loyalty, conversations, and AI work together, so every touchpoint feels personal, every team stays aligned, and every interaction drives measurable growth.",
    "We started in the Gulf and grew alongside the brands we serve: retailers, hospitality groups, government entities, and enterprise operators who needed technology that scales without losing the human touch.",
  ],
  quote: {
    text: "Technology should make brands more human, not more robotic.",
    attribution: "The Echo founding principle",
  },
};

export const aboutValues: {
  icon: ElementType;
  title: string;
  description: string;
}[] = [
  {
    icon: Heart,
    title: "Relationships over transactions",
    description:
      "We design for lifetime value, not one off conversions. Every feature we ship should deepen trust between a brand and its customers.",
  },
  {
    icon: Target,
    title: "Outcomes you can measure",
    description:
      "Retention rates, response times, campaign ROI. We hold ourselves to the same metrics our clients care about. If it doesn't move the needle, it doesn't ship.",
  },
  {
    icon: Shield,
    title: "Enterprise grade by default",
    description:
      "Security, uptime, and compliance aren't add ons. Echo is built for operators who can't afford downtime, from retail chains to government programs.",
  },
  {
    icon: Users,
    title: "Humans stay in the loop",
    description:
      "AI handles the volume; people handle the nuance. Our platform escalates gracefully, keeps context intact, and never leaves your team in the dark.",
  },
];

export const aboutJourney = {
  eyebrow: "Our journey",
  title: "From UAE roots to a full engagement stack",
  subtitle: "Three defining chapters in how Echo evolved, from founding in the Gulf to launching the platforms brands rely on today.",
};

export const aboutMilestones = [
  {
    year: "2014",
    title: "Founded in the UAE",
    description: "Echo began with a vision to help brands build stronger, more meaningful customer relationships across the region.",
    accent: "#f20d14",
  },
  {
    year: "2025",
    title: "Omnichannel launched",
    description: "Unified WhatsApp, SMS, and web chat into one workspace, giving teams a single view of every customer conversation.",
    accent: "#3B82F6",
  },
  {
    year: "2026",
    title: "Loyalty and Agentic AI platform",
    description: "Launched our loyalty engine and agentic AI platform, connecting retention, automation, and intelligent conversations in one stack.",
    accent: "#A855F7",
  },
];

export const aboutBuild = {
  eyebrow: "What we build",
  title: "One platform.",
  titleAccent: "Endless possibilities",
  subtitle:
    "Loyalty, omnichannel, and agentic AI: three engines designed to work together so every customer touchpoint drives growth.",
};

export const aboutPillars: {
  id: string;
  number: string;
  title: string;
  description: string;
  color: string;
  icon: ElementType;
  href: string;
}[] = [
  {
    id: "loyalty",
    number: "01",
    title: "Loyalty Platform",
    description:
      "Predictive rewards, smart segmentation, and retention campaigns that trigger at the right moment, not the right guess.",
    color: "#f20d14",
    icon: Heart,
    href: "/product/loyalty",
  },
  {
    id: "omnichannel",
    number: "02",
    title: "Omnichannel Suite",
    description:
      "One inbox for WhatsApp, SMS, email, and web. Your team sees the full picture; your customers get one consistent voice.",
    color: "#3B82F6",
    icon: MessageSquare,
    href: "/product/omnichannel",
  },
  {
    id: "ai-platform",
    number: "03",
    title: "AI Conversational Platform",
    description:
      "Agentic AI that resolves, routes, and learns, handling volume 24/7 while escalating what matters to your people.",
    color: "#A855F7",
    icon: Bot,
    href: "/product/ai-platform",
  },
];

export const aboutIndustries = [
  "Retail & E commerce",
  "Hospitality & F&B",
  "Government & Public Sector",
  "Events & Entertainment",
  "Healthcare & Wellness",
  "Financial Services",
];

export const aboutApproach = [
  {
    question: "How is Echo different from a chatbot vendor?",
    answer:
      "We're a full engagement platform with loyalty, omnichannel, and AI in one stack. Chatbots answer questions; Echo builds relationships across every stage of the customer journey.",
  },
  {
    question: "Who is Echo built for?",
    answer:
      "Mid to large enterprises and ambitious growth brands in MENA and beyond: teams that need scale, compliance, and measurable ROI, not another point solution.",
  },
  {
    question: "How fast can we go live?",
    answer:
      "Most clients launch their first channel or loyalty program within weeks, not months. We integrate with your existing CRM and communication tools via robust APIs.",
  },
  {
    question: "Where is Echo based?",
    answer:
      "Our headquarters is in the UAE, with active operations across Saudi Arabia, Bahrain, Qatar, Kuwait, and Oman, serving brands throughout the Gulf and wider MENA region.",
  },
];

export const aboutGlobal = {
  eyebrow: "Global footprint",
  title: "Rooted in the Gulf. Built for scale.",
  description:
    "From our UAE headquarters, we support brands across six countries, with local expertise and enterprise infrastructure that travels.",
  ctaLabel: "See our locations",
  ctaHref: "/contact",
  icon: Globe2,
};
