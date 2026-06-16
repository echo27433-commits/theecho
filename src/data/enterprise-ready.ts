import type { ElementType } from "react";
import { Shield, Layers, Server, Plug, Scale } from "lucide-react";

export const enterpriseIntro = {
  badge: "Enterprise Ready",
  title: "Built for trust",
  titleAccent: "at scale",
  subtitle:
    "Secure, scalable, and reliable. Echo integrates with the systems you already use so engagement grows without compromising governance.",
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
}[] = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Role-based access, encrypted APIs, and full audit trails.",
  },
  {
    icon: Layers,
    title: "Built for Scale",
    description: "High-volume messaging with multi-region readiness.",
  },
  {
    icon: Server,
    title: "Reliable Infrastructure",
    description: "Monitoring, failover, and real time delivery tracking.",
  },
  {
    icon: Plug,
    title: "Unified Integrations",
    description: "CRM, commerce, analytics, and custom API connectivity.",
  },
];

export const enterpriseBrandLogos = [
  { name: "MASDAR", logo: "/masdar_logo.png", logoDark: "/masdar_logo_dark.png" },
  { name: "Europcar", logo: "/europcar_logo.png", logoDark: "/europcar_logo_dark.png" },
  { name: "BenQ", logo: "/benq_logo.png", logoDark: "/benq_logo_dark.png" },
  { name: "Grand", logo: "/grand_logo.png", logoDark: "/grand_logo_dark.png" },
  { name: "Kenz", logo: "/kenz_logo.png", logoDark: "/kenz_logo_dark.png" },
  { name: "Nesto", logo: "/nesto_logo.png", logoDark: "/nesto_logo_dark.png" },
];

export const enterpriseIntegrations = [
  "Salesforce",
  "HubSpot",
  "Shopify",
  "SAP",
  "Microsoft Dynamics",
  "Stripe",
];

export const enterpriseCompliance = {
  icon: Scale,
  title: "Compliance & Governance",
  description: "Audit-ready logs, permissions, and data retention for enterprise teams.",
};
