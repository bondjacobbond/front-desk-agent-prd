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
import { competitors } from "@/lib/prd-data";
import { Check, X, ArrowRight } from "lucide-react";

const threatColors = {
  blue: "bg-blue-50 text-blue-700 border-blue-200",
  orange: "bg-orange-50 text-orange-700 border-orange-200",
  yellow: "bg-yellow-50 text-yellow-700 border-yellow-200",
  green: "bg-green-50 text-green-700 border-green-200",
};

export function CompetitiveSection() {
  return (
    <SectionWrapper id="competitive" muted>
      <SectionLabel>Market Landscape</SectionLabel>
      <SectionTitle>Bond&apos;s strategic window is closing</SectionTitle>
      <SectionDescription>
        Baseline has already deployed a voice AI front desk agent (powered by
        EmbedReach) to their sports facility customers. Bond&apos;s window to
        lead the category with deeper integration is narrowing — speed to market
        is critical.
      </SectionDescription>

      {/* Competitor cards */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {competitors.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card className="h-full rounded-2xl border-border/50 transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-display text-base font-bold text-foreground">
                      {c.name}
                    </h4>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {c.icp}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className={`rounded-full text-[10px] font-semibold ${
                      threatColors[c.threatColor]
                    }`}
                  >
                    {c.threat}
                  </Badge>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.ai}
                </p>
                <div className="mt-4 space-y-3 border-t border-border/50 pt-3">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
                    <div className="flex items-center gap-1.5">
                      {c.voice ? (
                        <Check className="h-3.5 w-3.5 text-green-600" />
                      ) : (
                        <X className="h-3.5 w-3.5 text-red-400" />
                      )}
                      <span className="text-muted-foreground">Voice</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {c.email ? (
                        <Check className="h-3.5 w-3.5 text-green-600" />
                      ) : (
                        <X className="h-3.5 w-3.5 text-red-400" />
                      )}
                      <span className="text-muted-foreground">Email</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {c.text ? (
                        <Check className="h-3.5 w-3.5 text-green-600" />
                      ) : (
                        <X className="h-3.5 w-3.5 text-red-400" />
                      )}
                      <span className="text-muted-foreground">Text</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {c.voiceLabel}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {c.pricing}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bond positioning */}
      <Card className="mt-8 overflow-hidden rounded-2xl border-2 border-bond-navy/20 bg-gradient-to-br from-bond-navy/[0.03] to-transparent">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bond-navy text-sm font-bold text-white">
              B
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-bond-navy">
                Bond Sports
              </h4>
              <p className="text-xs text-muted-foreground">
                Private athletic facilities
              </p>
            </div>
            <Badge className="ml-auto rounded-full bg-bond-gold/10 text-xs font-semibold text-bond-gold border-bond-gold/30">
              Voice-First
            </Badge>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Planned: Voice + email + text, fully integrated with Bond as system
            of record. $250-500/mo target pricing. Baseline&apos;s
            EmbedReach-powered agent handles FAQs and sends links — Bond&apos;s
            agent will go deeper: real-time data, in-call booking, customer
            recognition, and proactive outreach. The moat is being the system of
            record.
          </p>
          <div className="mt-3 flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-green-600" />
              <span className="text-muted-foreground">Voice</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-green-600" />
              <span className="text-muted-foreground">Email</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-green-600" />
              <span className="text-muted-foreground">Text</span>
            </div>
          </div>
          <a
            href="#competitive"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-bond-navy transition-colors hover:text-bond-navy-dark hover:underline"
          >
            Read full competitive analysis
            <ArrowRight className="h-4 w-4" />
          </a>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
