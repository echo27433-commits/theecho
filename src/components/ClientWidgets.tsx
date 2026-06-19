"use client";

import dynamic from "next/dynamic";

const WhatsAppWidget = dynamic(
  () => import("@/components/WhatsAppWidget").then((mod) => mod.WhatsAppWidget),
  { ssr: false },
);

export function ClientWidgets() {
  return <WhatsAppWidget />;
}
