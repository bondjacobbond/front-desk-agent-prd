import { pricingModel, rampModel } from "@/lib/prd-data";

export type VendorPath = "elevenlabs" | "bland";
export type BlandTier = "pro" | "enterprise";

export interface PricingPreset {
  label: string;
  baseFee: number;
  perResolution: number;
  perMinute: number;
}

export interface VendorDefaults {
  aiCostPerMinute: number;
  platformCostPerYear: number;
  setupCost: number;
  label: string;
  engFte: [number, number, number];
  sprints: [number, number, number];
}

export interface BlandTierDefaults {
  aiCostPerMinute: number;
  platformCostPerYear: number;
  setupCost: number;
  label: string;
  subLabel: string;
}

// Bland's updated pricing (effective Dec 2025).
// Pro = Scale self-serve plan ($499/mo, $0.11/min connected call time).
// Enterprise = volume contract (~$0.08/min at Bond's expected scale, $100K/yr platform, $50K onboarding).
export const BLAND_TIER_DEFAULTS: Record<BlandTier, BlandTierDefaults> = {
  pro: {
    aiCostPerMinute: 0.11,
    platformCostPerYear: 5_988, // $499/mo Scale plan
    setupCost: 0,
    label: "Pro (Scale)",
    subLabel: "$0.11/min · $499/mo · voice only (no SMS)",
  },
  enterprise: {
    aiCostPerMinute: 0.08,
    platformCostPerYear: 100_000,
    setupCost: 50_000,
    label: "Enterprise",
    subLabel: "$0.08/min · $100K/yr · SMS included · negotiable",
  },
};

export const VENDOR_DEFAULTS: Record<VendorPath, VendorDefaults> = {
  elevenlabs: {
    aiCostPerMinute: 0.09,
    platformCostPerYear: 0,
    setupCost: 0,
    label: "ElevenLabs",
    engFte: [1.5, 1, 0.5],
    sprints: [4, 2, 1],
  },
  bland: {
    aiCostPerMinute: BLAND_TIER_DEFAULTS.enterprise.aiCostPerMinute,
    platformCostPerYear: BLAND_TIER_DEFAULTS.enterprise.platformCostPerYear,
    setupCost: BLAND_TIER_DEFAULTS.enterprise.setupCost,
    label: "Bland AI",
    engFte: [0.5, 0.25, 0.25],
    sprints: [2, 1, 0],
  },
};

export const PRESETS: PricingPreset[] = [
  { label: "Flat $399/mo", baseFee: 399, perResolution: 0, perMinute: 0 },
  { label: "$149 + $1/res", baseFee: 149, perResolution: 1, perMinute: 0 },
  {
    label: "$99 + $0.50/min",
    baseFee: 99,
    perResolution: 0,
    perMinute: 0.5,
  },
  {
    label: "$149 + $0.75/min",
    baseFee: 149,
    perResolution: 0,
    perMinute: 0.75,
  },
  {
    label: "$99 + $0.50/res + $0.25/min",
    baseFee: 99,
    perResolution: 0.5,
    perMinute: 0.25,
  },
];

export const INITIAL = {
  baseFee: 399,
  perResolution: 0,
  perMinute: 0,
  callMinutes: pricingModel.assumptions.callMinutesPerFacility,
  resolutionRate: pricingModel.assumptions.resolutionRate,
  avgCallDuration: pricingModel.assumptions.avgCallDuration,
  facilities: rampModel.years.map((y) => y.agentFacilities),
  totalBases: rampModel.years.map((y) => y.totalBase),
};

export function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${Math.round(n)}`;
}

export function buildPriceLabel(
  baseFee: number,
  perRes: number,
  perMin: number,
): string {
  const parts: string[] = [`$${baseFee}/mo`];
  if (perRes > 0) parts.push(`$${perRes}/res`);
  if (perMin > 0) parts.push(`$${perMin}/min`);
  return parts.join(" + ");
}

export interface PricingState {
  vendorPath: VendorPath;
  blandTier: BlandTier;
  aiCostPerMinute: number;
  blandPlatformCost: number;
  blandSetupCost: number;
  baseFee: number;
  perResolution: number;
  perMinute: number;
  engCostPerYear: number;
  engFteY1: number;
  engFteY2: number;
  engFteY3: number;
  sprintCost: number;
  sprintsY1: number;
  sprintsY2: number;
  sprintsY3: number;
  callMinutes: number;
  resolutionRate: number;
  y1Facilities: number;
  y2Facilities: number;
  y3Facilities: number;
}

export interface YearData {
  year: string;
  phase: string;
  totalBase: number;
  agentFacilities: number;
  adoptionPct: number;
  arr: number;
  usageAiCost: number;
  vendorPlatformCost: number;
  vendorSetupCost: number;
  totalVendorCost: number;
  inHouseEngCost: number;
  consultingCost: number;
  totalEngCost: number;
  totalCost: number;
  grossMargin: number;
}

export interface DerivedData {
  calls: number;
  resolutions: number;
  usageCostPerFacility: number;
  vendorCostPerFacility: number;
  revenuePerFacility: number;
  operatingMarginPerFacility: number;
  years: YearData[];
  maxArr: number;
}

export function computeDerived(state: PricingState): DerivedData {
  const {
    vendorPath,
    // blandTier is UI-only — computation uses the slider values directly
    aiCostPerMinute,
    blandPlatformCost,
    blandSetupCost,
    baseFee,
    perResolution,
    perMinute,
    engCostPerYear,
    engFteY1,
    engFteY2,
    engFteY3,
    sprintCost,
    sprintsY1,
    sprintsY2,
    sprintsY3,
    callMinutes,
    resolutionRate,
    y1Facilities,
    y2Facilities,
    y3Facilities,
  } = state;

  const avgDuration = INITIAL.avgCallDuration;
  const calls = Math.round(callMinutes / avgDuration);
  const resolutions = Math.round(calls * resolutionRate);
  const usageCostPerFacility = callMinutes * aiCostPerMinute;

  const revenuePerFacility =
    baseFee + resolutions * perResolution + callMinutes * perMinute;

  const facilities = [y1Facilities, y2Facilities, y3Facilities];
  const engFtes = [engFteY1, engFteY2, engFteY3];
  const sprintCounts = [sprintsY1, sprintsY2, sprintsY3];

  // Unit economics: only recurring vendor/operating costs, amortized over Y1 facilities.
  // Engineering and consulting are build costs — shown in yearly P&L, not unit economics.
  const platformPerMonth = vendorPath === "bland" ? blandPlatformCost / 12 : 0;

  const vendorCostPerFacility =
    y1Facilities > 0
      ? usageCostPerFacility + platformPerMonth / y1Facilities
      : usageCostPerFacility;

  const operatingMarginPerFacility = revenuePerFacility - vendorCostPerFacility;

  const years = rampModel.years.map((y, i) => {
    const fac = facilities[i];
    const totalBase = INITIAL.totalBases[i];
    const adoptionPct = Math.round((fac / totalBase) * 100);
    const arr = fac * revenuePerFacility * 12;

    const usageAiCost = fac * usageCostPerFacility * 12;
    const vendorPlatformCost = vendorPath === "bland" ? blandPlatformCost : 0;
    const vendorSetupCost =
      vendorPath === "bland" && i === 0 ? blandSetupCost : 0;
    const totalVendorCost = usageAiCost + vendorPlatformCost + vendorSetupCost;

    const inHouseEngCost = engFtes[i] * engCostPerYear;
    const consultingCost = sprintCounts[i] * sprintCost;
    const totalEngCost = inHouseEngCost + consultingCost;
    const totalCost = totalVendorCost + totalEngCost;
    const grossMargin = arr - totalCost;

    return {
      ...y,
      agentFacilities: fac,
      adoptionPct,
      arr,
      usageAiCost,
      vendorPlatformCost,
      vendorSetupCost,
      totalVendorCost,
      inHouseEngCost,
      consultingCost,
      totalEngCost,
      totalCost,
      grossMargin,
    };
  });

  const maxArr = Math.max(...years.map((y) => y.arr), 1);

  return {
    calls,
    resolutions,
    usageCostPerFacility,
    vendorCostPerFacility,
    revenuePerFacility,
    operatingMarginPerFacility,
    years,
    maxArr,
  };
}
