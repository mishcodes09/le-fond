import { ContactPage } from "@/components/sections/GrowthPages";
export const metadata = {
  title: "Build Your Lead System | Contact Le Fond",
  description:
    "Discuss your lead generation, sales funnel or customer follow-up system with Le Fond. Start with a discovery call or system audit.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Build Your Lead System | Le Fond",
    description: "Start a conversation about your funnel and follow-up.",
    url: "/contact",
  },
};
export default function Contact() {
  return <ContactPage />;
}
