"use client";

import { useState, useMemo } from "react";
import {
  type VendorPath,
  type PricingPreset,
  VENDOR_DEFAULTS,
  PRESETS,
  INITIAL,
  computeDerived,
  type PricingState,
} from "@/lib/pricing-utils";

export function usePricingState() {
  const [vendorPath, setVendorPath] = useState<VendorPath>("elevenlabs");
  const [aiCostPerMinute, setAiCostPerMinute] = useState(
    VENDOR_DEFAULTS.elevenlabs.aiCostPerMinute,
  );
  const [blandPlatformCost, setBlandPlatformCost] = useState(
    VENDOR_DEFAULTS.bland.platformCostPerYear,
  );
  const [blandSetupCost, setBlandSetupCost] = useState(
    VENDOR_DEFAULTS.bland.setupCost,
  );

  const [baseFee, setBaseFee] = useState(INITIAL.baseFee);
  const [perResolution, setPerResolution] = useState(INITIAL.perResolution);
  const [perMinute, setPerMinute] = useState(INITIAL.perMinute);

  const [engCostPerYear, setEngCostPerYear] = useState(200_000);
  const [engFteY1, setEngFteY1] = useState(
    VENDOR_DEFAULTS.elevenlabs.engFte[0],
  );
  const [engFteY2, setEngFteY2] = useState(
    VENDOR_DEFAULTS.elevenlabs.engFte[1],
  );
  const [engFteY3, setEngFteY3] = useState(
    VENDOR_DEFAULTS.elevenlabs.engFte[2],
  );

  const [consultingEnabled, setConsultingEnabled] = useState(false);
  const [sprintCost, setSprintCost] = useState(40_000);
  const [sprintsY1, setSprintsY1] = useState(0);
  const [sprintsY2, setSprintsY2] = useState(0);
  const [sprintsY3, setSprintsY3] = useState(0);

  const [callMinutes, setCallMinutes] = useState(INITIAL.callMinutes);
  const [resolutionRate, setResolutionRate] = useState(INITIAL.resolutionRate);
  const [y1Facilities, setY1Facilities] = useState(INITIAL.facilities[0]);
  const [y2Facilities, setY2Facilities] = useState(INITIAL.facilities[1]);
  const [y3Facilities, setY3Facilities] = useState(INITIAL.facilities[2]);

  const vendorConfig = VENDOR_DEFAULTS[vendorPath];

  const handleVendorSwitch = (v: VendorPath) => {
    setVendorPath(v);
    setAiCostPerMinute(VENDOR_DEFAULTS[v].aiCostPerMinute);
    setEngFteY1(VENDOR_DEFAULTS[v].engFte[0]);
    setEngFteY2(VENDOR_DEFAULTS[v].engFte[1]);
    setEngFteY3(VENDOR_DEFAULTS[v].engFte[2]);
  };

  const applyPreset = (p: PricingPreset) => {
    setBaseFee(p.baseFee);
    setPerResolution(p.perResolution);
    setPerMinute(p.perMinute);
  };

  const effectiveSprintsY1 = consultingEnabled ? sprintsY1 : 0;
  const effectiveSprintsY2 = consultingEnabled ? sprintsY2 : 0;
  const effectiveSprintsY3 = consultingEnabled ? sprintsY3 : 0;

  const stateForExport: PricingState = {
    vendorPath,
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
  };

  const derived = useMemo(
    () =>
      computeDerived({
        vendorPath,
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
        sprintsY1: effectiveSprintsY1,
        sprintsY2: effectiveSprintsY2,
        sprintsY3: effectiveSprintsY3,
        callMinutes,
        resolutionRate,
        y1Facilities,
        y2Facilities,
        y3Facilities,
      }),
    [
      vendorPath,
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
      consultingEnabled,
      effectiveSprintsY1,
      effectiveSprintsY2,
      effectiveSprintsY3,
      callMinutes,
      resolutionRate,
      y1Facilities,
      y2Facilities,
      y3Facilities,
    ],
  );

  const activePreset = PRESETS.find(
    (p) =>
      p.baseFee === baseFee &&
      p.perResolution === perResolution &&
      p.perMinute === perMinute,
  );

  const isModified =
    baseFee !== INITIAL.baseFee ||
    perResolution !== INITIAL.perResolution ||
    perMinute !== INITIAL.perMinute ||
    callMinutes !== INITIAL.callMinutes ||
    resolutionRate !== INITIAL.resolutionRate ||
    y1Facilities !== INITIAL.facilities[0] ||
    y2Facilities !== INITIAL.facilities[1] ||
    y3Facilities !== INITIAL.facilities[2] ||
    aiCostPerMinute !== VENDOR_DEFAULTS[vendorPath].aiCostPerMinute ||
    vendorPath !== "elevenlabs" ||
    blandPlatformCost !== VENDOR_DEFAULTS.bland.platformCostPerYear ||
    blandSetupCost !== VENDOR_DEFAULTS.bland.setupCost ||
    engCostPerYear !== 200_000 ||
    engFteY1 !== VENDOR_DEFAULTS[vendorPath].engFte[0] ||
    engFteY2 !== VENDOR_DEFAULTS[vendorPath].engFte[1] ||
    engFteY3 !== VENDOR_DEFAULTS[vendorPath].engFte[2] ||
    consultingEnabled !== false ||
    sprintCost !== 40_000 ||
    sprintsY1 !== 0 ||
    sprintsY2 !== 0 ||
    sprintsY3 !== 0;

  const handleReset = () => {
    setVendorPath("elevenlabs");
    setAiCostPerMinute(VENDOR_DEFAULTS.elevenlabs.aiCostPerMinute);
    setBlandPlatformCost(VENDOR_DEFAULTS.bland.platformCostPerYear);
    setBlandSetupCost(VENDOR_DEFAULTS.bland.setupCost);
    setBaseFee(INITIAL.baseFee);
    setPerResolution(INITIAL.perResolution);
    setPerMinute(INITIAL.perMinute);
    setCallMinutes(INITIAL.callMinutes);
    setResolutionRate(INITIAL.resolutionRate);
    setY1Facilities(INITIAL.facilities[0]);
    setY2Facilities(INITIAL.facilities[1]);
    setY3Facilities(INITIAL.facilities[2]);
    setEngCostPerYear(200_000);
    setEngFteY1(VENDOR_DEFAULTS.elevenlabs.engFte[0]);
    setEngFteY2(VENDOR_DEFAULTS.elevenlabs.engFte[1]);
    setEngFteY3(VENDOR_DEFAULTS.elevenlabs.engFte[2]);
    setConsultingEnabled(false);
    setSprintCost(40_000);
    setSprintsY1(0);
    setSprintsY2(0);
    setSprintsY3(0);
  };

  return {
    state: stateForExport,
    derived,
    vendorConfig,
    activePreset,
    isModified,
    consultingEnabled,
    handleVendorSwitch,
    applyPreset,
    handleReset,
    setters: {
      setConsultingEnabled,
      setBaseFee,
      setPerResolution,
      setPerMinute,
      setAiCostPerMinute,
      setBlandPlatformCost,
      setBlandSetupCost,
      setEngCostPerYear,
      setEngFteY1,
      setEngFteY2,
      setEngFteY3,
      setSprintCost,
      setSprintsY1,
      setSprintsY2,
      setSprintsY3,
      setCallMinutes,
      setResolutionRate,
      setY1Facilities,
      setY2Facilities,
      setY3Facilities,
    },
  };
}
