"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { contact } from "@/lib/contact";

export function QuickContact() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const panel = useRef(null);
  const trigger = useRef(null);
  const path = usePathname();
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 240);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [path]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  function show() {
    panel.current.showModal();
    setOpen(true);
  }
  function close() {
    panel.current.close();
  }
  return (
    <>
      <nav
        className={`quick-dock${visible ? " is-visible" : ""}`}
        aria-label="Le Fond quick navigation"
        inert={!visible ? "" : undefined}
        aria-hidden={!visible}
      >
        <Link href="/#investment">
          <Icon name="grid" />
          <span>Packages</span>
        </Link>
        <Link href="/" aria-label="Le Fond home" className="quick-brand">
          <Image src="/images/logo.png" alt="Le Fond" width={54} height={54} />
        </Link>
        <button
          type="button"
          ref={trigger}
          onClick={show}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="quick-contact"
        >
          <Icon name="message" />
          <span>Contact</span>
        </button>
      </nav>
      <dialog
        id="quick-contact"
        ref={panel}
        className="quick-panel"
        aria-labelledby="quick-contact-title"
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        <div className="quick-panel-inner">
          <header>
            <p className="kicker">LET’S TALK ABOUT YOUR NEXT STEP</p>
            <button
              type="button"
              aria-label="Close contact options"
              onClick={close}
              autoFocus
            >
              <Icon name="close" />
            </button>
            <h2 id="quick-contact-title">Make your next enquiry count.</h2>
            <p>Choose how you’d like to talk to Le Fond.</p>
          </header>
          <div className="quick-options">
            <a className="quick-book" href={contact.bookingUrl}>
              <Icon name="calendar" />
              <span>
                <strong>Book a discovery call</strong>
                <small>15 minutes to discuss your business</small>
              </span>
              <Icon name="arrowUpRight" />
            </a>
            <a href={contact.whatsappUrl}>
              <Icon name="message" />
              <span>
                <strong>Chat on WhatsApp</strong>
                <small>067 342 5533</small>
              </span>
              <Icon name="arrowUpRight" />
            </a>
            <a href={`mailto:${contact.email}`}>
              <Icon name="mail" />
              <span>
                <strong>Send an email</strong>
                <small>{contact.email}</small>
              </span>
              <Icon name="arrowUpRight" />
            </a>
          </div>
          <p className="quick-panel-note">
            Lead generation. Clearer funnels. A practical place to start.
          </p>
        </div>
      </dialog>
    </>
  );
}
