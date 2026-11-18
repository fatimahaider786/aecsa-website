export const SITE = {
  name: "Advanced Eye Care & Surgery Associates",
  shortName: "AECSA",
  tagline: "Expert Eye Care & Surgery Solutions",
  phoneDisplay: "0321 4775421",
  phoneHref: "tel:+923214775421",
  whatsappHref:
    "https://wa.me/923214775421?text=Assalam-o-Alaikum%2C%20I%20would%20like%20to%20book%20an%20eye%20consultation%20at%20AECSA.",
  email: "aecsapakistan@gmail.com",
  emailHref: "mailto:aecsapakistan@gmail.com",
  address:
    "Room No. 23, 2nd Floor, Farooq Hospital DHA Avenue Mall, Ghazi Rd, Lahore",
  hours: "Mon – Sat · 10:00 AM – 8:00 PM",
  surgeon: {
    name: "Col (R) Dr. Fakhar Humayun",
    honorific: "Sitara-i-Imtiaz",
    role: "Consultant Eye Surgeon & Founder",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Facilities", href: "#facilities" },
  { label: "Conditions", href: "#conditions" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;
