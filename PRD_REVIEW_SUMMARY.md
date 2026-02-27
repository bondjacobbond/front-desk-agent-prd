# PRD Review Council — Executive Summary

**Review Date:** February 7, 2026 (Updated: February 19, 2026 — post Bland demo)  
**PRD Version:** Draft — Requirements Gathering + Vendor Validation

---

## Overall Assessment: **8/10** — Approve with Conditions

The PRD is exceptionally thorough and well-researched. The hybrid build/buy approach is sound, but several critical gaps must be resolved before pilot launch.

---

## Review Scores by Domain

| Domain             | Score  | Status                                 |
| ------------------ | ------ | -------------------------------------- |
| Product Management | 8.5/10 | ✅ Strong strategic foundation         |
| Engineering        | 7/10   | ⚠️ Needs Agent API specification       |
| Design/UX          | 7.5/10 | ⚠️ Admin UI needs detailed spec        |
| Sales/GTM          | 7/10   | ⚠️ Sales motion needs definition       |
| Legal/Compliance   | 6/10   | 🔴 Critical: Legal signoff required    |
| Finance            | 7.5/10 | ⚠️ Cost model needs completion         |
| Customer Success   | 7/10   | ⚠️ Onboarding process needs definition |

---

## Critical Path Items (Block Pilot Launch)

### 1. Agent API Specification ⚠️ ENGINEERING

**Issue:** Endpoint contracts lack request/response schemas, error handling, auth model  
**Owner:** Engineering Lead  
**Timeline:** Before Month 1, Week 3-4  
**Risk:** Cannot commit to development timeline without full spec

### 2. Legal/Compliance Signoff 🔴 LEGAL

**Issue:** Missing written policies for AI disclosure, recording consent, data retention, and vendor data processing terms  
**Owner:** Legal Counsel  
**Timeline:** Before pilot launch  
**Risk:** Regulatory violations, liability exposure

### 3. Mass Update System Design ⚠️ ENGINEERING

**Issue:** Critical risk acknowledged but technical design missing  
**Owner:** Engineering Lead  
**Timeline:** Before Month 2, Week 1-2  
**Risk:** Cannot scale to 300+ facilities without mass update capability

### 4. Onboarding Playbook ⚠️ CUSTOMER SUCCESS

**Issue:** Process, timeline, owners, and training materials undefined  
**Owner:** CS Lead  
**Timeline:** Before Month 3, Week 1-2  
**Risk:** Pilot facilities will struggle without clear onboarding

### 5. Cost Economics Model ⚠️ FINANCE

**Issue:** Incomplete cost breakdown (missing vendor fees, engineering overhead, support costs)  
**Owner:** Finance Lead  
**Timeline:** Before pilot launch  
**Risk:** Cannot validate unit economics or pricing strategy

---

## High Priority Items (Resolve Soon)

6. **Admin UI Specification** (Design) — Wireframes/UX spec needed
7. **Incident Monitoring & Alerting Plan** (Engineering) — Define production telemetry, thresholds, and on-call ownership
8. **Sales Enablement Materials** (Sales) — ROI calculator, positioning guide
9. **Support Model Definition** (CS) — SLAs, escalation process
10. **Telephony Vendor Selection** (Engineering) — Twilio vs. Vonage decision

---

## Key Consensus Points

✅ **Strengths:**

- Exceptional competitive analysis (ServiceTitan, Momence, Rec Technologies, Baseline)
- Clear strategic moat identification (Agent API + business logic)
- Realistic phased approach with measurable KPIs
- Well-reasoned hybrid build/buy decision

🔴 **Critical Update — Baseline Competitive Intelligence (Feb 2026):**

- **Baseline** (baselinepro.com), a direct Bond competitor in sports facility management, has deployed a production voice AI front desk agent powered by **EmbedReach**
- Their agent is **live today**: per-facility AI training, dedicated phone numbers (Twilio-backed), knowledge base FAQ, lesson filtering by age, SMS booking link delivery, warm staff handoff with configurable rules
- This invalidates the previous assumption that "no one in the private athletic facility space has a voice-first AI agent"
- Bond's differentiation must be **depth of integration**: real-time data, in-call booking/cancellation, customer recognition, proactive outreach — capabilities Baseline's FAQ + link-sending approach does not offer
- **Speed to market is now the #1 strategic priority** — every month of delay cedes market share to Baseline

⚠️ **Concerns:**

- Agent API specification is incomplete (critical blocker)
- Legal/compliance gates must be resolved (critical blocker)
- Mass update capability is underspecified (critical risk)
- Baseline already live with voice AI in Bond's exact ICP (urgent competitive pressure)
- Monitoring and incident response approach is underspecified for pilot reliability
- Pilot success gates may be too aggressive (60 days for 80% resolution)

---

## Top 10 Questions Requiring Resolution

1. **Engineering:** What is the current Bond API performance baseline? Can we achieve <250ms 95%tile?
2. **Legal:** Given Stripe handles card data, what exact PCI boundary documentation and contractual language must we still maintain?
3. **Product:** What is the minimum viable customer recognition for Phase 1? (Phone lookup only, or include account disambiguation?)
4. **Engineering:** Who owns Agent API delivery and operations? (Platform team, dedicated squad, or mixed model?)
5. **Legal:** Which states require AI/call recording disclosure for our use cases, and what is the approved script per state group?
6. **Finance:** What is the fully loaded per-call and per-resolved-call cost, including telephony, STT/TTS, LLM, vendor, and support overhead?
7. **CS:** What is the target CS effort per facility for onboarding and month-one hypercare?
8. **Sales:** What is the launch motion and packaging strategy? (Add-on, bundle, standalone, or segment-specific mix?)
9. **Product + CS:** What are explicit pilot entry/exit criteria and rollback triggers at the facility level?
10. **Engineering:** What is the tested fallback plan if mass update, telephony, or agent orchestration fails in production?

---

## Recommended Approach: ElevenLabs-First Pilot

**Decision rationale:** Bland's $150K minimum is an enterprise commitment, not a trial. Bond cannot validate product-market fit at that price point. ElevenLabs provides voice, text chat (Chat Mode, Feb 2026), workflow, knowledge base, and analytics infrastructure at $0.09-0.10/min with no minimum — and Bond already has a working prototype (Palm Beach Skate Zone, Feb 2026). Bland remains a strong escalation path if the ElevenLabs pilot hits production quality walls.

### Next Steps

1. **Immediate (This Week):**
   - Deepen ElevenLabs prototype: connect to Bond data via custom tools/webhooks, stress-test with realistic scenarios
   - Begin Agent API v1 specification (ElevenLabs custom tools need Bond API endpoints)
   - Identify 3 pilot facilities and begin knowledge base preparation (FAQs, policies, schedules)
   - Obtain legal signoff on AI disclosure policy (note: must decide whether agent identifies as AI)
   - Optional: scope Blank Metal 1-sprint engagement ($30-50K) for architecture guidance

2. **Short-Term (Next 2-4 Weeks):**
   - Build Bond orchestration layer on ElevenLabs: multi-location variable system, facility-specific knowledge bases, call routing
   - Design and build call log/transcript dashboard in Bond admin (Bond owns the data layer directly — no third-party embedding)
   - Create onboarding playbook draft for pilot facilities
   - Model unit economics: estimated call minutes per facility, ElevenLabs + LLM costs, margin analysis at $399/mo

3. **Before Pilot Launch (Months 2-4):**
   - Complete Agent API v1 and connect to ElevenLabs via custom tools
   - Production-harden with test calls, iterate on conversation flows and knowledge base
   - Deploy to 3 pilot facilities with active monitoring
   - Build QA practice: listen to early calls, tune agent responses, track quality metrics
   - Keep Bland relationship warm — receive their proposal, defer signing until pilot data exists

4. **Post-Pilot Decision Point (Month 5-6):**
   - Evaluate ElevenLabs pilot: voice quality, resolution rate, customer satisfaction, edge case handling
   - If quality is sufficient: scale to 50+ facilities on ElevenLabs, continue building
   - If quality gaps exist: bring Bland data to negotiation table — real call volumes and use cases = better terms

---

## Bland Demo Update (February 19, 2026)

**Participants:** Matt Minoff (Bond CEO), Jacob (Bond PM), Maggie (Bland SE), Matt (Bland AE)

### Key Findings

**Validated (Positive):**

- Voice quality, latency, and natural conversation exceeded expectations in live demo
- Conversational Pathways architecture (node-based, per-node context) provides targeted debugging and reduces hallucination risk
- Purpose-built proprietary voice LLM (not wrapping frontier models) — explains low latency
- Multi-location support confirmed: one pathway serves all facilities with per-phone-number variable overrides (agent name, location, knowledge base, API endpoints)
- Mass update concern **largely resolved**: pathway changes propagate globally; micro-changes possible per location
- Post-call "Citations" model provides sentiment analysis, topic extraction, and cited utterances for auditability
- API-native (99% of dashboard available via API) — enables Bond to embed data in its own back office
- SMS + RCS supported; access tiers (Viewer/Prompter/Operator/Admin) available

**Concerns / Gaps:**

- **Email not supported** — Bond's #2 priority channel. On Bland roadmap but unavailable today.
- **Enterprise pricing: $150K minimum** ($100K/yr platform + $50K managed services + $0.30/min) — significantly above published self-serve rates
- **White-label login not supported** — Bond's facility customers cannot log into Bland directly. API embedding is recommended path.
- **~2 months to production** with managed services team actively tuning agent
- **Bland did not disclose AI identity** in demo — legal must define Bond's disclosure policy

### Decision Owners (Voice Platform Pilot)

| Decision                   | Owners                   |
| -------------------------- | ------------------------ |
| Voice platform for pilot   | Matt (CEO), Jacob (PM)   |
| Bland negotiation          | Matt (CEO)               |
| Launch pricing model       | Matt (CEO), Jacob (PM)   |
| AI disclosure requirements | Marc (Legal), Jacob (PM) |
| Monitoring and QA plan     | Jacob (PM), Engineering  |
| Bond Data API v1 spec      | Jacob (PM), Engineering  |
| Email channel — Phase 2    | Jacob (PM), Engineering  |

### Impact on PRD Decisions

| Decision                 | Previous Status       | Current Status                                                                                 |
| ------------------------ | --------------------- | ---------------------------------------------------------------------------------------------- |
| Voice provider selection | Open                  | **Decided — ElevenLabs for pilot** (prototype built). Bland is escalation path.                |
| LLM provider strategy    | Open                  | **Decided — BYO Model via ElevenLabs** (Gemini 2.5 Flash tested, model-agnostic)               |
| Mass update capability   | Critical risk         | Bond builds to own spec (ElevenLabs approach). Bland's modular pathways validated as fallback. |
| Pricing model            | Open                  | **Simplified** — no $150K floor. ElevenLabs usage ~$18-20/facility/month at $0.09-0.10/min     |
| Email channel            | Assumed bundled       | **Solved by build path** — Bond orchestration layer handles email as a channel directly        |
| Monitoring               | Open                  | Bond builds own monitoring (ElevenLabs provides basic analytics; Bond extends for production)  |
| Bland relationship       | Recommended for pilot | **Deprioritized to escalation path** — $150K minimum not viable as trial                       |

### Updated Bland Score

| Criterion     | Previous | Updated | Notes                                           |
| ------------- | -------- | ------- | ----------------------------------------------- |
| Multi-Tenancy | 3/5      | 4/5     | Per-phone-number modular config demonstrated    |
| Mass Update   | 2/5      | 4/5     | Global pathway changes + per-location overrides |
| Overall       | 3.55     | 3.9     | Demo validation + resolved key concerns         |

---

## Risk Assessment

| Risk                                          | Likelihood | Impact   | Mitigation Status                                                                                                                                                   |
| --------------------------------------------- | ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agent API spec delay                          | High       | Critical | ⚠️ Needs immediate attention — ElevenLabs custom tools need Bond API endpoints                                                                                      |
| Legal compliance gaps                         | Medium     | Critical | 🔴 Blocking pilot launch — must define AI disclosure policy                                                                                                         |
| Baseline competitive threat                   | Confirmed  | High     | 🔴 Baseline live with EmbedReach voice AI in Bond's ICP — differentiate on depth                                                                                    |
| ElevenLabs production quality gap             | Medium     | High     | ⚠️ Key risk of build path — voice latency, turn-taking, interruption handling may not match Bland without tuning. Bland is escalation path if gaps can't be closed. |
| Production-hardening without managed services | Medium     | Medium   | ⚠️ Bond must build own QA/monitoring practice. No Bland team listening to first 100 calls. Mitigate: manual call review, Blank Metal guidance.                      |
| Cost economics with ElevenLabs                | Low        | Low      | ✅ Dramatically simplified — $0.09-0.10/min with no platform fee. $399/mo has strong margins from day one.                                                          |
| Email channel gap                             | Low        | Low      | ✅ Resolved — ElevenLabs build path allows Bond to handle email as a channel in its own orchestration layer                                                         |
| Monitoring/incident response gap              | Medium     | Medium   | ⚠️ Bond must build production telemetry, alerting, and on-call process. ElevenLabs provides basic analytics.                                                        |
| Pilot success gate too aggressive             | Medium     | Medium   | ⚠️ Consider phased criteria                                                                                                                                         |

---

## Approval Recommendation

**Status:** ✅ **Approve with Conditions**

The PRD provides an excellent strategic foundation, but execution readiness requires completion of critical path items. Recommend proceeding with stakeholder review and parallel work on critical items.

**Conditions for Pilot Launch:**

- [ ] Agent API v1 specification complete (ElevenLabs custom tool endpoints defined)
- [ ] Legal/compliance signoff obtained (including AI disclosure policy)
- [ ] Multi-location variable system built on ElevenLabs platform
- [ ] Onboarding playbook created
- [ ] Cost economics model validated (ElevenLabs usage + LLM inference at $399/mo price point)
- [ ] Call log/transcript dashboard built in Bond admin
- [ ] 3 pilot facility knowledge bases populated
- [ ] QA monitoring practice established (who listens to calls, how issues are flagged)

---

_For detailed reviews by domain, see `PRD_REVIEW_COUNCIL.md`_
