PRD: AI Front Desk Agent — Bond Sports

# I. Problem Alignment

## Product Info

**Theme:** AI & Automation

**Area:** Consumer Experience / Revenue Growth

**Epic:** AI Front Desk Agent

**Contributors:** Jacob Here (PM), [UI/UX TBD], [DEV TBD], [QA TBD], [CS TBD]

**Status:** Draft — Requirements Gathering

**JIRA Link(s):** TBD

---

## WHAT: Background & Feature Description

Facilities lose revenue every time the phone rings and nobody picks up. Industry data suggests that 50% or more of inbound calls to sports and recreation facilities go unanswered, particularly during peak hours, after-hours, and weekends when staff are managing on-site operations. Each missed call represents a lost registration, a frustrated parent, or a membership inquiry that walks to the competition.

The AI Front Desk Agent is a voice-first, multi-channel AI system that acts as an always-on extension of a facility's front desk staff. Deeply integrated with Bond's platform (the system of record for schedules, memberships, registrations, payments, and customer profiles), the agent can answer phone calls in natural language, respond to emails and chat messages, and take real actions inside the Bond system — booking classes, answering schedule questions, processing cancellations, handling membership inquiries, and escalating complex issues to human staff with full context.

This is not a chatbot bolted onto a website. This is an AI teammate that knows the facility's programs, policies, pricing, availability, and customer history — and can complete tasks end-to-end, just like a trained front desk employee would.

ServiceTitan has proven this model works at massive scale in home services: their AI Voice Agents handle calls 24/7, book jobs directly to dispatch boards using real-time availability, and have produced a 10% increase in booking rates and 15% drop in abandoned calls across their customer base. Their executive team reports that "some AI agents are outbooking some of our CSRs." Momence has proven the model works for fitness studios with their AI Inbox product at $399/month, handling bookings, cancellations, freezes, and refunds via text channels. Bond has the opportunity to be the first platform to bring voice-first AI to private athletic facilities — combining the depth of ServiceTitan's approach with the recreation-specific context that Momence and Rec Technologies are building toward.

## WHO: Feature Request Origin & Beneficiaries

**Origin:** This initiative is driven by a convergence of signals. Facility operators consistently report staffing challenges at the front desk, particularly during peak programming hours when phones ring most and staff are busiest with in-person check-ins. Bond's largest customers (Chelsea Piers, Toca, Canlan Ice Sports, Palm Beach Skate Zone) have expressed interest in automation solutions that reduce operational burden without sacrificing customer experience. The competitive landscape is accelerating — Momence launched its AI Inbox in 2025, Rec Technologies is building AI teammates for municipal recreation, and ServiceTitan has proven the model works at enterprise scale in adjacent verticals.

**Primary Beneficiaries:**

Facility operators and front desk staff benefit from reduced call volume, fewer repetitive inquiries, and the ability to focus on in-person customer experience rather than being tethered to the phone. Parents and consumers benefit from instant answers at any hour — no hold times, no voicemail, no waiting until Monday morning to find out if there's a spot in Saturday's clinic. Bond benefits from a high-value, recurring-revenue add-on product that deepens platform stickiness, increases facility reliance on Bond as the system of record, and creates a proprietary data moat that compounds over time.

## WHY: Why This Product Should Be Built

**Revenue expansion.** Bond currently monetizes through platform subscriptions and payment processing. The AI Front Desk Agent introduces a new, high-margin recurring revenue stream at $250–500/month per facility ($3,000–6,000/year). Across Bond's 300+ facility base, full penetration at mid-tier pricing would represent $1M+ in incremental ARR. Momence has validated $399/month pricing in the adjacent fitness studio market and has indicated prices will increase as capabilities expand.

**Platform stickiness and competitive moat.** An AI agent that knows a facility's programs, policies, pricing, customers, and availability is nearly impossible to replicate outside the system of record. As ServiceTitan's VP of Product stated: "These kinds of things you can only do if you have deep integrations." Every facility that activates the AI agent becomes exponentially harder to churn — the agent's effectiveness is tied directly to Bond's data layer.

**Market timing.** Nobody in the private athletic facility space has a voice-first AI agent today. Momence offers text-only AI (no live voice). Rec Technologies is building back-office AI agents for municipal recreation (no voice, different ICP). ServiceTitan has proven the model in home services but doesn't serve athletic facilities. Bond has a 12–18 month window to establish the category before adjacent players expand.

**Customer demand signal.** Facilities are already spending money on answering services, virtual receptionists, and overflow call centers that lack any integration with their management software. The AI Front Desk Agent replaces these disconnected solutions with something that actually knows the business.

**Strategic alignment.** This initiative ladders directly to Bond's vision of being the operating system for athletic facilities. The front desk is the most visible, most frequent touchpoint between a facility and its customers. Owning that interaction with AI — powered by Bond data — cements Bond's position as indispensable infrastructure.

## KPIs: What Does Success Look Like?

**Phase 1 (Pilot — Months 1–3 post-launch):**

| Metric                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | How to Measure                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 3 facilities activate AI Front Desk Agent within 60 days of launch                                                                                                                                                                                                                                                                                                                                                                                                               | Track activations in Bond admin; target early adopters from Chelsea Piers, Toca, Palm Beach Skate Zone                          |
| 80%+ of inbound calls answered by the AI are completed end-to-end without escalation. 'Completed end-to-end' = caller issue classified as resolved by agent AND agent performed any requested write (booking/cancellation) or provided the requested factual answer; confirmation email sent; caller survey (sample) satisfaction ≥ 6/10. **To validate: pilot must reach at least 300 AI-handled calls across 3 facilities, or 100 calls per facility, whichever comes first.** | Monitor escalation rate in agent dashboard; compare to total call volume; track resolution classification and post-call surveys |
| Average call answer time under 3 seconds (vs. industry average of 30+ seconds or missed entirely)                                                                                                                                                                                                                                                                                                                                                                                | Telephony platform metrics; compare to pre-activation missed call rates                                                         |
| Net Promoter Score from facility operators of 7+ (out of 10) on agent performance                                                                                                                                                                                                                                                                                                                                                                                                | Post-pilot survey administered by CS team at 30 and 60 days                                                                     |
| Zero critical errors (wrong bookings, incorrect policy information, unauthorized actions)                                                                                                                                                                                                                                                                                                                                                                                        | QA review of all agent interactions during pilot; automated flagging of edge cases                                              |

**Phase 2 (Scale — Months 3–9):**

| Metric                                                                     | How to Measure                                                        |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 50+ facilities active on AI agent                                          | Activation tracking in Bond admin                                     |
| 15%+ increase in registration/booking conversion rate at active facilities | Compare pre/post activation booking rates using Bond transaction data |
| 25%+ reduction in missed calls at active facilities                        | Telephony metrics; before/after comparison                            |
| $150K+ in incremental ARR from AI agent subscriptions                      | Finance tracking of AI agent subscription revenue                     |
| Facility staff report 5+ hours/week saved on phone-related tasks           | Quarterly survey of active facilities administered by CS              |

**Phase 3 (Proactive — Months 9–15):**

| Metric                                                                                                                       | How to Measure                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| 100+ facilities active; AI agent becomes standard part of Bond onboarding                                                    | Activation rate as percentage of total Bond facility base                                                             |
| AI agent handles 70%+ of all inbound facility communications (voice + email + chat)                                          | Multi-channel volume tracking across all communication channels                                                       |
| Measurable revenue recapture: AI identifies and converts 20%+ of "second chance" leads (inquiries that would have been lost) | Track bookings attributed to AI agent interactions that occurred outside business hours or during high-volume periods |
| Retention save flows prevent 10%+ of cancellation attempts                                                                   | Compare cancellation completion rate pre/post save flow activation                                                    |
| $500K+ incremental ARR                                                                                                       | Finance reporting                                                                                                     |
| AI agent NPS of 8+ from end consumers (parents, players)                                                                     | Post-interaction survey sampling                                                                                      |

**Phase 4 (Bond Agents — Months 15–24):**

| Metric                                                                                    | How to Measure                                                                            |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 3+ Bond Agent types active at 25%+ of facilities                                          | Agent activation tracking by type; measure workflow coverage beyond front desk            |
| Operator weekly engagement with Agent Command Center                                      | Track active sessions, directives issued, and agent recommendations reviewed per operator |
| Collections Agent recovers 15%+ of outstanding AR within 30 days of activation            | Track payment recovery rate attributed to agent outreach vs. manual staff follow-up       |
| Program Coordinator Agent fills 20%+ of underenrolled programs through proactive outreach | Compare enrollment velocity pre/post agent activation                                     |
| Bond Agents contributes $300K+ incremental ARR (agent add-on pricing)                     | Finance tracking of Bond Agents subscriptions beyond base front desk agent                |
| Operator satisfaction with AI team: NPS 8+                                                | Quarterly survey of Bond Agents customers                                                 |

## HOW: High-Level Approach

### Strategic Architecture Decision: Own the Data & Business Logic, Buy the Agentic Layer

**Hybrid approach with parallel de-risking:** Build the Agent API and business logic layer (Bond's moat is being the system of record), build or partner for voice infrastructure and agentic orchestration (commodity), pilot with Bland to validate at scale while building in parallel.

**Decision trigger (binding):** After 60 days, evaluate: (1) Can Bland handle mass configuration updates efficiently? (2) Is our Agent API stable and serving the orchestration layer reliably? (3) What's the cost-per-facility delta between vendor orchestration and building our own? Use these answers to commit to one path or continue hybrid.

**Migration path:** If we need to replace vendor orchestration, we'll own: data export/import, pathway definitions as structured JSON, agent API contracts. This ensures we're never locked in.

Build a voice-first AI agent that sits on top of Bond's existing data layer, leveraging real-time access to facility schedules, program catalogs, membership records, customer profiles, pricing, and facility-specific policies. The agent will use a hybrid architecture — Bond's proprietary Agent API and business logic layer, accessed by an agentic orchestration layer (vendor or open framework) on top of foundation model infrastructure (speech-to-text, LLM reasoning, text-to-speech) — to handle natural language conversations across phone, email, and chat channels.

The approach is phased: start with inbound voice (the highest-impact, most underserved channel), expand to email and chat with action-taking capabilities, then make the agent proactive, and ultimately expand from a single AI front desk agent to **Bond Agents** — a full ecosystem of role-specific AI agents that superhumanize workflows across the entire facility. Each phase deepens Bond's position as the operating system for athletic facilities — from answering questions (Phase 1) to booking and modifying registrations (Phase 2) to proactive outreach and retention (Phase 3) to a managed AI team with a command center, role-specific agents for collections, program coordination, events, and rentals, and back office intelligence (Phase 4).

Facility administrators configure the agent through a plain-English setup interface (inspired by Momence's customization UX) — writing policies, tone guidelines, and exception rules the way they'd train a new front desk hire. No code, no decision trees, no technical setup required.

---

# II. Solution Alignment

## Market Opportunity & Competitive Landscape

### The Problem in Numbers

The athletic facility industry operates on thin margins with high customer acquisition costs. A single missed call from a parent inquiring about a hockey clinic, a prospective member asking about pricing, or an existing customer trying to reschedule can represent $50–500+ in lost revenue. Multiply by hundreds of calls per week across peak seasons, and the revenue leak is substantial.

Facilities today rely on a patchwork of solutions: part-time front desk staff who are simultaneously checking people in and answering phones, generic answering services that can only take messages, voicemail boxes that go unchecked, and website FAQ pages that don't answer specific questions about availability or pricing. None of these solutions can actually do anything — they can't check if there's a spot in the 4pm hockey clinic, they can't tell a parent what their kid's schedule looks like next week, and they can't process a cancellation according to the facility's specific policy.

### Competitive Landscape

**ServiceTitan (Home Services — Benchmark, Not Competitor)**

ServiceTitan (NASDAQ: TTAN, ~$9B market cap, $916M TTM revenue) has built the gold standard for AI voice agents in vertical SaaS. Their Contact Center Pro product features AI Voice Agents that answer calls 24/7, trained on hundreds of millions of real service calls. Key proof points: Gulfshore AC's AI agent "Finn" booked a $1,185 repair job within two weeks of deployment — the customer didn't realize they were speaking to AI for 60 seconds. Across their customer base, ServiceTitan reports a 10% increase in booking rates, a 15% drop in abandoned calls, and a 37% recapture rate on previously unbooked leads through their Second Chance Leads feature. Their AI Voice Agents use "Adaptive Capacity" to check real-time technician availability and book directly to the dispatch board — the equivalent of Bond's agent checking real-time schedule availability and booking directly into the system. ServiceTitan's approach validates every core architectural decision in this PRD: voice-first, deeply integrated with the system of record, phased from reactive to proactive, and sold as a premium add-on.

**Momence (Fitness Studios — Adjacent Competitor)**

Momence (acquired by Clubessential Holdings Jan 2025, serving 4,500+ fitness studios) launched AI Inbox, the closest existing product to what Bond is building, though text-only. Priced at $399/month per location, it handles bookings, cancellations, membership freezes, refunds, lead qualification, and FAQ responses across email, SMS, and in-app messaging. Momence's AI reads from the entire system — class descriptions, membership terms, cancellation policies — and takes real actions (not just answering questions). Their customization approach uses plain-English prompts where studio owners write instructions like training a new hire, with category-specific policy blocks (Memberships, Classes, Appointments) containing if/then logic and exception handling. Key gap: no live voice capability. They are developing voicemail transcript reading (AI reads voicemail and takes action), but this is fundamentally different from answering the phone in real-time. A parent calling about their kid's hockey schedule won't leave a voicemail and wait for a text back. Momence's acquisition by Clubessential (parent of ClubReady, Exerp, myFitApp) means more resources could be directed at expanding AI capabilities across their portfolio.

**Rec Technologies (Municipal Recreation — Adjacent)**

Rec Technologies (Series A, $11M, SF-based) is building "AI Teammates" for municipal Parks & Recreation departments. Their Refund Agent processes cancellations and refunds based on city-specific policies, with human escalation for unclear cases. They've also built analytics agents and have concept-stage marketing analyst and parent planner agents. Their architecture philosophy mirrors Bond's approach: agents deeply connected to the core system, not bolted-on chatbots, with human-in-the-loop supervision. Key differences: different ICP (city government vs. private facility operators), no voice capability (back-office automation focus), and earlier stage (~50 communities served). Worth monitoring if they expand to private facilities or add voice.

**Generic AI Voice Solutions (Retell, Bland, Vapi, etc.)**

A growing ecosystem of AI voice infrastructure providers offers APIs for building voice agents. These can handle the telephony and speech layers but lack any recreation or facility management context. A facility could theoretically hire an agency to build a custom voice agent using these tools, but it would require extensive custom integration work, would not have access to Bond's data layer, and would be expensive to maintain. This is the "buy vs. build" alternative that some tech-forward facilities might explore — Bond's advantage is that the agent is native to the platform and requires zero technical setup.

**Competitive Positioning Summary:**

| Company                         | ICP                             | AI Capabilities                                                 | Live Voice             | Pricing                   | Threat Level                              |
| ------------------------------- | ------------------------------- | --------------------------------------------------------------- | ---------------------- | ------------------------- | ----------------------------------------- |
| ServiceTitan                    | Home services contractors       | Full AI suite: voice agents, SMS booking, dispatch optimization | ✅ Live, 24/7          | Contact Center Pro add-on | Benchmark (different vertical)            |
| Momence                         | Fitness studios, gyms, spas     | AI Inbox: booking, cancellation, freezes, refunds via text      | ❌ Text only           | $399/mo per location      | Medium-High (closest ICP, no voice)       |
| Rec Technologies                | Municipal parks & rec           | Refund agent, analytics, marketing analyst                      | ❌ None                | Included in platform      | Medium (different ICP, early stage)       |
| Generic Voice AI (Retell, etc.) | Horizontal                      | Voice infrastructure, no domain context                         | ✅ Infrastructure only | Variable (usage-based)    | Low (no integration, no domain knowledge) |
| **Bond Sports**                 | **Private athletic facilities** | **Planned: Voice + email + chat, fully integrated**             | **🎯 Voice-first**     | **$250–500/mo target**    | **—**                                     |

**Bond's Strategic Window:** No one in the private athletic facility space has a voice-first AI agent. ServiceTitan proved it works for home services. Momence proved text AI works for fitness at $399/month. Rec Technologies is building the same agent architecture for municipal recreation. Bond has a clear 12–18 month window to own voice-first AI for private athletic facilities before adjacent players expand into the space.

---

## Build vs. Buy Analysis

We've spent significant time evaluating this question — meeting with vendors, building prototypes, and researching how companies like ServiceTitan have approached similar problems. Here's what we've learned.

### What We've Done So Far

- Built a chatbot prototype for Palm Beach Skate Zone using scraped website content + Bond schedule data. Learned that voice is far more important than chat for our use case — consumers call, they don't chat.
- Built architecture concepts using ElevenLabs conversational AI + agent APIs
- Evaluated Intercom Fin for B2B2C (already use Intercom for B2B support)
- Evaluated Decagon
- Evaluated Bland AI
- Evaluated EmbedReach (embedreach.com — embedded marketing suite for VSaaS with Voice AI Receptionist)
- Evaluated SidePilot
- Met with Blank Metal (applied AI consultancy)

### Option A: Build In-House (using ElevenLabs + LLM APIs)

**Approach:** Use ElevenLabs for voice and text infrastructure (STT, TTS, Chat Mode, phone integration via Twilio/SIP). Use a frontier LLM (Claude, GPT) for reasoning. Build our own agent orchestration layer, knowledge base management, and staff dashboard. Build the Bond Agent API layer.

**Pros:**

- Full control over the Agent API and business logic — Bond's proprietary differentiation as the system of record (note: the orchestration layer itself is increasingly commodity and less of a differentiator)
- Deep integration with Bond data and business logic
- No per-seat or per-conversation vendor costs beyond API usage
- Can evolve at our own pace as models improve
- Own the customer experience end-to-end
- Matt's perspective: "The orchestration layer, the reasoning engine — we need to own that. That's what makes it proprietary and creates long-term differentiation."

**Cons:**

- Significant engineering investment (agent API, orchestration, dashboard, knowledge base management)
- Voice AI is extremely hard to get right in production (as Bland AI noted: "getting something demoable is easy, getting something that works in production is extremely difficult")
- Ongoing maintenance of prompt engineering, eval systems, and quality monitoring
- Need to build phone number provisioning, call routing, SMS, email delivery
- Risk of underestimating the difficulty and timeline

**Estimated effort:** 2-3 engineers for 3-6 months for MVP (voice + basic schedule queries for a handful of facilities). Ongoing 1-2 engineers for maintenance and expansion.

**Estimated cost:** Engineering time + ElevenLabs usage (~$0.10-0.30/min) + LLM API costs + Twilio

### Option B: Vendor Platform (Bland AI, Decagon, SidePilot, etc.)

**Bland AI:**

- Purpose-built for voice. Claims to own their own voice model (not wrapping OpenAI/Anthropic) which they say reduces latency and hallucination vs. competitors.
- Single-tenant model per customer, but supports creating separate "personas" and "pathways" per facility under one Bond account. This addresses our multi-tenancy need at the configuration level.
- Pathways system: visual workflow builder where each node in a conversation has its own prompt, context, and logic. Deterministic steps (e.g., legal disclosures) can be forced. Supports loop conditions (won't proceed until authentication is complete).
- Supports live call monitoring during implementation for real-time fine-tuning.
- Can take actions via integrations/webhooks — booking, payment processing, etc.
- Citation/reporting system flags gaps (questions the agent couldn't answer) for iterative improvement.
- Pricing is flexible: per-minute, per-resolution, per-contact, flat fee per facility. They're willing to structure a deal that works for our resale model.
- **Key concern:** mass updates. If we create a pathway and replicate it across 300 facilities, then need to add a refund capability, do we have to update each one individually? Bland's sales rep couldn't answer definitively — punted to implementation team.
- ~$30M ARR, 155% net retention. Work with JP Morgan (home lending lead gen), Gallup (polling), Enterprise Rent-A-Car, Houston Texans.
- Would provide an FDE (forward-deployed engineer) to build out initial pathways and train our team.

**Decagon:**

- Full multi-modal support (voice, chat, email)
- Agent Operating Procedures (AOPs) written in plain English — no visual workflow builder, which could be easier for non-technical facility staff
- Knowledge base integration, QA/monitoring, A/B testing, custom analytics
- Voice demo showed authentication, multi-step workflows, tool calls
- Concern: pricing. Contract minimums seemed extremely high, may not fit our ICP yet. More enterprise-oriented.
- Multi-tenant implementation approach was being researched — not a solved problem on their end.

**EmbedReach (embedreach.com):**

- Embedded marketing suite for vertical software platforms (VSaaS). Full suite includes: automated paid ads, email/SMS automation, revenue attribution, reputation management, Voice AI Receptionist, and two-way messaging.
- Voice AI answering system is live and production-ready:
  - Pre-trained with business info (hours, locations, pricing, services)
  - Handles 80% of common questions automatically
  - Call forwarding logic for complex cases
  - Full transcripts and AI summaries post-call
  - SMS version launching in weeks
  - Can integrate with APIs for reservations/cancellations if endpoints exist
- Reputation management module: Google Business Profile monitoring, automated review solicitation (40x higher SMS response rates vs email), AI-crafted review responses.
- Integration approach: Two main integration points — (1) UI iframe embedding (low dev effort), (2) Data sync for customer contact info and transaction data. Alternative: can pull directly from existing Snowflake warehouse via recurring cron jobs, reducing Bond development burden.
- Phased rollout: Most partners start with single SKU (reputation management requires minimal Bond integration). Shared data sync enables incremental product additions.
- Strengths: Embedded model designed for VSaaS platforms, can monetize as add-on revenue stream, pulls from Snowflake reduces integration work, reputation management is strong differentiator.
- Weaknesses: More of a marketing suite than dedicated AI agent platform. Voice AI is one component among many. Integration requires data sync setup. Timing considerations: League/class purchases happen before service delivery — need automated triggers (time delta after purchase) vs immediate solicitation.

**SidePilot:**

- Primarily outbound/appointment booking agents for fitness industry (F45, independent gyms, big box)
- Has chat, SMS, email — phone receptionist was in development at time of demo
- Strengths: appointment booking, lead nurture, cancellation save flows, payment recovery
- White-label capable with master admin view for multi-tenant management
- Integrates with MindBody, HubSpot, etc. — would need to build Bond integration
- Less focused on the pure "receptionist/support" use case; more on sales/retention workflows
- Voice agent wasn't mature enough for our primary use case at the time

**Intercom (Fin):**

- Already use Intercom for B2B support. Fin has been effective for our own customer support.
- Met with Intercom leadership about B2B2C use case. They were interested and brainstormed approaches — shadow Intercom accounts per facility, procedures for sub-agent workflows, etc.
- Key blockers: multi-tenancy is not natively supported. Would require separate workspace or brand per facility — costly and unwieldy at 300+ locations. Jordan (Intercom) acknowledged this.
- Voice capabilities are early. Their own assessment: phone is a harder problem, latency challenges, human callers behave differently than chat users.
- Intercom's strength is chat-first. For our voice-first use case, it's a mismatch.
- Potential future play: if Intercom solves multi-tenancy and voice matures, could be interesting. For now, not the right fit for this specific product.

**Blank Metal (Consultancy):**

- Applied AI engineering firm. Formal partners with Anthropic, Vercel, soon OpenAI. Senior team, not an offshore body shop.
- Engagement model: AI strategist (half-time) + AI engineer (full-time), sold by sprint ($30-50K per sprint).
- Positioned as "we embed with your team, help you build it, then you take over." Not a long-term vendor dependency.
- Good fit if we go the build route and want expert guidance on architecture, agent design, and eval systems.
- Referenced similar multi-tenant work with Parallax (pricing/resourcing agent) and Total Expert (voice work for mortgage lenders).
- Key insight from their pitch: "The really cool problems are applied AI problems — how do you apply technology from ElevenLabs and Anthropic into a custom solution that sits on a well-defined dataset."

### Comparative Summary

| Dimension                     | Build (ElevenLabs + LLM)                      | Bland AI                            | Decagon              | SidePilot                       | Intercom                      | EmbedReach                                                  |
| ----------------------------- | --------------------------------------------- | ----------------------------------- | -------------------- | ------------------------------- | ----------------------------- | ----------------------------------------------------------- |
| Voice quality                 | Good (ElevenLabs)                             | Strong (own model)                  | Good                 | In development                  | Early                         | Production-ready (handles 80% of questions)                 |
| Multi-tenancy                 | We control                                    | Persona/pathway per facility        | Researching          | Master admin view               | Not supported at scale        | Per-tenant setup (embedded VSaaS model)                     |
| Multi-modal                   | Build each channel                            | Phone, email, text, chat            | Voice, chat, email   | Chat, SMS, email (phone coming) | Chat, email (phone early)     | Phone, SMS (coming), email, reputation                      |
| Action-taking                 | Full control via our APIs                     | Via integrations/webhooks           | Via tool calls       | Via CRM integrations            | Via procedures/APIs           | Via API integration (if endpoints exist)                    |
| Mass updates at scale         | We control                                    | Unclear — key risk                  | Unknown              | Unknown                         | N/A                           | Unknown (embedded model)                                    |
| Customization per facility    | Full                                          | Pathway + persona                   | AOPs per facility    | Per-client config               | Limited                       | Per-tenant config                                           |
| Time to first pilot           | 3-6 months                                    | 4-8 weeks                           | 4-8 weeks            | 4-8 weeks                       | Months (multi-tenant blocker) | 4-6 weeks (UI iframe + data sync)                           |
| Production readiness timeline | 6+ months (voice is hard)                     | 2-3 months (with FDE)               | 3-4 months           | 2-3 months (voice immature)     | Not viable (multi-tenancy)    | 2-3 months (voice live, data sync required)                 |
| Ongoing cost                  | Engineering time + API usage                  | Per-facility or usage-based         | Enterprise contract  | Per-facility                    | Per-workspace                 | Embedded model (Bond monetizes as add-on)                   |
| Long-term differentiation     | High — we own the data layer & business logic | Low — vendor dependency             | Low                  | Low                             | Medium (already embedded)     | Medium (embedded partnership, can monetize)                 |
| Risk                          | Underestimate complexity                      | Vendor lock-in, mass update concern | Pricing/ICP mismatch | Voice immaturity                | Multi-tenancy unsolved        | Marketing suite focus vs voice-first; data sync integration |

### Recommendation

**Hybrid approach with parallel de-risking: Own the data and business logic, build or partner for the agentic layer, pilot with Bland.**

Matt framed it well: "I think of the vendor more as the wrapper than the intelligence itself. If there's a tool that allows us to easily provide phone numbers and connect to people's email and provide the interface — that's the stuff I don't want to build. But the orchestration layer, the reasoning engine — we need to own that."

**Our updated perspective:** On reflection, Bond's moat is not the agentic orchestration layer itself — managing conversation state, orchestrating LLMs, and reasoning over turns are increasingly commoditized capabilities that vendors do well. Bond's true moat is being the **system of record** and owning the **business logic**. The Agent API (structured, permissioned access to Bond's data) and the policy engine (facility-specific rules, workflows, and exception handling) are what make Bond's AI agent impossible to replicate outside the platform. A competitor can swap in a different orchestration vendor; they cannot replicate Bond's data layer or the business logic that governs how facilities actually operate.

**Our recommendation:**

1. **Build the Bond Agent API layer** — this is the critical investment and the core of Bond's moat. Purpose-built endpoints that give any AI agent structured, permissioned access to Bond's data (schedules, registrations, memberships, customer profiles, policies, pricing).
2. **Build the policy and business logic engine** — facility-specific rules, cancellation policies, refund workflows, escalation logic, and exception handling. This is Bond's proprietary domain knowledge codified into software. No vendor can replicate this.
3. **Build or partner for the agentic orchestration layer** — conversation state management, LLM orchestration, intent routing, and multi-turn reasoning. These capabilities are increasingly commodity. Vendors like Bland, Decagon, or a build using frameworks like LangGraph can handle this; Bond's value is in the data and logic the orchestrator calls into, not the orchestrator itself.
4. **Use ElevenLabs (or similar) for voice and text infrastructure** — STT, TTS, Chat Mode, phone integration. Don't build a voice stack.
5. **Use Twilio for telephony** — phone number provisioning, call routing, SMS.
6. **Consider Blank Metal for an initial sprint** — accelerate architecture decisions and get expert guidance on agent design patterns. Hand off to our team for ongoing development.
7. **Run a 60-day parallel pilot with Bland AI** — Start with 1-2 facilities on Bland while building the Agent API in parallel. This de-risks the timeline and tests the mass update concern in production. If Bland's configuration management at scale proves viable, we can expand. If the mass update issue becomes real (updating 300 pathways individually), we'll have already built the foundation to swap in our own orchestration layer or move to a different vendor.

**Decision trigger:** After 60 days, evaluate: (1) Can Bland handle mass configuration updates efficiently? (2) Is our Agent API stable and serving the orchestration layer reliably? (3) What's the cost-per-facility delta between vendor orchestration and building our own? Use these answers to commit to one path or continue hybrid.

**Rationale:**

- Voice infrastructure (STT/TTS/telephony) is a solved problem — don't reinvent it
- Agentic orchestration (conversation state, LLM routing, intent classification) is increasingly commodity — vendors handle this well, and Bond's differentiation doesn't live here
- Bond's moat is the **system of record** and **business logic** — the Agent API and policy engine are what make the AI agent effective, and no vendor or competitor can replicate them
- Frontier models are good enough without fine-tuning; we don't need a custom model
- Multi-tenancy is a first-class requirement that most vendors struggle with — building the data and policy layer gives us control where it matters
- We want to evolve this into **Bond Agents** — a family of role-specific agents (collections, program coordinator, events, rentals) with a unified command center where operators manage their AI team. Owning the API and business logic layer gives us that flexibility regardless of which orchestration layer we use
- The cost of building is engineering time we'd invest anyway in the Agent API layer — this is the highest-leverage investment
- A Bland pilot gets us real customer feedback faster while building the Agent API in parallel reduces long-term risk

### Open Questions & Discovery Needed

1. **Pricing model validation:** Target is $399/month (matching Momence's proven pricing in adjacent market). Discovery needed: price sensitivity testing with 3 pilot candidates, willingness-to-pay at $299 vs $399 vs $499, and whether usage-based tiers (call volume) create value or complexity.
2. **Phone number strategy:** New number per facility vs. integrating with existing number? SIP trunking vs. Twilio? Customers are not tech-savvy — simpler is better. Discovery needed: pilot with both approaches, measure setup friction and consumer behavior.
3. **Knowledge base ownership:** Do we manage it centrally (forward-deployed), let facilities self-serve, or hybrid? Risk of facilities degrading quality if given too much control. Discovery needed: test self-serve with 2-3 pilot facilities, measure quality drift over 60 days.
4. **API development resourcing:** Who builds the Agent API layer and how quickly? This is the critical path. Discovery needed: engineering team allocation, timeline estimate with specific milestones.
5. **Eval system design:** How do we systematically measure and improve quality? LLM-graded evals + human review is the likely answer, but needs design. Discovery needed: eval framework design, automated quality scoring system.
6. **Pilot facility selection:** Which customer(s) do we start with? Need someone engaged, willing to iterate, and representative of a common facility type. Discovery needed: identify 3-5 champion customers (suggest: Chelsea Piers, Toca, one hockey rink, one soccer facility).
7. **Cost per call economics:** Estimated $0.10-0.30/minute for voice infrastructure + $0.05-0.15 per call for LLM inference. At 200 calls/month averaging 3 minutes each, cost is $90-270/month. Discovery needed: validate with production data from Bland pilot, set target gross margin.

---

## User Personas

### Persona 1: Facility Operator / General Manager — "Sarah"

Sarah runs a multi-sport athletic facility with ice rinks, turf fields, and court space. She manages 15 staff members, oversees 200+ programs per season, and handles $3M+ in annual revenue through Bond. Her front desk staff are perpetually stretched — during peak hours (3pm–8pm weekdays, all day weekends), they're simultaneously checking in walk-ups, answering the phone, processing registrations, and handling parent questions. The phone rings 50–100 times per day. She estimates 30–40% of calls go to voicemail during busy periods. She's tried a virtual receptionist service but they could only take messages — they couldn't actually answer questions about schedule availability, pricing, or policies because they had no access to Bond.

Sarah wants an AI agent that: answers every call instantly, knows her facility's programs and policies, can actually book registrations and answer schedule questions, escalates complex issues to her team with context, and requires minimal setup and maintenance.

### Persona 2: Parent / Consumer — "Mike"

Mike is a hockey dad with two kids in different age groups at a local facility. He's trying to register his 10-year-old for a spring skills clinic while also checking if his 7-year-old's learn-to-skate schedule changed. He calls the facility at 6:30pm on a Tuesday — the busiest time of day. Today, he gets voicemail. He tries again the next morning from his office but can't get through. By the time he connects with someone, the clinic is full.

Mike wants: to call the facility and get an immediate answer, to ask natural questions ("is there still space in the U10 spring clinic?"), to complete his registration over the phone without going to a computer, and to get accurate schedule information for both kids in one call.

### Persona 3: Front Desk Staff — "Jenna"

Jenna works part-time at the front desk. She's great with in-person interactions but dreads the phone — she can never find the right information fast enough while someone is waiting in front of her, and she frequently has to put callers on hold or take messages. She handles the same 10 questions 80% of the time: "What time is my kid's practice?", "Is there space in X program?", "What's the cancellation policy?", "How much is a membership?"

Jenna wants: fewer phone calls so she can focus on the people in front of her, confidence that callers are getting accurate information, and to only handle the calls that actually need a human (complaints, complex situations, VIP customers).

### Persona 4: Bond Sports (Internal) — "The Platform"

Bond needs a product that: creates a new high-margin revenue stream, deepens platform stickiness so facilities can't churn, generates proprietary data (call patterns, common inquiries, conversion rates) that improves the product over time, positions Bond as the clear technology leader in athletic facility management, and scales across 300+ facilities with minimal incremental operational cost per facility.

---

## Key Features Matrix

### Phase 1: Intelligent Answering — "The AI That Knows Your Facility" (MVP)

| Feature                              | Description                                                                                                                                                               | Priority         | Size | Phase   |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---- | ------- |
| Inbound Voice Handling               | AI answers inbound phone calls with natural, human-like conversation. Configurable greeting, facility-specific voice personality.                                         | P0 — Must Have   | L    | Phase 1 |
| Schedule & Availability Queries      | Agent accesses real-time Bond data to answer questions about program schedules, class times, availability, and waitlist status.                                           | P0 — Must Have   | M    | Phase 1 |
| Pricing & Program Information        | Agent provides accurate pricing, program descriptions, age requirements, skill levels, and prerequisite information pulled from Bond.                                     | P0 — Must Have   | M    | Phase 1 |
| Facility Policy Knowledge            | Agent knows and communicates facility-specific policies: cancellation rules, refund policies, late arrival policies, weather cancellation procedures.                     | P0 — Must Have   | M    | Phase 1 |
| Customer Recognition                 | Agent identifies returning customers by phone number, greets by name, and has context on their active registrations, memberships, and history.                            | P1 — Should Have | M    | Phase 1 |
| Human Escalation                     | Seamless warm transfer to human staff with full conversation context (transcript + intent summary). Configurable escalation triggers (sentiment, topic, VIP customers).   | P0 — Must Have   | M    | Phase 1 |
| Facility Admin Configuration Portal  | Plain-English setup interface where facility admins configure policies, tone, FAQs, escalation rules, business hours, and custom instructions — like training a new hire. | P0 — Must Have   | L    | Phase 1 |
| Conversation Dashboard               | Admin-facing dashboard showing all AI conversations: transcripts, outcomes, escalation reasons, sentiment scores, call volume patterns.                                   | P1 — Should Have | M    | Phase 1 |
| Multi-Sport / Multi-Facility Support | Agent supports facilities with multiple sports, programs, and locations under one Bond account. Each facility/location can have unique configurations.                    | P0 — Must Have   | M    | Phase 1 |
| After-Hours & Overflow Routing       | Configurable routing: AI answers all calls, AI answers only after-hours/overflow, AI answers only when hold time exceeds threshold.                                       | P1 — Should Have | S    | Phase 1 |

### Phase 2: Action-Taking — "The AI That Does Things" (Post-MVP)

| Feature                              | Description                                                                                                                                                                    | Priority         | Size | Phase   |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- | ---- | ------- |
| Registration & Booking               | Agent can complete class/program registrations, book facility rentals, and add customers to waitlists — all within the phone call.                                             | P0 — Must Have   | L    | Phase 2 |
| Cancellation Processing              | Agent processes cancellations according to facility-specific policies, applies appropriate fees or credits, handles exceptions (illness, hardship) per admin-configured rules. | P1 — Should Have | M    | Phase 2 |
| Membership Inquiries & Modifications | Agent handles membership questions, processes freezes, and initiates cancellations with notice period enforcement.                                                             | P1 — Should Have | M    | Phase 2 |
| Payment Collection                   | Secure payment processing within the call for registrations, outstanding balances, and membership payments. PCI-compliant tokenized payment handling.                          | P1 — Should Have | L    | Phase 2 |
| Email Channel                        | Agent handles inbound emails with the same knowledge and action-taking capabilities as voice. Auto-responds or drafts responses for staff review.                              | P1 — Should Have | M    | Phase 2 |
| SMS / Chat Channel                   | Agent handles text-based inquiries via SMS and web chat with the same capabilities.                                                                                            | P2 — Could Have  | M    | Phase 2 |
| Confirmation & Follow-Up Messages    | After completing actions, agent sends confirmation emails/SMS with registration details, calendar invites, policy reminders.                                                   | P1 — Should Have | S    | Phase 2 |

### Phase 3: Proactive Intelligence — "The AI That Anticipates" (Future)

The front desk agent evolves from reactive to proactive — anticipating needs, recovering lost revenue, and driving growth without waiting for the phone to ring. Still one agent, but dramatically smarter about when and how to engage.

| Feature                             | Description                                                                                                                                                                                                                                                                                                             | Priority        | Size | Phase   |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---- | ------- |
| Second Chance Leads                 | AI reviews all unanswered calls and unresolved inquiries, flags high-potential leads for follow-up — modeled on ServiceTitan's 37% recapture rate feature.                                                                                                                                                              | P2 — Could Have | M    | Phase 3 |
| Proactive Outreach                  | AI initiates outbound calls/messages for: waitlist openings, schedule changes, registration reminders, membership renewal approaching, re-engagement of lapsed customers.                                                                                                                                               | P2 — Could Have | L    | Phase 3 |
| Retention & Save Flows              | Detects at-risk members (missed classes, declining usage, upcoming contract end). Runs cancellation save flows when customers call to cancel — applies retention playbooks configured by the facility before processing. Proactively reaches out with personalized save offers, pause options, or alternative programs. | P2 — Could Have | L    | Phase 3 |
| Cross-Sell & Upsell Recommendations | During conversations, AI recommends relevant programs, memberships, or add-ons based on customer profile and facility offerings.                                                                                                                                                                                        | P2 — Could Have | M    | Phase 3 |
| Multi-Language Support              | Agent handles conversations in Spanish and other languages common in facility service areas.                                                                                                                                                                                                                            | P2 — Could Have | L    | Phase 3 |
| Analytics & Insights Dashboard      | Advanced analytics: conversion funnels, common inquiry topics, peak call patterns, revenue attributed to AI interactions, customer satisfaction trends.                                                                                                                                                                 | P2 — Could Have | M    | Phase 3 |

### Phase 4: Bond Agents — "Your AI Team" (Vision)

Phase 4 is the platform expansion from a single AI front desk agent to **Bond Agents** — a managed ecosystem of role-specific AI agents that superhumanize workflows across the entire facility. Each agent shares Bond's data layer and policy engine (the moat), but is purpose-built for a specific operational function. Operators interact with their AI team through a unified command center — directing, supervising, and collaborating with agents the way they'd manage human staff.

This is where Bond's system-of-record advantage compounds: every agent is only as good as the data and business logic it has access to. A competitor can build a collections bot or a party booking chatbot — but without Bond's customer records, registration history, policy engine, and real-time schedule data, those tools are generic and disconnected. Bond Agents are effective because Bond is the source of truth.

**Operator Experience:**

| Feature                        | Description                                                                                                                                                                                                                                                                                                                          | Priority        | Size | Phase   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | ---- | ------- |
| Agent Command Center           | Unified dashboard where operators see all active agents, their activity, decisions made, escalations pending, and performance metrics. Single pane of glass for the AI team. Think: a staffing board, but for your AI workforce.                                                                                                     | P2 — Could Have | L    | Phase 4 |
| Operator ↔ Agent Communication | Natural language interface where operators can direct, query, and supervise their agents. "What's our AR status this month?" "Pause outreach to the Smith family." "Fill the spring soccer clinic — reach out to last year's participants first." Agents can proactively surface recommendations and ask for approval before acting. | P2 — Could Have | L    | Phase 4 |
| Agent-to-Agent Handoffs        | Agents coordinate with each other through Bond's shared data layer. Front desk agent detects a retention risk during a call and flags the retention save flow. Program coordinator agent fills a newly opened spot and triggers outreach. Collections agent resolves a balance and front desk agent knows on the next call.          | P2 — Could Have | M    | Phase 4 |

**Role-Specific Agents (powered by Bond Agent API):**

| Feature                      | Description                                                                                                                                                                                                                                                                                                        | Priority        | Size | Phase   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | ---- | ------- |
| Collections & AR Agent       | Follows up on failed payments, outstanding balances, and expired payment methods via SMS, email, and voice. Negotiates payment plans within admin-configured parameters. Escalates hardship cases to staff. Replaces the uncomfortable "chasing parents for money" task that front desk staff dread.               | P2 — Could Have | M    | Phase 4 |
| Program Coordinator Agent    | Monitors enrollment levels and proactively fills underenrolled programs by reaching out to waitlisted families, past participants, and age-appropriate prospects. Handles instructor/coach substitution notifications, communicates schedule changes to affected families, and manages cascading reschedules.      | P2 — Could Have | L    | Phase 4 |
| Events & Party Booking Agent | Handles birthday party and event inquiries end-to-end: availability checks, package selection, deposit collection, confirmation, and pre-event reminders. Follows up on abandoned inquiries. Coordinates add-ons (food, decorations, extra time). Currently a high-touch, phone-heavy workflow at most facilities. | P2 — Could Have | M    | Phase 4 |
| Rental Coordinator Agent     | Manages facility rental inquiries (ice time, field rentals, court bookings) for teams, leagues, and organizations. Checks real-time availability, sends quotes, handles hold requests, and follows up on unsigned contracts. Manages recurring rental relationships and seasonal rebooking.                        | P2 — Could Have | M    | Phase 4 |

**Back Office Intelligence:**

| Feature                         | Description                                                                                                                                                                                                                                                  | Priority                       | Size | Phase   |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ | ---- | ------- |
| Demand & Staffing Intelligence  | Analyzes registration trends, call patterns, and historical data to predict demand spikes, recommend staffing levels, and surface pricing optimization opportunities. "Tuesday 4pm hockey clinics fill 3x faster than Thursday — consider adding a session." | P3 — Won't Have (this release) | L    | Phase 4 |
| Compliance & Operations Agent   | Tracks waiver expirations, coach/instructor certification renewals, and safety requirement gaps. Proactively flags compliance issues before they become problems. Can auto-notify affected families and staff.                                               | P3 — Won't Have (this release) | M    | Phase 4 |
| Automated Operational Reporting | Agents generate weekly/monthly facility performance summaries: revenue trends, attendance patterns, program utilization, and anomaly detection. Delivered to operators via the command center or email digest.                                               | P3 — Won't Have (this release) | M    | Phase 4 |

### Out of Scope (For Now)

| Feature                                                    | Reason                                                                                                                                                                         |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Outbound cold calling / sales prospecting to net-new leads | Regulatory complexity (TCPA), brand risk. Note: outbound to existing customers/contacts (retention, collections, waitlist, schedule changes) is in scope for Phase 3–4 agents. |
| Video or in-app voice                                      | Low demand signal, high complexity, focus on phone-first                                                                                                                       |
| AI-generated marketing content                             | Different product category; stay focused on operational agents                                                                                                                 |
| Referee/official scheduling                                | Separate workflow, not consumer-facing (potential Phase 4+ consideration)                                                                                                      |
| League standings / score reporting by voice                | Future consideration after core agent ecosystem is stable                                                                                                                      |

---

## Technical Architecture

### System Overview

The AI Front Desk Agent is composed of four primary layers that work together to deliver natural, context-aware conversations with real-time access to Bond's data.

**Layer 1: Communication Infrastructure (Buy)**

Telephony (inbound/outbound calls), SMS, and email channel management. This layer handles call routing, audio streaming, and channel-specific protocols. Build on proven infrastructure providers (Twilio, Vonage, or similar) rather than building telephony from scratch. This is commodity infrastructure — Bond's differentiation is not in how calls are routed but in the data and business logic that power what happens during the call.

**Layer 2: Speech Processing (Build/Partner)**

Speech-to-text (STT) converts caller audio to text in real-time with low latency. Text-to-speech (TTS) converts agent responses back to natural-sounding audio. Use best-in-class models from providers like Deepgram, ElevenLabs, or OpenAI Realtime API. This layer must support: sub-500ms latency for natural conversational pacing, accurate recognition of sports terminology ("Zamboni," "power play clinic," facility-specific program names), multiple accents and speaking styles, and barge-in detection (caller interrupting the agent).

**Layer 3: Agent API & Business Logic (Build — This Is Bond's Moat)**

The structured data access and business logic layer that makes any AI agent effective in the context of a specific facility. This is where Bond's true competitive advantage lives — not in orchestrating LLMs, but in being the system of record and encoding the business rules that govern how facilities operate. It comprises: the Agent API (Bond's internal API that gives any AI agent structured, permissioned access to the Bond platform — schedules, registrations, memberships, customer profiles, policies, pricing), a policy engine (facility-specific rules configured by admins that govern what the agent can and cannot do), and a confidence scoring system (determines when to act autonomously vs. escalate to human).

**Layer 3b: Agentic Orchestration (Build/Partner — Commodity)**

The reasoning and conversation management layer that understands intent, routes to the right workflow, and maintains conversation context. This layer is increasingly commoditized and can be sourced from vendors or built using open frameworks. It comprises: an LLM orchestration layer (prompt engineering, context management, conversation memory), a conversation state manager (tracks multi-turn conversations, handles topic changes, maintains context across the call), and intent classification and routing logic. The orchestration layer calls into Bond's Agent API and policy engine — its effectiveness depends entirely on the quality of Bond's data and business logic, which is why the system of record is the moat, not the orchestrator.

**Layer 4: Integration & Data Layer (Build — Extends Bond Platform)**

The Agent API is the critical technical investment. It provides the AI agent with the same data access a human front desk employee would have, but in structured, machine-readable format.

### Agent API v1: Minimal Contract

**Endpoints (readable contract):**

_Phase 1 — Read-only (schedules, programs, customers, policies):_

- `GET /organizations/{id}/schedules?start=...&end=...` — returns events linked to programs, sessions, capacity, waitlist count, lastUpdated timestamp. **SLA: data freshness ≤ 60s.**
- `GET /programs/{id}` — returns description, age ranges, prerequisites, priceId, instructor, richer metadata.
- `GET /customers` — query by `phone={E164}`, `email={email}`, or `firstName={}&lastName={}` (at least one required). Returns canonical customer record, family members, active registrations, outstanding balance, tags (VIP), opt-ins. Email and name lookup support cases where phone isn't on file. **PII: masked for unknown callers.**
- `GET /policies/{category}` — structured policy objects (cancellationWindowHours, refundRules, exceptions) with `policyId`.

_Phase 2 — Write operations (registrations, cancellations):_

- `POST /registrations` — create registration. Requires `agentToken` + `confirmationFlow`. Returns `registrationId`, `status`, `amountCharged`. **All writes logged with `actor=agent`.**
- `POST /cancellations` — accepts `registrationId`, `reasonCode`, `requestedBy`. Returns `refundApplied`, `creditIssued` plus explanation.

**Audit fields required for every call:** `agent_id`, `facility_id`, `request_id`, `confidenceScore`, `humanEscalationReason` (if any).

**Acceptance criteria:** all endpoints respond < 250ms 95%tile; writes are idempotent and logged; RBAC enforces facility scope.

Every Agent API call is logged, permissioned, and auditable. The AI agent operates under a defined permission scope per facility — administrators control exactly what actions the agent can take autonomously vs. what requires human approval.

### Build vs. Buy Decision Framework

| Component                             | Decision         | Rationale                                                                                                                                                                                                                                                       |
| ------------------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Telephony / Call Routing              | Buy              | Commodity infrastructure; Twilio/Vonage are mature and reliable                                                                                                                                                                                                 |
| Speech-to-Text                        | Buy              | Best-in-class models from Deepgram, OpenAI, Google are superior to anything we'd build                                                                                                                                                                          |
| Text-to-Speech                        | Buy              | ElevenLabs, OpenAI TTS deliver human-quality voice; no advantage to building                                                                                                                                                                                    |
| LLM Foundation Model                  | Buy              | Use Claude, GPT-4, or similar; focus engineering on the data layer, not model training                                                                                                                                                                          |
| Agentic Orchestration Layer           | Build/Partner    | Conversation state management, LLM orchestration, and intent routing are increasingly commodity. Vendors or open frameworks (LangGraph, etc.) handle this well. Bond's value is in the data and logic the orchestrator calls into, not the orchestrator itself. |
| Agent API (Bond Data Access)          | **Build — Moat** | Core platform investment and the heart of Bond's competitive advantage. No one else can build structured, permissioned access to Bond's data. This is what makes the AI agent effective.                                                                        |
| Policy & Business Logic Engine        | **Build — Moat** | Facility-specific rules, cancellation policies, refund workflows, and exception handling are Bond's proprietary domain knowledge. This is irreplaceable.                                                                                                        |
| Admin Configuration UI                | Build            | Core product experience; must feel native to Bond                                                                                                                                                                                                               |
| Conversation Dashboard & Analytics    | Build            | Proprietary insights that feed back into product improvement                                                                                                                                                                                                    |
| Confidence Scoring / Escalation Logic | Build            | Domain-specific; determines quality of the entire experience                                                                                                                                                                                                    |

This hybrid approach mirrors ServiceTitan's strategy: their AI agents are powerful because they sit on top of ServiceTitan's system of record — real-time technician availability, job history, customer data, dispatch logic. The data layer and business logic are the moat, not the conversational AI wrapper. Bond's advantage is the same: any orchestration vendor can manage a conversation, but only Bond has the facility data, policies, and business rules that make the conversation useful.

### Security & Compliance

PCI DSS compliance for any payment-related conversations. All call recordings and transcripts stored with encryption at rest and in transit. Facility-level data isolation — AI agent for Facility A never accesses Facility B's data. COPPA considerations given that many facility customers are minors (agent should never collect personal information from callers identified as under 13 without parental context). Configurable AI disclosure — facilities can choose whether and how to disclose that the caller is speaking with an AI agent (recommended: always disclose, with option to transfer to human). State-specific recording consent laws must be handled in call initiation.

### Legal / PCI / Disclosure Runbook

**Legal gating checklist (Pilot must clear):**

- Written legal opinion on state recording consent & AI-disclosure: recommended default = "This call may be answered by an AI assistant. Would you like to continue or speak with someone?" with `opt_out` handling.
- PCI approach: **no raw primary account numbers via agent.** Options: tokenized DTMF + tokenized processing or agent sends secure SMS payment link for completion. Document chosen flow and test with Payment Ops.
- COPPA and minor handling: agent must detect and route if caller is <13 or about a child without parent authentication.
- Data retention policy for recordings: default 90 days for pilot with configurable options.

**Assign Legal + Security owners and make this a gate for pilot activation.**

### Performance Requirements

| Metric                            | Target                                                           |
| --------------------------------- | ---------------------------------------------------------------- |
| Call answer latency               | Less than 2 seconds from ring                                    |
| First response latency (greeting) | Less than 1 second                                               |
| Turn-by-turn response latency     | Less than 800ms (for natural conversational feel)                |
| Uptime                            | 99.9% (agent must be more reliable than human staff)             |
| Concurrent calls per facility     | At least 5 simultaneous                                          |
| Data freshness                    | Real-time (schedule changes reflected within 60 seconds)         |
| Accuracy on factual queries       | 98%+ (schedules, pricing, availability)                          |
| Appropriate escalation rate       | 15–25% of calls (too low = overconfident; too high = not useful) |

### Quality & Eval System

**Eval & Safety system:**

- **Automated signals:** confidenceScore, factualityScore (LLM-graded against Agent API truth endpoints), inconsistency detection (contradictory agent responses), and PII exposure flags.
- **Human sampling:** 5% of calls by default, stratified across escalations/after-hours/first-time callers. Every flagged incident triaged within 24 hours.
- **SLOs:** Factual accuracy on schedule/pricing queries ≥ 98%; critical error rate (wrong booking/payment) = 0 tolerated during pilot; incidents must be remediated and a corrective policy published within 72 hours.
- **Roll-back trigger:** If >2 critical incidents within a rolling 7 days at a facility, auto-disable agent and escalate to CS.

---

## Facility Admin Configuration Experience

Inspired by Momence's plain-English customization approach, the admin experience should feel like training a new front desk employee, not configuring software.

### Policy & Pathway Management Model

**Master → Tenant Inheritance (leave nothing implicit):**

- **Master templates:** Bond owns canonical templates (Booking, Cancellation, Refund, Payment, Waitlist).
- **Facility instance:** Each facility inherits master templates; facility can override fields (e.g., cancellationWindowHours).
- **Versioning & mass update:** Mass update flow must support: (a) create a change at master level, (b) preview diff against instances, (c) select subset of facilities (by tag) to auto-apply, (d) allow roll-back. **Mass update must be scriptable via admin API.**
- **Authoring guards:** Admin editor validates (lint) policies, runs simulated sample dialogs and shows simulation results before saving.
- **Ownership:** Bond CS ships preloaded templates for pilot facilities and offers a managed service (entitlement + FDE) for the first 3 months.

### Configuration Categories

**1. General Settings**

Facility name, phone number(s), business hours, location details. Agent persona (name, voice style, greeting). Operating mode: always-on, after-hours only, overflow only, specific hours.

**2. Brand Voice & Tone**

Plain-English description of how the agent should communicate. Example: "Professional but friendly. We're a family-oriented facility — be warm and helpful. Use the caller's first name. Keep responses concise but don't rush. If someone seems frustrated, be extra empathetic and offer to connect them with a manager."

**3. Program & Schedule Knowledge**

Auto-populated from Bond's existing program catalog. Admins can add supplementary context: "Our 'Mighty Mites' program is for ages 4–6, no skating experience required. Parents should arrive 15 minutes early for the first session for skate fitting. Helmets are provided but players need their own gloves."

**4. Policy Configuration (Per Category)**

Separate instruction blocks for: Registration policies, Cancellation & refund policies (with exception handling for illness, hardship, loyalty), Membership policies (freezes, cancellations, notice periods, early termination), Weather/facility closure procedures, Waitlist management rules, Payment policies (accepted methods, installment plans, outstanding balance handling).

Example policy prompt: "For cancellation requests more than 72 hours before the program start date, issue a full refund. For cancellations within 72 hours but before the program starts, issue a 50% refund or full credit toward a future program — ask the customer which they prefer. For cancellations after a program has started, no refund but offer prorated credit for remaining sessions. Exception: if the customer mentions injury, illness, or a family emergency, escalate to a manager — don't process the cancellation yourself."

**5. Escalation Rules**

Define when the agent should transfer to a human: specific topics (complaints, billing disputes, VIP customers), sentiment thresholds (caller seems angry or frustrated), confidence thresholds (agent isn't sure of the answer), specific customer segments (board members, sponsors, long-tenured members), or explicit request ("I want to talk to a person").

**6. Do / Don't Guidance**

Explicit boundaries: "Do: offer to add callers to waitlists for full programs. Do: mention our referral program if a new customer is registering. Don't: offer discounts or price negotiations — escalate to a manager. Don't: discuss personnel issues or staffing. Don't: share information about other customers."

---

## User Experience Flows

### Flow 1: Inbound Call — Schedule Inquiry (Phase 1)

Caller dials facility number. System routes to AI agent (based on routing rules). Agent answers: "Hi, thanks for calling [Facility Name]! This is [Agent Name], how can I help you today?" Caller: "Hi, I'm wondering if there's still space in the Saturday morning U10 hockey clinic." Agent queries Bond API for program availability. Agent responds: "Yes! The U10 Saturday Skills Clinic still has 4 spots available. It runs from 9am to 10:30am starting March 15th for 8 weeks. Would you like me to register someone?" Caller: "How much is it?" Agent queries pricing. Agent: "It's $320 for the 8-week session. That includes all ice time and instruction. Can I help you get signed up?" Caller: "Let me talk to my wife first. Can you hold a spot?" Agent: "I can't hold spots, but I can add your child to our notification list so you'll get an alert if it starts filling up. Would that help?" Agent confirms, logs interaction, sends follow-up email with program details.

### Flow 2: Inbound Call — Cancellation Request (Phase 2)

Caller dials in, identified by phone number. Agent: "Hi Sarah! Thanks for calling [Facility]. How can I help you today?" Caller: "I need to cancel my daughter Emma's gymnastics class this Saturday." Agent checks: Emma's registration, cancellation policy, timing. Agent: "I can take care of that. Since it's more than 24 hours before the class, there's no cancellation fee. I'll cancel Emma's spot in the Saturday 10am Gymnastics Fundamentals class. Would you like me to rebook her for a different session, or would you prefer a credit on your account?" Caller: "Actually she's been sick all week, can we just get a credit?" Agent recognizes illness exception, applies credit per policy. Agent: "Absolutely, I hope Emma feels better soon! I've applied a class credit to your account. You can use it for any gymnastics class in the next 90 days. Is there anything else I can help with?" Agent logs interaction, applies credit in Bond, sends confirmation email.

### Flow 3: After-Hours Call — New Customer Inquiry (Phase 1)

Call comes in at 9pm, facility closed. Agent answers immediately (no voicemail!). Caller: "Oh, I expected to get voicemail. Um, I'm looking for information about adult basketball leagues." Agent: "Happy to help! We have several adult basketball leagues. Are you looking for recreational or competitive play?" Caller: "Recreational. I haven't played in a while." Agent queries programs. Agent: "Great, our Rec League is perfect for that. We have a Monday night league and a Wednesday night league, both 7pm–9pm. The Monday league starts on April 7th and still has spots on 3 teams. It's $180 per player for a 10-week season. Would you like more details or help getting registered?" Caller: "Can I sign up right now?" Phase 1: "I'd love to help you get started! Let me take down your information and our team will call you back first thing tomorrow to finalize your registration." Phase 2: Agent processes registration on the call.

### Flow 4: Escalation — Frustrated Caller (Phase 1)

Caller identified by phone number. Agent: "Hi David, thanks for calling [Facility]. How can I help?" Caller (frustrated): "I've been trying to get a refund for three weeks and nobody is calling me back." Agent detects frustration sentiment, checks history for open refund/support tickets. Agent: "I'm sorry about that, David. I can see you've been waiting on a refund related to the Spring Soccer Clinic. Let me get you connected with someone who can resolve this for you right away. I'll make sure they have all the details so you don't have to repeat yourself." Agent transfers to human staff with full context: caller name, account details, issue summary, conversation transcript, and flagged priority.

---

## Pilot Plan: Selection & Success Gates

### Pilot Facility Selection (5–10 facilities)

**Choose champions across facility archetypes:**

1. **Large multi-sport entertainment center** (Chelsea Piers - champion)
2. **Mid-sized turf/field facility** (Toca)
3. **Hockey rink** (high schedule complexity)
4. **Gymnastics or skate facility** (complex equipment policies)
5. **Small standalone facility** (test pricing sensitivity)

### Pilot Success Gates (Clear Go/No-Go)

**Day 30: Functional Readiness**

- Agent API live and stable
- Voice routing operational
- Admin UI supports 2 templates minimum
- 50 active calls per facility per week
- Legal signoff in place

**Day 60: Business Readiness**

- 80% resolved calls (per definition above)
- Escalation rate between 15–25%
- NPS ≥ 7 among operators
- Zero critical booking/payment errors
- TCO (cost per call) ≤ 50% of pilot price
- **If Bland pilot:** mass update time for a template change ≤ 5 minutes to push to 90% of facilities using admin API or vendor console

### Cost Economics Model

**Required before pilot:**

- Base cost per call (STT + TTS + LLM inference)
- Pricing tier structure and included minutes
- What happens when calls exceed included minutes
- Gross margin per facility target (Year 1: recommend ≥50%)
- Cost per resolved call target
- Break-even analysis per facility archetype
- Sensitivity analysis: prompt optimization, multi-model vs single model

## Open Issues & Key Decisions

| Issue                                                      | Status                         | Decision Makers           | Description / Resolution                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------- | ------------------------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Voice provider selection (Twilio vs. Vonage vs. other)     | Open                           | PM, Engineering Lead      | Need to evaluate latency, cost, reliability, and integration complexity. Schedule vendor evaluations.                                                                                                                                                                                                 |
| LLM provider strategy (single vs. multi-model)             | Open                           | PM, Engineering Lead      | Single provider (e.g., Claude API) is simpler; multi-model (different LLMs for different tasks) may optimize cost/quality. Recommend starting single, architecting for swap.                                                                                                                          |
| AI disclosure requirements                                 | Open                           | PM, Legal                 | Some states require disclosure that caller is speaking to AI. Recommend always disclosing with option to transfer to human. Need legal review of state-by-state requirements.                                                                                                                         |
| Pricing model: flat fee vs. usage-based vs. hybrid         | Open                           | PM, CEO, Finance          | Flat monthly fee ($250–500) is simplest and predictable for facilities. Usage-based (per call/minute) aligns cost with value but creates unpredictability. Recommend flat fee with tier structure based on call volume.                                                                               |
| Payment processing in voice calls (PCI compliance)         | Open                           | PM, Engineering, Security | Handling credit card info over AI voice calls has PCI implications. May need to redirect to secure payment link via SMS during call. Defer to Phase 2 deep-dive.                                                                                                                                      |
| Data residency and call recording storage                  | Open                           | PM, Engineering, Legal    | Call recordings contain PII. Need to define retention policies, storage location, access controls. GDPR considerations for any Canadian facilities (PIPEDA).                                                                                                                                          |
| Multi-language support timeline                            | Open — HIGH PRIORITY DISCOVERY | PM, Engineering, CS       | Spanish is highest-demand second language. Foundation models support it natively but accuracy/naturalness needs testing. **Run high-priority discovery to learn whether Spanish needs Phase 2 in specific pilot geographies.** Given demographic realities, don't leave this to Phase 3 without data. |
| Rollout strategy: opt-in vs. default-on for new facilities | Open                           | PM, CS Lead, CEO          | Opt-in is safer but slower. Default-on (with easy disable) drives adoption. Recommend opt-in for Phase 1/2, evaluate default-on for Phase 3.                                                                                                                                                          |

---

# III. Launch Readiness & Delivery

## Development Phases

### Phase 1: Foundation & Pilot (Months 1–4)

Objective: Ship a working voice agent to 5–10 pilot facilities that can answer questions using real Bond data.

| Est. Delivery     | Milestone                                            | Description                                                                                                                                     | Prerequisites / Notes                       |
| ----------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Month 1, Week 1–2 | Complete competitive deep-dive & architecture review | Finalize technical architecture, vendor selection for telephony/STT/TTS. Review this PRD with engineering leads.                                | This PRD; engineering availability          |
| Month 1, Week 3–4 | Agent API v1 specification & development kickoff     | Define and begin building the API layer that gives the AI agent read access to Bond data (schedules, programs, pricing, customers, policies).   | Database schema review; API team allocation |
| Month 2, Week 1–2 | Voice infrastructure setup                           | Integrate telephony provider, STT, and TTS. Build basic call flow: answer → process speech → generate response → speak response.                | Vendor contracts signed                     |
| Month 2, Week 3–4 | Intelligence engine v1                               | Build LLM orchestration layer with Bond-specific prompts, context management, and conversation state handling. Connect to Agent API.            | Agent API v1 endpoints available            |
| Month 3, Week 1–2 | Admin configuration portal v1                        | Build plain-English setup interface for facility admins. Pre-populate with Bond data. Support basic policy, tone, and escalation configuration. | UX designs approved                         |
| Month 3, Week 3–4 | Internal testing & QA                                | Comprehensive testing across scenarios: schedule queries, pricing, policies, edge cases, escalation, multi-sport facilities.                    | Test facility accounts configured           |
| Month 4, Week 1–2 | Pilot launch (5–10 facilities)                       | Deploy to select facilities. Active monitoring, daily review of all conversations, rapid iteration.                                             | Pilot facility agreements; CS team briefed  |
| Month 4, Week 3–4 | Pilot evaluation & Phase 2 planning                  | Analyze pilot data: resolution rates, accuracy, escalation patterns, facility feedback, consumer feedback. Plan Phase 2 scope.                  | 4+ weeks of pilot data                      |

### Phase 2: Action-Taking & Scale (Months 5–9)

Objective: Enable the agent to take actions (book, cancel, modify) and expand to 50+ facilities.

| Est. Delivery | Milestone                             | Description                                                                                                                            | Prerequisites / Notes                          |
| ------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Month 5       | Agent API v2 — write operations       | Extend API to support registration creation, cancellation processing, waitlist management, membership modifications.                   | Phase 1 pilot learnings; API security review   |
| Month 6       | Action-taking intelligence            | Build confirmation flows, policy enforcement logic, exception handling, and undo/correction capabilities into the intelligence engine. | Agent API v2 complete                          |
| Month 6–7     | Email & SMS channel support           | Extend agent to handle inbound emails and text messages with same knowledge and action capabilities.                                   | Channel-specific UX design                     |
| Month 7       | Conversation dashboard v2             | Enhanced analytics: conversion tracking, revenue attribution, common inquiry patterns, facility comparison benchmarks.                 | Data pipeline for call analytics               |
| Month 8       | Scaled rollout (50+ facilities)       | Graduated rollout with onboarding playbook, CS training, and facility success metrics.                                                 | Onboarding documentation; CS training complete |
| Month 9       | Phase 2 evaluation & Phase 3 planning | Comprehensive review of scaled deployment. Revenue analysis, customer satisfaction, operational metrics.                               | 3+ months of scaled data                       |

### Phase 3: Proactive Intelligence (Months 10–15)

Objective: The front desk agent evolves from reactive to proactive — anticipating needs, recovering lost revenue, saving at-risk customers, and driving growth without waiting for the phone to ring.

| Est. Delivery | Milestone                                        | Description                                                                                                                                         | Prerequisites / Notes                                               |
| ------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Month 10–11   | Second Chance Leads engine                       | AI reviews all unresolved inquiries and missed calls, scores lead potential, surfaces high-value follow-up opportunities.                           | Call history data; lead scoring model                               |
| Month 11–12   | Retention & Save Flows                           | Detects at-risk members, runs cancellation save flows with admin-configured retention playbooks, proactively reaches out with personalized offers.  | Churn signal model; retention playbook config in admin portal       |
| Month 12–13   | Proactive outreach — waitlist & schedule changes | Agent initiates outbound contact for: waitlist spot openings, schedule changes, registration deadline reminders, re-engagement of lapsed customers. | Outbound calling/messaging infrastructure; consent management       |
| Month 13–14   | Cross-sell & recommendation engine               | During conversations, agent recommends relevant programs based on customer profile, history, and facility offerings.                                | Recommendation model; A/B testing framework                         |
| Month 14–15   | Multi-language support & analytics dashboard     | Spanish and other high-demand languages. Advanced analytics: conversion funnels, inquiry topics, peak patterns, revenue attribution.                | Language testing with pilot facilities; data pipeline for analytics |

### Phase 4: Bond Agents (Months 15–24)

Objective: Expand from a single front desk agent to **Bond Agents** — a managed ecosystem of role-specific AI agents with a unified command center where operators direct, supervise, and collaborate with their AI team. Every agent runs on Bond's Agent API and policy engine.

| Est. Delivery | Milestone                      | Description                                                                                                                                                                       | Prerequisites / Notes                                           |
| ------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Month 15–16   | Agent Command Center           | Unified operator dashboard for all active agents: activity feed, decisions made, escalations pending, performance metrics.                                                        | UX research with Phase 3 operators; command center design       |
| Month 16–17   | Operator ↔ Agent Communication | Natural language interface for operators to direct, query, and supervise agents. Agents proactively surface recommendations and request approval.                                 | Command center infrastructure; NL query layer against Agent API |
| Month 17–18   | Collections & AR Agent         | Automated follow-up on failed payments, outstanding balances, expired payment methods. Negotiates payment plans within admin-configured rules.                                    | Payment API extensions; AR data in Agent API                    |
| Month 18–19   | Program Coordinator Agent      | Fills underenrolled programs via proactive outreach, manages instructor sub notifications, handles cascading schedule changes.                                                    | Enrollment analytics; instructor data in Agent API              |
| Month 19–20   | Agent-to-Agent Handoffs        | Agents coordinate through Bond's shared data layer. Front desk flags retention risks, program coordinator triggers outreach, collections resolves balances visible across agents. | Shared event bus; agent state management                        |
| Month 20–22   | Events & Rental Agents         | Event/party booking agent (end-to-end) and rental coordinator agent (ice/field/court).                                                                                            | Event/rental data in Agent API                                  |
| Month 22–24   | Back Office Intelligence       | Demand & staffing predictions, compliance monitoring (waivers, certifications), automated operational reporting.                                                                  | 12+ months of interaction data; compliance data in Agent API    |

---

## Risk Assessment & Mitigation

| Risk                                                            | Likelihood       | Impact   | Mitigation                                                                                                                                                |
| --------------------------------------------------------------- | ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AI provides incorrect information (wrong schedule, wrong price) | Medium           | High     | Strict data freshness requirements; confidence scoring with fallback to escalation; comprehensive QA testing per facility before activation               |
| Caller frustration with AI ("I want to talk to a person")       | High (initially) | Medium   | Always offer human transfer option; detect frustration early and proactively offer transfer; continuously improve based on escalation patterns            |
| Regulatory issues (AI disclosure laws, recording consent)       | Medium           | High     | Proactive legal review; always-disclose-by-default approach; state-by-state compliance checklist before facility activation                               |
| Telephony/infrastructure downtime                               | Low              | Critical | Multi-provider redundancy; automatic failover to facility's existing phone system; 99.9% uptime SLA with providers                                        |
| Low facility adoption                                           | Medium           | High     | Start with champions (facilities already asking for this); demonstrate ROI within 30 days; offer 60-day free trial; CS-led onboarding                     |
| Competitor launches voice AI for rec facilities                 | Medium           | High     | Speed to market is critical; first-mover advantage compounds (data moat); deep Bond integration is defensible                                             |
| Data breach / PII exposure from call recordings                 | Low              | Critical | Encryption at rest and in transit; strict access controls; automated PII redaction in transcripts; regular security audits                                |
| Cost of AI inference exceeds revenue per facility               | Medium           | Medium   | Monitor cost per call closely; optimize prompt engineering for token efficiency; negotiate volume pricing with LLM providers; tier pricing to match usage |

---

# IV. Business Model & Pricing

## Pricing Strategy

Momence has validated $399/month for text-only AI in the fitness studio market. Bond's voice-first agent delivers higher value (phone is the primary communication channel for athletic facilities) and should command comparable or higher pricing.

**Recommended Tier Structure:**

| Tier         | Monthly Price | Includes                                                                                                                  | Target Facility                                            |
| ------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Starter      | $249/month    | Voice-only, up to 200 calls/month, business hours + after hours, basic dashboard                                          | Small single-sport facilities                              |
| Professional | $399/month    | Voice + email + chat, up to 500 calls/month, action-taking (book/cancel), full dashboard, priority support                | Mid-size multi-sport facilities                            |
| Enterprise   | $599/month    | All channels, unlimited calls, advanced analytics, custom integrations, dedicated success manager, multi-location support | Large facilities, franchise groups (Chelsea Piers, Canlan) |

**Revenue Projections (Conservative):**

Year 1 (100 facilities, 40% penetration at blended $350/month avg): $420K incremental ARR. Year 2 (300 facilities, 60% penetration at blended $400/month avg): $1.44M incremental ARR. Year 3 (750 facilities, 75% penetration at blended $450/month avg): $4.05M incremental ARR. Assumes 250 facilities today, doubling in customers each year from Year 2, with penetration ramping from 40% to 75%.

---

# V. Success Metrics & Measurement Framework

## Facility-Level Metrics (Per-Facility Dashboard)

Total calls handled by AI vs. total inbound calls. Resolution rate (calls resolved without human escalation). Average call duration. Caller satisfaction (post-call survey option). Bookings/registrations completed by AI. Revenue attributed to AI interactions. Peak call time distribution. Most common inquiry categories. Escalation reasons and patterns.

## Platform-Level Metrics (Bond Internal)

Total facilities activated. Monthly recurring revenue from AI agent. Facility churn rate (AI facilities vs. non-AI facilities). Average time-to-activation for new facilities. Agent accuracy rate across all facilities. Cost per call (infrastructure + AI inference). Net revenue per call. Customer satisfaction delta (AI facilities vs. non-AI facilities).

## Continuous Improvement Loop

Every conversation generates data that makes the agent better. Common escalation patterns identify knowledge gaps to fill. Failed queries reveal missing information in facility configurations. Successful interactions reinforce effective conversation patterns. Cross-facility learning (anonymized) improves the base model for all facilities. This is the data moat: every call, across every facility, makes Bond's AI agent smarter and harder to replicate.

---

# VI. Other Information

## Meeting History

| Meeting Date | Attendees | Highlights       | Key Decisions |
| ------------ | --------- | ---------------- | ------------- |
| TBD          | TBD       | PRD Draft Review | TBD           |

## Appendix A: ServiceTitan Benchmark Details

ServiceTitan (NASDAQ: TTAN) provides the most directly relevant benchmark for this product. Key data points referenced in this PRD: $916M TTM revenue, ~8,000 active customers, $62B annual GTV processed, 10% booking rate increase from AI Voice Agents, 15% drop in abandoned calls, 37% recapture rate on Second Chance Leads, Gulfshore AC case study (AI agent "Finn" booked $1,185 job within 2 weeks), Contact Center Pro with drag-and-drop workflow builder and Adaptive Capacity integration for real-time availability.

## Appendix B: Momence AI Inbox Details

Momence (acquired by Clubessential Holdings Jan 2025) serves 4,500+ fitness businesses. Their AI Inbox product ($399/month) supports email, SMS, and in-app messaging (no live voice). Actions: book classes, cancel with policy enforcement, process membership freezes and cancellations, issue refunds/credits, answer FAQs, lead qualification and conversion. Configuration uses plain-English prompts organized by category (General, Memberships, Classes, Appointments) with if/then policy logic and exception handling.

## Appendix C: Rec Technologies AI Strategy

Rec Technologies (Series A, $11M, SF-based) builds AI "Digital Teammates" for municipal Parks & Rec departments. Live products include a Refund Agent and Analytics Agent. Concept-stage products include a Marketing Analyst Agent, Parent Planner, and Tournament Agent. Their philosophy: agents deeply connected to core system, human-in-the-loop supervision, task-specific agents (Phase 1) evolving to empowered decision-makers (Phase 2). No voice capability.

---

## Appendix D: Vendor & Build vs. Buy Deep-Dive Analysis

This appendix provides a comprehensive evaluation of every vendor and approach considered for the AI Front Desk Agent. Each option is assessed against Bond's specific requirements: voice-first delivery, multi-tenancy across 300+ facilities, deep integration with Bond's system of record, mass configurability, action-taking capability, and long-term strategic control.

### Evaluation Criteria

Each vendor is scored 1–5 across eight weighted dimensions. Scores reflect fit for Bond's specific use case, not general product quality.

| Criterion                              | Weight | Description                                                                                                                  |
| -------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Voice-First Capability                 | 20%    | Live inbound voice quality, latency, natural conversation handling. Bond's primary channel.                                  |
| Multi-Tenancy at Scale                 | 15%    | Ability to manage 300+ facility configurations with unique policies, voices, and knowledge bases under one Bond account.     |
| Bond Data Integration                  | 15%    | How naturally the solution connects to Bond's Agent API for real-time schedule, registration, membership, and customer data. |
| Action-Taking (Write Operations)       | 15%    | Can the agent book registrations, process cancellations, modify memberships — not just answer questions?                     |
| Mass Update & Configuration Management | 10%    | Can Bond push a policy change or new capability to hundreds of facilities simultaneously, not one by one?                    |
| Time to Production                     | 10%    | Realistic timeline from contract signing to live calls at pilot facilities.                                                  |
| Cost Model & Scalability               | 10%    | Pricing predictability at 300+ facilities; gross margin sustainability at $250–500/mo per facility.                          |
| Strategic Control & Lock-in Risk       | 5%     | Bond's ability to migrate away, own the IP, and evolve independently.                                                        |

---

### Vendor 1: Bland AI

**Category:** Voice AI Platform (Agentic Orchestration + Telephony)

**Overview:** Bland AI is a purpose-built voice AI platform that claims to own its own voice model (not wrapping OpenAI/Anthropic), which it says reduces latency and hallucination. The platform supports inbound and outbound calls at scale (up to 20,000 calls/hour on enterprise plans). Bland offers a "Pathways" system — a visual workflow builder where each conversation node has its own prompt, context, and logic. They have ~$30M ARR, 155% net retention, and work with JP Morgan, Gallup, Enterprise Rent-A-Car, and the Houston Texans.

**Pricing (as of Jan 2026):**

| Plan       | Monthly Fee | Per-Minute Rate | Concurrency |
| ---------- | ----------- | --------------- | ----------- |
| Start      | Free        | $0.14/min       | 10 calls    |
| Build      | $299/mo     | $0.12/min       | 50 calls    |
| Scale      | $499/mo     | $0.11/min       | 100 calls   |
| Enterprise | Custom      | Negotiated      | Unlimited   |

Additional costs: $0.02/SMS, $0.015 minimum per outbound call attempt, transfer time billed separately ($0.03–0.05/min).

**Strengths:**

- Strong voice quality with proprietary model; low latency
- Pathways system enables deterministic steps (legal disclosures, authentication loops) alongside AI flexibility
- Flexible pricing: willing to structure per-facility, per-minute, per-resolution, or flat fee — critical for Bond's resale model
- Forward-deployed engineer (FDE) included for initial implementation
- Live call monitoring during implementation for real-time fine-tuning
- Citation/reporting system identifies knowledge gaps for iterative improvement
- Production-proven at enterprise scale

**Weaknesses:**

- **Mass update concern (critical risk):** If Bond replicates a pathway across 300 facilities and needs to add a refund capability, it's unclear whether updates can be pushed globally or require individual facility updates. Bland's sales team could not answer this definitively — punted to implementation team.
- Vendor dependency for orchestration layer; Bond doesn't own the conversation logic
- Per-minute pricing can create cost unpredictability as call volumes grow
- Multi-tenancy is handled via "personas" and "pathways" per facility — functional, but not native multi-tenant architecture

**Bond Fit Score:**

| Criterion                        | Score (1–5) | Notes                                                                         |
| -------------------------------- | ----------- | ----------------------------------------------------------------------------- |
| Voice-First Capability           | 5           | Best-in-class voice; proprietary model; low latency                           |
| Multi-Tenancy at Scale           | 3           | Persona/pathway per facility works, but mass management is unproven           |
| Bond Data Integration            | 4           | Supports webhooks and integrations; Bond builds the Agent API, Bland calls it |
| Action-Taking                    | 4           | Can trigger bookings, cancellations via webhook/API; not native to Bond       |
| Mass Update & Config Management  | 2           | Key unresolved risk; no confirmed mass push capability                        |
| Time to Production               | 5           | 4–8 weeks to first pilot with FDE support                                     |
| Cost Model & Scalability         | 3           | Per-minute pricing creates margin pressure; enterprise pricing is negotiable  |
| Strategic Control & Lock-in Risk | 2           | Bond depends on Bland for orchestration; pathway definitions are proprietary  |

**Weighted Score: 3.55 / 5**

**Verdict:** Best option for a fast pilot to validate the product concept. The mass update risk and vendor lock-in make it a poor long-term sole solution, but an excellent de-risking vehicle while Bond builds the Agent API in parallel.

---

### Vendor 2: Decagon

**Category:** Enterprise AI Customer Support Platform (Multi-Modal)

**Overview:** Decagon is a well-funded enterprise AI customer support platform that handles support tickets autonomously using "Agent Operating Procedures" (AOPs) written in plain English — no visual workflow builder. It supports voice, chat, and email. Decagon has raised significant venture funding and targets large enterprise customers. Notable clients include Eventbrite and Rippling.

**Pricing:** Entirely custom; no public pricing page. Two models available:

- **Per-conversation:** Flat fee per AI interaction (regardless of outcome)
- **Per-resolution:** Higher fee, but only when the AI resolves the issue autonomously

Minimum annual contract size is **$250K**. Decagon noted that with Bond's target customer ACV (<$5K), a deflection rate of at least 40% would be needed to justify the business case.

**Strengths:**

- Full multi-modal support: voice, chat, email in one platform
- AOPs in plain English make policy configuration accessible to non-technical staff
- Knowledge base integration, QA/monitoring, A/B testing, and custom analytics built in
- Voice demo showed authentication, multi-step workflows, and tool calls
- Enterprise-grade security and compliance posture

**Weaknesses:**

- **Pricing is a deal-breaker for current stage:** Minimum annual contract is $250K. Bond's facility base (300+ locations at $250–500/mo each) may not generate enough volume per facility to justify that spend, especially given Decagon's requirement of ≥40% deflection rate to make the business case work.
- **Multi-tenancy was not a solved problem:** During evaluation, their team was "researching" multi-tenant implementation. This is a first-class requirement for Bond.
- No public pricing creates budget uncertainty and lengthy sales cycles
- Per-conversation model means Bond pays even when the AI fails to resolve
- Opaque pricing makes it impossible to model gross margins reliably

**Bond Fit Score:**

| Criterion                        | Score (1–5) | Notes                                                                 |
| -------------------------------- | ----------- | --------------------------------------------------------------------- |
| Voice-First Capability           | 4           | Good voice demo; less proven at scale than Bland                      |
| Multi-Tenancy at Scale           | 1           | Actively researching; not solved                                      |
| Bond Data Integration            | 3           | Tool calls and API integration; would need custom Bond integration    |
| Action-Taking                    | 4           | Strong action-taking via tool calls and procedures                    |
| Mass Update & Config Management  | 2           | Unknown; AOP management at 300+ tenants untested                      |
| Time to Production               | 3           | 4–8 weeks to pilot, but sales cycle and contracting may be slow       |
| Cost Model & Scalability         | 1           | Enterprise pricing doesn't fit Bond's ICP; margin modeling impossible |
| Strategic Control & Lock-in Risk | 2           | Vendor owns orchestration; custom contract lock-in                    |

**Weighted Score: 2.50 / 5**

**Verdict:** Impressive technology, wrong stage for Bond. The unsolved multi-tenancy problem and enterprise pricing model make Decagon a poor fit today. Worth re-evaluating in 12–18 months if Bond's ARR and per-facility call volumes grow significantly.

---

### Vendor 3: SidePilot

**Category:** AI Agent Platform for Fitness & Gyms

**Overview:** SidePilot builds agentic AI specifically for gyms and fitness studios. Their agents handle appointment booking, payment method updates, cancellation requests, and lead nurturing across chat, SMS, and email. They work with F45, independent gyms, and big box fitness brands. SidePilot offers white-label capability with a master admin view for multi-tenant management, which is relevant to Bond's architecture. Phone receptionist capability was in development at time of evaluation.

**Pricing (current, per location):**

| Plan       | Monthly Price | AI Agents | AI Tokens | SMS Segments |
| ---------- | ------------- | --------- | --------- | ------------ |
| Base       | $320/mo       | 1         | 5,000     | 500          |
| Premium    | $720/mo       | 4         | 25,000    | 3,000        |
| Enterprise | Custom        | Unlimited | 75,000    | 10,000       |

Annual billing saves 20%.

**Strengths:**

- Closest ICP alignment: purpose-built for fitness/gym industry with relevant workflows (booking, cancellations, payment recovery, lead nurture)
- White-label capable with master admin view — addresses multi-tenant management need
- Cancellation save flows and payment recovery agents align with Bond Phase 3–4 vision
- Integrates with MindBody, HubSpot, and other fitness platforms; would need to build Bond integration
- Competitive pricing validates Bond's target price range

**Weaknesses:**

- **Voice agent was not mature at time of evaluation.** Phone receptionist was "in development." For Bond's voice-first use case, this is disqualifying for Phase 1.
- Primarily outbound/appointment booking focus — less proven as an inbound receptionist/support agent
- Would need to build Bond-specific integration from scratch
- Token-based pricing creates ambiguity around cost-per-call modeling
- Smaller company; less proven at enterprise scale

**Bond Fit Score:**

| Criterion                        | Score (1–5) | Notes                                                                |
| -------------------------------- | ----------- | -------------------------------------------------------------------- |
| Voice-First Capability           | 1           | Voice was in development at time of demo; disqualifying for Phase 1  |
| Multi-Tenancy at Scale           | 4           | Master admin view with white-label; closest to Bond's needs          |
| Bond Data Integration            | 2           | No Bond integration; would need full custom build                    |
| Action-Taking                    | 4           | Strong booking, cancellation, payment workflows                      |
| Mass Update & Config Management  | 3           | Master admin implies some central management; untested at Bond scale |
| Time to Production               | 2           | Voice immaturity delays pilot; integration build required            |
| Cost Model & Scalability         | 4           | Per-location pricing aligns with Bond's resale model                 |
| Strategic Control & Lock-in Risk | 3           | White-label is positive; still vendor-dependent for orchestration    |

**Weighted Score: 2.55 / 5**

**Verdict:** Strong ICP fit and the right business model (per-location, white-label), but voice immaturity makes it unusable for Bond's Phase 1 voice-first requirement. Worth monitoring for Phase 2+ text channels (SMS, chat) or revisiting once their voice agent matures. SidePilot's pricing ($320–720/mo per location) validates Bond's $250–500/mo target.

---

### Vendor 4: Intercom (Fin AI Agent)

**Category:** AI Customer Service Platform (Chat-First, Voice Expanding)

**Overview:** Bond already uses Intercom for B2B customer support, and Fin has been effective in that context. Intercom's Fin AI Agent has expanded significantly — it now supports voice ("Fin Voice"), chat, and email. Fin Voice answers calls using the existing Intercom knowledge base, supports 28 languages, offers smart routing, CSAT collection, and integrates with major telephony providers (Twilio, Talkdesk, Genesys, etc.) via SIP and PSTN. Voice Procedures (API-based actions during calls) are in closed beta. However, Fin Voice is currently "limited to select customers partnered with our Sales team" — not generally available.

**Pricing:** Per-resolution model (custom pricing; contact account manager). No public pricing for voice.

**Strengths:**

- Bond already uses Intercom — existing relationship, known platform, integrated workflows
- Fin Voice has matured significantly: 28 languages, smart routing, CSAT, call monitoring, transcripts, analytics
- Guidance system allows plain-English behavior customization per channel
- Voice Procedures (closed beta) enable action-taking via API during calls — directly relevant to booking/cancellation flows
- Strong analytics: resolution rates, topic explorer, performance dashboard
- Can integrate with any telephony provider (Twilio, SIP, PSTN forwarding)

**Weaknesses:**

- **Multi-tenancy remains the fundamental blocker.** Intercom is built as one workspace per company. To support 300+ Bond facilities, each with unique policies, knowledge bases, and configurations, Bond would need separate workspaces or brands per facility — costly, unwieldy, and operationally unmanageable. Jordan (Intercom) acknowledged this during evaluation.
- Fin Voice is not generally available — "limited to select customers" with Intercom's sales team
- Voice Procedures (action-taking) are in closed beta — not production-ready
- Per-resolution pricing is opaque; unclear how it scales at Bond's multi-facility model
- Intercom's strength remains chat-first; voice is a newer addition and still maturing
- No native concept of "facility" or "tenant" — everything maps to Intercom's B2B workspace model

**Bond Fit Score:**

| Criterion                        | Score (1–5) | Notes                                                                        |
| -------------------------------- | ----------- | ---------------------------------------------------------------------------- |
| Voice-First Capability           | 3           | Voice has improved significantly but still limited availability and maturing |
| Multi-Tenancy at Scale           | 1           | Fundamental architectural mismatch; not designed for B2B2C multi-tenant      |
| Bond Data Integration            | 3           | APIs and procedures exist; would need significant custom work per facility   |
| Action-Taking                    | 2           | Voice Procedures in closed beta; not production-ready                        |
| Mass Update & Config Management  | 1           | Per-workspace model makes mass management across 300+ facilities unworkable  |
| Time to Production               | 2           | Multi-tenancy blocker adds months; voice availability uncertain              |
| Cost Model & Scalability         | 2           | Per-workspace costs compound; pricing model doesn't fit B2B2C resale         |
| Strategic Control & Lock-in Risk | 3           | Already embedded in Bond's stack; medium switching cost                      |

**Weighted Score: 2.10 / 5**

**Verdict:** The multi-tenancy gap remains the deal-breaker. Despite significant improvements to Fin Voice, Intercom's architecture is designed for B2B (one workspace per company), not B2B2C (one platform serving hundreds of end-customer tenants). At 300+ facilities, the per-workspace model creates unmanageable complexity and cost. Not viable for this product. Continue using Intercom for Bond's own B2B customer support — it's excellent for that purpose.

---

### Vendor 5: EmbedReach (embedreach.com)

**Category:** Embedded Marketing Suite for VSaaS Platforms (Voice AI Component)

**Overview:** EmbedReach is an embedded marketing suite designed specifically for vertical software platforms (VSaaS). The platform offers a full suite of AI-native marketing products: automated paid ads, email/SMS automation, revenue attribution insights, AI review & survey optimization, Voice AI Receptionist, and two-way messaging. The Voice AI Receptionist is production-ready and designed to integrate with platform data context.

**Pricing:** Embedded model — Bond can monetize as add-on revenue stream for facilities. Pricing not publicly listed; structured as embedded partnership.

**Strengths:**

- **Voice AI is live and production-ready:** Handles 80% of common questions automatically, pre-trained with business info (hours, locations, pricing, services)
- **Can integrate with APIs for reservations/cancellations** if Bond endpoints exist — action-taking capability is present
- **Full transcripts and AI summaries post-call** — strong analytics and monitoring
- **SMS version launching in weeks** — multi-channel support coming
- **Can pull directly from Snowflake data warehouse** — reduces Bond development burden vs building custom APIs
- **Reputation management module is strong:** Google Business Profile monitoring, automated review solicitation (40x higher SMS response rates vs email), AI-crafted responses
- **Two integration points:** (1) UI iframe embedding (low dev effort), (2) Data sync for customer/transaction data
- **Phased rollout approach:** Can start with single SKU (reputation management requires minimal integration), then add voice AI incrementally
- **Designed for VSaaS embedded model** — aligns with Bond's platform approach

**Weaknesses:**

- **More of a marketing suite than dedicated AI agent platform.** Voice AI is one component among many (ads, email, SMS, reputation). For Bond's voice-first Phase 1 requirement, this may be overkill.
- **Integration requires data sync setup** — even with Snowflake option, need to configure recurring cron jobs and data mapping
- **Timing considerations:** League/class purchases happen before service delivery — need automated triggers with time delta after purchase vs immediate solicitation. May require custom trigger logic.
- **Embedded model means Bond resells to facilities** — need to structure pricing and billing appropriately
- **Voice AI capabilities may be more limited than dedicated voice platforms** (Bland, Decagon) — designed as part of broader suite, not standalone voice-first solution

**Bond Fit Score:**

| Criterion                        | Score (1–5) | Notes                                                                                          |
| -------------------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| Voice-First Capability           | 3           | Production-ready voice AI, handles 80% of questions, but part of broader marketing suite       |
| Multi-Tenancy at Scale           | 3           | Per-tenant setup; designed for embedded VSaaS model                                            |
| Bond Data Integration            | 4           | Can pull from Snowflake warehouse; can integrate with Bond APIs for reservations/cancellations |
| Action-Taking                    | 3           | Can integrate with APIs for reservations/cancellations if endpoints exist; not native to Bond  |
| Mass Update & Config Management  | 3           | Embedded model supports multi-tenant; configuration management unclear at Bond's scale         |
| Time to Production               | 4           | UI iframe is low effort; data sync setup required but Snowflake option reduces burden          |
| Cost Model & Scalability         | 4           | Embedded model allows Bond to monetize as add-on; pricing structure fits resale model          |
| Strategic Control & Lock-in Risk | 3           | Embedded partnership model; can start with single SKU and expand incrementally                 |

**Weighted Score: 3.30 / 5**

**Verdict:** Stronger fit than initially evaluated. EmbedReach's Voice AI Receptionist is production-ready and can integrate with Bond APIs for action-taking. The embedded VSaaS model aligns with Bond's platform approach, and Snowflake integration reduces development burden. However, it's fundamentally a marketing suite with voice as one component — may be better fit for Phase 2+ marketing/reputation add-on than Phase 1 voice-first front desk agent. Worth evaluating for phased approach: start with reputation management (minimal integration), then add voice AI once data sync is established. The embedded monetization model is attractive for Bond's revenue expansion goals.

---

### Vendor 6: ElevenLabs (Voice + Text Infrastructure)

**Category:** Voice & Text Conversational AI Platform (STT / TTS / Chat Mode)

**Overview:** ElevenLabs is a leading voice AI company known for industry-best text-to-speech quality. They offer a Conversational AI platform for building voice and text agents. In February 2026, they launched **Chat Mode**, enabling text-only conversational agents (voice agents can enable chat instantly). The platform supports voice, chat, or both. In January 2026, they cut pricing by ~50%, with calls now starting at $0.10/min (Creator/Pro) and $0.08/min (Business annual). ElevenLabs is both a research company (develops underlying audio models) and a product company (builds the conversational orchestration platform).

**Pricing (as of Jan 2026):**

| Plan                | Conversational AI Rate | Notes                                |
| ------------------- | ---------------------- | ------------------------------------ |
| Starter/Creator/Pro | $0.10/min              | ~50% reduction from previous pricing |
| Business (Annual)   | $0.08/min              | Volume discount                      |
| Enterprise          | Custom (lower)         | Negotiated                           |

Note: LLM costs are currently absorbed by ElevenLabs but will eventually be passed through.

**Strengths:**

- Best-in-class voice quality (TTS); industry-leading naturalness and expressiveness
- **Native text/chat support (Chat Mode, Feb 2026)** — build text-only agents or enable chat on existing voice agents; same knowledge base and reasoning across modalities
- Conversational AI platform provides both infrastructure and orchestration capabilities
- Aggressive pricing: $0.08–0.10/min is very competitive for the quality level
- ElevenLabs owns the research — can optimize cost/quality as models improve
- Strong developer tools; well-documented APIs
- Can be used as pure infrastructure (STT/TTS) with Bond's own orchestration, OR as a full conversational platform
- Phone integration via Twilio/SIP supported

**Weaknesses:**

- Not a turnkey "AI agent for athletic facilities" — Bond must build the domain logic, multi-tenancy, and business integrations
- Conversational AI platform is general-purpose; no facility management context
- LLM costs currently absorbed will eventually be passed through — pricing will increase
- Requires significant engineering investment to build on top of
- No multi-tenant management, no admin UI, no knowledge base management — Bond builds all of that

**Bond Fit Score (as infrastructure component, not standalone solution):**

| Criterion                        | Score (1–5) | Notes                                                                  |
| -------------------------------- | ----------- | ---------------------------------------------------------------------- |
| Voice-First Capability           | 5           | Industry-best voice quality; excellent STT/TTS                         |
| Multi-Tenancy at Scale           | 1           | Not provided; Bond builds this                                         |
| Bond Data Integration            | 2           | APIs available but Bond does all integration work                      |
| Action-Taking                    | 2           | Possible via custom development on top of platform                     |
| Mass Update & Config Management  | 1           | Not applicable; Bond builds this                                       |
| Time to Production               | 2           | 3–6 months for MVP; significant engineering investment                 |
| Cost Model & Scalability         | 5           | Excellent per-minute pricing; costs scale linearly                     |
| Strategic Control & Lock-in Risk | 4           | Bond owns all business logic; ElevenLabs is replaceable infrastructure |

**Weighted Score: 2.75 / 5** (as standalone) / **Infrastructure Rating: Excellent**

**Verdict:** ElevenLabs is not a vendor alternative to Bland or Decagon — it's an infrastructure component. The recommended approach uses ElevenLabs (or similar) for voice and text infrastructure (Layer 2) regardless of whether Bond builds or buys the orchestration layer. Their January 2026 price cut and February 2026 Chat Mode launch make them even more attractive. Best used as part of the "Build" option or as the voice+text layer underneath a vendor orchestrator.

---

### Option 7: Build In-House (ElevenLabs + LLM APIs + Bond Engineering)

**Category:** Full in-house development using best-in-class infrastructure components

**Overview:** Use ElevenLabs for voice and text infrastructure ($0.08–0.10/min; Chat Mode for text agents), a frontier LLM (Claude/GPT) for reasoning, Twilio for telephony, and Bond's engineering team to build the Agent API, orchestration layer, policy engine, admin configuration portal, and conversation dashboard.

**Strengths:**

- Full ownership of every layer: data access, business logic, orchestration, and admin experience
- Deepest possible integration with Bond's platform
- No per-conversation or per-resolution vendor fees — only infrastructure usage costs
- Can evolve at Bond's own pace as foundation models improve
- Best long-term unit economics (no vendor margin on top of infrastructure costs)
- Multi-tenancy designed from day one for Bond's exact needs
- Mass update capability is fully in Bond's control
- Aligns with Phase 4 vision (Bond Agents ecosystem) — the orchestration layer can power all future agent types
- **Blank Metal (consultancy) can accelerate build —** sprint-based engagement ($30–50K/sprint) for expert guidance on agent architecture and eval systems; 90-day production guarantee; embed model means knowledge transfer to Bond's team, not a long-term dependency. Consider for initial sprint to accelerate architecture decisions.

**Weaknesses:**

- **Significant engineering investment:** 2–3 engineers for 3–6 months for MVP; ongoing 1–2 engineers for maintenance
- **Voice AI is extremely hard in production.** As Bland AI noted: "getting something demoable is easy, getting something that works in production is extremely difficult"
- Need to build phone number provisioning, call routing, SMS, email delivery infrastructure
- Ongoing maintenance of prompt engineering, eval systems, and quality monitoring
- Risk of underestimating complexity and timeline — engineering estimates are typically optimistic for AI projects
- No real customer feedback until MVP is complete (months away)

**Bond Fit Score:**

| Criterion                        | Score (1–5) | Notes                                                                                                                                                 |
| -------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Voice-First Capability           | 4           | ElevenLabs provides excellent voice; orchestration quality depends on Bond's execution                                                                |
| Multi-Tenancy at Scale           | 5           | Designed for Bond's exact architecture from day one                                                                                                   |
| Bond Data Integration            | 5           | Native integration; Bond builds both sides                                                                                                            |
| Action-Taking                    | 5           | Full control via Bond's own APIs                                                                                                                      |
| Mass Update & Config Management  | 5           | Bond designs and owns this entirely                                                                                                                   |
| Time to Production               | 2           | 3–6 months for MVP; 6+ months for production-ready voice                                                                                              |
| Cost Model & Scalability         | 3           | High upfront engineering investment (2-3 engineers × 3-6 months) impacts cost model; best long-term unit economics but significant initial investment |
| Strategic Control & Lock-in Risk | 5           | Bond owns everything; zero vendor lock-in                                                                                                             |

**Weighted Score: 4.20 / 5** (long-term) / **3.50 / 5** (near-term, penalized for timeline risk)

**Verdict:** The best long-term option for strategic control, unit economics, and alignment with the Bond Agents vision. The primary risk is timeline — it takes 3–6 months to get to a pilot and much longer to production-harden voice AI. Consider Blank Metal for an initial sprint to accelerate architecture decisions and get expert guidance; hand off to Bond team for ongoing development. Hybrid approach (pilot with Bland while building in parallel) remains recommended.

---

### Consolidated Scoring Matrix

| Vendor / Option                                       | Voice-First (20%) | Multi-Tenant (15%) | Bond Integration (15%) | Action-Taking (15%) | Mass Update (10%) | Time to Production (10%) | Cost Model (10%) | Strategic Control (5%) | **Weighted Total** |
| ----------------------------------------------------- | ----------------- | ------------------ | ---------------------- | ------------------- | ----------------- | ------------------------ | ---------------- | ---------------------- | ------------------ |
| **Bland AI**                                          | 5                 | 3                  | 4                      | 4                   | 2                 | 5                        | 3                | 2                      | **3.55**           |
| **Decagon**                                           | 4                 | 1                  | 3                      | 4                   | 2                 | 3                        | 1                | 2                      | **2.50**           |
| **SidePilot**                                         | 1                 | 4                  | 2                      | 4                   | 3                 | 2                        | 4                | 3                      | **2.55**           |
| **Intercom (Fin)**                                    | 3                 | 1                  | 3                      | 2                   | 1                 | 2                        | 2                | 3                      | **2.10**           |
| **EmbedReach**                                        | 3                 | 3                  | 4                      | 3                   | 3                 | 4                        | 4                | 3                      | **3.35**           |
| **ElevenLabs** (infra)                                | 5                 | 1                  | 2                      | 2                   | 1                 | 2                        | 5                | 4                      | **2.75**           |
| **Build In-House** (incl. Blank Metal as accelerator) | 4                 | 5                  | 5                      | 5                   | 5                 | 2                        | 3                | 5                      | **4.20**           |

---

### Analysis Summary & Strategic Recommendation

**Tier 1 — Recommended Path (Hybrid):**

| Component                                  | Decision                                            | Vendor/Approach                                                |
| ------------------------------------------ | --------------------------------------------------- | -------------------------------------------------------------- |
| Agent API & Business Logic                 | **Build (Bond's Moat)**                             | Bond engineering team; consider Blank Metal for initial sprint |
| Policy Engine & Admin Config               | **Build**                                           | Bond engineering team                                          |
| Voice + Text Infrastructure (STT/TTS/Chat) | **Buy**                                             | ElevenLabs ($0.08–0.10/min)                                    |
| Telephony                                  | **Buy**                                             | Twilio                                                         |
| Agentic Orchestration                      | **Pilot with Bland → Evaluate → Build or Continue** | Bland AI (pilot); parallel build using ElevenLabs + LLM APIs   |
| Architecture Acceleration                  | **Engage (optional)**                               | Blank Metal ($30–50K/sprint for 2–3 sprints)                   |

**Tier 2 — Monitor for Future Phases:**

| Vendor         | When to Re-Evaluate                                                 | Potential Use Case                                              |
| -------------- | ------------------------------------------------------------------- | --------------------------------------------------------------- |
| SidePilot      | When their voice agent matures                                      | Phase 2+ text channel partner; cancellation save flow reference |
| Decagon        | When Bond hits 500+ facilities and higher per-facility call volumes | Enterprise orchestration alternative if Bland fails             |
| Intercom (Fin) | If Intercom solves multi-tenancy for B2B2C                          | Unlikely near-term; continue using for Bond's own B2B support   |

**Tier 3 — Not Recommended:**

| Vendor     | Reason                                                                                                                                                                                                            |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EmbedReach | Marketing suite with voice component; better fit for Phase 2+ marketing/reputation add-on than Phase 1 voice-first front desk agent. Voice AI is production-ready but embedded within broader marketing platform. |

**Key Takeaway:** No single vendor solves Bond's full problem. The hybrid approach — own the data layer and business logic (Bond's irreplaceable moat), buy commodity infrastructure (voice, telephony), and pilot the orchestration layer with Bland while building in parallel — maximizes speed to market while preserving long-term strategic control. The 60-day Bland pilot produces real customer feedback while Bond builds the Agent API foundation that every future Bond Agent will run on.

---

## Appendix E: Required Artifacts (Next Week)

**Must-have before pilot:**

- Agent API v1 contract specification (detailed)
- Pilot onboarding playbook (CS steps + checklist)
- Legal checklist and sign-off form for pilot
- Mass update UI concept doc / API spec
- Customer ROI calculator (spreadsheet for Sales)

**Stakeholder Questions to Resolve:**

1. **Barak / Engineering:** Is the Agent API team committed to v1 SLA: 60s data freshness, reads <250ms 95%tile, audit fields on every write? If not, what are the realistic targets?
2. **Matt / Exec:** Are we willing to make the 60-day Bland pilot binding, with the three decision metrics (mass update time, cost delta, agent API readiness)? If yes, add executive sign-off language.
3. **Marc / CS & Sales:** Which pilot customers can commit to daily ops reviews and 24/7 monitoring during the first 14 days? Name two champions and one conservative customer.
4. **Legal:** Confirm approach to PCI in voice — tokenized DTMF vs SMS payment link. Which one do we accept for pilot?
5. **Finance:** What gross margin per facility target do we want for Year 1 (e.g., ≥50%)?

**Operational Risk Mitigation:**

- **Mass update early test:** before pilot, create a policy change script that can push a small change to 10 test facilities and time the process. Make this an engineering spike.
- **Simulation harness:** build a dialog simulator that runs 100 synthetic calls against a facility's configuration and surfaces gaps before live pilot.
- **Immediate human fallback:** default to "transfer to human" for any payment or ambiguous refunds until confidence score >0.9 and 30 successful operations observed.
- **CS shadow mode for week 1:** agents operate, but transcripts auto-sent to CS for review; escalate on first two negative NPS ratings.

**Next Week Action Items:**

1. ✅ Add Agent API v1 spec to PRD — Owner: Engineering lead
2. ⏳ Decide and publish pilot legal approach (PCI + AI disclosure) — Owner: Legal
3. ⏳ Run 3-day engineering spike: mass-update prototype + dialog simulator — Owner: Platform eng
4. ⏳ Lock pilot facility list (5) and get signed pilot agreements — Owner: CS / Sales
5. ✅ Add RACI table and owner assignments to PRD — Owner: PM
6. ✅ Update KPIs with exact definitions and sample sizes — Owner: PM + Data
7. ⏳ Book 60-day review meeting with vendor pilot triggers on calendar — Owner: PM
