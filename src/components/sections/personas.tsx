"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { personas } from "@/lib/prd-data";
import { Check } from "lucide-react";

export function PersonasSection() {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper id="personas">
      <SectionLabel>User Personas</SectionLabel>
      <SectionTitle>Who we are building for</SectionTitle>
      <SectionDescription>
        Four distinct audiences that the AI Front Desk Agent must serve -- each
        with unique pain points and needs.
      </SectionDescription>

      <div className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* Persona selector */}
        <div className="flex gap-2 lg:flex-col lg:gap-1.5">
          {personas.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setActive(i)}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all",
                active === i
                  ? "bg-bond-navy text-white shadow-md shadow-bond-navy/20"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              )}
            >
              <div
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold",
                  active === i
                    ? "bg-white/20 text-white"
                    : "bg-bond-navy/10 text-bond-navy"
                )}
              >
                {p.emoji}
              </div>
              <div className="hidden min-w-0 lg:block">
                <p className="truncate text-sm font-semibold">{p.name}</p>
                <p
                  className={cn(
                    "truncate text-xs",
                    active === i ? "text-white/70" : "text-muted-foreground"
                  )}
                >
                  {p.role}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Persona detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="rounded-2xl border-border/50">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold text-white",
                      personas[active].color
                    )}
                  >
                    {personas[active].emoji}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {personas[active].name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {personas[active].role}
                    </p>
                  </div>
                </div>

                {/* Pain point */}
                <div className="mt-6 rounded-xl bg-destructive/5 p-4">
                  <p className="text-xs font-semibold text-destructive uppercase">
                    Pain Point
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                    {personas[active].pain}
                  </p>
                </div>

                {/* Wants */}
                <div className="mt-6">
                  <p className="text-xs font-semibold text-muted-foreground uppercase">
                    Needs from AI Agent
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {personas[active].wants.map((w) => (
                      <li key={w} className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bond-navy/10">
                          <Check className="h-3 w-3 text-bond-navy" />
                        </div>
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          {w}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
