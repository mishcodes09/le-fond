import { Icon } from "@/components/ui/Icon";
import { contact } from "@/lib/contact";
export function ContactButton({
  channel = "booking",
  label,
  secondary = false,
  plain = false,
}) {
  const names = {
    booking: "Build My Lead System",
    whatsapp: "WhatsApp",
    email: "Email",
    audit: "Request a System Audit",
  };
  const destinations = {
    booking: contact.bookingUrl,
    whatsapp: contact.whatsappUrl,
    email: `mailto:${contact.email}`,
    audit: contact.auditUrl,
  };
  return (
    <a
      href={destinations[channel] || contact.bookingUrl}
      className={plain ? "" : `button${secondary ? " secondary" : ""}`}
    >
      {label || names[channel] || names.booking}
      {!plain && <Icon name="arrowUpRight" />}
    </a>
  );
}
