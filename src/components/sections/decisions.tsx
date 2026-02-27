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
                    {d.status.includes("Blocking") ||
                    d.status === "Action Required" ? (
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
                          d.status.includes("Blocking") ||
                          d.status === "Action Required"
                            ? "border-orange-200 bg-orange-50 text-orange-700"
                            : d.status === "Ready to Start"
                              ? "border-green-200 bg-green-50 text-green-700"
                              : d.status === "Deferred"
                                ? "border-border bg-muted/50 text-muted-foreground"
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

      {/* Bottom-of-PRD easter egg */}
      <div className="mt-16 rounded-2xl border border-dashed border-bond-navy/20 bg-bond-soft-bg/50 p-8 text-center md:p-10">
        <p className="font-display text-xl font-semibold text-bond-navy md:text-2xl">
          Hey, you made it to the bottom!
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          You read the whole PRD. The AI front desk agent would be proud.
        </p>
      </div>
    </SectionWrapper>
  );
}
