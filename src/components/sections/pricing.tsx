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
import { TrendingUp, AlertTriangle, SlidersHorizontal } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { pricingModel, rampModel } from "@/lib/prd-data";

type VendorPath = "elevenlabs" | "bland";

const VENDOR_DEFAULTS: Record<
  VendorPath,
  {
    aiCostPerMinute: number;
    platformCostPerYear: number;
    setupCost: number;
    label: string;
    engFte: [number, number, number];
  }
> = {
  elevenlabs: {
    aiCostPerMinute: 0.09,
    platformCostPerYear: 0,
    setupCost: 0,
    label: "ElevenLabs",
    engFte: [1.5, 1, 0.5],
  },
  bland: {
    aiCostPerMinute: 0.3,
    platformCostPerYear: 100_000,
    setupCost: 50_000,
    label: "Bland AI",
    engFte: [0.5, 0.25, 0.25],
  },
};

interface PricingPreset {
  label: string;
  baseFee: number;
  perResolution: number;
  perMinute: number;
}

const PRESETS: PricingPreset[] = [
  { label: "Flat $399/mo", baseFee: 399, perResolution: 0, perMinute: 0 },
  { label: "$149 + $1/res", baseFee: 149, perResolution: 1, perMinute: 0 },
  {
    label: "$99 + $0.50/min",
    baseFee: 99,
    perResolution: 0,
    perMinute: 0.5,
  },
  {
    label: "$149 + $0.75/min",
    baseFee: 149,
    perResolution: 0,
    perMinute: 0.75,
  },
  {
    label: "$99 + $0.50/res + $0.25/min",
    baseFee: 99,
    perResolution: 0.5,
    perMinute: 0.25,
  },
];

const INITIAL = {
  baseFee: 399,
  perResolution: 0,
  perMinute: 0,
  callMinutes: pricingModel.assumptions.callMinutesPerFacility,
  resolutionRate: pricingModel.assumptions.resolutionRate,
  avgCallDuration: pricingModel.assumptions.avgCallDuration,
  facilities: rampModel.years.map((y) => y.agentFacilities),
  totalBases: rampModel.years.map((y) => y.totalBase),
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

function buildPriceLabel(
  baseFee: number,
  perRes: number,
  perMin: number,
): string {
  const parts: string[] = [`$${baseFee}/mo`];
  if (perRes > 0) parts.push(`$${perRes}/res`);
  if (perMin > 0) parts.push(`$${perMin}/min`);
  return parts.join(" + ");
}

export function PricingSection() {
  const [vendorPath, setVendorPath] = useState<VendorPath>("elevenlabs");
  const [aiCostPerMinute, setAiCostPerMinute] = useState(
    VENDOR_DEFAULTS.elevenlabs.aiCostPerMinute,
  );
  const [blandPlatformCost, setBlandPlatformCost] = useState(
    VENDOR_DEFAULTS.bland.platformCostPerYear,
  );
  const [blandSetupCost, setBlandSetupCost] = useState(
    VENDOR_DEFAULTS.bland.setupCost,
  );

  const [baseFee, setBaseFee] = useState(INITIAL.baseFee);
  const [perResolution, setPerResolution] = useState(INITIAL.perResolution);
  const [perMinute, setPerMinute] = useState(INITIAL.perMinute);

  const [engCostPerYear, setEngCostPerYear] = useState(200_000);
  const [engFteY1, setEngFteY1] = useState(
    VENDOR_DEFAULTS.elevenlabs.engFte[0],
  );
  const [engFteY2, setEngFteY2] = useState(
    VENDOR_DEFAULTS.elevenlabs.engFte[1],
  );
  const [engFteY3, setEngFteY3] = useState(
    VENDOR_DEFAULTS.elevenlabs.engFte[2],
  );

  const [callMinutes, setCallMinutes] = useState(INITIAL.callMinutes);
  const [resolutionRate, setResolutionRate] = useState(INITIAL.resolutionRate);
  const [y1Facilities, setY1Facilities] = useState(INITIAL.facilities[0]);
  const [y2Facilities, setY2Facilities] = useState(INITIAL.facilities[1]);
  const [y3Facilities, setY3Facilities] = useState(INITIAL.facilities[2]);

  const vendorConfig = VENDOR_DEFAULTS[vendorPath];

  const handleVendorSwitch = (v: VendorPath) => {
    setVendorPath(v);
    setAiCostPerMinute(VENDOR_DEFAULTS[v].aiCostPerMinute);
    setEngFteY1(VENDOR_DEFAULTS[v].engFte[0]);
    setEngFteY2(VENDOR_DEFAULTS[v].engFte[1]);
    setEngFteY3(VENDOR_DEFAULTS[v].engFte[2]);
  };

  const applyPreset = (p: PricingPreset) => {
    setBaseFee(p.baseFee);
    setPerResolution(p.perResolution);
    setPerMinute(p.perMinute);
  };

  const activePreset = PRESETS.find(
    (p) =>
      p.baseFee === baseFee &&
      p.perResolution === perResolution &&
      p.perMinute === perMinute,
  );

  const derived = useMemo(() => {
    const avgDuration = INITIAL.avgCallDuration;
    const calls = Math.round(callMinutes / avgDuration);
    const resolutions = Math.round(calls * resolutionRate);
    const usageCostPerFacility = callMinutes * aiCostPerMinute;

    const revenuePerFacility =
      baseFee + resolutions * perResolution + callMinutes * perMinute;

    const facilities = [y1Facilities, y2Facilities, y3Facilities];
    const engFtes = [engFteY1, engFteY2, engFteY3];

    const platformPerMonth =
      vendorPath === "bland" ? blandPlatformCost / 12 : 0;
    const setupAmortized =
      vendorPath === "bland" ? blandSetupCost / 12 : 0;
    const engPerMonth1 = (engFteY1 * engCostPerYear) / 12;

    const allInCostPerFacility = (fac: number, includeSetup: boolean) => {
      if (fac === 0) return usageCostPerFacility;
      const platformShare = platformPerMonth / fac;
      const setupShare = includeSetup ? setupAmortized / fac : 0;
      const engShare = engPerMonth1 / fac;
      return usageCostPerFacility + platformShare + setupShare + engShare;
    };

    const y1AllIn = allInCostPerFacility(y1Facilities, true);
    const marginPerFacility = revenuePerFacility - y1AllIn;

    const years = rampModel.years.map((y, i) => {
      const fac = facilities[i];
      const totalBase = INITIAL.totalBases[i];
      const adoptionPct = Math.round((fac / totalBase) * 100);
      const arr = fac * revenuePerFacility * 12;

      const usageAiCost = fac * usageCostPerFacility * 12;
      const vendorPlatformCost =
        vendorPath === "bland" ? blandPlatformCost : 0;
      const vendorSetupCost =
        vendorPath === "bland" && i === 0 ? blandSetupCost : 0;
      const totalVendorCost =
        usageAiCost + vendorPlatformCost + vendorSetupCost;

      const engCost = engFtes[i] * engCostPerYear;
      const totalCost = totalVendorCost + engCost;
      const grossMargin = arr - totalCost;

      return {
        ...y,
        agentFacilities: fac,
        adoptionPct,
        arr,
        usageAiCost,
        vendorPlatformCost,
        vendorSetupCost,
        totalVendorCost,
        engCost,
        totalCost,
        grossMargin,
      };
    });

    const maxArr = Math.max(...years.map((y) => y.arr), 1);

    return {
      calls,
      resolutions,
      usageCostPerFacility,
      allInCostPerFacility: y1AllIn,
      revenuePerFacility,
      marginPerFacility,
      years,
      maxArr,
    };
  }, [
    callMinutes,
    resolutionRate,
    y1Facilities,
    y2Facilities,
    y3Facilities,
    baseFee,
    perResolution,
    perMinute,
    aiCostPerMinute,
    vendorPath,
    blandPlatformCost,
    blandSetupCost,
    engCostPerYear,
    engFteY1,
    engFteY2,
    engFteY3,
  ]);

  const isModified =
    baseFee !== INITIAL.baseFee ||
    perResolution !== INITIAL.perResolution ||
    perMinute !== INITIAL.perMinute ||
    callMinutes !== INITIAL.callMinutes ||
    resolutionRate !== INITIAL.resolutionRate ||
    y1Facilities !== INITIAL.facilities[0] ||
    y2Facilities !== INITIAL.facilities[1] ||
    y3Facilities !== INITIAL.facilities[2] ||
    aiCostPerMinute !== VENDOR_DEFAULTS[vendorPath].aiCostPerMinute ||
    vendorPath !== "elevenlabs" ||
    blandPlatformCost !== VENDOR_DEFAULTS.bland.platformCostPerYear ||
    blandSetupCost !== VENDOR_DEFAULTS.bland.setupCost ||
    engCostPerYear !== 200_000 ||
    engFteY1 !== VENDOR_DEFAULTS[vendorPath].engFte[0] ||
    engFteY2 !== VENDOR_DEFAULTS[vendorPath].engFte[1] ||
    engFteY3 !== VENDOR_DEFAULTS[vendorPath].engFte[2];

  const handleReset = () => {
    setVendorPath("elevenlabs");
    setAiCostPerMinute(VENDOR_DEFAULTS.elevenlabs.aiCostPerMinute);
    setBlandPlatformCost(VENDOR_DEFAULTS.bland.platformCostPerYear);
    setBlandSetupCost(VENDOR_DEFAULTS.bland.setupCost);
    setBaseFee(INITIAL.baseFee);
    setPerResolution(INITIAL.perResolution);
    setPerMinute(INITIAL.perMinute);
    setCallMinutes(INITIAL.callMinutes);
    setResolutionRate(INITIAL.resolutionRate);
    setY1Facilities(INITIAL.facilities[0]);
    setY2Facilities(INITIAL.facilities[1]);
    setY3Facilities(INITIAL.facilities[2]);
    setEngCostPerYear(200_000);
    setEngFteY1(VENDOR_DEFAULTS.elevenlabs.engFte[0]);
    setEngFteY2(VENDOR_DEFAULTS.elevenlabs.engFte[1]);
    setEngFteY3(VENDOR_DEFAULTS.elevenlabs.engFte[2]);
  };

  const priceLabel = buildPriceLabel(baseFee, perResolution, perMinute);

  return (
    <SectionWrapper id="pricing">
      <SectionLabel>Business Model</SectionLabel>
      <SectionTitle>Pricing and growth</SectionTitle>
      <SectionDescription>
        Launch pricing is TBD. Use the calculator below to model different
        pricing structures — flat rate, per-resolution, per-minute, or any
        combination — against vendor costs and facility growth.
      </SectionDescription>

      {/* Status badge */}
      <div className="mt-6 flex items-center gap-2">
        <AlertTriangle className="h-3.5 w-3.5 text-bond-gold" />
        <span className="text-xs font-medium text-bond-gold">
          {pricingModel.status}
        </span>
      </div>

      {/* What-If Calculator */}
      <div className="mt-8">
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
                    {/* ── Bond Pricing to Customers ── */}
                    <div className="mb-6">
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Bond Pricing to Customers
                      </p>

                      {/* Presets */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {PRESETS.map((p) => (
                          <button
                            key={p.label}
                            onClick={() => applyPreset(p)}
                            className={cn(
                              "rounded-full border px-3 py-1.5 text-[11px] font-medium transition-all",
                              activePreset?.label === p.label
                                ? "border-bond-navy bg-bond-navy text-white"
                                : "border-border/60 bg-white text-muted-foreground hover:border-bond-navy/30 hover:text-foreground",
                            )}
                          >
                            {p.label}
                          </button>
                        ))}
                      </div>

                      {/* Sliders */}
                      <div className="grid gap-5 sm:grid-cols-3">
                        <SliderInput
                          label="Monthly base fee"
                          value={baseFee}
                          min={0}
                          max={800}
                          step={25}
                          format={(v) => `$${v}`}
                          onChange={setBaseFee}
                        />
                        <SliderInput
                          label="Per resolution"
                          value={perResolution}
                          min={0}
                          max={5}
                          step={0.25}
                          format={(v) =>
                            v === 0 ? "Off" : `$${v.toFixed(2)}`
                          }
                          onChange={setPerResolution}
                        />
                        <SliderInput
                          label="Per call minute"
                          value={perMinute}
                          min={0}
                          max={2}
                          step={0.05}
                          format={(v) =>
                            v === 0 ? "Off" : `$${v.toFixed(2)}`
                          }
                          onChange={setPerMinute}
                        />
                      </div>

                      {/* Live formula */}
                      <div className="mt-3 rounded-lg bg-bond-navy/[0.04] border border-bond-navy/10 px-3 py-2">
                        <p className="text-[11px] text-bond-navy font-medium">
                          Revenue per facility:{" "}
                          <span className="font-bold">
                            ${derived.revenuePerFacility.toFixed(0)}/mo
                          </span>
                          <span className="text-bond-navy/50 ml-1.5">
                            ({priceLabel})
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* ── Voice Vendor ── */}
                    <div className="mb-6">
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Voice Vendor (cost to Bond)
                      </p>
                      <div className="flex gap-2 mb-4">
                        {(
                          [
                            {
                              key: "elevenlabs" as VendorPath,
                              label: "ElevenLabs",
                              sub: "$0.09/min · no platform fee",
                            },
                            {
                              key: "bland" as VendorPath,
                              label: "Bland AI",
                              sub: "$0.30/min · $100K/yr + $50K setup",
                            },
                          ] as const
                        ).map((v) => (
                          <button
                            key={v.key}
                            onClick={() => handleVendorSwitch(v.key)}
                            className={cn(
                              "flex-1 rounded-xl border-2 p-3 text-left transition-all",
                              vendorPath === v.key
                                ? "border-bond-navy bg-bond-navy/[0.04]"
                                : "border-border/50 bg-white hover:border-border",
                            )}
                          >
                            <p
                              className={cn(
                                "text-xs font-bold",
                                vendorPath === v.key
                                  ? "text-bond-navy"
                                  : "text-foreground",
                              )}
                            >
                              {v.label}
                            </p>
                            <p className="text-[10px] text-muted-foreground mt-0.5">
                              {v.sub}
                            </p>
                          </button>
                        ))}
                      </div>

                      <div
                        className={cn(
                          "grid gap-5",
                          vendorPath === "bland"
                            ? "sm:grid-cols-3"
                            : "sm:grid-cols-1 max-w-xs",
                        )}
                      >
                        <SliderInput
                          label="AI cost ($/min)"
                          value={aiCostPerMinute}
                          min={0.02}
                          max={0.5}
                          step={0.01}
                          format={(v) => `$${v.toFixed(2)}`}
                          onChange={setAiCostPerMinute}
                        />
                        {vendorPath === "bland" && (
                          <>
                            <SliderInput
                              label="Platform fee ($/yr)"
                              value={blandPlatformCost}
                              min={0}
                              max={200_000}
                              step={5_000}
                              format={(v) => `$${(v / 1000).toFixed(0)}K`}
                              onChange={setBlandPlatformCost}
                            />
                            <SliderInput
                              label="Setup (one-time)"
                              value={blandSetupCost}
                              min={0}
                              max={100_000}
                              step={5_000}
                              format={(v) => `$${(v / 1000).toFixed(0)}K`}
                              onChange={setBlandSetupCost}
                            />
                          </>
                        )}
                      </div>
                    </div>

                    {/* ── Bond Engineering ── */}
                    <div className="mb-6">
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Bond Engineering Investment
                      </p>
                      <p className="text-[10px] text-muted-foreground mb-3">
                        {vendorPath === "elevenlabs"
                          ? "Build in-house requires more engineering for agent development, prompt tuning, and integrations."
                          : "Managed service reduces engineering burden — mostly integration and light maintenance."}
                      </p>
                      <div className="grid gap-5 sm:grid-cols-4">
                        <SliderInput
                          label="Fully loaded ($/yr)"
                          value={engCostPerYear}
                          min={100_000}
                          max={350_000}
                          step={10_000}
                          format={(v) => `$${(v / 1000).toFixed(0)}K`}
                          onChange={setEngCostPerYear}
                        />
                        <SliderInput
                          label="Year 1 FTE"
                          value={engFteY1}
                          min={0}
                          max={3}
                          step={0.25}
                          format={(v) => `${v}`}
                          onChange={setEngFteY1}
                        />
                        <SliderInput
                          label="Year 2 FTE"
                          value={engFteY2}
                          min={0}
                          max={3}
                          step={0.25}
                          format={(v) => `${v}`}
                          onChange={setEngFteY2}
                        />
                        <SliderInput
                          label="Year 3 FTE"
                          value={engFteY3}
                          min={0}
                          max={3}
                          step={0.25}
                          format={(v) => `${v}`}
                          onChange={setEngFteY3}
                        />
                      </div>
                      <div className="mt-2 rounded-lg bg-bond-navy/[0.04] border border-bond-navy/10 px-3 py-2">
                        <p className="text-[11px] text-bond-navy font-medium">
                          3-year engineering cost:{" "}
                          <span className="font-bold">
                            {formatCurrency(
                              engFteY1 * engCostPerYear +
                                engFteY2 * engCostPerYear +
                                engFteY3 * engCostPerYear,
                            )}
                          </span>
                          <span className="text-bond-navy/50 ml-1.5">
                            ({engFteY1 + engFteY2 + engFteY3} FTE-years at{" "}
                            {formatCurrency(engCostPerYear)}/yr)
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* ── Per-Facility Usage ── */}
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

                    {/* ── Facility Counts ── */}
                    <div>
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Facilities with AI Agent
                      </p>
                      <div className="grid gap-5 sm:grid-cols-3">
                        <SliderInput
                          label={`Year 1 (of ${INITIAL.totalBases[0]})`}
                          value={y1Facilities}
                          min={3}
                          max={150}
                          step={1}
                          format={(v) => `${v}`}
                          onChange={setY1Facilities}
                        />
                        <SliderInput
                          label={`Year 2 (of ${INITIAL.totalBases[1]})`}
                          value={y2Facilities}
                          min={10}
                          max={500}
                          step={5}
                          format={(v) => `${v}`}
                          onChange={setY2Facilities}
                        />
                        <SliderInput
                          label={`Year 3 (of ${INITIAL.totalBases[2]})`}
                          value={y3Facilities}
                          min={50}
                          max={1500}
                          step={10}
                          format={(v) => `${v}`}
                          onChange={setY3Facilities}
                        />
                      </div>
                    </div>

                    {/* ── Unit Economics ── */}
                    <div className="mt-6 pt-5 border-t border-bond-navy/10">
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Unit Economics — per facility / month
                        {vendorPath === "bland" && (
                          <span className="normal-case tracking-normal font-normal ml-1 text-muted-foreground/60">
                            (platform costs amortized across Y1 facilities)
                          </span>
                        )}
                      </p>
                      <div className="grid gap-2 grid-cols-2 sm:grid-cols-5">
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
                            All-in vendor cost
                          </p>
                          <p className="font-display text-base font-bold text-bond-navy">
                            ${derived.allInCostPerFacility.toFixed(0)}
                          </p>
                          {vendorPath === "bland" && (
                            <p className="text-[9px] text-muted-foreground/70 mt-0.5">
                              ${derived.usageCostPerFacility.toFixed(0)} usage + ${Math.round(derived.allInCostPerFacility - derived.usageCostPerFacility)} fixed
                            </p>
                          )}
                        </div>
                        <div className="rounded-lg border border-border/50 bg-white p-2.5">
                          <p className="text-[10px] text-muted-foreground">
                            Bond revenue
                          </p>
                          <p className="font-display text-base font-bold text-bond-gold">
                            ${derived.revenuePerFacility.toFixed(0)}
                          </p>
                        </div>
                        <div
                          className={cn(
                            "rounded-lg border p-2.5",
                            derived.marginPerFacility >= 0
                              ? "border-green-200/60 bg-green-50/40"
                              : "border-red-200/60 bg-red-50/40",
                          )}
                        >
                          <p className="text-[10px] text-muted-foreground">
                            Margin / facility
                          </p>
                          <p
                            className={cn(
                              "font-display text-base font-bold",
                              derived.marginPerFacility >= 0
                                ? "text-green-700"
                                : "text-red-600",
                            )}
                          >
                            ${derived.marginPerFacility.toFixed(0)}
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

        {/* Year cards */}
        <div className="mt-6 space-y-4">
          {derived.years.map((year, i) => (
            <motion.div
              key={year.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="rounded-2xl border-border/50">
                <CardContent className="p-4 sm:p-5">
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
                        {INITIAL.totalBases[i].toLocaleString()} facilities (
                        {year.adoptionPct}% adoption)
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 grid-cols-2 sm:grid-cols-4">
                    <div className="rounded-lg bg-bond-navy/[0.03] border border-bond-navy/10 p-3">
                      <p className="text-[11px] font-medium text-muted-foreground">
                        Bond Revenue
                      </p>
                      <p className="font-display text-xl font-bold text-bond-navy">
                        {formatCurrency(year.arr)}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        ARR at {priceLabel}
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted/40 border border-border/50 p-3">
                      <p className="text-[11px] font-medium text-muted-foreground">
                        Vendor cost
                      </p>
                      <p className="font-display text-xl font-bold text-foreground">
                        {formatCurrency(year.totalVendorCost)}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {vendorPath === "bland"
                          ? `${formatCurrency(year.usageAiCost)} usage + ${formatCurrency(year.vendorPlatformCost)} plat.${year.vendorSetupCost > 0 ? ` + ${formatCurrency(year.vendorSetupCost)} setup` : ""}`
                          : `${vendorConfig.label} at $${aiCostPerMinute.toFixed(2)}/min`}
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted/40 border border-border/50 p-3">
                      <p className="text-[11px] font-medium text-muted-foreground">
                        Engineering
                      </p>
                      <p className="font-display text-xl font-bold text-foreground">
                        {formatCurrency(year.engCost)}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {[engFteY1, engFteY2, engFteY3][i]} FTE at{" "}
                        {formatCurrency(engCostPerYear)}/yr
                      </p>
                    </div>
                    <div
                      className={cn(
                        "rounded-lg border p-3",
                        year.grossMargin >= 0
                          ? "bg-green-50/60 border-green-200/50"
                          : "bg-red-50/60 border-red-200/50",
                      )}
                    >
                      <p className="text-[11px] font-medium text-muted-foreground">
                        Gross margin
                      </p>
                      <p
                        className={cn(
                          "font-display text-xl font-bold",
                          year.grossMargin >= 0
                            ? "text-green-700"
                            : "text-red-600",
                        )}
                      >
                        {formatCurrency(year.grossMargin)}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {year.arr > 0
                          ? `${Math.round((year.grossMargin / year.arr) * 100)}%`
                          : "—"}{" "}
                        margin
                      </p>
                    </div>
                  </div>

                  {/* Visual bar */}
                  <div className="mt-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] w-16 text-muted-foreground shrink-0">
                        Revenue
                      </span>
                      <div className="flex-1 h-2 overflow-hidden rounded-full bg-bond-navy/10">
                        <motion.div
                          className="h-full rounded-full bg-bond-navy"
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${(year.arr / derived.maxArr) * 100}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: i * 0.15,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
