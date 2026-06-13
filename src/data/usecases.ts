export type UseCaseData = {
  slug: string;
  client: string;
  clientLogo: string;
  clientLogoDark: string;
  industry: string;
  heroImage: string;
  challenge: string;
  solution: string;
  results: string[];
  // Bar Chart
  barChart: {
    title: string;
    subtitle: string;
    beforeLabel: string;
    afterLabel: string;
    beforeValue: number;
    afterValue: number;
    unit: string;
    increase: string;
  };
  // Line Chart
  lineChart: {
    title: string;
    subtitle: string;
    points: { label: string; value: number }[];
    unit: string;
    highlight?: string;
  };
  // Funnel
  funnel: {
    title: string;
    subtitle: string;
    steps: { label: string; value: string; icon: string; rate?: string; rateLabel?: string }[];
  };
  color: string;
};

export const useCasesData: UseCaseData[] = [
  {
    slug: "nesto-hypermarkets",
    client: "Nesto Hypermarkets",
    clientLogo: "/nesto_logo.png",
    clientLogoDark: "/nesto_logo_dark.png",
    industry: "Enterprise Retail Brand",
    heroImage: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2000&auto=format&fit=crop",
    challenge: "Low repeat customer engagement and limited personalization across marketing campaigns.",
    solution: "Echo automated personalized WhatsApp campaigns, customer reminders, and targeted engagement journeys.",
    results: [
      "28% increase in repeat shoppers",
      "Faster and smarter campaign execution",
      "Improved customer engagement and personalization"
    ],
    barChart: {
      title: "Repeat Shoppers Before vs After Echo",
      subtitle: "28% increase in repeat shoppers in just 3 months",
      beforeLabel: "Before Echo",
      afterLabel: "After Echo (3 Months)",
      beforeValue: 22,
      afterValue: 28,
      unit: "%",
      increase: "+28%"
    },
    lineChart: {
      title: "Engagement Growth Over 3 Months",
      subtitle: "Stronger customer engagement across the journey",
      points: [
        { label: "Month 1", value: 18000 },
        { label: "Month 2", value: 25000 },
        { label: "Month 3", value: 34000 },
        { label: "Month 4", value: 42000 }
      ],
      unit: "K",
      highlight: "42K"
    },
    funnel: {
      title: "Customer Engagement Funnel",
      subtitle: "From reach to repeat purchases",
      steps: [
        { label: "Campaign Reach", value: "1.2M", icon: "📣", rate: "26%", rateLabel: "Engagement Rate" },
        { label: "Engaged Users", value: "320K", icon: "📋", rate: "37%", rateLabel: "Purchase Conversion" },
        { label: "Purchases", value: "120K", icon: "🛒", rate: "28%", rateLabel: "Repeat Rate" },
        { label: "Repeat Shoppers", value: "28%", icon: "🔁" }
      ]
    },
    color: "#10B981"
  },
  {
    slug: "masdar",
    client: "Masdar",
    clientLogo: "/masdar_logo.png",
    clientLogoDark: "/masdar_logo_dark.png",
    industry: "Energy & Sustainability",
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop",
    challenge: "Low attendee engagement and fragmented event communication.",
    solution: "Echo automated personalized WhatsApp campaigns, reminders, and live event interactions.",
    results: [
      "45% increase in registrations",
      "Faster attendee responses",
      "Improved event participation and engagement"
    ],
    barChart: {
      title: "Registrations Before vs After Echo",
      subtitle: "45% increase in event registrations",
      beforeLabel: "Before Echo",
      afterLabel: "After Echo",
      beforeValue: 6200,
      afterValue: 9000,
      unit: "",
      increase: "+45%"
    },
    lineChart: {
      title: "Audience Interaction Growth During Event",
      subtitle: "Real time engagement improved before and during events",
      points: [
        { label: "2 Weeks Before", value: 1200 },
        { label: "1 Week Before", value: 2100 },
        { label: "Event Day (Morning)", value: 3200 },
        { label: "Event Day (Afternoon)", value: 4300 },
        { label: "Event Day (Evening)", value: 4800 }
      ],
      unit: "K",
      highlight: "4.8K"
    },
    funnel: {
      title: "Engagement Funnel",
      subtitle: "From invite to meaningful engagement",
      steps: [
        { label: "Invites Sent", value: "25,000", icon: "📨", rate: "40%", rateLabel: "Conversion" },
        { label: "Registrations", value: "10,000", icon: "📋", rate: "60%", rateLabel: "Conversion" },
        { label: "Attendance", value: "6,000", icon: "🎫", rate: "70%", rateLabel: "Conversion" },
        { label: "Engaged Audience", value: "4,200", icon: "🎯" }
      ]
    },
    color: "#3B82F6"
  },
  {
    slug: "retail-promotions",
    client: "Mark & Save",
    clientLogo: "/mark_save_logo.png",
    clientLogoDark: "/mark_save_logo_dark.png",
    industry: "Enterprise Retail Brand",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop",
    challenge: "Slow customer response times and low campaign conversion across retail promotions.",
    solution: "Echo automated WhatsApp promotions, customer responses, and personalized engagement workflows.",
    results: [
      "35% increase in campaign conversions",
      "Over 60% faster customer response time",
      "Improved customer engagement and repeat purchases"
    ],
    barChart: {
      title: "Campaign Conversions Before vs After Echo",
      subtitle: "35% increase in campaign conversions",
      beforeLabel: "Before Echo",
      afterLabel: "After Echo",
      beforeValue: 28,
      afterValue: 37.8,
      unit: "%",
      increase: "+35%"
    },
    lineChart: {
      title: "Customer Response Time Improvement",
      subtitle: "Over 60% reduction in response time",
      points: [
        { label: "Before Echo", value: 120 },
        { label: "After Echo", value: 45 }
      ],
      unit: "min",
      highlight: "-62.5%"
    },
    funnel: {
      title: "Customer Engagement Funnel",
      subtitle: "From reach to repeat purchases",
      steps: [
        { label: "Campaign Reach", value: "1.8M", icon: "📣", rate: "31%", rateLabel: "Interaction Rate" },
        { label: "Customer Interactions", value: "560K", icon: "💬", rate: "37.5%", rateLabel: "Conversion Rate" },
        { label: "Conversions", value: "210K", icon: "✅", rate: "35%", rateLabel: "Repeat Rate" },
        { label: "Repeat Purchases", value: "35%", icon: "🔁" }
      ]
    },
    color: "#f20d14"
  }
];
