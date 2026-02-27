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
        <div className="flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap">
          {personas.map((p, i) => (
            <button
              key={p.name}
              onClick={() => setActive(i)}
              className={cn(
                "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-all",
                active === i
                  ? "bg-bond-navy text-white shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground",
              )}
            >
              {p.role}
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
              <CardContent className="px-6 pt-4 pb-6 md:px-8 md:pt-6 md:pb-8">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {personas[active].name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {personas[active].role}
                  </p>
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
