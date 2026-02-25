# PRD Review Council — Executive Summary

**Review Date:** February 7, 2026 (Updated: February 19, 2026 — post Bland demo)  
**PRD Version:** Draft — Requirements Gathering + Vendor Validation

---

## Overall Assessment: **8/10** — Approve with Conditions

The PRD is exceptionally thorough and well-researched. The hybrid build/buy approach is sound, but several critical gaps must be resolved before pilot launch.

---

## Review Scores by Domain

| Domain | Score | Status |
|--------|-------|--------|
| Product Management | 8.5/10 | ✅ Strong strategic foundation |
| Engineering | 7/10 | ⚠️ Needs Agent API specification |
| Design/UX | 7.5/10 | ⚠️ Admin UI needs detailed spec |
| Sales/GTM | 7/10 | ⚠️ Sales motion needs definition |
| Legal/Compliance | 6/10 | 🔴 Critical: Legal signoff required |
| Finance | 7.5/10 | ⚠️ Cost model needs completion |
| Customer Success | 7/10 | ⚠️ Onboarding process needs definition |

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

## Recommended Next Steps

1. **Immediate (This Week) — Post Bland Demo (Feb 19):**
   - Review Bland's formal commercial proposal when received
   - Model unit economics at 3, 50, and 150 facility scale with Bland pricing ($150K + $0.30/min)
   - Decide: pilot voice-only with Bland, or require email solution before pilot?
   - Scope email channel alternatives (Zendesk integration, separate provider, or defer)
   - Scope API integration effort for embedding Bland data into Bond's back office

2. **Short-Term (Next 2 Weeks):**
   - Complete Agent API v1 specification (Bland webhook nodes need Bond API endpoints)
   - Obtain legal signoff on compliance approach (note: Bland demo agent did not self-identify as AI)
   - Negotiate Bland commercial terms (time-boxed commitment for concessions)
   - Design white-label data access model (how Bond surfaces Bland call data to facility customers)
   - Create onboarding playbook draft

3. **Before Pilot Launch:**
   - Complete all critical path items
   - Validate cost economics model with actual Bland pricing
   - Finalize admin UI design
   - Complete CS training materials
   - Work with Bland managed services team to build and tune pilot agent (~2 month ramp)

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

### Impact on PRD Decisions

| Decision | Previous Status | New Status |
|----------|----------------|------------|
| Voice provider selection | Open | Narrowing — Bland validated as pilot partner |
| LLM provider strategy | Open | Informed — Bland proprietary LLM for pilot; long-term agnostic |
| Mass update capability | Critical risk | Largely resolved via Bland's modular pathways |
| Pricing model | Open | Critical — $150K floor changes unit economics |
| Email channel | Assumed bundled | New gap — needs separate solution |
| Monitoring | Open | Partially addressed — Bland provides metrics; Bond needs own layer |

### Updated Bland Score

| Criterion | Previous | Updated | Notes |
|-----------|----------|---------|-------|
| Multi-Tenancy | 3/5 | 4/5 | Per-phone-number modular config demonstrated |
| Mass Update | 2/5 | 4/5 | Global pathway changes + per-location overrides |
| Overall | 3.55 | 3.9 | Demo validation + resolved key concerns |

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation Status |
|------|------------|--------|-------------------|
| Agent API spec delay | High | Critical | ⚠️ Needs immediate attention — Bland webhook nodes need Bond API endpoints |
| Legal compliance gaps | Medium | Critical | 🔴 Blocking pilot launch — Bland demo did not self-identify as AI |
| Baseline competitive threat | Confirmed | High | 🔴 Baseline live with EmbedReach voice AI in Bond's ICP — differentiate on depth |
| Mass update failure | Low | High | ✅ Largely resolved — Bland's modular pathway config demonstrated |
| Cost economics with Bland pricing | Medium-High | High | ⚠️ $150K/yr minimum + $0.30/min — need 32+ facilities to cover platform costs |
| Email channel gap | Confirmed | Medium | ⚠️ Bland doesn't support email (Bond's #2 channel) — need separate solution |
| Bland vendor dependency | Medium | Medium | ⚠️ Proprietary Conversational Pathways — architect Bond layer as vendor-agnostic |
| Monitoring/incident response gap | Medium | Medium | ⚠️ Bland provides metrics; Bond needs own monitoring layer |
| Pilot success gate too aggressive | Medium | Medium | ⚠️ Consider phased criteria |

---

## Approval Recommendation

**Status:** ✅ **Approve with Conditions**

The PRD provides an excellent strategic foundation, but execution readiness requires completion of critical path items. Recommend proceeding with stakeholder review and parallel work on critical items.

**Conditions for Pilot Launch:**
- [ ] Agent API v1 specification complete (Bland webhook endpoints defined)
- [ ] Legal/compliance signoff obtained (including AI disclosure policy)
- [x] Mass update system designed (Bland modular pathways validated Feb 19)
- [ ] Onboarding playbook created
- [ ] Cost economics model validated (with actual Bland enterprise pricing)
- [ ] Bland commercial terms agreed ($150K+ negotiation)
- [ ] Email channel strategy decided (defer, integrate, or separate provider)
- [ ] White-label data access model scoped (API embedding for facility customers)

---

*For detailed reviews by domain, see `PRD_REVIEW_COUNCIL.md`*
