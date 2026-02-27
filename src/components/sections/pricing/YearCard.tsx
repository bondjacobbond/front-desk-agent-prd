"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/pricing-utils";
import type { YearData, VendorDefaults, VendorPath } from "@/lib/pricing-utils";

interface YearComparisonProps {
  years: YearData[];
  priceLabel: string;
  vendorPath: VendorPath;
  vendorConfig: VendorDefaults;
  aiCostPerMinute: number;
  maxArr: number;
  totalBases: number[];
}

function MetricRow({
  label,
  values,
  sublabels,
  colorFn,
}: {
  label: string;
  values: string[];
  sublabels: string[];
  colorFn?: (i: number) => string;
}) {
  return (
    <>
      <div className="py-3 pr-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70 self-start pt-3.5">
        {label}
      </div>
      {values.map((val, i) => (
        <div key={i} className="py-3 px-2 text-center">
          <p
            className={cn(
              "font-display text-lg font-bold leading-tight sm:text-xl",
              colorFn ? colorFn(i) : "text-foreground",
            )}
          >
            {val}
          </p>
          <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">
            {sublabels[i]}
          </p>
        </div>
      ))}
    </>
  );
}

export function YearComparison({
  years,
  priceLabel,
  vendorPath,
  vendorConfig,
  aiCostPerMinute,
  maxArr,
  totalBases,
}: YearComparisonProps) {
  const vendorSublabel = (y: YearData) =>
    vendorPath === "bland"
      ? `${formatCurrency(y.usageAiCost)} usage + ${formatCurrency(y.vendorPlatformCost)} plat.${y.vendorSetupCost > 0 ? ` + ${formatCurrency(y.vendorSetupCost)} setup` : ""}`
      : `${vendorConfig.label} @ $${aiCostPerMinute.toFixed(2)}/min`;

  const engSublabel = (y: YearData) => {
    if (y.totalEngCost === 0) return "none";
    const parts: string[] = [];
    if (y.inHouseEngCost > 0) parts.push(`${formatCurrency(y.inHouseEngCost)} in-house`);
    if (y.consultingCost > 0) parts.push(`${formatCurrency(y.consultingCost)} consulting`);
    return parts.join(" + ");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="overflow-x-auto -mx-1 px-1"
    >
      <div
        className="grid min-w-[520px]"
        style={{ gridTemplateColumns: "minmax(72px, 80px) repeat(3, 1fr)" }}
      >
        {/* ── Year headers ── */}
        <div />
        {years.map((y, i) => (
          <motion.div
            key={y.year}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="px-2 pb-3 text-center"
          >
            <Badge
              variant="outline"
              className="mb-1.5 rounded-full border-bond-gold/30 bg-bond-gold/10 text-[11px] font-semibold text-bond-gold"
            >
              {y.year}
            </Badge>
            <p className="text-sm font-bold text-foreground leading-tight">
              {y.phase}
            </p>
            <p className="mt-0.5 text-[10px] text-muted-foreground">
              {y.agentFacilities.toLocaleString()} of{" "}
              {totalBases[i].toLocaleString()} facilities ({y.adoptionPct}%)
            </p>
          </motion.div>
        ))}

        {/* ── Divider ── */}
        <div className="col-span-4 h-px bg-border/60" />

        {/* ── Bond Revenue ── */}
        <MetricRow
          label="Revenue"
          values={years.map((y) => formatCurrency(y.arr))}
          sublabels={years.map(() => `ARR at ${priceLabel}`)}
          colorFn={() => "text-bond-navy"}
        />

        <div className="col-span-4 h-px bg-border/30" />

        {/* ── Vendor Cost ── */}
        <MetricRow
          label="Vendor"
          values={years.map((y) => formatCurrency(y.totalVendorCost))}
          sublabels={years.map((y) => vendorSublabel(y))}
        />

        <div className="col-span-4 h-px bg-border/30" />

        {/* ── Engineering ── */}
        <MetricRow
          label="Eng."
          values={years.map((y) => formatCurrency(y.totalEngCost))}
          sublabels={years.map((y) => engSublabel(y))}
        />

        <div className="col-span-4 h-px bg-border/60" />

        {/* ── Gross Margin ── */}
        <MetricRow
          label="Margin"
          values={years.map((y) => formatCurrency(y.grossMargin))}
          sublabels={years.map((y) =>
            y.arr > 0
              ? `${Math.round((y.grossMargin / y.arr) * 100)}% margin`
              : "— margin",
          )}
          colorFn={(i) =>
            years[i].grossMargin >= 0 ? "text-green-700" : "text-red-600"
          }
        />

        <div className="col-span-4 h-px bg-border/30" />

        {/* ── Revenue bars ── */}
        <div className="py-2.5 pr-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
          Scale
        </div>
        {years.map((y, i) => (
          <div key={y.year} className="py-2.5 px-2 flex items-center">
            <div className="flex-1 h-2 overflow-hidden rounded-full bg-bond-navy/8">
              <motion.div
                className="h-full rounded-full bg-bond-navy"
                initial={{ width: 0 }}
                whileInView={{ width: `${(y.arr / maxArr) * 100}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: 0.2 + i * 0.12,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
