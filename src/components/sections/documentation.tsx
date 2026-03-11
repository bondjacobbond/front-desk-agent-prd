"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section-wrapper";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { documentationAppendix } from "@/lib/prd-data";
import type { DocumentationToolArgument } from "@/lib/prd-data";
import { cn } from "@/lib/utils";
import {
  Check,
  Copy,
  ChevronRight,
  Server,
  Monitor,
  Blocks,
  ArrowRight,
} from "lucide-react";

const methodColor: Record<string, string> = {
  GET: "bg-emerald-500",
  POST: "bg-blue-500",
  PUT: "bg-amber-500",
  PATCH: "bg-orange-500",
  DELETE: "bg-red-500",
};

const toolTypeConfig = {
  server: {
    label: "Server Tool",
    icon: Server,
    accent: "border-l-emerald-500",
    badge: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  },
  client: {
    label: "Client Tool",
    icon: Monitor,
    accent: "border-l-blue-500",
    badge: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  },
  mcp_later: {
    label: "Future MCP",
    icon: Blocks,
    accent: "border-l-amber-500",
    badge: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  },
} as const;

const sourceStyle: Record<
  DocumentationToolArgument["source"],
  { label: string; className: string }
> = {
  infer: {
    label: "Infer",
    className: "bg-violet-500/10 text-violet-700 border-violet-500/20",
  },
  ask_if_missing: {
    label: "Ask if missing",
    className: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  },
  bond_managed: {
    label: "Fixed by Bond",
    className: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  },
};

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all",
        copied
          ? "bg-emerald-500/20 text-emerald-400"
          : "bg-white/10 text-slate-400 hover:bg-white/15 hover:text-slate-200",
      )}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          Copy
        </>
      )}
    </button>
  );
}

function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-slate-950">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
        <span className="font-mono text-[11px] font-medium text-slate-500">
          {language}
        </span>
        <CopyButton text={code} />
      </div>
      <pre className="overflow-x-auto px-4 py-4 text-[13px] leading-6 text-slate-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function DocumentationSection() {
  return (
    <SectionWrapper id="documentation" muted>
      <SectionLabel>Appendix</SectionLabel>
      <SectionTitle>Bond &rarr; ElevenLabs Integration Reference</SectionTitle>
      <SectionDescription>
        Copy-pastable endpoint schemas, tool definitions, and prompt snippets for
        wiring Bond discovery data into ElevenLabs.
      </SectionDescription>

      {/* Strategy pills */}
      <div className="mt-8 flex flex-wrap gap-2">
        {[
          { label: "Server tools for data", color: "bg-emerald-500" },
          { label: "Client tools for UI only", color: "bg-blue-500" },
          { label: "MCP later", color: "bg-amber-500" },
        ].map((pill) => (
          <span
            key={pill.label}
            className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-foreground/80 shadow-sm ring-1 ring-border/60"
          >
            <span
              className={cn("h-2 w-2 rounded-full", pill.color)}
            />
            {pill.label}
          </span>
        ))}
      </div>

      {/* Guardrails */}
      <div className="mt-6 rounded-xl border border-bond-gold/25 bg-bond-gold/[0.04] p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-bond-gold">
          Guardrails
        </p>
        <ul className="mt-3 space-y-2">
          {documentationAppendix.overview.guardrails.map((g) => (
            <li
              key={g}
              className="flex items-start gap-2 text-sm leading-relaxed text-foreground/80"
            >
              <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-bond-gold" />
              {g}
            </li>
          ))}
        </ul>
      </div>

      {/* ─── SECTION 1: Existing Endpoints ─── */}
      <div className="mt-16">
        <SectionHeading
          number="01"
          title="Existing Bond Endpoints"
          description="What already exists in bond-discovery and can be used right now."
        />

        <div className="mt-6 space-y-4">
          {documentationAppendix.endpoints.map((endpoint, i) => (
            <motion.div
              key={endpoint.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="overflow-hidden rounded-xl border border-border/60 bg-white"
            >
              {/* Header row */}
              <div className="flex flex-wrap items-center gap-3 border-b border-border/40 px-5 py-4">
                <span
                  className={cn(
                    "rounded-md px-2 py-0.5 text-[11px] font-bold text-white",
                    methodColor[endpoint.method],
                  )}
                >
                  {endpoint.method}
                </span>
                <code className="text-sm font-semibold text-foreground">
                  {endpoint.path}
                </code>
                <span className="text-sm text-muted-foreground">
                  &mdash; {endpoint.name}
                </span>
              </div>

              <div className="px-5 py-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {endpoint.purpose}
                </p>

                {/* Params as inline tags */}
                {endpoint.queryParams && endpoint.queryParams.length > 0 && (
                  <div className="mt-4">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">
                      Query Parameters
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {endpoint.queryParams.map((p) => (
                        <code
                          key={p}
                          className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-foreground/75"
                        >
                          {p}
                        </code>
                      ))}
                    </div>
                  </div>
                )}

                {/* Response shape as compact list */}
                <div className="mt-4">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">
                    Response
                  </p>
                  <ul className="mt-2 space-y-1">
                    {endpoint.responseShape.map((r) => (
                      <li
                        key={r}
                        className="text-sm leading-relaxed text-foreground/75"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Notes */}
                {endpoint.notes && endpoint.notes.length > 0 && (
                  <div className="mt-4 rounded-lg bg-bond-gold/[0.04] p-3">
                    {endpoint.notes.map((n) => (
                      <p
                        key={n}
                        className="text-xs leading-relaxed text-foreground/70"
                      >
                        {n}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── SECTION 2: Recommended Tools ─── */}
      <div className="mt-16">
        <SectionHeading
          number="02"
          title="ElevenLabs Tool Catalog"
          description="Each tool maps to a Bond endpoint. Expand for arguments, response shapes, and ElevenLabs config notes."
        />

        <Accordion type="multiple" className="mt-6 space-y-3">
          {documentationAppendix.tools.map((tool) => {
            const config = toolTypeConfig[tool.type];
            const Icon = config.icon;

            return (
              <AccordionItem
                key={tool.name}
                value={tool.name}
                className={cn(
                  "overflow-hidden rounded-xl border border-border/60 bg-white border-l-[3px]",
                  config.accent,
                )}
              >
                <AccordionTrigger className="px-5 py-4 hover:no-underline">
                  <div className="flex min-w-0 flex-1 items-center gap-3 text-left">
                    <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <code className="text-sm font-bold text-foreground">
                      {tool.name}
                    </code>
                    <Badge
                      variant="outline"
                      className={cn(
                        "shrink-0 rounded-full text-[10px] font-bold",
                        config.badge,
                      )}
                    >
                      {config.label}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {tool.purpose}
                  </p>

                  {/* Backing endpoint */}
                  <div className="mt-4">
                    <CodeBlock code={tool.backing} language="endpoint" />
                  </div>

                  {/* Config pills */}
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 font-mono text-foreground/60">
                      expects_response: {String(tool.expectsResponse)}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 font-mono text-foreground/60">
                      timeout: {tool.responseTimeoutSecs}s
                    </span>
                  </div>

                  {/* When to use */}
                  <div className="mt-5">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">
                      When to use
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {tool.whenToUse.map((w) => (
                        <li
                          key={w}
                          className="flex items-start gap-2 text-sm leading-relaxed text-foreground/75"
                        >
                          <ArrowRight className="mt-1 h-3 w-3 shrink-0 text-muted-foreground/40" />
                          {w}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arguments */}
                  {tool.arguments.length > 0 && (
                    <div className="mt-5">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">
                        Arguments
                      </p>
                      <div className="mt-3 space-y-2">
                        {tool.arguments.map((arg) => {
                          const style =
                            sourceStyle[
                              arg.source as keyof typeof sourceStyle
                            ];
                          return (
                            <div
                              key={arg.name}
                              className="rounded-lg border border-border/40 bg-slate-50/60 px-4 py-3"
                            >
                              <div className="flex flex-wrap items-center gap-2">
                                <code className="text-xs font-bold text-foreground">
                                  {arg.name}
                                </code>
                                <Badge
                                  variant="outline"
                                  className={cn(
                                    "rounded-full text-[10px] font-semibold",
                                    arg.required
                                      ? "border-red-200 bg-red-50 text-red-600"
                                      : "border-border bg-white text-muted-foreground",
                                  )}
                                >
                                  {arg.required ? "required" : "optional"}
                                </Badge>
                                <Badge
                                  variant="outline"
                                  className={cn(
                                    "rounded-full text-[10px] font-semibold",
                                    style.className,
                                  )}
                                >
                                  {style.label}
                                </Badge>
                              </div>
                              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                                {arg.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Response shape */}
                  <div className="mt-5">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">
                      Response
                    </p>
                    <ul className="mt-2 space-y-1">
                      {tool.responseShape.map((r) => (
                        <li
                          key={r}
                          className="text-sm leading-relaxed text-foreground/75"
                        >
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Notes */}
                  {tool.notes && tool.notes.length > 0 && (
                    <div className="mt-4 rounded-lg bg-bond-gold/[0.04] p-3">
                      {tool.notes.map((n) => (
                        <p
                          key={n}
                          className="text-xs leading-relaxed text-foreground/70"
                        >
                          {n}
                        </p>
                      ))}
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      {/* ─── SECTION 3: Scenarios ─── */}
      <div className="mt-16">
        <SectionHeading
          number="03"
          title="Usage Scenarios"
          description="Common caller questions mapped to which tool gets called and what the agent should do."
        />

        <div className="mt-6 space-y-3">
          {documentationAppendix.scenarios.map((s, i) => (
            <motion.div
              key={s.callerQuestion}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="rounded-xl border border-border/60 bg-white px-5 py-4"
            >
              <div className="flex flex-wrap items-start gap-x-3 gap-y-2">
                <p className="flex-1 text-sm font-semibold text-foreground">
                  &ldquo;{s.callerQuestion}&rdquo;
                </p>
                <code className="shrink-0 rounded-md bg-bond-navy/8 px-2 py-0.5 text-xs font-bold text-bond-navy">
                  {s.tool}
                </code>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">
                    Infer first
                  </p>
                  <ul className="mt-1 space-y-0.5">
                    {s.infer.map((item) => (
                      <li
                        key={item}
                        className="text-xs leading-relaxed text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600">
                    Ask only if needed
                  </p>
                  <ul className="mt-1 space-y-0.5">
                    {s.ask.length > 0 ? (
                      s.ask.map((item) => (
                        <li
                          key={item}
                          className="text-xs leading-relaxed text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))
                    ) : (
                      <li className="text-xs text-muted-foreground/50">
                        Nothing &mdash; call immediately.
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-foreground/65">
                <span className="font-semibold text-foreground/80">
                  Then:
                </span>{" "}
                {s.nextResponse}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── SECTION 4: Copy-Paste Snippets ─── */}
      <div className="mt-16">
        <SectionHeading
          number="04"
          title="Copy-Paste Snippets"
          description="Ready to drop into the ElevenLabs dashboard or your codebase."
        />

        <div className="mt-6 space-y-6">
          {documentationAppendix.snippets.map((snippet, i) => (
            <motion.div
              key={snippet.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <div className="mb-2">
                <h4 className="text-sm font-bold text-foreground">
                  {snippet.title}
                </h4>
                <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  {snippet.description}
                </p>
              </div>
              <CodeBlock code={snippet.code} language={snippet.language} />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-bond-navy font-mono text-xs font-bold text-white">
        {number}
      </span>
      <div>
        <h3 className="font-display text-xl font-bold text-bond-navy-dark">
          {title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
