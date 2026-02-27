"use client";

import { SlidersHorizontal } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { buildPriceLabel, PRESETS, INITIAL } from "@/lib/pricing-utils";
import type { VendorPath } from "@/lib/pricing-utils";
import { SliderInput } from "./SliderInput";
import type { usePricingState } from "./usePricingState";

type PricingStateResult = ReturnType<typeof usePricingState>;

function BondPricingSection({
  baseFee,
  perResolution,
  perMinute,
  derived,
  activePreset,
  applyPreset,
  setters,
}: {
  baseFee: number;
  perResolution: number;
  perMinute: number;
  derived: PricingStateResult["derived"];
  activePreset: PricingStateResult["activePreset"];
  applyPreset: (p: (typeof PRESETS)[number]) => void;
  setters: PricingStateResult["setters"];
}) {
  const priceLabel = buildPriceLabel(baseFee, perResolution, perMinute);
  return (
    <div className="mb-6">
      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Bond Pricing to Customers
      </p>

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

      <div className="grid gap-5 sm:grid-cols-3">
        <SliderInput
          label="Monthly base fee"
          value={baseFee}
          min={0}
          max={800}
          step={25}
          format={(v) => `$${v}`}
          onChange={setters.setBaseFee}
        />
        <SliderInput
          label="Per resolution"
          value={perResolution}
          min={0}
          max={5}
          step={0.25}
          format={(v) => (v === 0 ? "Off" : `$${v.toFixed(2)}`)}
          onChange={setters.setPerResolution}
        />
        <SliderInput
          label="Per call minute"
          value={perMinute}
          min={0}
          max={2}
          step={0.05}
          format={(v) => (v === 0 ? "Off" : `$${v.toFixed(2)}`)}
          onChange={setters.setPerMinute}
        />
      </div>

      <div className="mt-3 rounded-lg bg-bond-navy/[0.04] border border-bond-navy/10 px-3 py-2">
        <p className="text-[11px] text-bond-navy font-medium">
          Revenue per facility:{" "}
          <span className="font-bold">
            ${derived.revenuePerFacility.toFixed(0)}/mo
          </span>
          <span className="text-bond-navy/50 ml-1.5">({priceLabel})</span>
        </p>
      </div>
    </div>
  );
}

function VoiceVendorSection({
  vendorPath,
  handleVendorSwitch,
  aiCostPerMinute,
  blandPlatformCost,
  blandSetupCost,
  setters,
}: {
  vendorPath: VendorPath;
  handleVendorSwitch: (v: VendorPath) => void;
  aiCostPerMinute: number;
  blandPlatformCost: number;
  blandSetupCost: number;
  setters: PricingStateResult["setters"];
}) {
  const vendorOptions = [
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
  ] as const;

  return (
    <div className="mb-6">
      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Voice Vendor (cost to Bond)
      </p>
      <div className="flex gap-2 mb-4">
        {vendorOptions.map((v) => (
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
                vendorPath === v.key ? "text-bond-navy" : "text-foreground",
              )}
            >
              {v.label}
            </p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{v.sub}</p>
          </button>
        ))}
      </div>

      <div
        className={cn(
          "grid gap-5",
          vendorPath === "bland" ? "sm:grid-cols-3" : "sm:grid-cols-1 max-w-xs",
        )}
      >
        <SliderInput
          label="AI cost ($/min)"
          value={aiCostPerMinute}
          min={0.02}
          max={0.5}
          step={0.01}
          format={(v) => `$${v.toFixed(2)}`}
          onChange={setters.setAiCostPerMinute}
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
              onChange={setters.setBlandPlatformCost}
            />
            <SliderInput
              label="Setup (one-time)"
              value={blandSetupCost}
              min={0}
              max={100_000}
              step={5_000}
              format={(v) => `$${(v / 1000).toFixed(0)}K`}
              onChange={setters.setBlandSetupCost}
            />
          </>
        )}
      </div>
    </div>
  );
}

function EngineeringSection({
  vendorPath,
  consultingEnabled,
  engCostPerYear,
  engFteY1,
  engFteY2,
  engFteY3,
  sprintCost,
  sprintsY1,
  sprintsY2,
  sprintsY3,
  setters,
}: {
  vendorPath: VendorPath;
  consultingEnabled: boolean;
  engCostPerYear: number;
  engFteY1: number;
  engFteY2: number;
  engFteY3: number;
  sprintCost: number;
  sprintsY1: number;
  sprintsY2: number;
  sprintsY3: number;
  setters: PricingStateResult["setters"];
}) {
  return (
    <div className="mb-6">
      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
        Engineering & Consulting
      </p>
      <p className="text-[10px] text-muted-foreground mb-3">
        Model Bond&apos;s in-house engineers, external consulting sprints (e.g.
        Blank Metal), or a mix.
        {vendorPath === "elevenlabs"
          ? " Build in-house requires more engineering for agent development, prompt tuning, and integrations."
          : " Managed service reduces in-house burden — mostly integration and light maintenance."}
      </p>

      <p className="text-[10px] font-semibold text-foreground mb-2">
        In-house engineers
      </p>
      <div className="grid gap-5 sm:grid-cols-4">
        <SliderInput
          label="Cost per engineer ($/yr)"
          value={engCostPerYear}
          min={100_000}
          max={350_000}
          step={10_000}
          format={(v) => `$${(v / 1000).toFixed(0)}K`}
          onChange={setters.setEngCostPerYear}
        />
        <SliderInput
          label="Year 1 engineers"
          value={engFteY1}
          min={0}
          max={3}
          step={0.25}
          format={(v) => `${v}`}
          onChange={setters.setEngFteY1}
        />
        <SliderInput
          label="Year 2 engineers"
          value={engFteY2}
          min={0}
          max={3}
          step={0.25}
          format={(v) => `${v}`}
          onChange={setters.setEngFteY2}
        />
        <SliderInput
          label="Year 3 engineers"
          value={engFteY3}
          min={0}
          max={3}
          step={0.25}
          format={(v) => `${v}`}
          onChange={setters.setEngFteY3}
        />
      </div>
      <p className="text-[9px] text-muted-foreground/60 mt-1">
        Salary + benefits + overhead. 0.5 = half-time, 1.5 = one full-time + one
        half-time.
      </p>

      <div className="mt-4 pt-3 border-t border-dashed border-bond-navy/10">
        <label className="flex items-center gap-2 cursor-pointer mb-2">
          <input
            type="checkbox"
            checked={consultingEnabled}
            onChange={(e) => setters.setConsultingEnabled(e.target.checked)}
            className="h-4 w-4 rounded border-bond-navy/30 text-bond-navy focus:ring-bond-navy/20 cursor-pointer"
          />
          <span className="text-[10px] font-semibold text-foreground">
            Include consulting sprints
          </span>
        </label>
        {consultingEnabled && (
          <>
            <p className="text-[10px] text-muted-foreground mb-2">
              (e.g. Blank Metal — $30-50K/sprint, embedded AI strategist +
              engineer)
            </p>
            <div className="grid gap-5 sm:grid-cols-4">
              <SliderInput
                label="Cost per sprint"
                value={sprintCost}
                min={20_000}
                max={60_000}
                step={5_000}
                format={(v) => `$${(v / 1000).toFixed(0)}K`}
                onChange={setters.setSprintCost}
              />
              <SliderInput
                label="Year 1 sprints"
                value={sprintsY1}
                min={0}
                max={8}
                step={1}
                format={(v) => (v === 0 ? "None" : `${v}`)}
                onChange={setters.setSprintsY1}
              />
              <SliderInput
                label="Year 2 sprints"
                value={sprintsY2}
                min={0}
                max={8}
                step={1}
                format={(v) => (v === 0 ? "None" : `${v}`)}
                onChange={setters.setSprintsY2}
              />
              <SliderInput
                label="Year 3 sprints"
                value={sprintsY3}
                min={0}
                max={8}
                step={1}
                format={(v) => (v === 0 ? "None" : `${v}`)}
                onChange={setters.setSprintsY3}
              />
            </div>
            <p className="text-[9px] text-muted-foreground/60 mt-1">
              Each sprint is ~2 weeks of embedded work. Useful for initial
              architecture, agent build-out, or accelerating time-to-market.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function UnitEconomicsSection({
  derived,
  vendorPath,
}: {
  derived: PricingStateResult["derived"];
  vendorPath: VendorPath;
}) {
  return (
    <div className="mt-6 pt-5 border-t border-bond-navy/10">
      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
        Operating Unit Economics — per facility / month
      </p>
      <p className="text-[9px] text-muted-foreground/60 mb-3">
        Recurring vendor costs only — what it costs to serve each facility.
        Engineering and consulting are build costs shown in the yearly P&amp;L
        below.
        {vendorPath === "bland" &&
          " Platform fee amortized across Y1 facility count."}
      </p>
      <div className="grid gap-2 grid-cols-2 sm:grid-cols-5">
        <div className="rounded-lg border border-border/50 bg-white p-2.5">
          <p className="text-[10px] text-muted-foreground">Calls</p>
          <p className="font-display text-base font-bold text-bond-navy">
            ~{derived.calls}
          </p>
        </div>
        <div className="rounded-lg border border-border/50 bg-white p-2.5">
          <p className="text-[10px] text-muted-foreground">Resolutions</p>
          <p className="font-display text-base font-bold text-bond-navy">
            ~{derived.resolutions}
          </p>
        </div>
        <div className="rounded-lg border border-border/50 bg-white p-2.5">
          <p className="text-[10px] text-muted-foreground">Vendor cost</p>
          <p className="font-display text-base font-bold text-bond-navy">
            ${derived.vendorCostPerFacility.toFixed(0)}
          </p>
          {vendorPath === "bland" && (
            <p className="text-[9px] text-muted-foreground/70 mt-0.5">
              ${derived.usageCostPerFacility.toFixed(0)} usage + $
              {Math.round(
                derived.vendorCostPerFacility -
                  derived.usageCostPerFacility,
              )}{" "}
              platform
            </p>
          )}
        </div>
        <div className="rounded-lg border border-border/50 bg-white p-2.5">
          <p className="text-[10px] text-muted-foreground">Bond revenue</p>
          <p className="font-display text-base font-bold text-bond-gold">
            ${derived.revenuePerFacility.toFixed(0)}
          </p>
        </div>
        <div
          className={cn(
            "rounded-lg border p-2.5",
            derived.operatingMarginPerFacility >= 0
              ? "border-green-200/60 bg-green-50/40"
              : "border-red-200/60 bg-red-50/40",
          )}
        >
          <p className="text-[10px] text-muted-foreground">
            Operating margin
          </p>
          <p
            className={cn(
              "font-display text-base font-bold",
              derived.operatingMarginPerFacility >= 0
                ? "text-green-700"
                : "text-red-600",
            )}
          >
            ${derived.operatingMarginPerFacility.toFixed(0)}
          </p>
        </div>
      </div>
    </div>
  );
}

export function AssumptionsAccordion(props: PricingStateResult) {
  const {
    state,
    derived,
    activePreset,
    isModified,
    consultingEnabled,
    handleVendorSwitch,
    applyPreset,
    handleReset,
    setters,
  } = props;
  const vendorPath = state.vendorPath;

  return (
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
              <BondPricingSection
                baseFee={state.baseFee}
                perResolution={state.perResolution}
                perMinute={state.perMinute}
                derived={derived}
                activePreset={activePreset}
                applyPreset={applyPreset}
                setters={setters}
              />

              <VoiceVendorSection
                vendorPath={vendorPath}
                handleVendorSwitch={handleVendorSwitch}
                aiCostPerMinute={state.aiCostPerMinute}
                blandPlatformCost={state.blandPlatformCost}
                blandSetupCost={state.blandSetupCost}
                setters={setters}
              />

              <EngineeringSection
                vendorPath={vendorPath}
                consultingEnabled={consultingEnabled}
                engCostPerYear={state.engCostPerYear}
                engFteY1={state.engFteY1}
                engFteY2={state.engFteY2}
                engFteY3={state.engFteY3}
                sprintCost={state.sprintCost}
                sprintsY1={state.sprintsY1}
                sprintsY2={state.sprintsY2}
                sprintsY3={state.sprintsY3}
                setters={setters}
              />

              <div className="mb-6">
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Per-Facility Usage
                </p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <SliderInput
                    label="Call minutes / month"
                    value={state.callMinutes}
                    min={50}
                    max={800}
                    step={10}
                    format={(v) => `${v} min`}
                    onChange={setters.setCallMinutes}
                  />
                  <SliderInput
                    label="Resolution rate"
                    value={state.resolutionRate}
                    min={0.3}
                    max={0.95}
                    step={0.05}
                    format={(v) => `${Math.round(v * 100)}%`}
                    onChange={setters.setResolutionRate}
                  />
                </div>
              </div>

              <div>
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Facilities with AI Agent
                </p>
                <div className="grid gap-5 sm:grid-cols-3">
                  <SliderInput
                    label={`Year 1 (of ${INITIAL.totalBases[0]})`}
                    value={state.y1Facilities}
                    min={3}
                    max={150}
                    step={1}
                    format={(v) => `${v}`}
                    onChange={setters.setY1Facilities}
                  />
                  <SliderInput
                    label={`Year 2 (of ${INITIAL.totalBases[1]})`}
                    value={state.y2Facilities}
                    min={10}
                    max={500}
                    step={5}
                    format={(v) => `${v}`}
                    onChange={setters.setY2Facilities}
                  />
                  <SliderInput
                    label={`Year 3 (of ${INITIAL.totalBases[2]})`}
                    value={state.y3Facilities}
                    min={50}
                    max={1500}
                    step={10}
                    format={(v) => `${v}`}
                    onChange={setters.setY3Facilities}
                  />
                </div>
              </div>

              <UnitEconomicsSection
                derived={derived}
                vendorPath={vendorPath}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
