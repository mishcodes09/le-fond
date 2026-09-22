import { AboutPage } from "@/components/sections/GrowthPages";
export const metadata = {
  title: "About Le Fond | Lead Generation & Automation Systems",
  description:
    "Our approach to connected lead generation, funnels and customer follow-up systems for South African service businesses.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Le Fond",
    description: "Focused lead generation and customer follow-up systems.",
    url: "/about",
  },
};
export default function About() {
  return <AboutPage />;
}
