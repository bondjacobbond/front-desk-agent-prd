"use client";

import { motion } from "framer-motion";
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import {
  PhoneOff,
  DollarSign,
  Clock,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";

const whyReasons = [
  {
    icon: DollarSign,
    title: "Revenue Expansion",
    desc: "$250-500/mo per facility. At mid-tier pricing across 300+ facilities, $1M+ incremental ARR.",
  },
  {
    icon: Shield,
    title: "Platform Stickiness",
    desc: "An AI agent tied to Bond's data layer is nearly impossible to replicate outside the system of record.",
  },
  {
    icon: Clock,
    title: "Market Timing",
    desc: "12-18 month window. No one in private athletic facilities has a voice-first AI agent today.",
  },
  {
    icon: TrendingUp,
    title: "Customer Demand",
    desc: "Facilities already spend on answering services that lack any integration with their management software.",
  },
  {
    icon: Zap,
    title: "Strategic Alignment",
    desc: "Owns the most visible, most frequent touchpoint between facility and customer. Cements Bond as indispensable.",
  },
];

export function ProblemSection() {
  return (
    <SectionWrapper id="problem" muted>
      <SectionLabel>Problem Alignment</SectionLabel>
      <SectionTitle>Every missed call is lost revenue</SectionTitle>
      <SectionDescription>
        50%+ of inbound calls to sports facilities go unanswered. Each missed
        call represents a lost registration, a frustrated parent, or a
        membership inquiry that walks to the competition.
      </SectionDescription>

      {/* Pain point card */}
      <Card className="mt-10 overflow-hidden rounded-2xl border-none bg-bond-navy-dark text-white">
        <CardContent className="p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <PhoneOff className="h-6 w-6 text-bond-gold" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold">
                The status quo is broken
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70">
                Facilities rely on part-time staff juggling check-ins and
                phones, generic answering services that can only take messages,
                voicemail boxes that go unchecked, and FAQ pages that can&apos;t
                answer specific availability or pricing questions. None of these
                solutions can check if there&apos;s a spot in the 4pm hockey
                clinic or process a cancellation.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why build this */}
      <h3 className="mt-14 font-display text-xl font-bold text-bond-navy-dark">
        Why this should be built
      </h3>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {whyReasons.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card className="h-full rounded-2xl border-border/50 transition-all hover:border-bond-navy/20 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-bond-navy/10">
                  <Icon className="h-5 w-5 text-bond-navy" />
                </div>
                <h4 className="font-display text-sm font-bold text-foreground">
                  {title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
