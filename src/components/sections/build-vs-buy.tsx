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
import { vendors } from "@/lib/prd-data";
import { Star } from "lucide-react";

const tierColors: Record<string, string> = {
  "Tier 1 - Pilot Option (Cost Efficiency)":
    "bg-green-50 text-green-700 border-green-200",
  "Tier 1 - Pilot Option (Speed to Market)":
    "bg-blue-50 text-blue-700 border-blue-200",
  "Tier 2 - Monitor": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Tier 3 - Not Recommended": "bg-red-50 text-red-700 border-red-200",
};

function ScoreBox({ score }: { score: number | null }) {
  if (score === null) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-muted text-xs font-semibold text-muted-foreground">
        —
      </span>
    );
  }

  const getScoreColor = (s: number) => {
    if (s >= 4.5) return "bg-green-100 text-green-800 border-green-300";
    if (s >= 4) return "bg-green-50 text-green-700 border-green-200";
    if (s >= 3) return "bg-yellow-50 text-yellow-700 border-yellow-200";
    if (s >= 2) return "bg-orange-50 text-orange-700 border-orange-200";
    return "bg-red-50 text-red-700 border-red-200";
  };

  return (
    <span
      className={`inline-flex h-7 min-w-7 items-center justify-center rounded-md border px-1.5 text-xs font-bold ${getScoreColor(score)}`}
    >
      {score}
    </span>
  );
}

export function BuildVsBuySection() {
  return (
    <SectionWrapper id="build-vs-buy">
      <SectionLabel>Build vs. Buy Analysis</SectionLabel>
      <SectionTitle>Vendor evaluation & strategic recommendation</SectionTitle>
      <SectionDescription>
        Every vendor assessed against Bond&apos;s requirements: voice-first
        delivery, multi-tenancy at 300+ facilities, deep integration, and
        strategic control.
      </SectionDescription>

      {/* Scoring Matrix */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-lg font-bold text-bond-navy-dark">
            Scoring Matrix
          </h3>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-muted-foreground">Score:</span>
            <div className="flex items-center gap-1.5">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-green-300 bg-green-100 text-xs font-bold text-green-800">
                5
              </span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-green-200 bg-green-50 text-xs font-bold text-green-700">
                4
              </span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-yellow-200 bg-yellow-50 text-xs font-bold text-yellow-700">
                3
              </span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-orange-200 bg-orange-50 text-xs font-bold text-orange-700">
                2
              </span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-red-200 bg-red-50 text-xs font-bold text-red-700">
                1
              </span>
            </div>
          </div>
        </div>
        <Card className="rounded-2xl border-border/50 overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-separate border-spacing-0">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground">
                      Vendor
                    </th>
                    <th className="text-center p-3 font-semibold text-foreground">
                      Voice
                    </th>
                    <th className="text-center p-3 font-semibold text-foreground">
                      Email
                    </th>
                    <th className="text-center p-3 font-semibold text-foreground">
                      Text
                    </th>
                    <th className="text-center p-3 font-semibold text-foreground">
                      Multi-Tenant
                    </th>
                    <th className="text-center p-3 font-semibold text-foreground">
                      Integration
                    </th>
                    <th className="text-center p-3 font-semibold text-foreground">
                      Actions
                    </th>
                    <th className="text-center p-3 font-semibold text-foreground">
                      Mass Update
                    </th>
                    <th className="text-center p-3 font-semibold text-foreground">
                      Time
                    </th>
                    <th className="text-center p-3 font-semibold text-foreground">
                      Cost
                    </th>
                    <th className="text-center p-3 font-semibold text-foreground">
                      Control
                    </th>
                    <th className="text-center p-3 font-semibold text-bond-navy sticky right-0 z-10 min-w-[100px] border-l-2 border-border bg-muted shadow-[inset_4px_0_6px_-2px_rgba(0,0,0,0.08)]">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor, idx) => (
                    <tr
                      key={vendor.name}
                      className={idx % 2 === 0 ? "bg-muted/20" : ""}
                    >
                      <td className="p-3 font-medium text-foreground">
                        {vendor.name}
                      </td>
                      <td className="text-center p-3">
                        <ScoreBox score={vendor.scores.voice} />
                      </td>
                      <td className="text-center p-3">
                        <ScoreBox score={vendor.scores.email} />
                      </td>
                      <td className="text-center p-3">
                        <ScoreBox score={vendor.scores.text} />
                      </td>
                      <td className="text-center p-3">
                        <ScoreBox score={vendor.scores.multiTenancy} />
                      </td>
                      <td className="text-center p-3">
                        <ScoreBox score={vendor.scores.integration} />
                      </td>
                      <td className="text-center p-3">
                        <ScoreBox score={vendor.scores.actionTaking} />
                      </td>
                      <td className="text-center p-3">
                        <ScoreBox score={vendor.scores.massUpdate} />
                      </td>
                      <td className="text-center p-3">
                        <ScoreBox score={vendor.scores.timeToProd} />
                      </td>
                      <td className="text-center p-3">
                        <ScoreBox score={vendor.scores.costModel} />
                      </td>
                      <td className="text-center p-3">
                        <ScoreBox score={vendor.scores.strategicControl} />
                      </td>
                      <td
                        className={`text-center p-3 sticky right-0 z-10 min-w-[100px] border-l-2 border-border shadow-[inset_4px_0_6px_-2px_rgba(0,0,0,0.08)] ${idx % 2 === 0 ? "bg-muted" : "bg-white"}`}
                      >
                        <ScoreBox score={vendor.score} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Compact verdicts */}
        <div className="mt-4 space-y-2">
          {vendors.map((vendor, i) => (
            <motion.div
              key={vendor.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-xl border border-border/50 bg-white p-3"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-bold text-foreground">
                  {vendor.name}
                </span>
                <ScoreBox score={vendor.score} />
                <Badge
                  variant="outline"
                  className={`rounded-full text-[10px] font-semibold ${tierColors[vendor.tier] ?? "bg-gray-50 text-gray-700 border-gray-200"}`}
                >
                  {vendor.tier.replace(/Tier \d+ - /, "")}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
                {vendor.verdict.split(".").slice(0, 2).join(".") + "."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Strategic Recommendation */}
      <div className="mt-12">
        <Card className="rounded-2xl border-2 border-bond-navy/20 bg-gradient-to-br from-bond-navy/[0.03] to-transparent">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-6 w-6 text-bond-gold" />
              <h3 className="font-display text-xl font-bold text-bond-navy-dark">
                Strategic Recommendation
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground mb-6">
              <span className="font-semibold text-foreground">
                Both vendors are viable pilot options. Bond builds the same API
                and admin portal either way.
              </span>{" "}
              The voice AI market is commoditizing fast — the real moat is
              Bond&apos;s data and actions layer. Architect the system so the
              voice vendor is swappable behind the scenes. The pilot decision
              comes down to speed vs. cost, and both paths can win.
            </p>

            {/* Two Viable Paths */}
            <h4 className="text-sm font-bold text-foreground mb-4">
              Two pilot options — different tradeoffs
            </h4>
            <div className="grid gap-4 md:grid-cols-2 mb-6">
              {/* Path A: Bland */}
              <div className="rounded-xl border border-blue-200 bg-blue-50/40 p-4 sm:p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                      A
                    </div>
                    <span className="text-sm font-bold text-blue-900">
                      Bland: Speed to Market
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className="rounded-full text-[10px] font-semibold border-blue-300 text-blue-700 bg-blue-50"
                  >
                    Fastest
                  </Badge>
                </div>
                <div className="space-y-3.5">
                  {[
                    {
                      label: "Thesis",
                      value: "Best product fastest wins",
                      detail:
                        "Pay a premium in year 1 for production-quality voice. Bland's 3 years of tuning get Bond to market while competitors are still building.",
                    },
                    {
                      label: "Time to pilot",
                      value: "~2-3 months",
                      detail:
                        "Bland's managed services handle voice + orchestration. Bond builds API endpoints and admin portal.",
                    },
                    {
                      label: "Year-1 cost",
                      value: "$150K+ (negotiable)",
                      detail:
                        "$100K/yr platform + $50K one-time setup/managed services + $0.30/min usage. Needs counter-offer.",
                    },
                    {
                      label: "Risk",
                      value: "Coupling to proprietary flows",
                      detail:
                        "Keep orchestration logic in Bond's layer, not Bland's.",
                    },
                    {
                      label: "12-month view",
                      value: "Swap vendor, keep customers",
                      detail:
                        "Market commoditizes. Bond migrates to cheaper platform.",
                    },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="border-b border-blue-100 pb-3 last:border-0 last:pb-0"
                    >
                      <p className="text-[11px] font-medium text-blue-800 mb-0.5">
                        {row.label}
                      </p>
                      <p className="text-sm font-bold text-blue-950">
                        {row.value}
                      </p>
                      <p className="text-[11px] leading-relaxed text-blue-800 mt-0.5">
                        {row.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Path B: ElevenLabs */}
              <div className="rounded-xl border border-green-200 bg-green-50/40 p-4 sm:p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700 text-xs font-bold">
                      B
                    </div>
                    <span className="text-sm font-bold text-green-900">
                      ElevenLabs: Cost Efficiency
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className="rounded-full text-[10px] font-semibold border-green-300 text-green-700 bg-green-50"
                  >
                    Cheapest
                  </Badge>
                </div>
                <div className="space-y-3.5">
                  {[
                    {
                      label: "Thesis",
                      value: "Prove demand before committing",
                      detail:
                        "Prototype already works (Palm Beach, Feb 2026). Near-zero platform cost to validate.",
                    },
                    {
                      label: "Time to pilot",
                      value: "~4-6 months",
                      detail:
                        "Bond configures ElevenLabs workflows + builds API endpoints. No managed services — Bond handles QA.",
                    },
                    {
                      label: "Year-1 cost",
                      value: "~$55-60/mo + eng time",
                      detail:
                        "$0.09/min, no minimums. $300-500K eng investment builds the moat.",
                    },
                    {
                      label: "Risk",
                      value: "Production complexity",
                      detail:
                        "Gap between demo and production at scale. Bond builds own monitoring.",
                    },
                    {
                      label: "12-month view",
                      value: "Deep ownership, flexible",
                      detail:
                        "Bond owns the full stack. Stay, switch, or migrate freely.",
                    },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="border-b border-green-100 pb-3 last:border-0 last:pb-0"
                    >
                      <p className="text-[11px] font-medium text-green-800 mb-0.5">
                        {row.label}
                      </p>
                      <p className="text-sm font-bold text-green-950">
                        {row.value}
                      </p>
                      <p className="text-[11px] leading-relaxed text-green-800 mt-0.5">
                        {row.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The deciding question */}
            <div className="rounded-xl bg-muted/40 border border-border/50 p-4 sm:p-5">
              <h4 className="text-sm font-bold text-foreground mb-2">
                The deciding question
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Does Bland get Bond to an amazing product materially faster?
                </span>{" "}
                Bond builds the same API endpoints and admin portal either way.
                The delta is whether Bland&apos;s managed orchestration and
                production tuning shave enough time to justify the cost.
              </p>
              <div className="mt-3 flex flex-col sm:flex-row gap-2 text-[11px]">
                <div className="rounded-lg bg-white/80 border border-border/50 px-3 py-2 flex-1">
                  <span className="font-semibold text-foreground">
                    Next step:
                  </span>{" "}
                  <span className="text-muted-foreground">
                    Negotiate with Bland — test whether $150K is the floor.
                  </span>
                </div>
                <div className="rounded-lg bg-white/80 border border-border/50 px-3 py-2 flex-1">
                  <span className="font-semibold text-foreground">
                    Parallel:
                  </span>{" "}
                  <span className="text-muted-foreground">
                    Continue ElevenLabs prototype as fallback.
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
