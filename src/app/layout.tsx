import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { CursorGlow } from "@/components/CursorGlow";
import { ClientWidgets } from "@/components/ClientWidgets";
import { ProductModalProvider } from "@/context/ProductModalContext";
import { CalendlyProvider } from "@/context/CalendlyContext";
import { Preloader } from "@/components/Preloader";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { SITE_URL } from "@/lib/site";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Echo — AI Conversations. Stronger Loyalty. Real Impact.",
  description:
    "The AI Engine for Loyalty, Omnichannel Conversations & Growth. Engage, automate and grow across every channel.",
  keywords: "AI, loyalty, conversational AI, omnichannel, enterprise SaaS",
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png",
  },
  openGraph: {
    title: "Echo — The AI Engine for Loyalty & Growth",
    description: "Enterprise AI platform for loyalty, conversations & growth.",
    type: "website",
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)} suppressHydrationWarning>
      <body className="font-sans antialiased overflow-x-hidden">
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScrollProvider>
            <CalendlyProvider>
              <ProductModalProvider>
                <Preloader />
                <CursorGlow />
                <ClientWidgets />
                {children}
              </ProductModalProvider>
            </CalendlyProvider>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
