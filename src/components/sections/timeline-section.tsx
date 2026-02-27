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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { timeline } from "@/lib/prd-data";
import { Calendar, CheckCircle2, ChevronRight } from "lucide-react";

function MilestoneItem({
  milestone,
  isLast,
}: {
  milestone: (typeof timeline)[number]["milestones"][number];
  isLast: boolean;
}) {
  const [open, setOpen] = useState(false);
  const hasCriteria =
    "successCriteria" in milestone &&
    Array.isArray(milestone.successCriteria) &&
    milestone.successCriteria.length > 0;

  return (
    <div className="relative flex gap-4 pb-5 last:pb-0">
      {!isLast && (
        <div className="absolute left-[11px] top-7 h-[calc(100%-12px)] w-px bg-border" />
      )}
      <div className="relative mt-1.5 h-[10px] w-[10px] shrink-0 rounded-full border-2 border-bond-navy bg-white ring-4 ring-white" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold text-bond-gold uppercase">
            {milestone.time}
          </span>
        </div>

        {hasCriteria ? (
          <button
            onClick={() => setOpen((v) => !v)}
            className="mt-0.5 flex w-full items-start gap-1.5 text-left group"
          >
            <ChevronRight
              className={`mt-0.5 h-3.5 w-3.5 shrink-0 text-bond-navy/40 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
            />
            <div className="min-w-0">
              <h4 className="text-sm font-semibold text-foreground group-hover:text-bond-navy transition-colors">
                {milestone.name}
              </h4>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {milestone.desc}
              </p>
            </div>
          </button>
        ) : (
          <div className="mt-0.5">
            <h4 className="text-sm font-semibold text-foreground">
              {milestone.name}
            </h4>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {milestone.desc}
            </p>
          </div>
        )}

        <AnimatePresence initial={false}>
          {open && hasCriteria && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-2.5 ml-0.5 rounded-lg border border-green-200/60 bg-green-50/40 p-3">
                <p className="text-[10px] font-semibold text-green-800 uppercase tracking-wider mb-2">
                  Success Criteria
                </p>
                <ul className="space-y-1.5">
                  {(
                    milestone as { successCriteria: string[] }
                  ).successCriteria.map((criterion) => (
                    <li
                      key={criterion}
                      className="flex items-start gap-2 text-xs text-green-900/80"
                    >
                      <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-green-600" />
                      {criterion}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function TimelineSection() {
  return (
    <SectionWrapper id="timeline" muted>
      <SectionLabel>Delivery Plan</SectionLabel>
      <SectionTitle>From kickoff to scale</SectionTitle>
      <SectionDescription>
        24-month phased rollout — FAQ MVP first, then data-connected agent,
        proactive intelligence, and Bond Agents platform. Click any milestone to
        see its success criteria.
      </SectionDescription>

      <div className="mt-10 space-y-6">
        {timeline.map((phase, phaseIdx) => (
          <motion.div
            key={phase.phase}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: phaseIdx * 0.1 }}
          >
            <Card className="overflow-hidden rounded-2xl border-border/50">
              <CardContent className="p-0">
                {/* Phase header */}
                <div className="flex items-center gap-4 border-b border-border/50 bg-white px-6 py-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-bond-navy text-sm font-bold text-white">
                    {phaseIdx + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-base font-bold text-foreground">
                        {phase.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="rounded-full border-bond-gold/30 bg-bond-gold/10 text-[10px] font-semibold text-bond-gold"
                      >
                        {phase.months}
                      </Badge>
                    </div>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {phase.objective}
                    </p>
                  </div>
                </div>

                {/* Milestones */}
                <Accordion
                  type="single"
                  collapsible
                  defaultValue={phaseIdx === 0 ? "milestones" : undefined}
                >
                  <AccordionItem value="milestones" className="border-none">
                    <AccordionTrigger className="px-6 py-3 text-sm font-medium text-bond-navy hover:no-underline">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {phase.milestones.length} milestones
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5">
                      <div className="relative space-y-0">
                        {phase.milestones.map((m, i) => (
                          <MilestoneItem
                            key={m.name}
                            milestone={m}
                            isLast={i === phase.milestones.length - 1}
                          />
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
