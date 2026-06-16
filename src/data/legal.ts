export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
};

export type LegalDocument = {
  title: string;
  titleAccent: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export const privacyPolicy: LegalDocument = {
  title: "Privacy",
  titleAccent: "Policy",
  lastUpdated: "June 13, 2026",
  intro:
    "The Echo (\"Echo\", \"we\", \"us\", or \"our\") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, use our products, or engage with our services.",
  sections: [
    {
      id: "information-we-collect",
      title: "1. Information we collect",
      paragraphs: [
        "We may collect information that you provide directly to us, information collected automatically when you use our services, and information received from third parties where permitted by law.",
      ],
      list: [
        "Contact details such as name, email address, phone number, and company name",
        "Account and profile information for platform users",
        "Communications you send to us, including support requests and demo inquiries",
        "Usage data, device information, log files, and analytics data",
        "Cookies and similar technologies used to improve site performance and experience",
      ],
    },
    {
      id: "how-we-use",
      title: "2. How we use your information",
      paragraphs: ["We use the information we collect for legitimate business purposes, including:"],
      list: [
        "Providing, operating, and improving our loyalty, omnichannel, and AI platforms",
        "Responding to inquiries, scheduling demos, and delivering customer support",
        "Personalizing user experience and analyzing product usage",
        "Sending service related communications and, where permitted, marketing updates",
        "Maintaining security, preventing fraud, and complying with legal obligations",
      ],
    },
    {
      id: "sharing",
      title: "3. How we share information",
      paragraphs: [
        "We do not sell your personal information. We may share information with trusted service providers who assist us in operating our website and delivering our services, subject to appropriate confidentiality and data protection obligations.",
        "We may also disclose information when required by law, to protect our rights, or in connection with a merger, acquisition, or business transfer.",
      ],
    },
    {
      id: "retention",
      title: "4. Data retention",
      paragraphs: [
        "We retain personal information only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by applicable law.",
      ],
    },
    {
      id: "security",
      title: "5. Security",
      paragraphs: [
        "We implement appropriate technical and organizational measures designed to protect personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.",
      ],
    },
    {
      id: "your-rights",
      title: "6. Your rights",
      paragraphs: [
        "Depending on your location, you may have rights to access, correct, delete, or restrict the processing of your personal information, or to object to certain processing activities. To exercise these rights, contact us using the details below.",
      ],
    },
    {
      id: "international",
      title: "7. International transfers",
      paragraphs: [
        "Echo is headquartered in the United Arab Emirates and may process information in the UAE and other countries where we or our service providers operate. We take steps to ensure appropriate safeguards are in place where required.",
      ],
    },
    {
      id: "children",
      title: "8. Children's privacy",
      paragraphs: [
        "Our services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from children.",
      ],
    },
    {
      id: "changes",
      title: "9. Changes to this policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. The updated version will be indicated by a revised \"Last updated\" date and will be effective when posted on this page.",
      ],
    },
    {
      id: "contact",
      title: "10. Contact us",
      paragraphs: [
        "If you have questions about this Privacy Policy or our data practices, please contact us at privacy@theecho.global or through our contact page.",
      ],
    },
  ],
};

export const termsOfService: LegalDocument = {
  title: "Terms of",
  titleAccent: "Service",
  lastUpdated: "June 13, 2026",
  intro:
    "These Terms of Service (\"Terms\") govern your access to and use of the Echo website, products, and related services. By accessing or using our services, you agree to be bound by these Terms.",
  sections: [
    {
      id: "acceptance",
      title: "1. Acceptance of terms",
      paragraphs: [
        "These Terms constitute a legally binding agreement between you and Echo. If you are using our services on behalf of an organization, you represent that you have authority to bind that organization to these Terms.",
      ],
    },
    {
      id: "services",
      title: "2. Our services",
      paragraphs: [
        "Echo provides enterprise software solutions including loyalty programs, omnichannel messaging, and AI conversational platforms. Specific features, service levels, and commercial terms may be defined in a separate agreement or order form between you and Echo.",
      ],
    },
    {
      id: "accounts",
      title: "3. Accounts and access",
      paragraphs: [
        "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify us promptly of any unauthorized use or security breach.",
      ],
    },
    {
      id: "acceptable-use",
      title: "4. Acceptable use",
      paragraphs: ["You agree not to misuse our services. Without limitation, you must not:"],
      list: [
        "Violate applicable laws, regulations, or third party rights",
        "Upload, transmit, or distribute unlawful, harmful, or abusive content",
        "Attempt to gain unauthorized access to our systems or other users' accounts",
        "Interfere with or disrupt the integrity or performance of our services",
        "Reverse engineer or attempt to extract source code except as permitted by law",
      ],
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual property",
      paragraphs: [
        "Echo and its licensors retain all rights, title, and interest in and to the services, website, software, branding, documentation, and related intellectual property. No rights are granted except as expressly set out in these Terms or a applicable commercial agreement.",
      ],
    },
    {
      id: "customer-data",
      title: "6. Customer data",
      paragraphs: [
        "You retain ownership of data you submit to our platforms. You grant Echo a limited license to process customer data solely to provide, maintain, secure, and improve the services in accordance with our Privacy Policy and any applicable data processing terms.",
      ],
    },
    {
      id: "fees",
      title: "7. Fees and payment",
      paragraphs: [
        "Where services are provided on a paid basis, fees, billing cycles, and payment terms will be specified in your commercial agreement. Failure to pay applicable fees may result in suspension or termination of access.",
      ],
    },
    {
      id: "disclaimers",
      title: "8. Disclaimers",
      paragraphs: [
        "Our services are provided on an \"as is\" and \"as available\" basis to the fullest extent permitted by law. Echo disclaims all warranties, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non infringement.",
      ],
    },
    {
      id: "limitation",
      title: "9. Limitation of liability",
      paragraphs: [
        "To the maximum extent permitted by applicable law, Echo shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, data, or business opportunities arising from or related to your use of the services.",
      ],
    },
    {
      id: "termination",
      title: "10. Termination",
      paragraphs: [
        "We may suspend or terminate access to our services if you breach these Terms or if required for security, legal, or operational reasons. You may stop using our services at any time, subject to any contractual commitments in place.",
      ],
    },
    {
      id: "governing-law",
      title: "11. Governing law",
      paragraphs: [
        "These Terms are governed by the laws of the United Arab Emirates, without regard to conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts of the United Arab Emirates, unless otherwise agreed in writing.",
      ],
    },
    {
      id: "contact",
      title: "12. Contact",
      paragraphs: [
        "For questions about these Terms, please contact us at legal@theecho.global or via our contact page.",
      ],
    },
  ],
};
