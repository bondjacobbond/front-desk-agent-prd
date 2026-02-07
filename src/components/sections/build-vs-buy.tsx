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
import { vendors, evaluationCriteria } from "@/lib/prd-data";
import { Check, X, AlertCircle, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tierColors = {
  "Tier 1 - Recommended for Pilot": "bg-green-50 text-green-700 border-green-200",
  "Tier 1 - Long-term Best Option": "bg-blue-50 text-blue-700 border-blue-200",
  "Tier 2 - Monitor": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Tier 3 - Not Recommended": "bg-red-50 text-red-700 border-red-200",
  "Infrastructure Component": "bg-purple-50 text-purple-700 border-purple-200",
  "Build Accelerator": "bg-indigo-50 text-indigo-700 border-indigo-200",
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
      className={`inline-flex h-7 w-7 items-center justify-center rounded-md border text-xs font-bold ${getScoreColor(score)}`}
    >
      {score}
    </span>
  );
}

export function BuildVsBuySection() {
  const tier1Vendors = vendors.filter((v) => v.tier.includes("Tier 1"));
  const tier2Vendors = vendors.filter((v) => v.tier.includes("Tier 2"));
  const tier3Vendors = vendors.filter((v) => v.tier.includes("Tier 3"));
  const infrastructureVendors = vendors.filter((v) => v.tier.includes("Infrastructure") || v.tier.includes("Build Accelerator"));

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
                    <th className="text-center p-3 font-semibold text-foreground">Multi-Tenant</th>
                    <th className="text-center p-3 font-semibold text-foreground">Integration</th>
                    <th className="text-center p-3 font-semibold text-foreground">Actions</th>
                    <th className="text-center p-3 font-semibold text-foreground">Mass Update</th>
                    <th className="text-center p-3 font-semibold text-foreground">Time</th>
                    <th className="text-center p-3 font-semibold text-foreground">Cost</th>
                    <th className="text-center p-3 font-semibold text-foreground">Control</th>
                    <th className="text-center p-3 font-semibold text-bond-navy sticky right-0 bg-muted/50 z-10 border-l-2 border-r border-t border-b border-border min-w-[90px]">Total</th>
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
                      <td className={`text-center p-3 sticky right-0 z-10 border-l-2 border-r border-t border-b border-border min-w-[90px] ${idx % 2 === 0 ? "bg-muted/20" : "bg-white"}`}>
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
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="tier1">Tier 1</TabsTrigger>
          <TabsTrigger value="tier2">Tier 2</TabsTrigger>
          <TabsTrigger value="tier3">Tier 3</TabsTrigger>
          <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
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

        <TabsContent value="infrastructure" className="space-y-6">
          {infrastructureVendors.map((vendor, i) => (
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
              <span className="font-semibold text-foreground">Hybrid approach with parallel de-risking:</span>{" "}
              Own the data and business logic (Bond&apos;s moat), buy commodity infrastructure (voice, telephony), 
              and pilot the orchestration layer with Bland while building in parallel. The 60-day Bland pilot 
              produces real customer feedback while Bond builds the Agent API foundation that every future Bond Agent will run on.
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
                      "Policy Engine & Admin Config",
                      "Confidence Scoring",
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
                    Buy (Commodity)
                  </Badge>
                  <ul className="space-y-1.5">
                    {[
                      "Voice Infrastructure (ElevenLabs)",
                      "Telephony (Twilio)",
                      "Foundation LLM",
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
                    Pilot → Evaluate
                  </Badge>
                  <ul className="space-y-1.5">
                    {[
                      "Bland AI (60-day pilot)",
                      "1-2 facilities",
                      "Decision trigger at day 60",
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

function VendorCard({ vendor, index }: { vendor: typeof vendors[0]; index: number }) {
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
                className={`rounded-full text-[10px] font-semibold ${tierColors[vendor.tier as keyof typeof tierColors]}`}
              >
                {vendor.tier}
              </Badge>
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium text-muted-foreground">Score:</span>
                <span className="text-sm font-bold text-bond-navy">{vendor.score.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-4 p-3 rounded-lg bg-muted/30">
            <p className="text-xs font-semibold text-foreground mb-2">Pricing Model: {vendor.pricing.model}</p>
            <div className="space-y-1">
              {vendor.pricing.plans.map((plan) => (
                <div key={plan.name} className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">{plan.name}:</span>
                  <span className="font-medium text-foreground">
                    {plan.price} {plan.rate && `• ${plan.rate}`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths & Weaknesses */}
          <div className="grid gap-4 md:grid-cols-2 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Check className="h-4 w-4 text-green-600" />
                <h5 className="text-xs font-semibold text-foreground">Strengths</h5>
              </div>
              <ul className="space-y-1.5">
                {vendor.strengths.map((strength) => (
                  <li key={strength} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <div className="mt-1 h-1 w-1 shrink-0 rounded-full bg-green-600" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <X className="h-4 w-4 text-red-400" />
                <h5 className="text-xs font-semibold text-foreground">Weaknesses</h5>
              </div>
              <ul className="space-y-1.5">
                {vendor.weaknesses.map((weakness) => (
                  <li key={weakness} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <div className="mt-1 h-1 w-1 shrink-0 rounded-full bg-red-400" />
                    {weakness}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verdict */}
          <div className="pt-4 border-t border-border/50">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-4 w-4 text-bond-navy mt-0.5 shrink-0" />
              <div>
                <h5 className="text-xs font-semibold text-foreground mb-1">Verdict</h5>
                <p className="text-xs leading-relaxed text-muted-foreground">{vendor.verdict}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
