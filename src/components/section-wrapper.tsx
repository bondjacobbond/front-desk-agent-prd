"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  muted,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 px-6 py-16 md:px-12 lg:px-16 lg:scroll-mt-8",
        muted && "bg-bond-soft-bg",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-5xl"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-2 inline-block rounded-full bg-bond-navy/10 px-3 py-1 font-display text-xs font-semibold tracking-wide text-bond-navy uppercase">
      {children}
    </span>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl font-bold tracking-tight text-bond-navy-dark md:text-4xl text-balance">
      {children}
    </h2>
  );
}

export function SectionDescription({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
      {children}
    </p>
  );
}
