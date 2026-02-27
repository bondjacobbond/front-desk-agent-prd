"use client";

import { useState, useMemo } from "react";
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
  Check,
  X,
  TrendingUp,
  AlertTriangle,
  SlidersHorizontal,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pricingModel, rampModel } from "@/lib/prd-data";

function PricingModelCard({
  model,
}: {
  model: typeof pricingModel.models.fixed | typeof pricingModel.models.usage;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-1 mb-1">
        <span className="font-display text-3xl font-bold text-bond-navy">
          {model.price}
        </span>
        <span className="text-sm text-muted-foreground">{model.period}</span>
      </div>
      <p className="text-xs text-muted-foreground mb-5">{model.rationale}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <Check className="h-3.5 w-3.5 text-green-600" />
            <span className="text-xs font-semibold text-foreground">Pros</span>
          </div>
          <ul className="space-y-1.5">
            {model.pros.map((pro) => (
              <li
                key={pro}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <div className="mt-1 h-1 w-1 shrink-0 rounded-full bg-green-600" />
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-1.5 mb-2">
            <X className="h-3.5 w-3.5 text-red-400" />
            <span className="text-xs font-semibold text-foreground">Cons</span>
          </div>
          <ul className="space-y-1.5">
            {model.cons.map((con) => (
              <li
                key={con}
                className="flex items-start gap-2 text-xs text-muted-foreground"
              >
                <div className="mt-1 h-1 w-1 shrink-0 rounded-full bg-red-400" />
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const DEFAULTS = {
  callMinutes: pricingModel.assumptions.callMinutesPerFacility,
  resolutionRate: pricingModel.assumptions.resolutionRate,
  aiCostPerMinute: pricingModel.assumptions.aiCostPerMinute,
  avgCallDuration: pricingModel.assumptions.avgCallDuration,
  facilities: rampModel.years.map((y) => y.agentFacilities),
  totalBases: rampModel.years.map((y) => y.totalBase),
  flatFeePerMonth: 399,
  platformFeePerMonth: pricingModel.models.usage.platformFee ?? 149,
  perResolutionCost: pricingModel.models.usage.perResolution ?? 1,
};

function SliderInput({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-muted-foreground">
          {label}
        </label>
        <span className="font-display text-sm font-bold text-bond-navy">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-bond-navy/15 accent-bond-navy [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-bond-navy [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:shadow-md"
      />
      <div className="flex justify-between text-[10px] text-muted-foreground/60">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n)}`;
}

export function PricingSection() {
  const [callMinutes, setCallMinutes] = useState(DEFAULTS.callMinutes);
  const [resolutionRate, setResolutionRate] = useState(DEFAULTS.resolutionRate);
  const [y1Facilities, setY1Facilities] = useState(DEFAULTS.facilities[0]);
  const [y2Facilities, setY2Facilities] = useState(DEFAULTS.facilities[1]);
  const [y3Facilities, setY3Facilities] = useState(DEFAULTS.facilities[2]);
  const [flatFeePerMonth, setFlatFeePerMonth] = useState(
    DEFAULTS.flatFeePerMonth,
  );
  const [platformFeePerMonth, setPlatformFeePerMonth] = useState(
    DEFAULTS.platformFeePerMonth,
  );
  const [perResolutionCost, setPerResolutionCost] = useState(
    DEFAULTS.perResolutionCost,
  );
  const [aiCostPerMinute, setAiCostPerMinute] = useState(
    DEFAULTS.aiCostPerMinute,
  );

  const derived = useMemo(() => {
    const avgDuration = DEFAULTS.avgCallDuration;
    const calls = Math.round(callMinutes / avgDuration);
    const resolutions = Math.round(calls * resolutionRate);
    const aiCost = callMinutes * aiCostPerMinute;
    const usageMonthly = platformFeePerMonth + resolutions * perResolutionCost;

    const facilities = [y1Facilities, y2Facilities, y3Facilities];

    const years = rampModel.years.map((y, i) => {
      const fac = facilities[i];
      const totalBase = DEFAULTS.totalBases[i];
      const adoptionPct = Math.round((fac / totalBase) * 100);
      const fixedArr = fac * flatFeePerMonth * 12;
      const usageArr = fac * usageMonthly * 12;
      const totalAiCost = fac * aiCost * 12;
      const fixedMargin = fixedArr - totalAiCost;
      const usageMargin = usageArr - totalAiCost;

      return {
        ...y,
        agentFacilities: fac,
        adoptionPct,
        fixedArr,
        usageArr,
        totalAiCost,
        fixedMargin,
        usageMargin,
      };
    });

    const maxArr = Math.max(...years.map((y) => y.fixedArr));

    return { calls, resolutions, aiCost, usageMonthly, years, maxArr };
  }, [
    callMinutes,
    resolutionRate,
    y1Facilities,
    y2Facilities,
    y3Facilities,
    flatFeePerMonth,
    platformFeePerMonth,
    perResolutionCost,
    aiCostPerMinute,
  ]);

  const isModified =
    callMinutes !== DEFAULTS.callMinutes ||
    resolutionRate !== DEFAULTS.resolutionRate ||
    y1Facilities !== DEFAULTS.facilities[0] ||
    y2Facilities !== DEFAULTS.facilities[1] ||
    y3Facilities !== DEFAULTS.facilities[2] ||
    flatFeePerMonth !== DEFAULTS.flatFeePerMonth ||
    platformFeePerMonth !== DEFAULTS.platformFeePerMonth ||
    perResolutionCost !== DEFAULTS.perResolutionCost ||
    aiCostPerMinute !== DEFAULTS.aiCostPerMinute;

  const handleReset = () => {
    setCallMinutes(DEFAULTS.callMinutes);
    setResolutionRate(DEFAULTS.resolutionRate);
    setY1Facilities(DEFAULTS.facilities[0]);
    setY2Facilities(DEFAULTS.facilities[1]);
    setY3Facilities(DEFAULTS.facilities[2]);
    setFlatFeePerMonth(DEFAULTS.flatFeePerMonth);
    setPlatformFeePerMonth(DEFAULTS.platformFeePerMonth);
    setPerResolutionCost(DEFAULTS.perResolutionCost);
    setAiCostPerMinute(DEFAULTS.aiCostPerMinute);
  };

  return (
    <SectionWrapper id="pricing">
      <SectionLabel>Business Model</SectionLabel>
      <SectionTitle>Pricing and growth</SectionTitle>
      <SectionDescription>
        Launch pricing is TBD. Two models under consideration — flat rate for
        simplicity, or per-resolution for value alignment. Both are modeled
        below against a 2x annual base growth trajectory.
      </SectionDescription>

      {/* Pricing Models — Tabbed */}
      <div className="mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Card className="rounded-2xl border-2 border-bond-navy/20">
            <CardContent className="p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5">
                <div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {pricingModel.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <AlertTriangle className="h-3.5 w-3.5 text-bond-gold" />
                    <span className="text-xs font-medium text-bond-gold">
                      {pricingModel.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {pricingModel.features.map((feature) => (
                  <Badge
                    key={feature}
                    variant="outline"
                    className="rounded-full text-[11px] border-bond-navy/15 text-muted-foreground"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>

              <Tabs defaultValue="fixed">
                <TabsList className="grid w-full max-w-sm grid-cols-2 mb-5">
                  <TabsTrigger value="fixed">Flat Rate</TabsTrigger>
                  <TabsTrigger value="usage">Platform + Resolution</TabsTrigger>
                </TabsList>
                <TabsContent value="fixed">
                  <PricingModelCard model={pricingModel.models.fixed} />
                </TabsContent>
                <TabsContent value="usage">
                  <PricingModelCard model={pricingModel.models.usage} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* What-If Calculator */}
      <div className="mt-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bond-navy/10">
            <TrendingUp className="h-5 w-5 text-bond-navy" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-bond-navy-dark">
              3-Year Ramp-Up Model
            </h3>
            <p className="text-xs text-muted-foreground">{rampModel.note}</p>
          </div>
        </div>

        {/* Interactive controls */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Card className="mt-6 rounded-2xl border-2 border-dashed border-bond-navy/20 bg-bond-navy/[0.02]">
            <CardContent className="p-5 sm:p-6">
              <Accordion type="single" collapsible>
                <AccordionItem value="assumptions" className="border-none">
                  <div className="flex items-center justify-between gap-2">
                    <AccordionTrigger className="flex-1 py-0 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                      <div className="flex items-center gap-2">
                        <SlidersHorizontal className="h-4 w-4 text-bond-navy" />
                        <h4 className="text-sm font-bold text-foreground">
                          What-If Assumptions
                        </h4>
                      </div>
                    </AccordionTrigger>
                    {isModified && (
                      <button
                        type="button"
                        onClick={handleReset}
                        className="shrink-0 text-[11px] font-medium text-bond-navy hover:text-bond-navy-dark underline underline-offset-2 transition-colors"
                      >
                        Reset to defaults
                      </button>
                    )}
                  </div>
                  <AccordionContent className="pt-4">
                    {/* Pricing parameters */}
                    <div className="mb-6">
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Pricing Parameters
                      </p>
                      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        <SliderInput
                          label="Flat fee ($/mo)"
                          value={flatFeePerMonth}
                          min={200}
                          max={800}
                          step={25}
                          format={(v) => `$${v}`}
                          onChange={setFlatFeePerMonth}
                        />
                        <SliderInput
                          label="Platform fee ($/mo)"
                          value={platformFeePerMonth}
                          min={50}
                          max={300}
                          step={10}
                          format={(v) => `$${v}`}
                          onChange={setPlatformFeePerMonth}
                        />
                        <SliderInput
                          label="Per-resolution ($)"
                          value={perResolutionCost}
                          min={0.25}
                          max={5}
                          step={0.25}
                          format={(v) => `$${v}`}
                          onChange={setPerResolutionCost}
                        />
                        <SliderInput
                          label="AI cost ($/min)"
                          value={aiCostPerMinute}
                          min={0.02}
                          max={0.2}
                          step={0.01}
                          format={(v) => `$${v.toFixed(2)}`}
                          onChange={setAiCostPerMinute}
                        />
                      </div>
                    </div>

                    {/* Per-facility assumptions */}
                    <div className="mb-6">
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Per-Facility Usage
                      </p>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <SliderInput
                          label="Call minutes / month"
                          value={callMinutes}
                          min={50}
                          max={800}
                          step={10}
                          format={(v) => `${v} min`}
                          onChange={setCallMinutes}
                        />
                        <SliderInput
                          label="Resolution rate"
                          value={resolutionRate}
                          min={0.3}
                          max={0.95}
                          step={0.05}
                          format={(v) => `${Math.round(v * 100)}%`}
                          onChange={setResolutionRate}
                        />
                      </div>
                    </div>

                    {/* Facility counts */}
                    <div>
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Facilities with AI Agent
                      </p>
                      <div className="grid gap-5 sm:grid-cols-3">
                        <SliderInput
                          label={`Year 1 (of ${DEFAULTS.totalBases[0]})`}
                          value={y1Facilities}
                          min={3}
                          max={150}
                          step={1}
                          format={(v) => `${v}`}
                          onChange={setY1Facilities}
                        />
                        <SliderInput
                          label={`Year 2 (of ${DEFAULTS.totalBases[1]})`}
                          value={y2Facilities}
                          min={10}
                          max={500}
                          step={5}
                          format={(v) => `${v}`}
                          onChange={setY2Facilities}
                        />
                        <SliderInput
                          label={`Year 3 (of ${DEFAULTS.totalBases[2]})`}
                          value={y3Facilities}
                          min={50}
                          max={1500}
                          step={10}
                          format={(v) => `${v}`}
                          onChange={setY3Facilities}
                        />
                      </div>
                    </div>

                    {/* Live unit economics */}
                    <div className="mt-6 pt-5 border-t border-bond-navy/10">
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Unit Economics (per facility / month)
                      </p>
                      <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
                        <div className="rounded-lg border border-border/50 bg-white p-2.5">
                          <p className="text-[10px] text-muted-foreground">
                            Calls
                          </p>
                          <p className="font-display text-base font-bold text-bond-navy">
                            ~{derived.calls}
                          </p>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-white p-2.5">
                          <p className="text-[10px] text-muted-foreground">
                            Resolutions
                          </p>
                          <p className="font-display text-base font-bold text-bond-navy">
                            ~{derived.resolutions}
                          </p>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-white p-2.5">
                          <p className="text-[10px] text-muted-foreground">
                            AI cost
                          </p>
                          <p className="font-display text-base font-bold text-bond-navy">
                            ${derived.aiCost.toFixed(0)}
                          </p>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-white p-2.5">
                          <p className="text-[10px] text-muted-foreground">
                            Usage rev
                          </p>
                          <p className="font-display text-base font-bold text-bond-gold">
                            ${derived.usageMonthly.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        {/* Year cards — tabbed */}
        <div className="mt-6">
          <Tabs defaultValue="year1">
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-4">
              {derived.years.map((year, i) => (
                <TabsTrigger key={year.year} value={`year${i + 1}`}>
                  {year.year}
                </TabsTrigger>
              ))}
            </TabsList>
            {derived.years.map((year, i) => (
              <TabsContent key={year.year} value={`year${i + 1}`}>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="rounded-2xl border-border/50">
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex items-start gap-3 min-w-0">
                          <Badge
                            variant="outline"
                            className="shrink-0 rounded-full border-bond-gold/30 bg-bond-gold/10 text-xs font-semibold text-bond-gold"
                          >
                            {year.year}
                          </Badge>
                          <div className="min-w-0">
                            <p className="text-sm font-bold text-foreground">
                              {year.phase}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {year.agentFacilities.toLocaleString()} of{" "}
                              {DEFAULTS.totalBases[i].toLocaleString()}{" "}
                              facilities ({year.adoptionPct}% adoption)
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-lg bg-bond-navy/[0.03] border border-bond-navy/10 p-3">
                          <p className="text-[11px] font-medium text-muted-foreground">
                            At ${flatFeePerMonth}/mo flat
                          </p>
                          <p className="font-display text-xl font-bold text-bond-navy">
                            {formatCurrency(year.fixedArr)}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            ARR
                          </p>
                        </div>
                        <div className="rounded-lg bg-bond-gold/[0.05] border border-bond-gold/15 p-3">
                          <p className="text-[11px] font-medium text-muted-foreground">
                            At ${platformFeePerMonth} + ${perResolutionCost}/res
                          </p>
                          <p className="font-display text-xl font-bold text-bond-gold">
                            {formatCurrency(year.usageArr)}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            ARR
                          </p>
                        </div>
                        <div className="rounded-lg bg-muted/40 border border-border/50 p-3">
                          <p className="text-[11px] font-medium text-muted-foreground">
                            AI platform cost
                          </p>
                          <p className="font-display text-xl font-bold text-foreground">
                            {formatCurrency(year.totalAiCost)}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            at ${aiCostPerMinute.toFixed(2)}/min
                          </p>
                        </div>
                        <div className="rounded-lg bg-green-50/60 border border-green-200/50 p-3">
                          <p className="text-[11px] font-medium text-muted-foreground">
                            Gross margin (flat)
                          </p>
                          <p className="font-display text-xl font-bold text-green-700">
                            {formatCurrency(year.fixedMargin)}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {year.fixedArr > 0
                              ? `${Math.round((year.fixedMargin / year.fixedArr) * 100)}%`
                              : "—"}{" "}
                            margin
                          </p>
                        </div>
                      </div>

                      {/* Visual bar */}
                      <div className="mt-3 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] w-14 text-muted-foreground shrink-0">
                            Flat
                          </span>
                          <div className="flex-1 h-2 overflow-hidden rounded-full bg-bond-navy/10">
                            <motion.div
                              className="h-full rounded-full bg-bond-navy"
                              initial={{ width: 0 }}
                              animate={{
                                width: `${derived.maxArr > 0 ? (year.fixedArr / derived.maxArr) * 100 : 0}%`,
                              }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] w-14 text-muted-foreground shrink-0">
                            Usage
                          </span>
                          <div className="flex-1 h-2 overflow-hidden rounded-full bg-bond-gold/15">
                            <motion.div
                              className="h-full rounded-full bg-bond-gold"
                              initial={{ width: 0 }}
                              animate={{
                                width: `${derived.maxArr > 0 ? (year.usageArr / derived.maxArr) * 100 : 0}%`,
                              }}
                              transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </SectionWrapper>
  );
}
