import type { ElementType } from "react";
import { Shield, Layers, Server, Plug, Scale, Users, ShoppingBag, BarChart3, Wallet } from "lucide-react";

export const enterpriseIntro = {
  badge: "Enterprise Ready",
  title: "Built for trust",
  titleAccent: "at scale",
  paragraphs: [
    "Modern customer engagement requires more than powerful features. It requires a platform that is secure, scalable, reliable, and capable of integrating seamlessly with the systems businesses already depend on.",
    "Echo is designed for organizations that need enterprise grade performance across customer engagement, loyalty, messaging, and AI powered conversations. From data security and platform reliability to third-party integrations and global scalability, every component is built to support business growth without compromising trust.",
  ],
};

export const enterpriseHighlights = [
  { value: "99.9%", label: "Platform availability" },
  { value: "80%+", label: "Risk reduction via access controls" },
  { value: "3X", label: "More likely to exceed CX goals" },
];

export const enterpriseCapabilities: {
  icon: ElementType;
  title: string;
  description: string;
  features: string[];
  whyItMatters: string;
}[] = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Protect customer data with industry-standard security practices, role-based access controls, audit trails, and secure authentication frameworks.",
    features: [
      "Role-based access management",
      "Secure API authentication",
      "Encrypted data transmission",
      "Activity logging and audit trails",
      "Multi-user governance controls",
      "Data access permissions by department",
    ],
    whyItMatters:
      "Over 80% of data breaches are linked to weak access controls or human error. Centralized governance significantly reduces operational risk.",
  },
  {
    icon: Layers,
    title: "Built for Scale",
    description:
      "Whether you're sending thousands or millions of customer communications, Echo is designed to scale alongside your business.",
    features: [
      "High-volume message processing",
      "Multi-region deployment readiness",
      "Enterprise user management",
      "Distributed communication architecture",
      "Real-time monitoring and reporting",
    ],
    whyItMatters:
      "Organizations using scalable engagement platforms reduce operational bottlenecks by up to 60% compared to fragmented communication systems.",
  },
  {
    icon: Server,
    title: "Reliable Infrastructure",
    description:
      "Customer engagement cannot stop because of system downtime. Echo is designed around reliability, performance monitoring, and business continuity principles.",
    features: [
      "Continuous system monitoring",
      "Automated failover architecture",
      "Real-time delivery tracking",
      "Campaign health monitoring",
      "Centralized reporting dashboards",
    ],
    whyItMatters:
      "Ensuring continuous customer engagement and business operations with enterprise-grade uptime.",
  },
];

export const enterpriseAvailability = {
  eyebrow: "Target Availability",
  value: "99.9%",
  label: "Platform Availability",
  description: "Ensuring continuous customer engagement and business operations.",
};

export const enterpriseBrandLogos = [
  { name: "MASDAR", logo: "/masdar_logo.png", logoDark: "/masdar_logo_dark.png" },
  { name: "Europcar", logo: "/europcar_logo.png", logoDark: "/europcar_logo_dark.png" },
  { name: "BenQ", logo: "/benq_logo.png", logoDark: "/benq_logo_dark.png" },
  { name: "Grand", logo: "/grand_logo.png", logoDark: "/grand_logo_dark.png" },
  { name: "Kenz", logo: "/kenz_logo.png", logoDark: "/kenz_logo_dark.png" },
  { name: "Nesto", logo: "/nesto_logo.png", logoDark: "/nesto_logo_dark.png" },
];

export const enterpriseIntegrations = {
  eyebrow: "Unified Integrations Ecosystem",
  title: "Works with your stack",
  subtitle: "Echo works with the platforms businesses already use.",
  description:
    "Integrate customer engagement workflows directly with CRM, commerce, analytics, payments, and custom systems across your stack. This enables customer data, engagement history, campaign activity, and conversational intelligence to flow seamlessly across your technology stack.",
  whyItMatters:
    "Companies with connected customer data ecosystems are nearly 3X more likely to exceed customer experience goals.",
  categories: [
    {
      name: "CRM",
      icon: Users,
      color: "#3B82F6",
      partners: ["Salesforce", "Zoho CRM", "Microsoft Dynamics", "HubSpot"],
    },
    {
      name: "Commerce",
      icon: ShoppingBag,
      color: "#10B981",
      partners: ["Shopify", "WooCommerce", "SAP", "Oracle"],
    },
    {
      name: "Analytics & Ads",
      icon: BarChart3,
      color: "#A855F7",
      partners: ["Google Analytics", "Meta"],
    },
    {
      name: "Payments & APIs",
      icon: Wallet,
      color: "#F59E0B",
      partners: ["Stripe", "Custom APIs"],
    },
  ] as { name: string; icon: ElementType; color: string; partners: string[] }[],
  partners: [
    "Salesforce",
    "Zoho CRM",
    "Microsoft Dynamics",
    "HubSpot",
    "Shopify",
    "WooCommerce",
    "SAP",
    "Oracle",
    "Google Analytics",
    "Meta",
    "Stripe",
    "Custom APIs",
  ],
};

export const enterpriseCompliance = {
  icon: Scale,
  title: "Compliance & Governance",
  description:
    "Enterprise organizations require greater visibility and control over customer communication activities.",
  features: [
    "Audit-ready communication logs",
    "User activity tracking",
    "Permission-based controls",
    "Communication governance workflows",
    "Data retention policies",
    "Regional deployment flexibility",
  ],
  closingNote:
    "This helps organizations meet operational, compliance, and governance requirements while maintaining customer trust.",
  badges: ["Audit ready", "Permission based", "Regional flexibility"],
};
