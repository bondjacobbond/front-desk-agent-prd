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
import { openDecisions } from "@/lib/prd-data";
import { CircleDot, AlertCircle } from "lucide-react";

export function DecisionsSection() {
  return (
    <SectionWrapper id="decisions">
      <SectionLabel>Open Items</SectionLabel>
      <SectionTitle>Decisions that need resolution</SectionTitle>
      <SectionDescription>
        Key decisions awaiting stakeholder input. Each needs a clear owner and
        target resolution date.
      </SectionDescription>

      <div className="mt-10 space-y-3">
        {openDecisions.map((d, i) => (
          <motion.div
            key={d.issue}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <Card className="rounded-2xl border-border/50 transition-all hover:shadow-md">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {d.status === "High Priority" ? (
                      <AlertCircle className="h-5 w-5 text-orange-500" />
                    ) : (
                      <CircleDot className="h-5 w-5 text-bond-navy/40" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm font-semibold text-foreground">
                        {d.issue}
                      </h4>
                      <Badge
                        variant="outline"
                        className={`rounded-full text-[10px] font-bold ${
                          d.status === "High Priority"
                            ? "border-orange-200 bg-orange-50 text-orange-700"
                            : "border-border bg-muted text-muted-foreground"
                        }`}
                      >
                        {d.status}
                      </Badge>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {d.desc}
                    </p>
                    <p className="mt-2 text-[10px] font-medium text-bond-navy/50">
                      Owners: {d.owners}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Pilot gates */}
      <div className="mt-12">
        <h3 className="font-display text-xl font-bold text-bond-navy-dark">
          Pilot Success Gates
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card className="rounded-2xl border-border/50">
            <CardContent className="p-5">
              <Badge className="mb-3 rounded-full bg-bond-navy px-3 py-1 text-[10px] font-bold text-white">
                Day 30 — Functional Readiness
              </Badge>
              <ul className="space-y-2">
                {[
                  "Agent API live and stable",
                  "Voice routing operational",
                  "Admin UI supports 2+ templates",
                  "50 active calls per facility per week",
                  "Legal signoff in place",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bond-navy/30" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-border/50">
            <CardContent className="p-5">
              <Badge className="mb-3 rounded-full bg-bond-gold px-3 py-1 text-[10px] font-bold text-white">
                Day 60 — Business Readiness
              </Badge>
              <ul className="space-y-2">
                {[
                  "80% resolved calls",
                  "Escalation rate 15-25%",
                  "NPS ≥ 7 among operators",
                  "Zero critical booking/payment errors",
                  "TCO ≤ 50% of pilot price",
                  "Mass update ≤ 5 min for 90% of facilities",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bond-gold/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer / next steps */}
      <div className="mt-16 rounded-2xl bg-bond-navy-dark p-8 text-center text-white md:p-10">
        <h3 className="font-display text-2xl font-bold md:text-3xl">
          Next Steps
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/70">
          Finalize Agent API v1 spec. Publish pilot legal approach. Run 3-day
          engineering spike on mass-update prototype. Lock pilot facility list
          and get signed agreements. Book 60-day vendor review.
        </p>
        <div className="mx-auto mt-6 flex max-w-md flex-wrap justify-center gap-2">
          {[
            "Agent API v1 Spec",
            "Legal Approach",
            "Eng Spike",
            "Lock Pilot Facilities",
            "60-Day Review",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
