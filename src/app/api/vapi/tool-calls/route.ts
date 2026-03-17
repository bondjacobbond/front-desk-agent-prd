/**
 * Vapi tool-calls webhook handler.
 * Proxies Bond API requests for getFacilitySchedule, searchPrograms, getSessionEvents.
 *
 * Palm Beach Skate Zone: facilityId=42, orgId=90
 * Set BOND_API_KEY in env.
 */
import { NextRequest, NextResponse } from "next/server";

const FACILITY_ID = 42;
const ORG_ID = 90;
const BOND_V4_BASE = "https://api.bondsports.co";
const BOND_V1_BASE = "https://public.api.bondsports.co";

type ToolCall = {
  id: string;
  name: string;
  arguments?: Record<string, unknown>;
};

async function callBondApi(
  url: string,
  options: RequestInit = {},
): Promise<unknown> {
  const apiKey = process.env.BOND_API_KEY;
  if (!apiKey) {
    throw new Error("BOND_API_KEY not set");
  }
  const res = await fetch(url, {
    ...options,
    headers: {
      "X-Api-Key": apiKey,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Bond API error ${res.status}: ${text}`);
  }
  return res.json();
}

async function handleGetFacilitySchedule(args: Record<string, unknown>) {
  const startDate = args.startDate as string;
  const endDate = args.endDate as string;
  if (!startDate || !endDate) {
    throw new Error("startDate and endDate are required");
  }
  const url = `${BOND_V4_BASE}/v4/facilities/${FACILITY_ID}/programs-schedule?startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`;
  return callBondApi(url);
}

async function handleSearchPrograms(args: Record<string, unknown>) {
  const params = new URLSearchParams();
  params.set("includePast", "false");
  params.set("expand", "sessions,sessions.products,sessions.products.prices");
  params.set("itemsPerPage", "15");
  if (args.search && typeof args.search === "string") {
    params.set("search", args.search);
  }
  if (args.startDate && typeof args.startDate === "string") {
    params.set("startDate", args.startDate);
  }
  if (args.endDate && typeof args.endDate === "string") {
    params.set("endDate", args.endDate);
  }
  const url = `${BOND_V1_BASE}/v1/organization/${ORG_ID}/programs?${params}`;
  return callBondApi(url);
}

async function handleGetSessionEvents(args: Record<string, unknown>) {
  const programId = args.programId as string;
  const sessionId = args.sessionId as string;
  if (!programId || !sessionId) {
    throw new Error("programId and sessionId are required");
  }
  const params = new URLSearchParams();
  params.set("expand", "resources,capacity");
  params.set("itemsPerPage", "15");
  if (args.startDate && typeof args.startDate === "string") {
    params.set("startDate", args.startDate);
  }
  if (args.endDate && typeof args.endDate === "string") {
    params.set("endDate", args.endDate);
  }
  const url = `${BOND_V1_BASE}/v1/organization/${ORG_ID}/programs/${programId}/sessions/${sessionId}/events?${params}`;
  return callBondApi(url);
}

async function handleToolCall(toolCall: ToolCall): Promise<{ toolCallId: string; result: string }> {
  const { id, name, arguments: args = {} } = toolCall;
  let data: unknown;
  try {
    switch (name) {
      case "getFacilitySchedule":
        data = await handleGetFacilitySchedule(args);
        break;
      case "searchPrograms":
        data = await handleSearchPrograms(args);
        break;
      case "getSessionEvents":
        data = await handleGetSessionEvents(args);
        break;
      default:
        return {
          toolCallId: id,
          result: `Unknown tool: ${name}`,
        };
    }
    return {
      toolCallId: id,
      result: JSON.stringify(data),
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return {
      toolCallId: id,
      result: `Error: ${msg}`,
    };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message = body?.message;
    if (!message || message.type !== "tool-calls") {
      return NextResponse.json(
        { error: "Expected message.type tool-calls" },
        { status: 400 },
      );
    }
    const toolCalls: ToolCall[] = message.toolCalls ?? [];
    if (toolCalls.length === 0) {
      return NextResponse.json({ results: [] });
    }
    const results = await Promise.all(toolCalls.map(handleToolCall));
    return NextResponse.json({ results });
  } catch (err) {
    console.error("Vapi tool-calls webhook error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Internal error" },
      { status: 500 },
    );
  }
}
