"use client";
import { Icon } from "@/components/ui/Icon";

import { useRef } from "react";
import { contact } from "@/lib/contact";
export function ContactButton({
  channel = "booking",
  label,
  secondary = false,
  plain = false,
}) {
  const dialog = useRef(null);
  const names = {
    booking: "Build My Lead System",
    whatsapp: "WhatsApp",
    email: "Email",
    audit: "Request a System Audit",
  };
  const text = label || names[channel];
  const destination =
    channel === "whatsapp"
      ? contact.whatsappUrl
      : channel === "email"
        ? contact.email
          ? `mailto:${contact.email}`
          : ""
        : channel === "audit"
          ? contact.auditUrl
          : contact.bookingUrl;
  const className = plain ? "" : `button${secondary ? " secondary" : ""}`;
  return (
    <>
      {destination ? (
        <a href={destination} className={className}>
          {text}
          {!plain && <Icon name="arrowUpRight" />}
        </a>
      ) : (
        <button
          type="button"
          className={className}
          onClick={() => dialog.current.showModal()}
        >
          {text}
          {!plain && <Icon name="arrowUpRight" />}
        </button>
      )}
      <dialog
        ref={dialog}
        className="contact-dialog"
        aria-label={`${text} preview`}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current.close();
        }}
      >
        <span className="kicker">Contact placeholder</span>
        <h2>
          {channel === "booking"
            ? "Your lead system starts with a conversation."
            : channel === "audit"
              ? "Let’s review the path from enquiry to action."
              : `${names[channel]} details to follow.`}
        </h2>
        <p>
          {channel === "booking"
            ? "The discovery-call calendar"
            : channel === "audit"
              ? "The system audit request route"
              : `The verified ${names[channel]} contact`}{" "}
          will be connected before launch. This preview has not sent a message,
          requested an audit or booked a call.
        </p>
        <form method="dialog">
          <button className="button">
            Back to the website <Icon name="arrowUpRight" />
          </button>
        </form>
      </dialog>
    </>
  );
}
