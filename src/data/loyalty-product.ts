import type { ElementType } from "react";
import {
  Globe2,
  TrendingUp,
  Users,
  Link2,
  Gamepad2,
  Gift,
  Shield,
  Zap,
  Building2,
  Plane,
  Store,
  Landmark,
  ShoppingBag,
  UtensilsCrossed,
  Shirt,
  Smartphone,
  Package,
  Sparkles,
} from "lucide-react";

export const LOYALTY_COLOR = "#f20d14";

export const loyaltyHero = {
  badge: "Loyalty Platform",
  title: "Loyalty:",
  titleAccent: "Rocket Fuel for your Business Growth",
  subtitle:
    "360° loyalty solutions for businesses of all sizes: increase revenue, acquire more customers, and access a global network trusted across banks, airlines, retailers, and loyalty programs.",
};

export const loyaltyValuePillars = [
  {
    icon: TrendingUp,
    title: "Increase Your Revenue",
    description: "Turn loyalty into measurable growth with offers, rewards, and engagement that drive higher spend.",
  },
  {
    icon: Users,
    title: "Acquire More Customers",
    description: "Reach new audiences through a connected ecosystem of banks, merchants, airlines, and loyalty programs.",
  },
  {
    icon: Globe2,
    title: "Access Global Network",
    description: "Tap into 50+ countries, 15+ airlines, and 100+ brands, transforming local rewards into global rewards.",
  },
];

export const loyaltyStats = [
  { value: "50+", label: "Country access" },
  { value: "15+", label: "Airlines network" },
  { value: "100+", label: "Brand network" },
  { value: "Trusted", label: "Banks & enterprises" },
];

export type LoyaltyPartnerLogo = {
  logo: string;
  logoDark: string;
  logoClass: string;
};

export type LoyaltyPartnerGroup = {
  icon: ElementType;
  title: string;
  cellClass?: string;
  partners: LoyaltyPartnerLogo[];
};

export const loyaltyPartnerGroups: LoyaltyPartnerGroup[] = [
  {
    icon: Landmark,
    title: "Banks",
    cellClass: "min-h-[4.75rem] sm:min-h-[5.25rem]",
    partners: [
      {
        logo: "/loyal/adbc-black.png",
        logoDark: "/loyal/adbc-white.png",
        logoClass: "h-8 w-auto max-w-[82%] object-contain sm:h-9",
      },
      {
        logo: "/loyal/Visa-black.png",
        logoDark: "/loyal/Visa-white.png",
        logoClass: "h-7 w-auto max-w-[78%] object-contain sm:h-8",
      },
      {
        logo: "/loyal/Master-Card%20-black.png",
        logoDark: "/loyal/Master-Card%20-white.png",
        logoClass: "h-8 w-auto max-w-[72%] object-contain sm:h-9",
      },
    ],
  },
  {
    icon: Plane,
    title: "Airlines",
    cellClass: "min-h-[6.5rem] sm:min-h-[7.5rem]",
    partners: [
      {
        logo: "/loyal/emirates-black.png",
        logoDark: "/loyal/emirates-whit.png",
        logoClass: "h-11 w-auto max-w-full scale-110 object-contain sm:h-12",
      },
      {
        logo: "/loyal/Air%20Arabia-black.png",
        logoDark: "/loyal/Air%20Arabia-white.png",
        logoClass: "h-12 w-auto max-w-full scale-125 object-contain sm:h-14 sm:scale-[1.35]",
      },
      {
        logo: "/loyal/airindia-balck.png",
        logoDark: "/loyal/airindia-white.png",
        logoClass: "h-14 w-auto max-w-full scale-[1.35] object-contain sm:h-[4.25rem] sm:scale-[1.55]",
      },
      {
        logo: "/loyal/Air%20Astana%20-black.png",
        logoDark: "/loyal/Air%20Astana%20-white.png",
        logoClass: "h-14 w-auto max-w-full scale-[1.35] object-contain sm:h-[4.25rem] sm:scale-[1.55]",
      },
    ],
  },
  {
    icon: Store,
    title: "Merchants & Retailers",
    cellClass: "min-h-[7rem] sm:min-h-[8rem]",
    partners: [
      {
        logo: "/loyal/Carrefour%20Logo%20-black.png",
        logoDark: "/loyal/Carrefour%20Logo%20-white.png",
        logoClass: "h-16 w-auto max-w-[78%] scale-110 object-contain sm:h-[4.75rem] sm:scale-125",
      },
      {
        logo: "/loyal/dominos-black.png",
        logoDark: "/loyal/dominos-white.png",
        logoClass: "h-16 w-auto max-w-full scale-[1.35] object-contain sm:h-[4.5rem] sm:scale-[1.6]",
      },
      {
        logo: "/loyal/Joyalukkas-black.png",
        logoDark: "/loyal/Joyalukkas-white.png",
        logoClass: "h-[3.75rem] w-auto max-w-full scale-[1.35] object-contain sm:h-[4.25rem] sm:scale-[1.55]",
      },
      {
        logo: "/loyal/medex-black.png",
        logoDark: "/loyal/medex-white.png",
        logoClass: "h-16 w-auto max-w-full scale-[1.35] object-contain sm:h-[4.5rem] sm:scale-[1.6]",
      },
    ],
  },
];

export const loyaltySolutions: {
  id: string;
  icon: ElementType;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
}[] = [
  {
    id: "offer-connect",
    icon: Link2,
    title: "Offer Connect",
    tagline: "Connecting merchants with banks and wallet providers",
    description:
      "Connect merchants with banks and wallet providers to boost transaction volumes through a constantly growing pool of merchant offers.",
    benefits: [
      "Constantly growing pool of merchant offers",
      "Increase average monthly spend",
      "More customer choices",
      "Better spending incentivization",
      "Higher transaction volume",
      "More customer engagement",
    ],
  },
  {
    id: "game-point",
    icon: Gamepad2,
    title: "Game Point",
    tagline: "Gamify loyalty and maximize engagement",
    description:
      "Gamify loyalty and maximize engagement with easy plug and play integrations, launch fast without heavy overhead.",
    benefits: [
      "Increase repeat visits",
      "Customize rewards to KPIs",
      "Launch without overhead",
      "Plug and play integrations",
    ],
  },
  {
    id: "giftos",
    icon: Gift,
    title: "GiftOS",
    tagline: "Comprehensive gift card management",
    description:
      "An instant loyalty solution for shopping malls and retailers with automated issuance and frictionless mobile redemption.",
    benefits: [
      "Instant & automated issuance",
      "Frictionless mobile redemption",
      "Simplified inventory auditing",
      "Built for malls & retail chains",
    ],
  },
];

export const loyaltyTechnology = {
  title: "Fast, smart and secure with cutting edge technology",
  subtitle: "Helping your business operate with zero CapEx and the fastest time to market.",
  advantages: [
    { icon: Zap, title: "Zero CapEx", description: "Launch loyalty programs without heavy upfront infrastructure investment." },
    { icon: TrendingUp, title: "Fastest time to market", description: "Go live quickly with proven plug and play loyalty modules." },
    { icon: Shield, title: "Transparency & security", description: "Enterprise grade traceability with secure, auditable reward flows." },
    { icon: Globe2, title: "Global connectivity", description: "Connect with global brands, merchants, and SMEs in one ecosystem." },
  ],
};

export const loyaltyIndustries: { name: string; icon: ElementType }[] = [
  { name: "Retail", icon: ShoppingBag },
  { name: "F&B", icon: UtensilsCrossed },
  { name: "Fashion", icon: Shirt },
  { name: "Electronics", icon: Smartphone },
  { name: "FMCG", icon: Package },
  { name: "Cosmetics", icon: Sparkles },
  { name: "Banking", icon: Landmark },
  { name: "Shopping Malls", icon: Building2 },
];

export const loyaltyEcosystem = {
  eyebrow: "Global Loyalty Ecosystem",
  title: "Loyyal",
  titleAccent: "Global Loyalty Ecosystem",
  subtitle:
    "Top spenders across the Middle East, Europe, India, and the US, connected through one powerful loyalty network.",
  stats: [
    { value: "$360B", label: "Unredeemed global rewards" },
    { value: "50+", label: "Countries connected" },
    { value: "15+", label: "Airline partners" },
    { value: "100+", label: "Merchant brands" },
  ],
  highlights: [
    "Transforms local rewards into global rewards",
    "Connect with unredeemed global rewards at scale",
    "Transforms merchant trends and culture popularity into revenue",
    "Easier operations with smarter business traceability",
  ],
};
