import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";

// Lazy load heavy components to drastically improve hydration time
const Solutions = dynamic(() => import("@/components/Solutions").then((mod) => mod.Solutions));
const Stats = dynamic(() => import("@/components/Stats").then((mod) => mod.Stats));
const Industries = dynamic(() => import("@/components/Industries").then((mod) => mod.Industries));
const UseCases = dynamic(() => import("@/components/UseCases").then((mod) => mod.UseCases));
const Testimonials = dynamic(() => import("@/components/Testimonials").then((mod) => mod.Testimonials));
const CTA = dynamic(() => import("@/components/CTA").then((mod) => mod.CTA));
const Footer = dynamic(() => import("@/components/Footer").then((mod) => mod.Footer));

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col w-full overflow-x-hidden">
        <Hero />
        <Brands />
        <Solutions />
        <Stats />
        <Industries />
        <UseCases />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
