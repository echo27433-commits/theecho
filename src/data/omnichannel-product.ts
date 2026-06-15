import type { ElementType } from "react";
import {
  MessageSquare,
  Inbox,
  Megaphone,
  BarChart3,
  Users,
  CalendarClock,
  Mail,
  Smartphone,
  Globe,
  MessageCircle,
  Bell,
  Zap,
  Heart,
  DollarSign,
  LineChart,
  Shield,
  ShoppingBag,
  Landmark,
  HeartPulse,
  Plane,
  CalendarDays,
  Building2,
  Building,
} from "lucide-react";

export const OMNICHANNEL_COLOR = "#3B82F6";

export const omnichannelHero = {
  badge: "Omnichannel Communication Suite",
  title: "One Inbox. Every Channel.",
  titleAccent: "Complete Customer Visibility.",
  subtitle:
    "Echo brings every customer interaction into a single intelligent platform — manage communication, campaigns, engagement, and reporting from one centralized dashboard.",
  channels: ["SMS", "Email", "WhatsApp", "RCS", "Web Chat", "Notifications"],
};

export const omnichannelStats = [
  { value: "89%", label: "Customer retention with strong omnichannel engagement" },
  { value: "3X", label: "Higher engagement vs. single-channel approaches" },
  { value: "30%+", label: "Increase in campaign effectiveness" },
  { value: "60%+", label: "Better response rates on preferred channels" },
];

export const omnichannelProblem = {
  eyebrow: "The challenge",
  title: "Why businesses need an omnichannel platform",
  description:
    "Modern customer communication is fragmented. Marketing, support, and operations often run on separate systems — creating disconnected experiences, delayed responses, and limited visibility into engagement performance.",
  journeyTitle: "A single customer, many touchpoints — all in one day",
  journeySteps: [
    { icon: Mail, label: "Receives a promotional email" },
    { icon: MessageCircle, label: "Opens a message on WhatsApp" },
    { icon: Globe, label: "Visits your website" },
    { icon: MessageSquare, label: "Requests support through chat" },
    { icon: Smartphone, label: "Receives a transactional SMS" },
  ],
  solution:
    "Echo consolidates communication channels, campaign management, analytics, user management, reporting, automation, and delivery monitoring into one platform — giving you a complete view of every customer interaction.",
};

export const omnichannelCapabilities: {
  icon: ElementType;
  title: string;
  description: string;
  highlights: string[];
  highlightStyle?: "pill" | "checklist";
}[] = [
  {
    icon: Inbox,
    title: "Unified Messaging Dashboard",
    description:
      "Manage all communication channels through a single interface — monitor campaigns, delivery, engagement, and real-time status without switching platforms.",
    highlights: [],
  },
  {
    icon: Megaphone,
    title: "Multi-Channel Campaign Management",
    description: "Launch and manage campaigns across every channel from one place.",
    highlightStyle: "pill",
    highlights: ["SMS", "WhatsApp", "Email", "RCS Messaging", "Web Engagement", "Transactional Notifications"],
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics & Reporting",
    description: "Make data-driven decisions with detailed, channel-specific performance insights.",
    highlights: [
      "Message delivery & open rates",
      "Click-through performance",
      "Campaign effectiveness",
      "Engagement trends",
      "Channel-specific reporting",
    ],
  },
  {
    icon: Users,
    title: "User & Team Management",
    description: "Centralize governance for enterprises operating across regions and business units.",
    highlights: [
      "Manage user permissions",
      "Department-level access",
      "Platform activity monitoring",
      "Centralized compliance",
    ],
  },
  {
    icon: CalendarClock,
    title: "Automation & Scheduling",
    description: "Automate workflows and schedule campaigns with precision to reduce manual tasks.",
    highlights: [
      "Behavior-triggered messages",
      "Advance campaign scheduling",
      "Automated reminders & notifications",
      "Engagement journey builder",
    ],
  },
];

export const omnichannelBenefits = {
  eyebrow: "One platform, every channel",
  title: "Benefits of consolidating communication",
  fragmented: {
    title: "Fragmented tools create friction",
    items: [
      "Data silos across teams and vendors",
      "Higher software costs",
      "Operational inefficiencies",
      "Inconsistent customer experiences",
      "Limited reporting visibility",
    ],
  },
  unified: {
    title: "One platform delivers results",
    items: [
      { icon: Zap, title: "Faster campaign execution", text: "Launch campaigns across multiple channels from one dashboard." },
      { icon: Heart, title: "Better customer experience", text: "Maintain conversation history and engagement context across channels." },
      { icon: DollarSign, title: "Lower operational costs", text: "Reduce the need for multiple communication tools and vendors." },
      { icon: LineChart, title: "Improved reporting", text: "Gain a unified view of communication performance." },
      { icon: Shield, title: "Stronger compliance", text: "Centralize customer communication management across departments." },
    ],
  },
};

export const omnichannelIndustries: {
  name: string;
  icon: ElementType;
  useCases: string[];
}[] = [
  {
    name: "Retail & E-Commerce",
    icon: ShoppingBag,
    useCases: ["Promotional campaigns", "Loyalty communications", "Customer notifications", "Order updates"],
  },
  {
    name: "Banking & Financial Services",
    icon: Landmark,
    useCases: ["Transaction alerts", "Customer engagement", "Service notifications", "Compliance messaging"],
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    useCases: ["Appointment reminders", "Patient engagement", "Follow-up communications"],
  },
  {
    name: "Hospitality & Travel",
    icon: Plane,
    useCases: ["Booking confirmations", "Guest engagement", "Personalized offers"],
  },
  {
    name: "Events & Exhibitions",
    icon: CalendarDays,
    useCases: ["Registration campaigns", "Attendee engagement", "Event notifications"],
  },
  {
    name: "Government & Public Sector",
    icon: Building2,
    useCases: ["Citizen communications", "Service notifications", "Awareness campaigns"],
  },
  {
    name: "Enterprises",
    icon: Building,
    useCases: ["Internal communication", "Customer engagement", "Multi-region campaign management"],
  },
];

export const omnichannelImpact = {
  eyebrow: "Business impact",
  title: "Why organizations invest in omnichannel",
  subtitle:
    "Organizations with strong omnichannel engagement strategies consistently outperform businesses operating through disconnected communication systems.",
  stats: [
    { value: "89%", label: "Customer retention rate with strong omnichannel strategies" },
    { value: "3X", label: "Higher customer engagement vs. single-channel" },
    { value: "30%+", label: "Increase in campaign effectiveness" },
    { value: "50%+", label: "Reduction in manual communication processes" },
    { value: "60%+", label: "Improvement in customer response rates" },
  ],
};

export const omnichannelClosing = {
  eyebrow: "Built for scale",
  title: "Designed for growth.",
  titleAccent: "Built for every channel.",
  subtitle:
    "Echo's Omnichannel Communication Suite is more than a messaging platform — it's centralized communication infrastructure that helps organizations engage customers, automate interactions, and gain complete visibility across every channel.",
  highlights: [
    "Smarter conversations across SMS, email, WhatsApp, RCS, and web",
    "Automation, analytics, and reporting in one ecosystem",
    "Stronger customer relationships with full engagement context",
    "Measurable business growth through unified communication",
  ],
};
