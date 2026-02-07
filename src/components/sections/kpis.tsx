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
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { kpiPhases } from "@/lib/prd-data";

export function KpiSection() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <SectionWrapper id="kpis">
      <SectionLabel>Success Metrics</SectionLabel>
      <SectionTitle>What does success look like?</SectionTitle>
      <SectionDescription>
        Clear, measurable targets across three phases -- from pilot validation
        through scaled maturity.
      </SectionDescription>

      {/* Phase selector */}
      <div className="mt-10 flex gap-2">
        {kpiPhases.map((phase, i) => (
          <button
            key={phase.phase}
            onClick={() => setActivePhase(i)}
            className={cn(
              "rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
              activePhase === i
                ? "bg-bond-navy text-white shadow-md shadow-bond-navy/20"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            <span className="font-display font-bold">{phase.phase}</span>
            <span className="ml-1.5 text-xs opacity-70">{phase.label}</span>
          </button>
        ))}
      </div>

      {/* Phase content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <div className="mb-4 flex items-center gap-3">
            <Badge
              variant="outline"
              className="rounded-full border-bond-gold/30 bg-bond-gold/10 text-xs font-semibold text-bond-gold"
            >
              {kpiPhases[activePhase].timeline}
            </Badge>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {kpiPhases[activePhase].metrics.map((m, i) => (
              <motion.div
                key={m.metric}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Card className="h-full rounded-2xl border-border/50 transition-all hover:border-bond-navy/20 hover:shadow-md">
                  <CardContent className="p-5">
                    <p className="font-display text-2xl font-bold text-bond-navy">
                      {m.target}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      {m.metric}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {m.how}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
