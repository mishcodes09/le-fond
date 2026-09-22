import { CommercePage } from "@/components/sections/GrowthPages";
export const metadata = {
  title: "Ecommerce Conversion & Lifecycle Systems | Le Fond South Africa",
  description:
    "Shopify and WooCommerce store improvements, cart recovery and customer lifecycle systems for established South African product brands.",
  alternates: { canonical: "/commerce" },
  openGraph: {
    title: "Commerce Growth | Le Fond",
    description:
      "Improve what happens after the click. Commerce and lifecycle systems for South African product brands.",
    url: "/commerce",
  },
  twitter: {
    card: "summary",
    title: "Commerce Growth | Le Fond",
    description:
      "Store improvements and customer lifecycle systems for established South African product brands.",
  },
};
export default function Commerce() {
  return <CommercePage />;
}
