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
              <span className="font-semibold text-foreground">Build on ElevenLabs, prove demand cheaply, keep Bland as escalation path.</span>{" "}
              ElevenLabs provides voice, workflows, knowledge bases, and analytics at $0.09-0.10/min with no minimum commitment.
              Bond builds the orchestration layer and Agent API (the real moat) on top. Pilot at 3 facilities for near-zero
              platform cost. If production quality gaps emerge, Bland&apos;s managed services become the answer — and Bond
              negotiates from strength with real call data. Either way, Bond owns the intelligence layer.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="rounded-xl border-border/50">
                <CardContent className="p-5">
                  <Badge
                    variant="outline"
                    className="mb-3 rounded-full border-bond-navy/20 text-xs font-semibold text-bond-navy"
                  >
                    Build (Bond&apos;s Moat)
                  </Badge>
                  <ul className="space-y-1.5">
                    {[
                      "Agent API & Business Logic",
                      "Orchestration & Conversation Flows",
                      "Multi-Location Config & Admin",
                      "Call Dashboard & Monitoring",
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
              <Card className="rounded-xl border-border/50">
                <CardContent className="p-5">
                  <Badge
                    variant="outline"
                    className="mb-3 rounded-full border-bond-gold/20 text-xs font-semibold text-bond-gold"
                  >
                    ElevenLabs (Foundation)
                  </Badge>
                  <ul className="space-y-1.5">
                    {[
                      "Voice Quality & TTS/STT",
                      "Workflow Engine & RAG",
                      "Custom Tools (webhooks)",
                      "$0.09/min, no minimums",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bond-gold/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="rounded-xl border-border/50">
                <CardContent className="p-5">
                  <Badge
                    variant="outline"
                    className="mb-3 rounded-full border-bond-navy-light/20 text-xs font-semibold text-bond-navy-light"
                  >
                    Bland (Escalation Path)
                  </Badge>
                  <ul className="space-y-1.5">
                    {[
                      "If quality gaps can't be closed",
                      "Managed production-hardening",
                      "Negotiate with real pilot data",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bond-navy-light/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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
