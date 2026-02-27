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
import type { DemoStep, PhaseApi } from "@/lib/prd-data";

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

const speakerConfig: Record<
  DemoStep["speaker"],
  { label: string; color: string; align: "left" | "right" | "center" }
> = {
  agent: {
    label: "AI Agent",
    color: "bg-bond-navy text-white",
    align: "left",
  },
  caller: {
    label: "Caller",
    color: "bg-white text-foreground border border-border/60",
    align: "right",
  },
  system: {
    label: "System",
    color: "bg-bond-gold/10 text-bond-gold border border-bond-gold/20",
    align: "center",
  },
  operator: {
    label: "Operator",
    color: "bg-white text-foreground border border-bond-navy/30",
    align: "right",
  },
};

const methodStyles: Record<string, string> = {
  GET: "bg-emerald-500/15 text-emerald-700 border-emerald-500/25",
  POST: "bg-blue-500/15 text-blue-700 border-blue-500/25",
  PUT: "bg-amber-500/15 text-amber-700 border-amber-500/25",
  PATCH: "bg-orange-500/15 text-orange-700 border-orange-500/25",
  DELETE: "bg-red-500/15 text-red-700 border-red-500/25",
};

function ApiReference({ apis }: { apis: PhaseApi[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center gap-3 rounded-2xl border border-emerald-600/15 bg-white px-5 py-4 text-left transition-all hover:border-emerald-600/30 hover:shadow-md"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600/10 text-sm">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-emerald-700"
          >
            <path
              d="M4 5.5L8 9.5L12 5.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transformOrigin: "8px 7.5px",
              }}
            />
          </svg>
        </span>
        <div className="min-w-0 flex-1">
          <span className="font-display text-sm font-bold text-emerald-800">
            API Endpoints
          </span>
          <span className="ml-2 text-xs text-muted-foreground">
            {apis.length} endpoint{apis.length !== 1 && "s"} powering this phase
          </span>
        </div>
        <Badge
          variant="outline"
          className="shrink-0 rounded-full border-emerald-600/20 bg-emerald-600/5 text-[10px] font-semibold text-emerald-700"
        >
          API
        </Badge>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-3 rounded-2xl border border-border/50 bg-white p-5">
              <div className="space-y-3">
                {apis.map((api, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className="rounded-xl border border-border/40 bg-white p-4 transition-all hover:border-border/80 hover:shadow-sm"
                  >
                    <div className="flex items-start gap-2.5">
                      <span
                        className={cn(
                          "mt-0.5 shrink-0 rounded-md border px-2 py-0.5 font-mono text-[10px] font-bold",
                          methodStyles[api.method],
                        )}
                      >
                        {api.method}
                      </span>
                      <div className="min-w-0 flex-1">
                        <code className="block break-all text-xs font-medium text-foreground/90">
                          {api.path}
                        </code>
                        <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                          {api.desc}
                        </p>
                        {api.params && api.params.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1">
                            {api.params.map((param) => (
                              <span
                                key={param}
                                className="rounded-md bg-muted/60 px-1.5 py-0.5 font-mono text-[9px] text-muted-foreground"
                              >
                                {param}
                              </span>
                            ))}
                          </div>
                        )}
                        {api.note && (
                          <div className="mt-2 flex items-center gap-1.5">
                            <span className="h-1 w-1 shrink-0 rounded-full bg-amber-500" />
                            <span className="text-[10px] font-medium text-amber-700">
                              {api.note}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-3 rounded-lg bg-muted/30 px-3 py-2">
                <p className="text-[10px] leading-relaxed text-muted-foreground">
                  All endpoints require API Key auth. Date format:{" "}
                  <code className="rounded bg-muted px-1 text-[10px]">
                    YYYY-MM-DD
                  </code>
                  . Pagination:{" "}
                  <code className="rounded bg-muted px-1 text-[10px]">
                    page
                  </code>
                  ,{" "}
                  <code className="rounded bg-muted px-1 text-[10px]">
                    itemsPerPage
                  </code>
                  ,{" "}
                  <code className="rounded bg-muted px-1 text-[10px]">
                    offset
                  </code>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DemoTranscript({
  demo,
}: {
  demo: (typeof featurePhases)[number]["demo"];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6 mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center gap-3 rounded-2xl border border-bond-navy/15 bg-white px-5 py-4 text-left transition-all hover:border-bond-navy/30 hover:shadow-md"
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bond-navy/10 text-sm">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-bond-navy"
          >
            <path
              d="M4 5.5L8 9.5L12 5.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn(
                "transition-transform duration-200 origin-center",
                isOpen && "translate-y-[-1px]",
              )}
              style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transformOrigin: "8px 7.5px",
              }}
            />
          </svg>
        </span>
        <div className="min-w-0 flex-1">
          <span className="font-display text-sm font-bold text-bond-navy-dark">
            See it in action
          </span>
          <span className="ml-2 text-xs text-muted-foreground">
            {demo.title}
          </span>
        </div>
        <Badge
          variant="outline"
          className="shrink-0 rounded-full border-bond-navy/20 bg-bond-navy/5 text-[10px] font-semibold text-bond-navy"
        >
          Demo
        </Badge>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-3 rounded-2xl border border-border/50 bg-white p-5">
              {/* Context banner */}
              <div className="mb-5 rounded-xl bg-bond-soft-bg px-4 py-3">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-bond-navy-dark">
                    Scenario:
                  </span>{" "}
                  {demo.context}
                </p>
              </div>

              {/* Transcript */}
              <div className="space-y-3">
                {demo.steps.map((step, i) => {
                  const config = speakerConfig[step.speaker];

                  if (step.speaker === "system") {
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03 }}
                        className="flex justify-center"
                      >
                        <div className="max-w-[90%] rounded-xl border border-dashed border-bond-gold/30 bg-bond-gold/5 px-4 py-2.5">
                          <div className="flex items-start gap-2">
                            <span className="mt-0.5 shrink-0 rounded-full bg-bond-gold/15 px-2 py-0.5 font-display text-[9px] font-bold tracking-wide text-bond-gold uppercase">
                              {step.annotation || "System"}
                            </span>
                          </div>
                          <p className="mt-1.5 whitespace-pre-line text-[11px] leading-relaxed text-muted-foreground">
                            {step.text}
                          </p>
                        </div>
                      </motion.div>
                    );
                  }

                  const isRight = config.align === "right";

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className={cn(
                        "flex",
                        isRight ? "justify-end" : "justify-start",
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[80%] rounded-2xl px-4 py-3",
                          step.speaker === "agent"
                            ? "rounded-bl-md bg-bond-navy text-white"
                            : step.speaker === "operator"
                              ? "rounded-br-md border border-bond-navy/20 bg-bond-navy/5 text-foreground"
                              : "rounded-br-md border border-border/60 bg-white text-foreground",
                        )}
                      >
                        <div className="mb-1 flex items-center gap-2">
                          <span
                            className={cn(
                              "font-display text-[10px] font-bold tracking-wide uppercase",
                              step.speaker === "agent"
                                ? "text-white/70"
                                : step.speaker === "operator"
                                  ? "text-bond-navy"
                                  : "text-muted-foreground",
                            )}
                          >
                            {step.speaker === "operator"
                              ? "Operator (Sarah)"
                              : config.label}
                          </span>
                          {step.annotation && (
                            <span
                              className={cn(
                                "rounded-full px-1.5 py-0.5 text-[9px] font-medium",
                                step.speaker === "agent"
                                  ? "bg-white/15 text-white/80"
                                  : "bg-bond-navy/10 text-bond-navy/70",
                              )}
                            >
                              {step.annotation}
                            </span>
                          )}
                        </div>
                        <p
                          className={cn(
                            "text-xs leading-relaxed",
                            step.speaker === "agent"
                              ? "text-white/90"
                              : "text-foreground",
                          )}
                        >
                          {step.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FeaturesSection() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <SectionWrapper id="features" muted>
      <SectionLabel>Features</SectionLabel>
      <SectionTitle>What we are building</SectionTitle>
      <SectionDescription>
        Five phases from schedule data & FAQs to Bond Agents — a managed
        ecosystem of AI teammates across the facility.
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
                : "bg-white text-muted-foreground hover:bg-white/80 border border-border/50",
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

          {/* Demo section */}
          <DemoTranscript demo={featurePhases[activePhase].demo} />

          {/* API endpoints */}
          {featurePhases[activePhase].apis &&
            featurePhases[activePhase].apis.length > 0 && (
              <ApiReference apis={featurePhases[activePhase].apis} />
            )}

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
                            priorityStyles[f.priority],
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
    </SectionWrapper>
  );
}
