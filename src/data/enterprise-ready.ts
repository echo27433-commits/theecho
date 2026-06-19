import type { ElementType } from "react";
import { Shield, Layers, Server, Scale, Globe, Code2, FileCheck } from "lucide-react";

export const enterpriseIntro = {
  badge: "Enterprise Ready",
  title: "Built for trust",
  titleAccent: "at scale",
  paragraphs: [
    "Modern customer engagement requires more than powerful features. It requires a platform that is secure, scalable, reliable, and capable of integrating seamlessly with the systems businesses already depend on.",
    "Echo is designed for organizations that need enterprise grade performance across customer engagement, loyalty, messaging, and AI powered conversations. From data security and platform reliability to third-party integrations and global scalability, every component is built to support business growth without compromising trust.",
  ],
};

export const enterpriseMission = {
  eyebrow: "Why Echo Enterprise",
  lead:
    "Echo is designed for organizations that need enterprise grade performance across customer engagement, loyalty, messaging, and AI powered conversations.",
  supporting:
    "From data security and platform reliability to third-party integrations and global scalability, every component is built to support business growth without compromising trust.",
  focusAreas: [
    { icon: Layers, title: "Engagement & loyalty", description: "Unified journeys across every channel" },
    { icon: Shield, title: "Security & reliability", description: "Enterprise-grade protection and uptime" },
    { icon: Code2, title: "Integrations & scale", description: "Connect your stack and grow globally" },
    { icon: Scale, title: "Trust at every layer", description: "Governance without slowing growth" },
  ],
};

export const enterpriseTrustPillars: {
  icon: ElementType;
  title: string;
  description: string;
}[] = [
  {
    icon: Shield,
    title: "Secure by design",
    description: "Encrypted data transit, role-based access, and continuous audit trails.",
  },
  {
    icon: Globe,
    title: "Multi-region",
    description: "Deploy and scale across MENA, EU, and APAC with confidence.",
  },
  {
    icon: FileCheck,
    title: "Audit ready",
    description: "Governance workflows, activity logs, and permission controls.",
  },
  {
    icon: Code2,
    title: "API-first",
    description: "Plug into CRM, commerce, and analytics with bi-directional sync.",
  },
];

export const enterpriseHeroSignals = [
  { label: "Platform availability", value: "99.9%" },
  { label: "Global regions", value: "MENA · EU · APAC" },
  { label: "Systems status", value: "All operational" },
];

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

export type IntegrationLogo = {
  logo: string;
  logoDark: string;
};

export const integrationLogos: IntegrationLogo[] = [
  { logo: "/brands/salesforce_logo.png", logoDark: "/brands/salesforce_logo_dark.png" },
  { logo: "/brands/zoho_crm_logo.png", logoDark: "/brands/zoho_crm_logo_dark.png" },
  { logo: "/brands/ms_dynamic_logo.png", logoDark: "/brands/ms_dynamic_logo_dark.png" },
  { logo: "/brands/hubspot_logo.png", logoDark: "/brands/hubspot_logo_dark.png" },
  { logo: "/brands/shopify_logo.png", logoDark: "/brands/shopify_logo_dark.png" },
  { logo: "/brands/woocommerce_logo.png", logoDark: "/brands/woocommerce_logo_dark.png" },
  { logo: "/brands/sap_logo.png", logoDark: "/brands/sap_logo_dark.png" },
  { logo: "/brands/oracale_logo.png", logoDark: "/brands/oracale_logo_dark.png" },
];

export const integrationsMore = {
  count: "Many",
  label: "More integrations",
  sublabel: "Platforms, payments & custom APIs",
};

export const enterpriseIntegrations = {
  eyebrow: "Unified Integrations Ecosystem",
  title: "Works with your stack",
  subtitle: "Echo works with the platforms businesses already use.",
  description:
    "Integrate customer engagement workflows directly with CRM, commerce, analytics, payments, and custom systems across your stack. This enables customer data, engagement history, campaign activity, and conversational intelligence to flow seamlessly across your technology stack.",
  whyItMatters:
    "Companies with connected customer data ecosystems are nearly 3X more likely to exceed customer experience goals.",
  highlights: [
    { label: "Plug-and-play connectors" },
    { label: "Custom API support" },
    { label: "Bi-directional sync" },
  ],
  stackCategories: ["CRM", "Commerce", "Analytics & Ads", "Payments & APIs"],
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
