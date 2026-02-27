"use client";

import { motion } from "framer-motion";
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section-wrapper";
import { AlertTriangle, TrendingUp } from "lucide-react";
import { pricingModel, rampModel } from "@/lib/prd-data";
import { buildPriceLabel } from "@/lib/pricing-utils";
import { usePricingState } from "./usePricingState";
import { AssumptionsAccordion } from "./AssumptionsAccordion";
import { YearComparison } from "./YearCard";

export function PricingSection() {
  const {
    state,
    derived,
    vendorConfig,
    consultingEnabled,
    handleReset,
    handleVendorSwitch,
    applyPreset,
    activePreset,
    isModified,
    setters,
  } = usePricingState();

  const priceLabel = buildPriceLabel(
    state.baseFee,
    state.perResolution,
    state.perMinute,
  );

  return (
    <SectionWrapper id="pricing">
      <SectionLabel>Business Model</SectionLabel>
      <SectionTitle>Pricing and growth</SectionTitle>
      <SectionDescription>
        Launch pricing is TBD. Use the calculator below to model different
        pricing structures — flat rate, per-resolution, per-minute, or any
        combination — against vendor costs and facility growth.
      </SectionDescription>

      <div className="mt-6 flex items-center gap-2">
        <AlertTriangle className="h-3.5 w-3.5 text-bond-gold" />
        <span className="text-xs font-medium text-bond-gold">
          {pricingModel.status}
        </span>
      </div>

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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <AssumptionsAccordion
            state={state}
            derived={derived}
            vendorConfig={vendorConfig}
            activePreset={activePreset}
            isModified={isModified}
            consultingEnabled={consultingEnabled}
            handleVendorSwitch={handleVendorSwitch}
            applyPreset={applyPreset}
            handleReset={handleReset}
            setters={setters}
          />
        </motion.div>

        <div className="mt-6">
          <YearComparison
            years={derived.years}
            priceLabel={priceLabel}
            vendorPath={state.vendorPath}
            vendorConfig={vendorConfig}
            aiCostPerMinute={state.aiCostPerMinute}
            maxArr={derived.maxArr}
            totalBases={rampModel.years.map((y) => y.totalBase)}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
