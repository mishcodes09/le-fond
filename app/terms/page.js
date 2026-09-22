import { LegalPage } from "@/components/sections/GrowthPages";
export const metadata = {
  title: "Terms | Le Fond Preview",
  alternates: { canonical: "/terms" },
};
export default function Terms() {
  return <LegalPage type="terms" />;
}
