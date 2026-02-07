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
import { Check, TrendingUp } from "lucide-react";
import { pricingTiers, revenueProjections } from "@/lib/prd-data";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <SectionWrapper id="pricing">
      <SectionLabel>Business Model</SectionLabel>
      <SectionTitle>Pricing and revenue</SectionTitle>
      <SectionDescription>
        Momence validated $399/mo for text-only AI. Bond&apos;s voice-first
        agent delivers higher value and should command comparable or higher
        pricing.
      </SectionDescription>

      {/* Pricing tiers */}
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {pricingTiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card
              className={cn(
                "relative h-full rounded-2xl transition-all hover:shadow-lg",
                tier.popular
                  ? "border-2 border-bond-navy shadow-md"
                  : "border-border/50"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="rounded-full bg-bond-navy px-3 py-1 text-[10px] font-bold text-white">
                    Recommended
                  </Badge>
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="font-display text-base font-bold text-foreground">
                  {tier.name}
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {tier.target}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-3xl font-bold text-bond-navy">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {tier.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-bond-navy/10">
                        <Check className="h-2.5 w-2.5 text-bond-navy" />
                      </div>
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Revenue projections */}
      <div className="mt-12">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bond-navy/10">
            <TrendingUp className="h-5 w-5 text-bond-navy" />
          </div>
          <h3 className="font-display text-xl font-bold text-bond-navy-dark">
            Revenue Projections (Conservative)
          </h3>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {revenueProjections.map((p, i) => (
            <motion.div
              key={p.year}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="rounded-2xl border-border/50">
                <CardContent className="p-5">
                  <Badge
                    variant="outline"
                    className="mb-3 rounded-full border-bond-gold/30 bg-bond-gold/10 text-xs font-semibold text-bond-gold"
                  >
                    {p.year}
                  </Badge>
                  <p className="font-display text-3xl font-bold text-bond-navy">
                    ${p.arr}K
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Incremental ARR
                  </p>
                  <div className="mt-3 flex items-center justify-between border-t border-border/50 pt-3 text-xs text-muted-foreground">
                    <span>{p.facilities} facilities</span>
                    <span>${p.avgPrice}/mo avg</span>
                  </div>
                  {/* Visual bar */}
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-bond-navy/10">
                    <motion.div
                      className="h-full rounded-full bg-bond-navy"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(p.arr / 1350) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                    />
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
