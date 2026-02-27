"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyPrdButton({
  className,
  size = "sm",
  compact,
  label = "Copy Markdown",
  compactLabel = "Copy MD",
}: {
  className?: string;
  size?: "sm" | "default" | "lg";
  compact?: boolean;
  label?: string;
  compactLabel?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const res = await fetch("/api/prd-markdown");
      if (!res.ok) throw new Error("Failed to fetch");
      const text = await res.text();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Button
      variant="outline"
      size={size}
      onClick={handleCopy}
      title={compact ? compactLabel : label}
      aria-label={copied ? "Copied" : compact ? compactLabel : label}
      className={cn(
        "gap-2 border-bond-navy/20 bg-bond-navy/5 text-bond-navy hover:bg-bond-navy/10",
        className,
      )}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4" />
          Copied
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          {compact ? compactLabel : label}
        </>
      )}
    </Button>
  );
}
