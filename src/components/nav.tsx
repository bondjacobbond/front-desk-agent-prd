"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Menu,
  Target,
  Users,
  LayoutGrid,
  Layers,
  Clock,
  DollarSign,
  AlertTriangle,
  BarChart3,
  FileQuestion,
  Zap,
  Scale,
  Headphones,
} from "lucide-react";
import { CopyPrdButton } from "@/components/copy-prd-button";

const sections = [
  { id: "hero", label: "Overview", icon: Zap },
  { id: "demo", label: "Live Demo", icon: Headphones },
  { id: "problem", label: "Problem", icon: Target },
  { id: "kpis", label: "KPIs", icon: BarChart3 },
  { id: "competitive", label: "Competitive", icon: Users },
  { id: "personas", label: "Personas", icon: Users },
  { id: "features", label: "Features", icon: LayoutGrid },
  { id: "architecture", label: "Architecture", icon: Layers },
  { id: "build-vs-buy", label: "Build vs Buy", icon: Scale },
  { id: "timeline", label: "Timeline", icon: Clock },
  { id: "pricing", label: "Pricing", icon: DollarSign },
  { id: "risks", label: "Risks", icon: AlertTriangle },
  { id: "decisions", label: "Open Decisions", icon: FileQuestion },
];

export function Nav() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="fixed left-0 top-0 z-50 hidden h-screen w-56 border-r border-border/50 bg-white/80 backdrop-blur-xl lg:block">
        <div className="flex h-full flex-col">
          <div className="border-b border-border/50 px-5 py-5">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bond-navy text-xs font-bold text-white">
                B
              </div>
              <div>
                <p className="font-display text-sm font-bold text-bond-navy">
                  Bond Sports
                </p>
                <p className="text-[10px] font-medium text-muted-foreground">
                  PRD — AI Front Desk
                </p>
              </div>
            </div>
            <CopyPrdButton className="mt-4 w-full justify-center" />
          </div>
          <div className="flex-1 overflow-y-auto px-3 py-4">
            <ul className="space-y-0.5">
              {sections.map(({ id, label, icon: Icon }) => (
                <li key={id}>
                  <button
                    onClick={() => handleClick(id)}
                    className={cn(
                      "flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm font-medium transition-all",
                      active === id
                        ? "bg-bond-navy/10 text-bond-navy"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-border/50 px-5 py-4">
            <p className="text-[10px] text-muted-foreground">
              Status: Draft — Requirements Gathering
            </p>
          </div>
        </div>
      </nav>

      {/* Mobile header */}
      <header className="fixed left-0 top-0 z-50 flex h-14 w-full items-center justify-between gap-2 border-b border-border/50 bg-white/80 px-4 backdrop-blur-xl lg:hidden">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-bond-navy text-xs font-bold text-white">
            B
          </div>
          <p className="truncate font-display text-sm font-bold text-bond-navy">
            AI Front Desk Agent
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <CopyPrdButton size="sm" compact />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-0">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="px-4 py-6">
                <ul className="space-y-1">
                  {sections.map(({ id, label, icon: Icon }) => (
                    <li key={id}>
                      <button
                        onClick={() => handleClick(id)}
                        className={cn(
                          "flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all",
                          active === id
                            ? "bg-bond-navy/10 text-bond-navy"
                            : "text-muted-foreground hover:bg-muted",
                        )}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
