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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { architectureLayers, performanceTargets } from "@/lib/prd-data";
import { Layers, Gauge } from "lucide-react";

const phase1Endpoints = [
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
    path: "/customers?phone={E164}|email={email}|firstName={}&lastName={}",
    desc: "Customer record, family, registrations, balance, VIP tags. Lookup by phone (E164), email, or firstName+lastName when phone isn't on file",
  },
  {
    method: "GET",
    path: "/policies/{category}",
    desc: "Structured policy objects with cancellation windows, refund rules",
  },
];

const phase2Endpoints = [
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
];

function EndpointCard({
  endpoint,
}: {
  endpoint: { method: string; path: string; desc: string };
}) {
  return (
    <div
      className="flex flex-col gap-2 rounded-xl border border-border/50 bg-white px-4 py-3 sm:flex-row sm:flex-wrap sm:items-start sm:gap-x-3"
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
      <code className="min-w-0 break-all font-mono text-xs text-foreground sm:flex-1 sm:min-w-0">
        {endpoint.path}
      </code>
      <span className="min-w-0 text-xs text-muted-foreground sm:ml-auto sm:flex-1 sm:min-w-[10rem]">
        {endpoint.desc}
      </span>
    </div>
  );
}

export function ArchitectureSection() {
  return (
    <SectionWrapper id="architecture">
      <SectionLabel>Architecture</SectionLabel>
      <SectionTitle>Four layers, one system</SectionTitle>
      <SectionDescription>
        Bond owns the intelligence — the Agent API, policy engine, and data
        access that make the AI agent effective. Where it runs (in-house or on a
        partner platform) is a deployment decision. The moat is being the system
        of record.
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
                  : layer.decision === "Build / Partner"
                    ? "border-bond-navy/10 bg-gradient-to-r from-bond-navy/[0.02] to-transparent"
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
                          : layer.decision === "Build / Partner"
                            ? "bg-bond-navy/80 text-white"
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
                        : layer.decision === "Build / Partner"
                          ? "border-bond-navy/15 bg-bond-navy/5 text-bond-navy/80"
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
        <Tabs defaultValue="phase1" className="mt-4">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="phase1">Phase 1</TabsTrigger>
            <TabsTrigger value="phase2">Phase 2</TabsTrigger>
          </TabsList>
          <TabsContent value="phase1" className="mt-4 space-y-2">
            <p className="mb-2 text-xs text-muted-foreground">
              Read-only: schedule, program, customer, and policy data
            </p>
            {phase1Endpoints.map((endpoint) => (
              <EndpointCard key={endpoint.path} endpoint={endpoint} />
            ))}
          </TabsContent>
          <TabsContent value="phase2" className="mt-4 space-y-2">
            <p className="mb-2 text-xs text-muted-foreground">
              Write operations: registration and cancellation processing
            </p>
            {phase2Endpoints.map((endpoint) => (
              <EndpointCard key={endpoint.path} endpoint={endpoint} />
            ))}
          </TabsContent>
        </Tabs>
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
