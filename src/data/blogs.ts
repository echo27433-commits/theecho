export type BlogCategory = "Agentic AI" | "Loyalty" | "Omnichannel";

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  excerpt: string;
  heroImage: string;
  content: string; // Markdown or JSX string
}

export const blogs: BlogPost[] = [
  {
    slug: "why-businesses-are-moving-beyond-chatbots-to-agentic-ai",
    title: "Why Businesses Are Moving Beyond Chatbots to Agentic AI",
    category: "Agentic AI",
    date: "October 24, 2024",
    readTime: "4 min read",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Customer expectations have changed dramatically. People no longer want to wait in support queues. Discover why Agentic AI is redefining customer engagement.",
    content: `
Customer expectations have changed dramatically over the last few years. People no longer want to wait in support queues, repeat information across channels, or navigate complicated service processes just to get simple answers.

They expect instant, accurate, and personalized support available 24/7.

At the same time, businesses are facing increasing pressure to reduce operational costs while managing larger volumes of customer interactions. Traditional customer support models are struggling to keep up, and basic rule based chatbots are no longer enough.

This is where **Agentic AI** is redefining customer engagement.

Unlike traditional automation systems that follow rigid scripts, Agentic AI can understand context, make decisions, adapt to customer intent, and continuously improve through interactions. It transforms conversations from simple question and answer exchanges into intelligent problem solving experiences.

For businesses, that shift is becoming a major competitive advantage.

## The Problem With Traditional Chatbots

Most first generation chatbots were designed to handle repetitive FAQs and basic workflows. While useful in limited scenarios, they often failed when conversations became more complex.

Customers became frustrated with:
- Repetitive scripted responses
- Inability to understand intent
- Poor escalation experiences
- Lack of personalization
- Limited problem solving capabilities

In fact, studies show that nearly 60% of customers feel traditional chatbots do not effectively resolve their issues. This is because older automation systems were built around predefined rules rather than intelligence.

Modern customers expect more human like engagement, faster resolution times, and seamless transitions between automated and human support.

Agentic AI addresses these gaps by combining conversational intelligence, contextual understanding, and autonomous decision making into one system.
    `
  },
  {
    slug: "what-makes-agentic-ai-different",
    title: "What Makes Agentic AI Different",
    category: "Agentic AI",
    date: "October 26, 2024",
    readTime: "3 min read",
    heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Agentic AI goes beyond answering questions. It analyzes intent and triggers intelligent workflows seamlessly.",
    content: `
**Agentic AI** goes beyond answering questions.

It can analyze customer intent, manage multi step conversations, trigger workflows, retrieve relevant information, and route conversations intelligently based on customer needs.

Instead of forcing customers through rigid menus, AI agents can adapt dynamically during conversations.

For example, an AI powered conversational platform can:
- Resolve customer support issues automatically
- Guide users through self service processes
- Handle appointment scheduling and order updates
- Recommend products based on customer behavior
- Escalate high priority conversations instantly
- Learn from previous interactions to improve future responses

This creates faster, smoother, and more efficient customer experiences.

More importantly, it reduces the workload on human support teams while improving overall service quality.
    `
  },
  {
    slug: "why-self-service-is-becoming-essential",
    title: "Why Self Service Is Becoming Essential",
    category: "Agentic AI",
    date: "November 2, 2024",
    readTime: "4 min read",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Research shows that over 70% of customers prefer self service options. Discover why AI driven self service is the future.",
    content: `
Modern customers increasingly prefer solving problems independently as long as the experience is fast and intuitive.

Research shows that over 70% of customers prefer self service options before contacting a support representative. However, many self service systems are poorly designed, difficult to navigate, or disconnected from customer context.

AI powered self service changes that completely.

Instead of static help centers or keyword based systems, conversational AI platforms can guide customers naturally through personalized workflows in real time.

Customers can:
- Track orders
- Manage appointments
- Access account information
- Resolve common support requests
- Complete transactions
- Receive personalized recommendations

All without waiting for human intervention.

This significantly improves customer satisfaction while reducing operational costs for businesses.

Some organizations implementing AI driven self service platforms have reported:
- Up to 40% reduction in support ticket volumes
- Faster average resolution times
- 24/7 customer support availability
- Increased customer satisfaction scores

The efficiency gains are substantial.
    `
  },
  {
    slug: "smart-routing-improves-resolution-speed",
    title: "Smart Routing Improves Resolution Speed",
    category: "Agentic AI",
    date: "November 5, 2024",
    readTime: "3 min read",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    excerpt: "AI powered smart routing directs conversations to the right workflows instantly, reducing frustration and speeding up resolution.",
    content: `
One of the most overlooked challenges in customer support is routing conversations correctly.

When customers are transferred multiple times between departments, frustration increases rapidly. Poor routing also slows resolution times and creates unnecessary operational inefficiencies.

AI powered smart routing helps businesses solve this problem by automatically understanding customer intent and directing conversations to the right workflows, AI agents, or human teams instantly.

This leads to:
- Faster first response times
- Higher first contact resolution rates
- Reduced support escalations
- Better customer experiences

Instead of relying on manual triaging or static rules, intelligent routing continuously improves based on customer interaction patterns and business data.

The result is a support experience that feels significantly faster and more personalized.
    `
  },
  {
    slug: "the-future-of-customer-conversations",
    title: "The Future of Customer Conversations",
    category: "Agentic AI",
    date: "November 10, 2024",
    readTime: "3 min read",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Businesses are entering a new era where conversations are the primary interface. Agentic AI bridges the gap between scalability and personalization.",
    content: `
Businesses are entering a new era of customer engagement where conversations are becoming the primary interface between brands and customers.

Customers want speed, personalization, and convenience. Businesses need scalability, efficiency, and intelligent automation.

Agentic AI bridges both needs.

By combining conversational intelligence, self service automation, and smart routing into one AI powered ecosystem, businesses can create customer experiences that are faster, more human, and available at scale.

The companies adopting AI driven conversational platforms today are not just improving support operations.

They are building the future of customer relationships.
    `
  },
  // Placeholders for other categories
  {
    slug: "loyalty-programs-in-the-digital-age",
    title: "Loyalty Programs in the Digital Age",
    category: "Loyalty",
    date: "November 15, 2024",
    readTime: "5 min read",
    heroImage: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1200&auto=format&fit=crop",
    excerpt: "How to build loyalty programs that actually drive retention and engagement in a highly competitive market.",
    content: "Content coming soon..."
  },
  {
    slug: "omnichannel-communication-strategies",
    title: "Omnichannel Communication Strategies that Work",
    category: "Omnichannel",
    date: "November 18, 2024",
    readTime: "4 min read",
    heroImage: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Connect with your customers seamlessly across WhatsApp, Email, SMS, and more without losing context.",
    content: "Content coming soon..."
  }
];
