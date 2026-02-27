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
import { architectureLayers, performanceTargets } from "@/lib/prd-data";
import { Gauge } from "lucide-react";

export function ArchitectureSection() {
  const bondLayers = architectureLayers.filter((l) => l.owner === "Bond");
  const vendorLayers = architectureLayers.filter((l) => l.owner === "Vendor");

  return (
    <SectionWrapper id="architecture">
      <SectionLabel>Architecture</SectionLabel>
      <SectionTitle>What Bond owns vs. what the vendor runs</SectionTitle>
      <SectionDescription>
        Bond&apos;s moat is the data and the actions — schedules, customers,
        pricing, bookings. No AI platform is useful without Bond&apos;s API. The
        conversation logic and voice processing run inside the vendor&apos;s
        platform, configured by Bond.
      </SectionDescription>

      {/* Architecture Stack */}
      <div className="mt-10 space-y-2">
        {/* Bond layers */}
        <div className="mb-1">
          <Badge
            variant="outline"
            className="rounded-full text-xs font-bold border-bond-navy/20 bg-bond-navy/10 text-bond-navy mb-3"
          >
            Bond Builds (Data + Actions + Admin)
          </Badge>
        </div>
        {bondLayers.map((layer, i) => (
          <motion.div
            key={layer.layer}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card className="rounded-2xl border-bond-navy/15 bg-gradient-to-r from-bond-navy/[0.04] to-transparent transition-all hover:shadow-md">
              <CardContent className="p-4 sm:p-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-bond-navy text-white text-sm font-bold">
                    {layer.layer}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display text-sm font-bold text-foreground">
                      {layer.name}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {layer.desc}
                    </p>
                    <p className="mt-1.5 text-[11px] font-medium text-bond-navy/60">
                      {layer.tech}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Abstraction boundary */}
        <div className="flex items-center gap-3 py-3">
          <div className="h-px flex-1 bg-border border-dashed border-t" />
          <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
            API boundary — vendor calls Bond for data & actions
          </span>
          <div className="h-px flex-1 bg-border border-dashed border-t" />
        </div>

        {/* Vendor layers */}
        <div className="mb-1">
          <Badge
            variant="outline"
            className="rounded-full text-xs font-bold border-bond-gold/30 bg-bond-gold/10 text-bond-gold mb-3"
          >
            Vendor-Provided (Swappable)
          </Badge>
        </div>
        {vendorLayers.map((layer, i) => (
          <motion.div
            key={layer.layer}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: (bondLayers.length + i) * 0.08,
            }}
          >
            <Card className="rounded-2xl border-border/50 transition-all hover:shadow-md">
              <CardContent className="p-4 sm:p-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground text-sm font-bold">
                    {layer.layer}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display text-sm font-bold text-foreground">
                      {layer.name}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {layer.desc}
                    </p>
                    <p className="mt-1.5 text-[11px] font-medium text-muted-foreground/60">
                      {layer.tech}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Performance targets */}
      <div className="mt-12">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bond-navy/10">
            <Gauge className="h-5 w-5 text-bond-navy" />
          </div>
          <h3 className="font-display text-xl font-bold text-bond-navy-dark">
            Performance Targets
          </h3>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {performanceTargets.map((t) => (
            <div
              key={t.metric}
              className="rounded-xl border border-border/50 bg-white px-4 py-3"
            >
              <p className="font-display text-lg font-bold text-bond-navy">
                {t.target}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">{t.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
