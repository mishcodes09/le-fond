import Link from "next/link";
import Image from "next/image";
import { ContactButton } from "@/components/ui/ContactButton";
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" aria-label="Le Fond home">
              <Image
                src="/images/logo.png"
                className="brand-logo"
                width={190}
                height={190}
                alt="Le Fond"
              />
            </Link>
            <p>
              A focused South African studio building the systems between
              interest and action.
            </p>
            <p>South Africa</p>
          </div>
          <nav aria-label="Solutions footer">
            <h3>What we build</h3>
            <Link href="/#services">Lead Generation</Link>
            <Link href="/#system">Funnels</Link>
            <Link href="/#ai">Automation</Link>
            <Link href="/commerce">Commerce</Link>
          </nav>
          <nav aria-label="Company footer">
            <h3>Le Fond</h3>
            <Link href="/#industries">Industries</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/#investment">Investment</Link>
          </nav>
          <nav aria-label="Contact footer">
            <h3>Start a conversation</h3>
            <ContactButton plain label="Book a Discovery Call" />
            <ContactButton plain channel="audit" />
            <ContactButton plain channel="whatsapp" />
            <ContactButton plain channel="email" />
          </nav>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Le Fond. Built with intent in South
            Africa.
          </span>
          <div className="flex gap-5">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
