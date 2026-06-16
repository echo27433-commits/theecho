import type { ElementType } from "react";
import {
  Bot,
  Brain,
  Headphones,
  Target,
  Route,
  Sparkles,
  Globe,
  MessageSquare,
  DollarSign,
  Calendar,
  ShoppingBag,
  HelpCircle,
  Users,
  Zap,
  Eye,
  TrendingUp,
  Heart,
  Landmark,
  HeartPulse,
  Plane,
  Radio,
  CalendarDays,
  Building,
} from "lucide-react";

export const AI_PLATFORM_COLOR = "#A855F7";

export const aiPlatformHero = {
  badge: "AI Conversational Platform",
  title: "Agentic AI That Understands,",
  titleAccent: "Responds, and Resolves",
  subtitle:
    "Powered by Agentic AI, Echo automates conversations, resolves queries, qualifies leads, and delivers personalized self service, all from one unified ecosystem.",
  tags: ["Intent understanding", "Smart routing", "Lead qualification", "24/7 self service"],
};

export const aiPlatformStats = [
  { value: "80%", label: "Reduction in first response time" },
  { value: "70%", label: "Customer interactions automated" },
  { value: "60%", label: "Reduction in support costs" },
  { value: "35%", label: "Increase in customer satisfaction" },
];

export const agenticAI = {
  eyebrow: "What is Agentic AI?",
  title: "Beyond rule based chatbots",
  description:
    "Traditional chatbots answer predefined questions and struggle when conversations get complex. Agentic AI understands context, takes action, and continuously learns.",
  traditional: {
    title: "Traditional chatbots",
    items: [
      "Follow predefined scripts",
      "Struggle with complex conversations",
      "Limited to expected workflows",
      "Act as simple messaging interfaces",
    ],
  },
  agentic: {
    title: "Agentic AI",
    items: [
      { icon: Brain, label: "Understand customer intent" },
      { icon: Eye, label: "Analyze context in real time" },
      { icon: Zap, label: "Execute actions across systems" },
      { icon: Route, label: "Route and escalate intelligently" },
      { icon: TrendingUp, label: "Learn from every interaction" },
    ],
  },
};

export const onePlatform = {
  eyebrow: "One platform",
  title: "Every customer conversation, connected",
  description:
    "Echo centralizes the entire conversation lifecycle, so every touchpoint stays connected and teams get a complete customer view.",
  journeySteps: [
    { icon: Globe, label: "Visit your website" },
    { icon: MessageSquare, label: "Start a live chat conversation" },
    { icon: HelpCircle, label: "Request product information" },
    { icon: DollarSign, label: "Ask for pricing" },
    { icon: Calendar, label: "Schedule a meeting" },
    { icon: Headphones, label: "Contact support after purchase" },
  ],
  platformFeatures: [
    "Manage customer conversations",
    "Monitor AI interactions",
    "Track lead status",
    "Assign conversations to agents",
    "Automate support workflows",
    "Analyze engagement performance",
  ],
};

export const aiPlatformCapabilities: {
  icon: ElementType;
  title: string;
  description: string;
  highlights: string[];
  highlightStyle?: "pill" | "checklist";
}[] = [
  {
    icon: Headphones,
    title: "AI Powered Customer Support",
    description: "Provide instant responses to customer inquiries 24 hours a day, 7 days a week.",
    highlights: [
      "Frequently asked questions",
      "Account inquiries",
      "Order status requests",
      "Appointment scheduling",
      "Technical support workflows",
      "Customer onboarding journeys",
    ],
    highlightStyle: "pill",
  },
  {
    icon: Target,
    title: "Intelligent Lead Qualification",
    description: "Automatically qualify leads so sales teams focus on high value opportunities.",
    highlights: [
      "Qualify leads automatically",
      "Collect customer information",
      "Identify buying intent",
      "Score opportunities",
      "Route prospects to the right team",
    ],
  },
  {
    icon: Route,
    title: "Smart Routing & Escalation",
    description: "Get customers to the right specialist instantly based on intent, urgency, and history.",
    highlights: [
      "Reduced response times",
      "Fewer internal handoffs",
      "Less escalation delay",
      "Lower customer frustration",
    ],
  },
  {
    icon: Sparkles,
    title: "Personalized Self Service",
    description: "Intelligent self service that adapts dynamically, not static help centers.",
    highlights: [
      "Resolve common issues",
      "Access account information",
      "Schedule appointments",
      "Track requests",
      "Personalized recommendations",
      "Complete transactions",
    ],
    highlightStyle: "pill",
  },
];

export const aiPlatformBenefits = {
  eyebrow: "Why choose Echo",
  title: "One conversational platform, complete visibility",
  fragmented: {
    title: "Disconnected systems create friction",
    items: [
      "Fragmented customer experiences",
      "Inconsistent communication",
      "Higher operational costs",
      "Limited visibility into interactions",
      "Poor data sharing between departments",
    ],
  },
  unified: {
    title: "Unified platform delivers results",
    items: [
      { icon: Eye, title: "Centralized customer intelligence", text: "Every interaction stored in one place with full conversation history." },
      { icon: Users, title: "Improved team collaboration", text: "Sales, support, marketing, and ops work from a shared customer view." },
      { icon: Zap, title: "Faster customer resolution", text: "AI handles routine tasks while complex issues reach specialists immediately." },
      { icon: DollarSign, title: "Lower operational costs", text: "Automate thousands of conversations without increasing headcount." },
      { icon: Heart, title: "Consistent customer experience", text: "Seamless support regardless of channel or department." },
    ],
  },
};

export const aiPlatformIndustries: {
  name: string;
  icon: ElementType;
  useCases: string[];
}[] = [
  {
    name: "Retail & E Commerce",
    icon: ShoppingBag,
    useCases: ["Product inquiries", "Order tracking", "Loyalty engagement", "Upselling & recommendations"],
  },
  {
    name: "Banking & Financial Services",
    icon: Landmark,
    useCases: ["Customer onboarding", "Account inquiries", "Service requests", "Compliance workflows"],
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    useCases: ["Appointment scheduling", "Patient support", "Follow up communication"],
  },
  {
    name: "Hospitality & Travel",
    icon: Plane,
    useCases: ["Reservation management", "Guest services", "Booking assistance"],
  },
  {
    name: "Telecommunications",
    icon: Radio,
    useCases: ["Customer support", "Service activation", "Billing inquiries", "Technical troubleshooting"],
  },
  {
    name: "Events & Exhibitions",
    icon: CalendarDays,
    useCases: ["Registration support", "Attendee engagement", "Lead qualification"],
  },
  {
    name: "Enterprise Organizations",
    icon: Building,
    useCases: ["Internal helpdesks", "Customer service ops", "Employee support"],
  },
];

export const aiPlatformImpact = {
  eyebrow: "Business impact",
  title: "Measurable outcomes with Agentic AI",
  subtitle:
    "Organizations across industries are investing in conversational AI because of its proven business outcomes.",
  stats: [
    { value: "80%", label: "Reduction in first response time" },
    { value: "70%", label: "Automation of customer interactions" },
    { value: "60%", label: "Reduction in customer support costs" },
    { value: "35%", label: "Increase in customer satisfaction" },
    { value: "50%", label: "Higher agent productivity" },
    { value: "24/7", label: "Availability for customers anytime" },
  ],
};

export const aiPlatformClosing = {
  eyebrow: "The future is agentic",
  title: "Intelligent, proactive,",
  titleAccent: "and conversational.",
  subtitle:
    "Echo combines Agentic AI, self service automation, intelligent routing, and centralized customer management into one powerful ecosystem, helping organizations deliver faster support at scale.",
  highlights: [
    "Move beyond static workflows and scripted chatbots",
    "Understand intent, take action, and improve continuously",
    "Reduce operational costs while improving customer experience",
    "Create meaningful conversations at scale",
  ],
};
