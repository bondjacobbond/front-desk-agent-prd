"use client";

import { motion } from "framer-motion";
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { risks } from "@/lib/prd-data";
import { cn } from "@/lib/utils";

const likelihoodColors: Record<string, string> = {
  Low: "bg-green-50 text-green-700",
  Medium: "bg-yellow-50 text-yellow-700",
  High: "bg-orange-50 text-orange-700",
};

const impactColors: Record<string, string> = {
  Medium: "bg-yellow-50 text-yellow-700",
  High: "bg-orange-50 text-orange-700",
  Critical: "bg-red-50 text-red-700",
};

export function RisksSection() {
  return (
    <SectionWrapper id="risks" muted>
      <SectionLabel>Risk Assessment</SectionLabel>
      <SectionTitle>Known risks and mitigations</SectionTitle>
      <SectionDescription>
        Every risk has a mitigation plan. The highest-impact risks are
        infrastructure downtime and data breach -- both are low-likelihood with
        strong safeguards.
      </SectionDescription>

      <div className="mt-10 space-y-3">
        {risks.map((r, i) => (
          <motion.div
            key={r.risk}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <Card className="rounded-2xl border-border/50 bg-white transition-all hover:shadow-md">
              <CardContent className="p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold text-foreground">
                      {r.risk}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {r.mitigation}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-[10px] font-bold",
                        likelihoodColors[r.likelihood],
                      )}
                    >
                      {r.likelihood}
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-[10px] font-bold",
                        impactColors[r.impact],
                      )}
                    >
                      {r.impact}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <span className="font-medium">Legend:</span>
        <div className="flex items-center gap-1.5">
          <span className="rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-bold text-green-700">
            Low
          </span>
          <span className="rounded-full bg-yellow-50 px-2 py-0.5 text-[10px] font-bold text-yellow-700">
            Medium
          </span>
          <span className="rounded-full bg-orange-50 px-2 py-0.5 text-[10px] font-bold text-orange-700">
            High
          </span>
          <span className="rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-700">
            Critical
          </span>
        </div>
        <span className="text-muted-foreground/60">
          First badge = likelihood, second = impact
        </span>
      </div>
    </SectionWrapper>
  );
}
