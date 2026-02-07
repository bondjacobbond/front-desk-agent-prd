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
import { featurePhases } from "@/lib/prd-data";

const priorityStyles: Record<string, string> = {
  P0: "bg-bond-navy text-white",
  P1: "bg-bond-navy/15 text-bond-navy",
  P2: "bg-bond-gold/15 text-bond-gold",
  P3: "bg-muted text-muted-foreground",
};

const sizeLabels: Record<string, string> = {
  S: "Small",
  M: "Medium",
  L: "Large",
};

export function FeaturesSection() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <SectionWrapper id="features" muted>
      <SectionLabel>Features</SectionLabel>
      <SectionTitle>What we are building</SectionTitle>
      <SectionDescription>
        A phased approach from intelligent answering through action-taking to
        proactive intelligence.
      </SectionDescription>

      {/* Phase tabs */}
      <div className="mt-10 flex flex-wrap gap-2">
        {featurePhases.map((phase, i) => (
          <button
            key={phase.phase}
            onClick={() => setActivePhase(i)}
            className={cn(
              "rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
              activePhase === i
                ? "bg-bond-navy text-white shadow-md shadow-bond-navy/20"
                : "bg-white text-muted-foreground hover:bg-white/80 border border-border/50"
            )}
          >
            <span className="font-display font-bold">{phase.phase}:</span>{" "}
            <span className="text-xs">{phase.title}</span>
          </button>
        ))}
      </div>

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
            <h3 className="font-display text-lg font-bold text-bond-navy-dark">
              {featurePhases[activePhase].subtitle}
            </h3>
            <Badge
              variant="outline"
              className="rounded-full border-bond-gold/30 bg-bond-gold/10 text-xs font-semibold text-bond-gold"
            >
              {featurePhases[activePhase].label}
            </Badge>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {featurePhases[activePhase].features.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Card className="h-full rounded-2xl border-border/50 bg-white transition-all hover:border-bond-navy/20 hover:shadow-md">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-display text-sm font-bold text-foreground">
                        {f.name}
                      </h4>
                      <div className="flex shrink-0 items-center gap-1.5">
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[10px] font-bold",
                            priorityStyles[f.priority]
                          )}
                        >
                          {f.priority}
                        </span>
                        <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                          {sizeLabels[f.size]}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {f.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Out of scope */}
      <div className="mt-10">
        <h3 className="font-display text-base font-bold text-muted-foreground">
          Out of scope (for now)
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "Outbound cold calling",
            "Video / in-app voice",
            "AI marketing content",
            "Referee scheduling",
            "League standings by voice",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-border/50 bg-white px-3 py-1.5 text-xs text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
