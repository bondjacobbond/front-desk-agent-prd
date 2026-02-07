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
import { Layers, Gauge } from "lucide-react";

export function ArchitectureSection() {
  return (
    <SectionWrapper id="architecture">
      <SectionLabel>Architecture</SectionLabel>
      <SectionTitle>Five layers, one system</SectionTitle>
      <SectionDescription>
        Own the data & business logic, buy the agentic layer. Bond&apos;s moat is
        being the system of record -- the Agent API and policy engine are what
        make the AI agent effective.
      </SectionDescription>

      {/* Architecture layers */}
      <div className="mt-10 space-y-4">
        {architectureLayers.map((layer, i) => (
          <motion.div
            key={layer.layer}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Card
              className={`rounded-2xl transition-all hover:shadow-md ${
                layer.decision === "Build"
                  ? "border-bond-navy/20 bg-gradient-to-r from-bond-navy/[0.03] to-transparent"
                  : "border-border/50"
              }`}
            >
              <CardContent className="p-5 md:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                        layer.decision === "Build"
                          ? "bg-bond-navy text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {layer.layer}
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-foreground">
                        {layer.name}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {layer.desc}
                      </p>
                      <p className="mt-2 text-xs font-medium text-bond-navy/70">
                        {layer.tech}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={`shrink-0 rounded-full text-xs font-bold ${
                      layer.decision === "Build"
                        ? "border-bond-navy/20 bg-bond-navy/10 text-bond-navy"
                        : "border-bond-gold/30 bg-bond-gold/10 text-bond-gold"
                    }`}
                  >
                    {layer.decision}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Agent API Spec */}
      <div className="mt-12">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bond-navy/10">
            <Layers className="h-5 w-5 text-bond-navy" />
          </div>
          <h3 className="font-display text-xl font-bold text-bond-navy-dark">
            Agent API v1 Contract
          </h3>
        </div>
        <div className="mt-4 space-y-2">
          {[
            {
              method: "GET",
              path: "/organizations/{id}/schedules",
              desc: "Events linked to programs, sessions, capacity, waitlist. SLA: freshness ≤60s",
            },
            {
              method: "GET",
              path: "/programs/{id}",
              desc: "Description, age ranges, prerequisites, pricing, instructor, richer metadata",
            },
            {
              method: "GET",
              path: "/customers?phone={E164}",
              desc: "Customer record, family, registrations, balance, VIP tags",
            },
            {
              method: "GET",
              path: "/policies/{category}",
              desc: "Structured policy objects with cancellation windows, refund rules",
            },
            {
              method: "POST",
              path: "/registrations",
              desc: "Create registration. Requires agentToken + confirmationFlow",
            },
            {
              method: "POST",
              path: "/cancellations",
              desc: "Process cancellation with reasonCode. Returns refund/credit info",
            },
          ].map((endpoint) => (
            <div
              key={endpoint.path}
              className="flex flex-col gap-2 rounded-xl border border-border/50 bg-white px-4 py-3 sm:flex-row sm:items-center"
            >
              <span
                className={`shrink-0 rounded-md px-2 py-0.5 font-mono text-[11px] font-bold ${
                  endpoint.method === "GET"
                    ? "bg-green-50 text-green-700"
                    : "bg-blue-50 text-blue-700"
                }`}
              >
                {endpoint.method}
              </span>
              <code className="shrink-0 font-mono text-xs text-foreground">
                {endpoint.path}
              </code>
              <span className="text-xs text-muted-foreground sm:ml-auto">
                {endpoint.desc}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          All endpoints: &lt;250ms p95 response, idempotent writes, RBAC
          facility scope. Every call logged with agent_id, facility_id,
          request_id, confidenceScore.
        </p>
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
