"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={SITE.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AECSA on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 transition-all hover:w-auto"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1, width: 56 }}
      whileHover={{ scale: 1.04 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
    >
      {/* pulse rings */}
      <span
        aria-hidden
        className="anim-pulse-ring absolute inset-0 rounded-full bg-[#25D366]/50"
      />
      <MessageCircle className="relative h-7 w-7 shrink-0" aria-hidden />
      <span className="relative hidden whitespace-nowrap pl-0 text-sm font-semibold opacity-0 transition-all duration-300 group-hover:pl-2.5 group-hover:opacity-100 sm:inline">
        Chat with us
      </span>
      <span className="absolute -top-0.5 right-[-2px] flex h-3.5 w-3.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75" />
        <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-[#25D366]" />
      </span>
    </motion.a>
  );
}
