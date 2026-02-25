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
import { vendors, evaluationCriteria } from "@/lib/prd-data";
import { Check, X, AlertCircle, Star, ChevronDown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const tierColors: Record<string, string> = {
  "Tier 1 - Recommended for Pilot": "bg-green-50 text-green-700 border-green-200",
  "Tier 1 - Escalation Path / Scale Option (Demo Validated)": "bg-blue-50 text-blue-700 border-blue-200",
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
  const tier1Vendors = vendors.filter((v) => v.tier.includes("Tier 1"));
  const tier2Vendors = vendors.filter((v) => v.tier.includes("Tier 2"));
  const tier3Vendors = vendors.filter((v) => v.tier.includes("Tier 3"));
  return (
    <SectionWrapper id="build-vs-buy">
      <SectionLabel>Build vs. Buy Analysis</SectionLabel>
      <SectionTitle>Vendor evaluation & strategic recommendation</SectionTitle>
      <SectionDescription>
        Comprehensive evaluation of every vendor and approach considered for the AI Front Desk Agent. Each option assessed against Bond&apos;s requirements: voice-first delivery, multi-tenancy across 300+ facilities, deep Bond integration, mass configurability, and strategic control.
      </SectionDescription>

      {/* Evaluation Criteria */}
      <div className="mt-10">
        <h3 className="font-display text-lg font-bold text-bond-navy-dark mb-4">
          Evaluation Criteria (Weighted Scoring)
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {evaluationCriteria.map((criteria) => (
            <Card key={criteria.criterion} className="rounded-xl border-border/50">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-foreground">{criteria.criterion}</span>
                  <Badge variant="outline" className="rounded-full text-[10px] font-bold border-bond-navy/20 text-bond-navy">
                    {criteria.weight}%
                  </Badge>
                </div>
                <p className="text-[10px] leading-relaxed text-muted-foreground">{criteria.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Scoring Matrix */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-lg font-bold text-bond-navy-dark">
            Consolidated Scoring Matrix
          </h3>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-muted-foreground">Score:</span>
            <div className="flex items-center gap-1.5">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-green-300 bg-green-100 text-xs font-bold text-green-800">5</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-green-200 bg-green-50 text-xs font-bold text-green-700">4</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-yellow-200 bg-yellow-50 text-xs font-bold text-yellow-700">3</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-orange-200 bg-orange-50 text-xs font-bold text-orange-700">2</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-red-200 bg-red-50 text-xs font-bold text-red-700">1</span>
            </div>
          </div>
        </div>
        <Card className="rounded-2xl border-border/50 overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-separate border-spacing-0">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-foreground">Vendor</th>
                    <th className="text-center p-3 font-semibold text-foreground">Voice</th>
                    <th className="text-center p-3 font-semibold text-foreground">Email</th>
                    <th className="text-center p-3 font-semibold text-foreground">Text</th>
                    <th className="text-center p-3 font-semibold text-foreground">Multi-Tenant</th>
                    <th className="text-center p-3 font-semibold text-foreground">Integration</th>
                    <th className="text-center p-3 font-semibold text-foreground">Actions</th>
                    <th className="text-center p-3 font-semibold text-foreground">Mass Update</th>
                    <th className="text-center p-3 font-semibold text-foreground">Time</th>
                    <th className="text-center p-3 font-semibold text-foreground">Cost</th>
                    <th className="text-center p-3 font-semibold text-foreground">Control</th>
                    <th className="text-center p-3 font-semibold text-bond-navy sticky right-0 z-10 min-w-[100px] border-l-2 border-border bg-muted shadow-[inset_4px_0_6px_-2px_rgba(0,0,0,0.08)]">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {vendors.map((vendor, idx) => (
                    <tr key={vendor.name} className={idx % 2 === 0 ? "bg-muted/20" : ""}>
                      <td className="p-3 font-medium text-foreground">{vendor.name}</td>
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
                      <td className={`text-center p-3 sticky right-0 z-10 min-w-[100px] border-l-2 border-border shadow-[inset_4px_0_6px_-2px_rgba(0,0,0,0.08)] ${idx % 2 === 0 ? "bg-muted" : "bg-white"}`}>
                        <ScoreBox score={vendor.score} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Vendor Cards by Tier */}
      <Tabs defaultValue="tier1" className="mt-10">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="tier1">Tier 1</TabsTrigger>
          <TabsTrigger value="tier2">Tier 2</TabsTrigger>
          <TabsTrigger value="tier3">Tier 3</TabsTrigger>
        </TabsList>

        <TabsContent value="tier1" className="space-y-6">
          {tier1Vendors.map((vendor, i) => (
            <VendorCard key={vendor.name} vendor={vendor} index={i} />
          ))}
        </TabsContent>

        <TabsContent value="tier2" className="space-y-6">
          {tier2Vendors.map((vendor, i) => (
            <VendorCard key={vendor.name} vendor={vendor} index={i} />
          ))}
        </TabsContent>

        <TabsContent value="tier3" className="space-y-6">
          {tier3Vendors.map((vendor, i) => (
            <VendorCard key={vendor.name} vendor={vendor} index={i} />
          ))}
        </TabsContent>
      </Tabs>

      {/* Strategic Recommendation */}
      <div className="mt-12 space-y-6">
        <Card className="rounded-2xl border-2 border-bond-navy/20 bg-gradient-to-br from-bond-navy/[0.03] to-transparent">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Star className="h-6 w-6 text-bond-gold" />
              <h3 className="font-display text-xl font-bold text-bond-navy-dark">
                Strategic Recommendation
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground mb-2">
              <span className="font-semibold text-foreground">Architect for replaceability. Then pick the fastest path to an amazing product.</span>{" "}
              The voice AI market is commoditizing fast — Bland won&apos;t be this unique in 12 months.
              Whichever vendor powers the voice layer today, Bond must be able to swap it behind the scenes
              without a customer noticing. The real question is: what gets the best product in front of
              facilities fastest so Bond can take the lead?
            </p>

            {/* The Non-Negotiable */}
            <div className="mt-6 mb-6 rounded-xl border-2 border-bond-navy/15 bg-bond-navy/[0.03] p-4 sm:p-5">
              <h4 className="text-sm font-bold text-bond-navy-dark mb-3">The non-negotiable: vendor-agnostic architecture</h4>
              <p className="text-xs leading-relaxed text-muted-foreground mb-3">
                Regardless of which voice platform is chosen, Bond&apos;s Intelligence Layer (Agent API, orchestration,
                multi-location config, monitoring) must sit above the vendor as an abstraction. This is Bond&apos;s moat — and
                it&apos;s what makes the voice platform a replaceable commodity in 12 months when the market catches up.
              </p>
              <div className="grid gap-3 sm:grid-cols-4">
                {[
                  { label: "Agent API", detail: "Bond-owned business logic" },
                  { label: "Orchestration", detail: "Conversation flows & routing" },
                  { label: "Multi-Location Config", detail: "Per-facility knowledge & policies" },
                  { label: "Monitoring & QA", detail: "Call dashboard & alerting" },
                ].map((item) => (
                  <div key={item.label} className="rounded-lg bg-white/60 border border-bond-navy/10 p-3">
                    <p className="text-xs font-semibold text-bond-navy-dark">{item.label}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{item.detail}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-muted-foreground mt-3">
                Bond builds these regardless of vendor choice. This is the same work either way — the voice platform
                decision only affects what sits underneath.
              </p>
            </div>

            {/* Two Viable Paths */}
            <h4 className="text-sm font-bold text-foreground mb-4">Two viable paths — different tradeoffs</h4>
            <div className="grid gap-4 md:grid-cols-2 mb-6">
              {/* Path A: Bland */}
              <div className="rounded-xl border border-blue-200 bg-blue-50/40 p-4 sm:p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                      A
                    </div>
                    <span className="text-sm font-bold text-blue-900">Bland: Speed to Market</span>
                  </div>
                  <Badge variant="outline" className="rounded-full text-[10px] font-semibold border-blue-300 text-blue-700 bg-blue-50">
                    Fastest
                  </Badge>
                </div>
                <div className="space-y-3.5">
                  {[
                    { label: "Thesis", value: "Best product fastest wins", detail: "Pay a premium in year 1 for production-quality voice from day one. Bland's 3 years of tuning, managed services, and Conversational Pathways get Bond to market while competitors are still building." },
                    { label: "Time to live pilot", value: "~2-3 months", detail: "Bland's managed services team handles voice tuning and production hardening. Bond focuses on the Agent API and multi-location config." },
                    { label: "Year-1 cost", value: "$150K+ (negotiable)", detail: "$100K platform + $50K managed services + $0.30/min usage. Matt believes this is negotiable — needs to be tested with a counter-offer." },
                    { label: "Risk", value: "Coupling to Conversational Pathways", detail: "Bland's flow builder is proprietary. Bond must ensure orchestration logic lives in Bond's layer, not Bland's, to preserve replaceability." },
                    { label: "12-month view", value: "Swap vendor, keep customers", detail: "Market commoditizes. Bond renegotiates or migrates to a cheaper platform. Customers never notice because Bond owns the interface." },
                  ].map((row) => (
                    <div key={row.label} className="border-b border-blue-100 pb-3 last:border-0 last:pb-0">
                      <p className="text-[11px] font-medium text-blue-800 mb-0.5">{row.label}</p>
                      <p className="text-sm font-bold text-blue-950">{row.value}</p>
                      <p className="text-[11px] leading-relaxed text-blue-800 mt-0.5">{row.detail}</p>
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
                    <span className="text-sm font-bold text-green-900">ElevenLabs: Cost Efficiency</span>
                  </div>
                  <Badge variant="outline" className="rounded-full text-[10px] font-semibold border-green-300 text-green-700 bg-green-50">
                    Cheapest
                  </Badge>
                </div>
                <div className="space-y-3.5">
                  {[
                    { label: "Thesis", value: "Prove demand before committing", detail: "Validate product-market fit at near-zero platform cost. Prototype already works (Palm Beach Skate Zone, Feb 2026). If facilities don't adopt, Bond learns cheaply." },
                    { label: "Time to live pilot", value: "~4-6 months", detail: "Bond builds more of the orchestration stack. ElevenLabs provides voice/workflows/RAG, but Bond must handle production hardening, monitoring, and QA internally." },
                    { label: "Year-1 cost", value: "~$55-60/mo usage + eng time", detail: "$0.09-0.10/min with no minimums. Engineering investment ($300-500K) is the real cost, but that builds Bond's moat regardless." },
                    { label: "Risk", value: "Underestimating production complexity", detail: "Gap between 'demo that works' and 'production agent at scale' is significant. No managed services team — Bond must build its own QA and monitoring practice." },
                    { label: "12-month view", value: "Deep ownership, flexible options", detail: "Bond owns the full stack. Can stay on ElevenLabs (costs drop as plans scale), switch to Bland if quality demands it, or migrate to whatever's best." },
                  ].map((row) => (
                    <div key={row.label} className="border-b border-green-100 pb-3 last:border-0 last:pb-0">
                      <p className="text-[11px] font-medium text-green-800 mb-0.5">{row.label}</p>
                      <p className="text-sm font-bold text-green-950">{row.value}</p>
                      <p className="text-[11px] leading-relaxed text-green-800 mt-0.5">{row.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The deciding question */}
            <div className="rounded-xl bg-muted/40 border border-border/50 p-4 sm:p-5">
              <h4 className="text-sm font-bold text-foreground mb-2">The deciding question</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Does Bland get Bond to an amazing product materially faster?</span>{" "}
                Both paths require Bond to build the Agent API, multi-location config, admin UI, and monitoring layer — that
                work is identical. Bland&apos;s advantage is production-quality voice from day one and managed
                services that handle tuning. ElevenLabs&apos; advantage is zero commitment and a prototype that already works.
                If the time delta is 2-3 months and Bland&apos;s $150K can be negotiated down, Path A may be worth the premium
                for first-mover advantage. If the delta is small because Bond&apos;s build work is the bottleneck either way,
                Path B is the rational choice.
              </p>
              <div className="mt-3 flex flex-col sm:flex-row gap-2 text-[11px]">
                <div className="rounded-lg bg-white/80 border border-border/50 px-3 py-2 flex-1">
                  <span className="font-semibold text-foreground">Next step:</span>{" "}
                  <span className="text-muted-foreground">Negotiate with Bland — test whether $150K is actually the floor, or if a reduced pilot deal is possible.</span>
                </div>
                <div className="rounded-lg bg-white/80 border border-border/50 px-3 py-2 flex-1">
                  <span className="font-semibold text-foreground">Parallel:</span>{" "}
                  <span className="text-muted-foreground">Continue ElevenLabs prototype development so Bond has a working fallback regardless of Bland negotiation outcome.</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}

const PREVIEW_COUNT = 3;

function ExpandableList({
  items,
  icon,
  iconColor,
  dotColor,
  label,
}: {
  items: string[];
  icon: React.ReactNode;
  iconColor: string;
  dotColor: string;
  label: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = items.length > PREVIEW_COUNT;
  const visible = expanded ? items : items.slice(0, PREVIEW_COUNT);
  const remaining = items.length - PREVIEW_COUNT;

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h5 className="text-xs font-semibold text-foreground">
          {label}
          <span className="ml-1.5 font-normal text-muted-foreground">({items.length})</span>
        </h5>
      </div>
      <ul className="space-y-1.5">
        {visible.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
            <div className={cn("mt-1 h-1 w-1 shrink-0 rounded-full", dotColor)} />
            {item}
          </li>
        ))}
      </ul>
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 flex items-center gap-1 text-[11px] font-medium text-bond-navy hover:text-bond-navy-dark transition-colors"
        >
          <ChevronDown className={cn("h-3 w-3 transition-transform", expanded && "rotate-180")} />
          {expanded ? "Show less" : `Show ${remaining} more`}
        </button>
      )}
    </div>
  );
}

function VendorCard({ vendor, index }: { vendor: typeof vendors[0]; index: number }) {
  const [showPricing, setShowPricing] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="rounded-2xl border-border/50 transition-all hover:shadow-md">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="font-display text-lg font-bold text-foreground">{vendor.name}</h4>
              <p className="text-xs text-muted-foreground mt-0.5">{vendor.category}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <Badge
                variant="outline"
                className={`rounded-full text-[10px] font-semibold ${tierColors[vendor.tier] ?? "bg-gray-50 text-gray-700 border-gray-200"}`}
              >
                {vendor.tier}
              </Badge>
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium text-muted-foreground">Score:</span>
                <span className="text-sm font-bold text-bond-navy">{vendor.score.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Verdict (promoted to top — most important context) */}
          <div className="mb-4 p-3 rounded-lg bg-bond-navy/[0.03] border border-bond-navy/10">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-bond-navy mt-0.5 shrink-0" />
              <div>
                <h5 className="text-xs font-semibold text-foreground mb-1">Verdict</h5>
                <p className="text-xs leading-relaxed text-muted-foreground">{vendor.verdict}</p>
              </div>
            </div>
          </div>

          {/* Pricing (collapsible) */}
          <div className="mb-4">
            <button
              onClick={() => setShowPricing(!showPricing)}
              className="flex items-center gap-2 text-xs font-semibold text-foreground hover:text-bond-navy transition-colors w-full"
            >
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform text-muted-foreground", showPricing && "rotate-180")} />
              Pricing: {vendor.pricing.model}
            </button>
            <AnimatePresence>
              {showPricing && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 p-3 rounded-lg bg-muted/30 space-y-1">
                    {vendor.pricing.plans.map((plan) => (
                      <div key={plan.name} className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{plan.name}:</span>
                        <span className="font-medium text-foreground">
                          {plan.price} {plan.rate && `• ${plan.rate}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Strengths & Weaknesses */}
          <div className="grid gap-4 md:grid-cols-2">
            <ExpandableList
              items={vendor.strengths}
              icon={<Check className="h-4 w-4 text-green-600" />}
              iconColor="text-green-600"
              dotColor="bg-green-600"
              label="Strengths"
            />
            <ExpandableList
              items={vendor.weaknesses}
              icon={<X className="h-4 w-4 text-red-400" />}
              iconColor="text-red-400"
              dotColor="bg-red-400"
              label="Weaknesses"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
