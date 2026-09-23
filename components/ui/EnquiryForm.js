"use client";
import { Icon } from "@/components/ui/Icon";

import { useState } from "react";
export function EnquiryForm() {
  const [reviewed, setReviewed] = useState(false);
  return (
    <form
      className="enquiry-form"
      onSubmit={(e) => {
        e.preventDefault();
        setReviewed(true);
      }}
    >
      <h2>Tell us where the gap is.</h2>
      <p>Preview form: details stay on this page. Nothing is sent or saved.</p>
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
          <option>Commerce growth</option>
          <option>A dashboard add-on</option>
        </select>
      </label>
      <label>
        What happens after an enquiry reaches your business?
        <textarea required name="problem" rows={4} maxLength={2000} />
      </label>
      <button className="button" type="submit">
        Preview enquiry <Icon name="arrowUpRight" />
      </button>
      <p role="status">
        {reviewed
          ? "Preview checked. Your enquiry has not been sent. The contact route will be connected before launch."
          : ""}
      </p>
    </form>
  );
}
