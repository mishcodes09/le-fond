"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ContactButton } from "@/components/ui/ContactButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
const links = [
  ["Solutions", "/#services"],
  ["How it works", "/#how-it-works"],
  ["Industries", "/#industries"],
  ["Commerce", "/commerce"],
  ["About", "/about"],
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const trigger = useRef(null);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return;
    function close(e) {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="wrap nav-row">
        <Link href="/" aria-label="Le Fond home" className="brand-lockup">
          <Image
            className="brand-logo"
            src="/images/logo.png"
            width={190}
            height={190}
            alt="Le Fond"
            priority
          />
          <span>LE FOND</span>
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([name, href]) => (
            <Link
              href={href}
              key={name}
              aria-current={path === href ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="nav-tools">
          <ThemeToggle />
          <div className="nav-cta">
            <ContactButton />
          </div>
          <button
            ref={trigger}
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav
          className="mobile-menu"
          id="mobile-menu"
          aria-label="Mobile navigation"
        >
          {links.map(([name, href]) => (
            <Link href={href} key={name} onClick={() => setOpen(false)}>
              {name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          <div className="actions">
            <ContactButton channel="audit" secondary />
          </div>
        </nav>
      )}
    </header>
  );
}
