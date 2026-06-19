import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LazyMount } from "@/components/LazyMount";
import { DeferredBrands, DeferredCTA, DeferredFooter } from "@/components/deferred";

const Solutions = dynamic(() => import("@/components/Solutions").then((mod) => mod.Solutions), {
  loading: () => <div className="min-h-[720px]" aria-hidden />,
});
const Stats = dynamic(() => import("@/components/Stats").then((mod) => mod.Stats), {
  loading: () => <div className="min-h-[420px]" aria-hidden />,
});
const Industries = dynamic(() => import("@/components/Industries").then((mod) => mod.Industries), {
  loading: () => <div className="min-h-[520px]" aria-hidden />,
});
const UseCases = dynamic(() => import("@/components/UseCases").then((mod) => mod.UseCases), {
  loading: () => <div className="min-h-[640px]" aria-hidden />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials").then((mod) => mod.Testimonials), {
  loading: () => <div className="min-h-[520px]" aria-hidden />,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen w-full flex-col overflow-x-hidden">
        <Hero />
        <DeferredBrands />
        <LazyMount minHeight="720px">
          <Solutions />
        </LazyMount>
        <LazyMount minHeight="420px">
          <Stats />
        </LazyMount>
        <LazyMount minHeight="520px">
          <Industries />
        </LazyMount>
        <LazyMount minHeight="640px">
          <UseCases />
        </LazyMount>
        <LazyMount minHeight="520px">
          <Testimonials />
        </LazyMount>
        <DeferredCTA />
      </main>
      <DeferredFooter />
    </>
  );
}
