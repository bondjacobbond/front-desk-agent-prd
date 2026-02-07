"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageSquare, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] scroll-mt-14 flex-col items-center justify-center overflow-hidden px-6 py-20 text-center lg:scroll-mt-0"
    >
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bond-navy/[0.03] via-transparent to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-4xl"
      >
        <Badge
          variant="outline"
          className="mb-6 rounded-full border-bond-navy/20 bg-bond-navy/5 px-4 py-1.5 font-display text-xs font-semibold tracking-wide text-bond-navy"
        >
          Draft — Requirements Gathering
        </Badge>

        <h1 className="font-display text-4xl font-bold tracking-tight text-bond-navy-dark md:text-6xl lg:text-7xl text-balance">
          AI Front Desk Agent
        </h1>
        <p className="mx-auto mt-2 max-w-xl font-display text-lg font-medium text-bond-gold md:text-xl">
          Bond Sports
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          A voice-first, multi-channel AI system that acts as an always-on
          extension of a facility&apos;s front desk. Deeply integrated with Bond
          -- answering calls, booking registrations, and resolving inquiries
          end-to-end.
        </p>

        {/* Channel pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: Phone, label: "Voice-First", primary: true },
            { icon: Mail, label: "Email", primary: false },
            { icon: MessageSquare, label: "Chat & SMS", primary: false },
          ].map(({ icon: Icon, label, primary }) => (
            <div
              key={label}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium ${
                primary
                  ? "bg-bond-navy text-white shadow-lg shadow-bond-navy/20"
                  : "border border-border bg-white text-muted-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </div>
          ))}
        </motion.div>

        {/* Key stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {[
            { value: "50%+", label: "Calls go unanswered" },
            { value: "<3s", label: "AI answer time" },
            { value: "$399", label: "/mo validated pricing" },
            { value: "300+", label: "Facility opportunity" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-2xl font-bold text-bond-navy md:text-3xl">
                {value}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 flex items-center gap-2 text-sm text-muted-foreground"
        >
          Scroll to explore
          <ArrowRight className="h-4 w-4 animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
}
