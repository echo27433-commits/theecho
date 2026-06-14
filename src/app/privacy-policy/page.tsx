import type { Metadata } from "next";
import { LegalPageContent } from "@/components/LegalPageContent";
import { privacyPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Echo",
  description: "Learn how Echo collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageContent
      document={privacyPolicy}
      alternateHref="/terms-of-service"
      alternateLabel="Terms of Service"
    />
  );
}
