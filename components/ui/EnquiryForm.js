"use client";
import { Icon } from "@/components/ui/Icon";

import { useState } from "react";
import { contact } from "@/lib/contact";
export function EnquiryForm() {
  const [reviewed, setReviewed] = useState(false);
  return (
    <form
      className="enquiry-form"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const message = `Hi Le Fond, I'd like to discuss ${data.get("interest")}.\n\nName: ${data.get("name")}\nContact: ${data.get("contact")}\n\nMy enquiry process:\n${data.get("problem")}`;
        setReviewed(true);
        window.location.assign(
          `${contact.whatsappUrl}?text=${encodeURIComponent(message)}`,
        );
      }}
    >
      <h2>Tell us where the gap is.</h2>
      <p>Continue to WhatsApp to review and send your enquiry to Le Fond.</p>
      <div className="form-grid">
        <label>
          Your name
          <input required name="name" autoComplete="name" maxLength={100} />
        </label>
        <label>
          Email or phone
          <input required name="contact" maxLength={150} />
        </label>
      </div>
      <label>
        What would you like to discuss?
        <select name="interest">
          <option>My lead system</option>
          <option>A system audit</option>
          <option>Lead generation</option>
          <option>A sales funnel</option>
        </select>
      </label>
      <label>
        What happens after an enquiry reaches your business?
        <textarea required name="problem" rows={4} maxLength={2000} />
      </label>
      <button className="button" type="submit">
        Continue to WhatsApp <Icon name="arrowUpRight" />
      </button>
      <p role="status">
        {reviewed
          ? "Your draft is opening in WhatsApp. Review it and press Send there to deliver your enquiry."
          : "Your details will be passed to WhatsApp as a draft. This website does not store your enquiry."}
      </p>
    </form>
  );
}
