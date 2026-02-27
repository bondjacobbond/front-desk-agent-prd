"use client";

import { useState, useCallback } from "react";
import { useConversation } from "@elevenlabs/react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SectionWrapper,
  SectionLabel,
  SectionTitle,
  SectionDescription,
} from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { demoAgent } from "@/lib/prd-data";
import {
  Mic,
  MicOff,
  Phone,
  PhoneOff,
  ChevronDown,
  Volume2,
} from "lucide-react";
import { cn } from "@/lib/utils";

function PulseRing({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <>
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
      <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-10" />
    </>
  );
}

function SystemPromptViewer() {
  const [open, setOpen] = useState(false);

  const sections = demoAgent.systemPrompt.split(/\n# /).map((section, i) => {
    if (i === 0) return { title: "Identity", content: section.trim() };
    const newlineIdx = section.indexOf("\n");
    return {
      title: section.slice(0, newlineIdx).trim(),
      content: section.slice(newlineIdx + 1).trim(),
    };
  });

  return (
    <div className="w-full">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-center gap-1.5 text-[11px] font-medium text-bond-navy/60 hover:text-bond-navy transition-colors"
      >
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
        {open ? "Hide" : "View"} system prompt
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-3 max-h-64 overflow-y-auto space-y-3 rounded-xl border border-border/50 bg-muted/30 p-3 sm:p-4 text-left">
              {sections.map((section) => (
                <div key={section.title}>
                  <h5 className="text-[10px] font-bold text-foreground uppercase tracking-wider mb-1">
                    {section.title}
                  </h5>
                  <pre className="text-[11px] text-muted-foreground whitespace-pre-wrap font-sans leading-relaxed">
                    {section.content}
                  </pre>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AgentWidget() {
  const conversation = useConversation({
    onConnect: () => console.log("[ElevenLabs] Connected"),
    onDisconnect: () => console.log("[ElevenLabs] Disconnected"),
    onError: (error) => console.error("[ElevenLabs] Error:", error),
  });

  const isConnected = conversation.status === "connected";
  const isConnecting = conversation.status === "connecting";

  const startConversation = useCallback(async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({
        agentId: demoAgent.agentId,
        connectionType: "webrtc",
      });
    } catch (error) {
      console.error("Failed to start conversation:", error);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Avatar + status */}
      <div className="relative">
        <div
          className={cn(
            "relative flex h-28 w-28 items-center justify-center rounded-full transition-all duration-500",
            isConnected
              ? "bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-500/30"
              : "bg-gradient-to-br from-bond-navy to-bond-navy-dark shadow-lg shadow-bond-navy/30",
          )}
        >
          <PulseRing active={isConnected && conversation.isSpeaking} />
          {isConnected ? (
            <Volume2
              className={cn(
                "h-10 w-10 text-white transition-transform",
                conversation.isSpeaking && "scale-110",
              )}
            />
          ) : (
            <Phone className="h-10 w-10 text-white" />
          )}
        </div>

        <div
          className={cn(
            "absolute -bottom-1 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold text-white shadow-md",
            isConnected
              ? "bg-green-500"
              : isConnecting
                ? "bg-yellow-500"
                : "bg-muted-foreground",
          )}
        >
          {isConnected
            ? conversation.isSpeaking
              ? "Ashley is speaking"
              : "Listening..."
            : isConnecting
              ? "Connecting..."
              : "Offline"}
        </div>
      </div>

      {/* Agent info */}
      <div className="text-center">
        <h4 className="font-display text-lg font-bold text-foreground">
          {demoAgent.name}
        </h4>
        <p className="text-xs text-muted-foreground">
          Front Desk · {demoAgent.facility}
        </p>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3">
        {!isConnected ? (
          <button
            onClick={startConversation}
            disabled={isConnecting}
            className={cn(
              "flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all",
              isConnecting
                ? "bg-yellow-500 cursor-wait"
                : "bg-green-500 hover:bg-green-600 hover:shadow-xl hover:scale-105 active:scale-95",
            )}
          >
            <Mic className="h-4 w-4" />
            {isConnecting ? "Connecting..." : "Talk to Ashley"}
          </button>
        ) : (
          <button
            onClick={stopConversation}
            className="flex items-center gap-2 rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-red-600 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <PhoneOff className="h-4 w-4" />
            End Call
          </button>
        )}
      </div>

      {/* Mic permission hint */}
      {!isConnected && !isConnecting && (
        <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
          <MicOff className="h-3 w-3" />
          Requires microphone access
        </p>
      )}

      {/* Suggested questions */}
      <div className="w-full pt-2 border-t border-border/40">
        <p className="text-[10px] font-medium text-muted-foreground/60 text-center mb-2">
          Try asking
        </p>
        <div className="flex flex-wrap justify-center gap-1.5">
          {[
            "What are your hours?",
            "How much is skating?",
            "Do you do birthday parties?",
            "Any hockey leagues?",
            "What programs do you offer?",
          ].map((q) => (
            <span
              key={q}
              className="rounded-full border border-bond-navy/15 bg-bond-navy/[0.03] px-2.5 py-1 text-[10px] text-muted-foreground"
            >
              {q}
            </span>
          ))}
        </div>
      </div>

      {/* System prompt */}
      <SystemPromptViewer />
    </div>
  );
}

export function DemoSection() {
  return (
    <SectionWrapper id="demo">
      <SectionLabel>Live Demo</SectionLabel>
      <SectionTitle>Talk to the AI front desk agent</SectionTitle>
      <SectionDescription>
        Working prototype on ElevenLabs Conversational AI. Ashley answers calls
        for Palm Beach Skate Zone — ask about hours, pricing, programs, or
        birthday parties.
      </SectionDescription>

      <div className="mt-10 mx-auto max-w-lg">
        <Card className="rounded-2xl border-2 border-bond-navy/20 bg-gradient-to-br from-bond-navy/[0.02] to-transparent overflow-hidden">
          <CardContent className="flex flex-col items-center justify-center p-8 sm:p-10">
            <AgentWidget />
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
