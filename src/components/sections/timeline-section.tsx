"use client";

import { motion } from "framer-motion";
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
import { Calendar } from "lucide-react";

export function TimelineSection() {
  return (
    <SectionWrapper id="timeline" muted>
      <SectionLabel>Delivery Plan</SectionLabel>
      <SectionTitle>From kickoff to scale</SectionTitle>
      <SectionDescription>
        24-month phased rollout -- foundation and pilot, action-taking and
        scale, proactive intelligence, then Bond Agents.
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
                          <div
                            key={m.name}
                            className="relative flex gap-4 pb-5 last:pb-0"
                          >
                            {/* Vertical line */}
                            {i < phase.milestones.length - 1 && (
                              <div className="absolute left-[11px] top-7 h-[calc(100%-12px)] w-px bg-border" />
                            )}
                            {/* Dot */}
                            <div className="relative mt-1.5 h-[10px] w-[10px] shrink-0 rounded-full border-2 border-bond-navy bg-white ring-4 ring-white" />
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-semibold text-bond-gold uppercase">
                                  {m.time}
                                </span>
                              </div>
                              <h4 className="mt-0.5 text-sm font-semibold text-foreground">
                                {m.name}
                              </h4>
                              <p className="mt-0.5 text-xs text-muted-foreground">
                                {m.desc}
                              </p>
                            </div>
                          </div>
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
