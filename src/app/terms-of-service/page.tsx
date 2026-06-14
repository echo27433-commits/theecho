import type { Metadata } from "next";
import { LegalPageContent } from "@/components/LegalPageContent";
import { termsOfService } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms of Service | Echo",
  description: "Read the terms and conditions for using Echo products and services.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPageContent
      document={termsOfService}
      alternateHref="/privacy-policy"
      alternateLabel="Privacy Policy"
    />
  );
}
