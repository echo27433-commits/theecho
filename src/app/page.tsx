import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { DeferredBrands, DeferredHero, DeferredCTA, DeferredFooter } from "@/components/deferred";

const Solutions = dynamic(() => import("@/components/Solutions").then((mod) => mod.Solutions));
const Stats = dynamic(() => import("@/components/Stats").then((mod) => mod.Stats));
const Industries = dynamic(() => import("@/components/Industries").then((mod) => mod.Industries));
const UseCases = dynamic(() => import("@/components/UseCases").then((mod) => mod.UseCases));
const Testimonials = dynamic(() => import("@/components/Testimonials").then((mod) => mod.Testimonials));
const EnterpriseReady = dynamic(() =>
  import("@/components/EnterpriseReady").then((mod) => mod.EnterpriseReady)
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col overflow-x-hidden">
        <DeferredHero />
        <DeferredBrands />
        <Solutions />
        <Stats />
        <Industries />
        <UseCases />
        <EnterpriseReady />
        <Testimonials />
        <DeferredCTA />
      </main>
      <DeferredFooter />
    </>
  );
}
