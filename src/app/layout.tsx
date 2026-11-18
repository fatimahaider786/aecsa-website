import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title:
    "AECSA — Advanced Eye Care & Surgery Associates | Best Eye Surgeon in Lahore",
  description:
    "Advanced Eye Care & Surgery Associates (AECSA) — expert eye care & surgery solutions in Lahore. Col (R) Dr. Fakhar Humayun (Sitara-i-Imtiaz), 24+ years of experience in cataract, LASIK, glaucoma & uveitis care. Book your comprehensive eye checkup today.",
  keywords: [
    "AECSA",
    "eye surgeon Lahore",
    "cataract surgery",
    "LASIK",
    "glaucoma treatment",
    "uveitis",
    "Dr. Fakhar Humayun",
    "eye care Pakistan",
  ],
  icons: {
    icon: "/aecsa-logo.svg",
  },
  openGraph: {
    title: "AECSA — Advanced Eye Care & Surgery Associates",
    description:
      "Expert eye care & surgery solutions. 24+ years of surgical excellence in Lahore.",
    siteName: "AECSA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
