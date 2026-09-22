import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});
export const metadata = {
  metadataBase: new URL("https://www.lefondstudio.co.za"),
  title: "Lead Generation & Funnel Systems South Africa | Le Fond",
  description:
    "Le Fond builds lead generation, sales funnels and follow-up automation for South African service businesses. Capture, qualify, book and follow up.",
  openGraph: {
    siteName: "Le Fond",
    locale: "en_ZA",
    type: "website",
    title: "Le Fond — Turn enquiries into bookings.",
    description:
      "Lead generation, funnels and customer follow-up systems for South African service businesses.",
  },
  twitter: {
    card: "summary",
    title: "Le Fond — Turn enquiries into bookings.",
    description: "Capture. Qualify. Book. Follow up.",
  },
  robots: { index: false, follow: false },
  icons: { icon: "/images/logo.png" },
};
const initTheme =
  "try{var t=localStorage.getItem('lefond-theme');document.documentElement.dataset.theme=(t==='light'||t==='dark')?t:'dark'}catch(e){}";
export default function RootLayout({ children }) {
  return (
    <html
      lang="en-ZA"
      data-theme="dark"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: initTheme }} />
      </head>
      <body>
        <a className="sr-only skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Le Fond",
              url: "https://www.lefondstudio.co.za",
              logo: "https://www.lefondstudio.co.za/images/logo.png",
              areaServed: "South Africa",
            }),
          }}
        />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
