export const kpiPhases = [
  {
    phase: "Phase 1",
    label: "Pilot",
    timeline: "Months 1-3",
    metrics: [
      {
        metric: "Facilities activated",
        target: "3",
        how: "Track activations in Bond admin; target early adopters from Chelsea Piers, Toca, Shoot 360",
      },
      {
        metric: "End-to-end resolution",
        target: "80%+",
        how: "Monitor escalation rate; track resolution classification and post-call surveys. Min 300 AI-handled calls across 3 facilities.",
      },
      {
        metric: "Call answer time",
        target: "<3 sec",
        how: "Telephony platform metrics vs. industry avg of 30+ sec or missed",
      },
      {
        metric: "Operator NPS",
        target: "7+/10",
        how: "Post-pilot survey at 30 and 60 days",
      },
      {
        metric: "Critical errors",
        target: "Zero",
        how: "QA review of all agent interactions; automated edge case flagging",
      },
    ],
  },
  {
    phase: "Phase 2",
    label: "Scale",
    timeline: "Months 3-9",
    metrics: [
      {
        metric: "Active facilities",
        target: "50+",
        how: "Activation tracking in Bond admin",
      },
      {
        metric: "Booking conversion increase",
        target: "15%+",
        how: "Pre/post activation booking rates via Bond transaction data",
      },
      {
        metric: "Missed call reduction",
        target: "25%+",
        how: "Telephony metrics before/after comparison",
      },
      {
        metric: "Incremental ARR",
        target: "$150K+",
        how: "Finance tracking of AI agent subscriptions",
      },
      {
        metric: "Staff time saved",
        target: "5+ hrs/wk",
        how: "Quarterly survey of active facilities",
      },
    ],
  },
  {
    phase: "Phase 3",
    label: "Proactive",
    timeline: "Months 9-15",
    metrics: [
      {
        metric: "Active facilities",
        target: "100+",
        how: "AI agent becomes standard part of Bond onboarding",
      },
      {
        metric: "Inbound comms handled",
        target: "70%+",
        how: "Multi-channel volume tracking (voice + email + chat)",
      },
      {
        metric: '"Second chance" lead conversion',
        target: "20%+",
        how: "Track bookings from AI interactions outside business hours / high-volume periods",
      },
      {
        metric: "Cancellation saves",
        target: "10%+",
        how: "Compare cancellation completion rate pre/post save flow activation",
      },
      {
        metric: "Incremental ARR",
        target: "$500K+",
        how: "Finance reporting",
      },
      {
        metric: "Consumer NPS",
        target: "8+/10",
        how: "Post-interaction survey sampling",
      },
    ],
  },
  {
    phase: "Phase 4",
    label: "Bond Agents",
    timeline: "Months 15-24",
    metrics: [
      {
        metric: "Agent types active",
        target: "3+ at 25% of facilities",
        how: "Agent activation tracking by type; workflow coverage beyond front desk",
      },
      {
        metric: "Operator engagement",
        target: "Weekly active use",
        how: "Track sessions, directives issued, and recommendations reviewed per operator",
      },
      {
        metric: "AR recovery rate",
        target: "15%+",
        how: "Payment recovery attributed to Collections Agent vs. manual follow-up",
      },
      {
        metric: "Programs filled",
        target: "20%+ underenrolled",
        how: "Enrollment velocity pre/post Program Coordinator Agent activation",
      },
      {
        metric: "Bond Agents ARR",
        target: "$300K+",
        how: "Incremental revenue from agent add-on subscriptions beyond base front desk",
      },
      {
        metric: "Operator NPS",
        target: "8+/10",
        how: "Quarterly survey of Bond Agents customers",
      },
    ],
  },
];

export const competitors = [
  {
    name: "ServiceTitan",
    icp: "Home services contractors",
    ai: "Full AI suite: voice agents, SMS booking, dispatch optimization",
    voice: true,
    voiceLabel: "Live, 24/7",
    pricing: "Contact Center Pro add-on",
    threat: "Benchmark",
    threatColor: "blue" as const,
  },
  {
    name: "Momence",
    icp: "Fitness studios, gyms, spas",
    ai: "AI Inbox: booking, cancellation, freezes, refunds via text",
    voice: false,
    voiceLabel: "Text only",
    pricing: "$399/mo per location",
    threat: "Medium-High",
    threatColor: "orange" as const,
  },
  {
    name: "Rec Technologies",
    icp: "Municipal parks & rec",
    ai: "Refund agent, analytics, marketing analyst",
    voice: false,
    voiceLabel: "None",
    pricing: "Included in platform",
    threat: "Medium",
    threatColor: "yellow" as const,
  },
  {
    name: "Generic Voice AI",
    icp: "Horizontal",
    ai: "Voice infrastructure, no domain context",
    voice: true,
    voiceLabel: "Infrastructure only",
    pricing: "Variable (usage-based)",
    threat: "Low",
    threatColor: "green" as const,
  },
];

export const personas = [
  {
    name: "Sarah",
    role: "Facility Operator / GM",
    emoji: "GM",
    color: "bg-bond-navy",
    pain: "30-40% of calls go to voicemail during busy periods. Virtual receptionist can only take messages -- no Bond access.",
    wants: [
      "Every call answered instantly",
      "Agent knows programs and policies",
      "Can book registrations and answer schedule questions",
      "Escalates complex issues with full context",
      "Minimal setup and maintenance",
    ],
  },
  {
    name: "Mike",
    role: "Hockey Dad / Consumer",
    emoji: "Dad",
    color: "bg-bond-navy-light",
    pain: "Calls at 6:30pm, gets voicemail. Tries next morning, can't get through. By the time he connects, clinic is full.",
    wants: [
      "Immediate answer when calling",
      "Natural questions work ('is there space in U10 spring clinic?')",
      "Complete registration over the phone",
      "Accurate schedule info for both kids in one call",
    ],
  },
  {
    name: "Jenna",
    role: "Front Desk Staff",
    emoji: "Staff",
    color: "bg-bond-gold",
    pain: "Can't find info fast enough while in-person customers wait. Same 10 questions make up 80% of calls.",
    wants: [
      "Fewer phone calls to handle",
      "Confidence callers get accurate info",
      "Only handle calls that need a human",
    ],
  },
  {
    name: "Bond",
    role: "The Platform",
    emoji: "Platform",
    color: "bg-bond-navy-dark",
    pain: "Needs new revenue streams, deeper platform stickiness, and proprietary data moat.",
    wants: [
      "High-margin recurring revenue stream",
      "Deepened platform stickiness / reduced churn",
      "Proprietary data that improves over time",
      "Technology leadership position",
      "Scales across 300+ facilities",
    ],
  },
];

export type DemoStep = {
  speaker: "agent" | "caller" | "system" | "operator";
  text: string;
  annotation?: string;
};

export type PhaseDemo = {
  title: string;
  context: string;
  steps: DemoStep[];
};

export const featurePhases: Array<{
  phase: string;
  title: string;
  subtitle: string;
  label: string;
  features: Array<{
    name: string;
    desc: string;
    priority: string;
    size: string;
  }>;
  demo: PhaseDemo;
}> = [
  {
    phase: "Phase 1",
    title: "Schedule Data & FAQs",
    subtitle: "The AI That Knows Your Programs",
    label: "MVP",
    features: [
      {
        name: "Inbound Voice Handling",
        desc: "AI answers inbound phone calls with natural, human-like conversation. Configurable greeting and voice personality.",
        priority: "P0",
        size: "L",
      },
      {
        name: "Schedule & Availability Queries",
        desc: "Agent accesses real-time Bond data for program schedules, class times, availability, and waitlist status.",
        priority: "P0",
        size: "M",
      },
      {
        name: "Pricing & Program Information",
        desc: "Accurate pricing, descriptions, age requirements, skill levels, and prerequisites from Bond.",
        priority: "P0",
        size: "M",
      },
      {
        name: "Facility Policy Knowledge",
        desc: "Facility-specific policies: cancellation rules, refund policies, weather procedures.",
        priority: "P0",
        size: "M",
      },
      {
        name: "Human Escalation",
        desc: "Warm transfer with full context (transcript + intent summary). Configurable triggers.",
        priority: "P0",
        size: "M",
      },
      {
        name: "Admin Configuration Portal",
        desc: "Plain-English setup -- like training a new hire. Policies, tone, FAQs, escalation rules.",
        priority: "P0",
        size: "L",
      },
      {
        name: "Conversation Dashboard",
        desc: "All AI conversations: transcripts, outcomes, escalation reasons, sentiment, volume patterns.",
        priority: "P1",
        size: "M",
      },
      {
        name: "Multi-Sport / Multi-Facility",
        desc: "Supports multiple sports, programs, and locations with unique configurations per facility.",
        priority: "P0",
        size: "M",
      },
      {
        name: "After-Hours & Overflow Routing",
        desc: "Configurable: AI answers all, after-hours only, overflow only, or threshold-based.",
        priority: "P1",
        size: "S",
      },
    ],
    demo: {
      title: "Common Schedule & FAQ Questions",
      context:
        "It's 2:30 PM on a weekday. A parent calls the facility with several quick questions about schedules, hours, and policies.",
      steps: [
        {
          speaker: "system",
          text: "Inbound call received. Call answered in 1.1 seconds.",
          annotation: "Inbound Voice Handling",
        },
        {
          speaker: "agent",
          text: "Hi, thanks for calling! This is Alex, how can I help you?",
          annotation: "Inbound Voice Handling",
        },
        {
          speaker: "caller",
          text: "Hi, where can I find the schedule for the youth hockey league?",
        },
        {
          speaker: "agent",
          text: "The youth hockey league schedule is posted on our website under Programs, and it's also available in the Bond app. The schedule varies week to week based on ice availability and game schedules. Would you like me to tell you what's coming up this week?",
          annotation: "Schedule & Availability Query",
        },
        {
          speaker: "caller",
          text: "Yeah, that'd be helpful. Also, what times are offered for private lessons?",
        },
        {
          speaker: "agent",
          text: "Private lessons are available Monday through Friday from 3 PM to 8 PM, and weekends from 9 AM to 5 PM. Sessions are typically 30 or 60 minutes. The rate is $75 for 30 minutes or $140 for 60 minutes. Would you like me to connect you with someone who can book a private lesson?",
          annotation: "Schedule & Availability + Pricing Info",
        },
        {
          speaker: "caller",
          text: "Maybe later. One more thing \u2014 what are the pro shop hours today?",
        },
        {
          speaker: "agent",
          text: "The pro shop is open today from 10 AM to 8 PM. They carry skates, sticks, protective equipment, and can do skate sharpening. Is there something specific you're looking for?",
          annotation: "Facility Information",
        },
        {
          speaker: "caller",
          text: "No, that's all. Oh wait \u2014 can I bring outside food?",
        },
        {
          speaker: "agent",
          text: "Yes, you're welcome to bring outside food and drinks. We just ask that you keep food and drinks in the lobby area and not on the ice. We also have a cafe that's open today from 11 AM to 7 PM if you'd like to grab something here.",
          annotation: "Facility Policy Knowledge",
        },
        {
          speaker: "caller",
          text: "Perfect, thanks!",
        },
        {
          speaker: "agent",
          text: "You're welcome! Have a great day!",
        },
        {
          speaker: "system",
          text: "Interaction logged. Questions answered: youth league schedule location, private lesson times/pricing, pro shop hours, outside food policy. Call duration: 1m 48s.",
          annotation: "Dashboard",
        },
      ],
    },
  },
  {
    phase: "Phase 2",
    title: "Customer Recognition",
    subtitle: "The AI That Knows Your Customers",
    label: "MVP+",
    features: [
      {
        name: "Customer Recognition",
        desc: "Identifies returning customers by phone number. Greets by name with context on registrations and history.",
        priority: "P0",
        size: "M",
      },
      {
        name: "Customer History Context",
        desc: "Agent accesses customer's past registrations, memberships, payment history, and preferences to personalize conversations.",
        priority: "P1",
        size: "M",
      },
      {
        name: "Personalized Recommendations",
        desc: "Suggests programs based on customer's age, skill level, past participation, and family preferences.",
        priority: "P1",
        size: "M",
      },
      {
        name: "Account Status Awareness",
        desc: "Agent knows customer's current account status: active registrations, outstanding balances, payment methods on file, membership status.",
        priority: "P0",
        size: "M",
      },
      {
        name: "Email Channel",
        desc: "Inbound email handling with same knowledge and customer recognition capabilities.",
        priority: "P1",
        size: "M",
      },
      {
        name: "SMS / Chat Channel",
        desc: "Text-based inquiries via SMS and web chat with customer recognition.",
        priority: "P2",
        size: "M",
      },
    ],
    demo: {
      title: "Returning Customer Inquiry",
      context:
        "It's 8:47 PM on a Tuesday. Mike Chen, a returning customer, calls Chelsea Piers to ask about spring programs. The agent recognizes him and has full context on his family's history.",
      steps: [
        {
          speaker: "system",
          text: "Inbound call received at 8:47 PM. Caller identified: Mike Chen (917-555-0142). Active registrations: Emma Chen (U12 Figure Skating), Lucas Chen (U8 Learn to Skate \u2014 completed Fall '25). Account status: Active, no outstanding balance.",
          annotation: "Customer Recognition",
        },
        {
          speaker: "agent",
          text: "Hi Mike! Thanks for calling Chelsea Piers. How can I help you tonight?",
          annotation: "Personalized Greeting",
        },
        {
          speaker: "caller",
          text: "Oh hi! I'm looking for spring hockey programs for Lucas \u2014 he's 9 now.",
        },
        {
          speaker: "agent",
          text: "Great! I can see Lucas completed our Learn to Skate program last fall \u2014 perfect progression into hockey. For a 9-year-old, we have two spring options: the U10 Saturday Skills Clinic starting March 15th, and the U10 weeknight league on Tuesdays. Which sounds more interesting?",
          annotation: "Customer History Context + Schedule Query",
        },
        {
          speaker: "caller",
          text: "The Saturday one. How much is it, and is there still room?",
        },
        {
          speaker: "agent",
          text: "The U10 Saturday Skills Clinic is $320 for 8 weeks, 9:00 to 10:30 AM. There are 4 spots left out of 16. Since Emma's figure skating is also Saturday mornings, they'd finish around the same time \u2014 that might work well for your schedule. Full equipment is required \u2014 we have rental packages for $45 per session if you need them.",
          annotation: "Personalized Recommendation + Account Awareness",
        },
        {
          speaker: "caller",
          text: "That timing actually works perfectly. What's the cancellation policy?",
        },
        {
          speaker: "agent",
          text: "You can cancel with a full refund up to 7 days before the session starts. After that, individual classes can be cancelled with 24 hours notice for a class credit valid for 90 days. If it's illness-related, we waive the notice requirement \u2014 just let us know.",
          annotation: "Facility Policy Knowledge",
        },
        {
          speaker: "caller",
          text: "Perfect. Actually \u2014 one more thing. I've been having a billing issue with Emma's skating for three weeks and nobody's gotten back to me. I'm getting a little frustrated.",
        },
        {
          speaker: "system",
          text: "Frustration detected. Open support ticket found: #4821 (billing dispute, 19 days unresolved). Escalation triggered.",
          annotation: "Sentiment Detection + Account Status",
        },
        {
          speaker: "agent",
          text: "I'm sorry about that, Mike. I can see there's an open billing issue on Emma's account that's been waiting too long. Let me flag this as priority and have our billing team call you first thing tomorrow morning. They'll have all the details so you won't have to explain it again. Would 9 AM work?",
          annotation: "Human Escalation with Full Customer Context",
        },
        {
          speaker: "caller",
          text: "That'd be great, thanks.",
        },
        {
          speaker: "agent",
          text: "Done! I've also sent you an email with the spring hockey clinic details so you and your wife can look it over. Anything else I can help with?",
        },
        {
          speaker: "system",
          text: "Interaction logged. Follow-up email sent with program details. Billing escalation created with priority flag, transcript attached. Call duration: 2m 14s.",
          annotation: "Dashboard + Follow-Up",
        },
      ],
    },
  },
  {
    phase: "Phase 3",
    title: "Action-Taking",
    subtitle: "The AI That Does Things",
    label: "Post-MVP",
    features: [
      {
        name: "Registration & Booking",
        desc: "Complete class/program registrations, book rentals, and add to waitlists within the call.",
        priority: "P0",
        size: "L",
      },
      {
        name: "Cancellation Processing",
        desc: "Process cancellations per facility policies, apply fees/credits, handle exceptions.",
        priority: "P1",
        size: "M",
      },
      {
        name: "Membership Modifications",
        desc: "Handle inquiries, process freezes, initiate cancellations with notice enforcement.",
        priority: "P1",
        size: "M",
      },
      {
        name: "Payment Collection",
        desc: "Secure PCI-compliant payment processing within calls for registrations and balances.",
        priority: "P1",
        size: "L",
      },
      {
        name: "Confirmation & Follow-Up",
        desc: "Post-action confirmation emails/SMS with details, calendar invites, reminders.",
        priority: "P1",
        size: "S",
      },
    ],
    demo: {
      title: "Registration + Cancellation in One Call",
      context:
        "Sarah calls Toca Football at 3:15 PM. She wants to register her son for a new program and cancel her daughter's upcoming session because of illness.",
      steps: [
        {
          speaker: "system",
          text: "Inbound call. Caller identified: Sarah Martinez (512-555-0198). Two children: Diego (age 11, U12 Select Training), Mia (age 8, U8 Skills Academy).",
          annotation: "Customer Recognition",
        },
        {
          speaker: "agent",
          text: "Hi Sarah! Thanks for calling Toca. How can I help you today?",
        },
        {
          speaker: "caller",
          text: "Hi! Two things \u2014 I need to sign Diego up for the spring futsal league, and I need to cancel Mia's class this Saturday. She has strep throat.",
        },
        {
          speaker: "agent",
          text: "Oh no, I hope Mia feels better soon! Let me take care of both. For Diego \u2014 the U12 Spring Futsal League starts April 5th, Saturdays 11 AM to 12:30 PM, 10-week season. It's $280. There are 3 spots left. Want me to register him?",
          annotation: "Schedule & Availability Query",
        },
        {
          speaker: "caller",
          text: "Yes, please!",
        },
        {
          speaker: "system",
          text: "Initiating registration: Diego Martinez \u2192 U12 Spring Futsal League. Checking prerequisites... passed. Checking conflicts... none found.",
          annotation: "Registration & Booking",
        },
        {
          speaker: "agent",
          text: "I've got Diego registered for the U12 Spring Futsal League. The $280 will be charged to the Visa ending in 4823 on file. Should I send you a calendar invite?",
          annotation: "Payment Collection",
        },
        {
          speaker: "caller",
          text: "Yes please. Now about Mia \u2014",
        },
        {
          speaker: "agent",
          text: "Of course. I see Mia's next U8 Skills Academy session is this Saturday at 9 AM. Since she's sick, our illness policy waives the 24-hour notice requirement. I'll cancel Saturday's class and apply a credit to your account \u2014 it's good for any U8 class in the next 90 days. Sound good?",
          annotation: "Cancellation Processing + Policy Enforcement",
        },
        {
          speaker: "caller",
          text: "Perfect. Thank you so much.",
        },
        {
          speaker: "agent",
          text: "Done! Let me recap: Diego is registered for Spring Futsal starting April 5th, and Mia has a class credit for her Saturday session. I'm sending you a confirmation email with everything right now. Anything else?",
        },
        {
          speaker: "system",
          text: "Actions completed: 1 registration, 1 cancellation with illness credit. Payment of $280 processed. Confirmation email sent with registration details + calendar invite + credit summary. Call duration: 1m 48s.",
          annotation: "Confirmation & Follow-Up",
        },
      ],
    },
  },
  {
    phase: "Phase 4",
    title: "Proactive Intelligence",
    subtitle: "The AI That Anticipates",
    label: "Future",
    features: [
      {
        name: "Second Chance Leads",
        desc: "Reviews unanswered calls and unresolved inquiries. Flags high-potential leads for follow-up.",
        priority: "P2",
        size: "M",
      },
      {
        name: "Proactive Outreach",
        desc: "Outbound for waitlist openings, schedule changes, registration reminders, re-engagement of lapsed customers.",
        priority: "P2",
        size: "L",
      },
      {
        name: "Retention & Save Flows",
        desc: "Detects at-risk members. Runs cancellation save flows with admin-configured retention playbooks. Proactive outreach with personalized offers and pause options.",
        priority: "P2",
        size: "L",
      },
      {
        name: "Cross-Sell & Upsell",
        desc: "Recommend relevant programs and memberships based on customer profile during conversations.",
        priority: "P2",
        size: "M",
      },
      {
        name: "Multi-Language Support",
        desc: "Spanish and other languages common in facility service areas.",
        priority: "P2",
        size: "L",
      },
      {
        name: "Analytics & Insights Dashboard",
        desc: "Conversion funnels, inquiry topics, peak patterns, revenue attribution, satisfaction trends.",
        priority: "P2",
        size: "M",
      },
    ],
    demo: {
      title: "Proactive Save + Waitlist Recovery + Cross-Sell",
      context:
        "Three scenarios that happen without anyone at the facility lifting a finger \u2014 the agent detects opportunities and acts on them automatically.",
      steps: [
        {
          speaker: "system",
          text: "\u2014 Scenario A: Retention Save Flow \u2014\nRisk detected: The Johnson family has missed 3 of the last 4 gymnastics sessions. Membership renewal is in 12 days. Initiating save outreach.",
          annotation: "Retention & Save Flows",
        },
        {
          speaker: "agent",
          text: "Hi Lisa, this is Alex from Lakewood Gymnastics. I noticed Sophia hasn't been able to make it to classes lately and wanted to check in \u2014 is everything okay?",
        },
        {
          speaker: "caller",
          text: "Yeah, her soccer schedule changed and now it conflicts with gymnastics on Thursdays.",
        },
        {
          speaker: "agent",
          text: "Oh, that makes sense! Good news \u2014 we actually have the same level class on Tuesdays at 5:30 PM with Coach Rachel, and there's a spot open. Would you like me to switch Sophia over? No extra cost, and she wouldn't miss a beat.",
          annotation: "Schedule Awareness + Proactive Solution",
        },
        {
          speaker: "caller",
          text: "Oh that's perfect, yes please!",
        },
        {
          speaker: "system",
          text: "Membership save successful. Sophia Johnson moved from Thursday to Tuesday session. Renewal risk resolved. Revenue retained: $185/month.",
          annotation: "Retention Save \u2014 Revenue Retained",
        },
        {
          speaker: "system",
          text: "\u2014 Scenario B: Waitlist Recovery \u2014\nA spot opened in the U10 Saturday Hockey Clinic (previously full). 3 families on waitlist. Initiating outbound contact in priority order.",
          annotation: "Proactive Outreach",
        },
        {
          speaker: "agent",
          text: "Hi Mike, this is Alex from Chelsea Piers! Great news \u2014 a spot just opened up in the U10 Saturday Skills Clinic you asked about last week. Would you like me to grab it for Lucas?",
          annotation: "Second Chance Lead Recovery",
        },
        {
          speaker: "caller",
          text: "Absolutely, sign him up!",
        },
        {
          speaker: "agent",
          text: "Done! Lucas is registered. By the way \u2014 since Emma is already doing figure skating on Saturday mornings, they'd finish at the same time. We also have a siblings discount: 10% off when both kids are in Saturday programs. Want me to apply that?",
          annotation: "Cross-Sell & Upsell",
        },
        {
          speaker: "system",
          text: "Waitlist conversion completed. Siblings discount applied. Incremental revenue: $320 (registration) + $32 discount offset by LTV increase. This lead would have been lost pre-AI \u2014 the original inquiry was an after-hours call 6 days ago.",
          annotation: "Second Chance Lead \u2014 Revenue Recaptured",
        },
      ],
    },
  },
  {
    phase: "Phase 5",
    title: "Bond Agents",
    subtitle: "Your AI Team",
    label: "Vision",
    features: [
      {
        name: "Agent Command Center",
        desc: "Unified dashboard for all active agents: activity feed, decisions made, escalations pending, performance metrics. A staffing board for your AI workforce.",
        priority: "P2",
        size: "L",
      },
      {
        name: "Operator ↔ Agent Chat",
        desc: "Natural language interface to direct, query, and supervise agents. 'What's our AR status?' 'Fill the spring soccer clinic.' Agents proactively surface recommendations.",
        priority: "P2",
        size: "L",
      },
      {
        name: "Agent-to-Agent Handoffs",
        desc: "Agents coordinate through Bond's shared data layer. Front desk flags retention risks, program coordinator triggers outreach, collections resolves balances visible across agents.",
        priority: "P2",
        size: "M",
      },
      {
        name: "Collections & AR Agent",
        desc: "Automated follow-up on failed payments and outstanding balances. Negotiates payment plans within admin rules. Replaces awkward manual collection calls.",
        priority: "P2",
        size: "M",
      },
      {
        name: "Program Coordinator Agent",
        desc: "Fills underenrolled programs via proactive outreach. Manages instructor sub notifications and cascading schedule changes to affected families.",
        priority: "P2",
        size: "L",
      },
      {
        name: "Events & Party Booking Agent",
        desc: "End-to-end birthday party and event handling: availability, packages, deposits, confirmations, reminders, and abandoned inquiry follow-up.",
        priority: "P2",
        size: "M",
      },
      {
        name: "Rental Coordinator Agent",
        desc: "Manages ice/field/court rental inquiries. Availability, quotes, holds, contract follow-up, seasonal rebooking for teams and leagues.",
        priority: "P2",
        size: "M",
      },
      {
        name: "Demand & Staffing Intelligence",
        desc: "Predict demand spikes, recommend staffing levels, surface pricing optimization. 'Tuesday 4pm clinics fill 3x faster than Thursday.'",
        priority: "P3",
        size: "L",
      },
      {
        name: "Compliance & Operations Agent",
        desc: "Tracks waiver expirations, certification renewals, safety gaps. Proactively flags compliance issues and auto-notifies affected families and staff.",
        priority: "P3",
        size: "M",
      },
      {
        name: "Automated Operational Reporting",
        desc: "Weekly/monthly facility performance summaries: revenue trends, attendance patterns, program utilization, anomaly detection.",
        priority: "P3",
        size: "M",
      },
    ],
    demo: {
      title: "Monday Morning with Your AI Team",
      context:
        "It's 8:00 AM Monday. Sarah, the GM at Shoot 360, opens her Agent Command Center. Her AI team has been working all weekend.",
      steps: [
        {
          speaker: "system",
          text: "Agent Command Center \u2014 Weekend Summary:\n\u2022 Front Desk Agent: 47 calls handled, 91% resolved, 4 escalations\n\u2022 Collections Agent: $2,340 recovered from 8 accounts\n\u2022 Program Coordinator: 6 underenrolled spots filled\n\u2022 Events Agent: 2 birthday parties booked, 1 deposit collected",
          annotation: "Agent Command Center",
        },
        {
          speaker: "operator",
          text: "What's our AR situation looking like this month?",
          annotation: "Operator \u2194 Agent Chat",
        },
        {
          speaker: "agent",
          text: "Current AR is $18,400 across 34 accounts. The Collections Agent has recovered $6,200 this month (34% of starting balance). 5 families have set up payment plans. 3 accounts need your attention \u2014 the Ramos family is requesting hardship consideration, and the two overdue accounts over 90 days have stopped responding to outreach. Want me to flag those for a personal call?",
          annotation: "Collections & AR Agent",
        },
        {
          speaker: "operator",
          text: "Yes. Also, the spring baseball clinic only has 6 kids signed up and it starts in 3 weeks. Can we fill it?",
        },
        {
          speaker: "agent",
          text: "On it. I found 23 families with kids in the right age range who did fall baseball or have expressed interest in batting programs. 8 of them are already registered for other spring programs, so I'll target the other 15 first. I'll reach out via SMS today with a personal message and follow up by phone tomorrow if they don't respond. Want me to offer the early-bird rate of $249 since we need to fill seats?",
          annotation: "Program Coordinator Agent",
        },
        {
          speaker: "operator",
          text: "Yes, go for it. Offer the early-bird rate to anyone who signs up this week.",
        },
        {
          speaker: "system",
          text: "Program Coordinator Agent: Outreach campaign initiated for Spring Baseball Clinic. 15 families targeted. Promotional rate approved through Friday.",
          annotation: "Operator Directive \u2192 Agent Action",
        },
        {
          speaker: "system",
          text: "Agent-to-Agent Handoff: Front Desk Agent flagged that the Nguyen family called twice this weekend asking about summer camps but didn't commit. Program Coordinator Agent has added them to the summer camp early-access list and will send program details when published Wednesday.",
          annotation: "Agent-to-Agent Handoffs",
        },
        {
          speaker: "agent",
          text: "One more thing \u2014 I noticed Saturday birthday parties are booking 4-5 weeks out now. Based on the trend, March and April Saturdays will be fully booked within 10 days. Should I have the Events Agent proactively reach out to families with kids who have birthdays in April and May? We could offer priority booking before it fills up.",
          annotation: "Demand Intelligence + Events Agent",
        },
        {
          speaker: "operator",
          text: "Great idea. Do it.",
        },
        {
          speaker: "system",
          text: "Events Agent: Birthday party outreach campaign initiated. 28 families with April/May birthdays identified from Bond customer records. Priority booking window opens today.",
          annotation: "Proactive Revenue Generation",
        },
      ],
    },
  },
];

export const architectureLayers = [
  {
    layer: 1,
    name: "Communication Infrastructure",
    decision: "Buy",
    desc: "Telephony, SMS, email channel management. Call routing and audio streaming.",
    tech: "Twilio / Vonage",
  },
  {
    layer: 2,
    name: "Speech Processing",
    decision: "Buy",
    desc: "STT converts caller audio to text. TTS converts responses to natural-sounding audio. Sub-500ms latency.",
    tech: "Deepgram / ElevenLabs / OpenAI",
  },
  {
    layer: 3,
    name: "Agent API & Business Logic",
    decision: "Build",
    desc: "Structured data access and business logic layer. Agent API, policy engine, confidence scoring. This is Bond's moat — being the system of record.",
    tech: "Bond proprietary — the moat",
  },
  {
    layer: "3b",
    name: "Agentic Orchestration",
    decision: "Buy/Partner",
    desc: "Reasoning and conversation management. LLM orchestration, conversation state, intent routing. Calls into Bond's Agent API — effectiveness depends on Bond's data layer.",
    tech: "Bland / Decagon / LangGraph",
  },
  {
    layer: 4,
    name: "Integration & Data Layer",
    decision: "Build",
    desc: "Agent API providing structured, permissioned access to Bond platform data.",
    tech: "Bond Agent API v1",
  },
];

export const timeline = [
  {
    phase: "Phase 1",
    title: "Foundation & Pilot",
    months: "Months 1-4",
    objective:
      "Ship a working voice agent to 3 pilot facilities answering questions using real Bond data.",
    milestones: [
      {
        time: "Month 1, Wk 1-2",
        name: "Architecture Review",
        desc: "Finalize technical architecture and vendor selection",
      },
      {
        time: "Month 1, Wk 3-4",
        name: "Agent API v1 Kickoff",
        desc: "Define and begin building read-access API layer",
      },
      {
        time: "Month 2, Wk 1-2",
        name: "Voice Infrastructure",
        desc: "Integrate telephony, STT, and TTS. Build basic call flow.",
      },
      {
        time: "Month 2, Wk 3-4",
        name: "Intelligence Engine v1",
        desc: "Build LLM orchestration layer with Bond-specific prompts, context management, and conversation state handling. Connect to Agent API.",
      },
      {
        time: "Month 3, Wk 1-2",
        name: "Admin Portal v1",
        desc: "Plain-English setup interface for facility configuration",
      },
      {
        time: "Month 3, Wk 3-4",
        name: "QA & Testing",
        desc: "Comprehensive testing across all scenario types",
      },
      {
        time: "Month 4, Wk 1-2",
        name: "Pilot Launch",
        desc: "Deploy to 3 select facilities with active monitoring",
      },
      {
        time: "Month 4, Wk 3-4",
        name: "Pilot Evaluation",
        desc: "Analyze data, plan Phase 2 scope",
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Action-Taking & Scale",
    months: "Months 5-9",
    objective:
      "Enable the agent to take actions (book, cancel, modify) and expand to 50+ facilities.",
    milestones: [
      {
        time: "Month 5",
        name: "Agent API v2",
        desc: "Write operations: registration, cancellation, waitlist, membership",
      },
      {
        time: "Month 6",
        name: "Action-Taking Intelligence",
        desc: "Build confirmation flows, policy enforcement logic, exception handling, and undo/correction capabilities into the intelligence engine",
      },
      {
        time: "Month 6-7",
        name: "Email & SMS Channels",
        desc: "Extend agent to handle inbound emails and text messages",
      },
      {
        time: "Month 7",
        name: "Dashboard v2",
        desc: "Enhanced analytics: conversion tracking, revenue attribution",
      },
      {
        time: "Month 8",
        name: "Scaled Rollout",
        desc: "50+ facilities with onboarding playbook and CS training",
      },
      {
        time: "Month 9",
        name: "Phase 2 Evaluation",
        desc: "Comprehensive review of scaled deployment",
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "Proactive Intelligence",
    months: "Months 10-15",
    objective:
      "The front desk agent evolves from reactive to proactive — anticipating needs, recovering lost revenue, and driving growth.",
    milestones: [
      {
        time: "Month 10-11",
        name: "Second Chance Leads",
        desc: "AI reviews unresolved inquiries and surfaces high-value follow-ups",
      },
      {
        time: "Month 11-12",
        name: "Retention & Save Flows",
        desc: "Cancellation save flows with retention playbooks. Proactive at-risk member outreach.",
      },
      {
        time: "Month 12-13",
        name: "Proactive Outreach",
        desc: "Outbound for waitlist openings, schedule changes, registration reminders, lapsed customer re-engagement",
      },
      {
        time: "Month 13-14",
        name: "Cross-Sell Engine",
        desc: "Recommend programs based on customer profile and history during conversations",
      },
      {
        time: "Month 14-15",
        name: "Multi-Language & Analytics",
        desc: "Spanish support. Advanced analytics: conversion funnels, peak patterns, revenue attribution.",
      },
    ],
  },
  {
    phase: "Phase 4",
    title: "Bond Agents",
    months: "Months 15-24",
    objective:
      "Expand to a managed ecosystem of role-specific AI agents with a command center where operators direct their AI team.",
    milestones: [
      {
        time: "Month 15-16",
        name: "Agent Command Center",
        desc: "Unified operator dashboard for all agents: activity, decisions, escalations, performance",
      },
      {
        time: "Month 16-17",
        name: "Operator ↔ Agent Chat",
        desc: "Natural language interface for operators to direct, query, and supervise their agents",
      },
      {
        time: "Month 17-18",
        name: "Collections & AR Agent",
        desc: "Automated payment follow-up, balance recovery, payment plan negotiation",
      },
      {
        time: "Month 18-19",
        name: "Program Coordinator Agent",
        desc: "Fill underenrolled programs, instructor sub notifications, cascading schedule changes",
      },
      {
        time: "Month 19-20",
        name: "Agent-to-Agent Handoffs",
        desc: "Agents coordinate through shared data layer: cross-agent visibility and warm handoffs",
      },
      {
        time: "Month 20-22",
        name: "Events & Rental Agents",
        desc: "End-to-end party/event booking and facility rental coordination agents",
      },
      {
        time: "Month 22-24",
        name: "Back Office Intelligence",
        desc: "Demand prediction, compliance monitoring, automated operational reporting",
      },
    ],
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "$249",
    period: "/month",
    target: "Small single-sport facilities",
    features: [
      "Voice-only",
      "Up to 200 calls/month",
      "Business hours + after hours",
      "Basic dashboard",
    ],
  },
  {
    name: "Professional",
    price: "$399",
    period: "/month",
    target: "Mid-size multi-sport facilities",
    popular: true,
    features: [
      "Voice + email + chat",
      "Up to 500 calls/month",
      "Action-taking (book/cancel)",
      "Full dashboard",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "$599",
    period: "/month",
    target: "Large facilities, franchise groups",
    features: [
      "All channels",
      "Unlimited calls",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated success manager",
      "Multi-location support",
    ],
  },
];

export const risks = [
  {
    risk: "AI provides incorrect information",
    likelihood: "Medium",
    impact: "High",
    mitigation:
      "Strict data freshness requirements; confidence scoring with escalation fallback; comprehensive QA per facility",
  },
  {
    risk: 'Caller frustration ("I want to talk to a person")',
    likelihood: "High",
    impact: "Medium",
    mitigation:
      "Always offer human transfer; detect frustration early; proactively offer transfer; iterate on escalation patterns",
  },
  {
    risk: "Regulatory issues (AI disclosure, recording consent)",
    likelihood: "Medium",
    impact: "High",
    mitigation:
      "Proactive legal review; always-disclose-by-default; state-by-state compliance checklist",
  },
  {
    risk: "Telephony / infrastructure downtime",
    likelihood: "Low",
    impact: "Critical",
    mitigation:
      "Multi-provider redundancy; automatic failover to existing phone system; 99.9% uptime SLA",
  },
  {
    risk: "Low facility adoption",
    likelihood: "Medium",
    impact: "High",
    mitigation:
      "Start with champions; demonstrate ROI in 30 days; 60-day free trial; CS-led onboarding",
  },
  {
    risk: "Competitor launches voice AI for rec facilities",
    likelihood: "Medium",
    impact: "High",
    mitigation:
      "Speed to market; first-mover advantage compounds (data moat); deep Bond integration is defensible",
  },
  {
    risk: "Data breach / PII exposure from recordings",
    likelihood: "Low",
    impact: "Critical",
    mitigation:
      "Encryption at rest and in transit; strict access controls; automated PII redaction; regular audits",
  },
  {
    risk: "Cost of AI inference exceeds revenue per facility",
    likelihood: "Medium",
    impact: "Medium",
    mitigation:
      "Monitor cost per call; optimize prompts for token efficiency; volume pricing; tiered pricing to match usage",
  },
];

export const performanceTargets = [
  { metric: "Call answer latency", target: "<2 seconds from ring" },
  { metric: "First response latency", target: "<1 second" },
  { metric: "Turn-by-turn response", target: "<800ms" },
  { metric: "Uptime", target: "99.9%" },
  { metric: "Concurrent calls per facility", target: "5+ simultaneous" },
  { metric: "Data freshness", target: "<60 seconds" },
  { metric: "Factual query accuracy", target: "98%+" },
  { metric: "Appropriate escalation rate", target: "15-25%" },
];

export const revenueProjections = [
  { year: "Year 1", facilities: 50, avgPrice: 350, arr: 210 },
  { year: "Year 2", facilities: 150, avgPrice: 400, arr: 720 },
  { year: "Year 3", facilities: 250, avgPrice: 450, arr: 1350 },
];

export const openDecisions = [
  {
    issue: "Voice provider selection",
    status: "Open",
    owners: "PM, Engineering Lead",
    desc: "Evaluate latency, cost, reliability, and integration complexity for Twilio vs. Vonage vs. other.",
  },
  {
    issue: "LLM provider strategy",
    status: "Open",
    owners: "PM, Engineering Lead",
    desc: "Single vs. multi-model. Start single, architect for swap.",
  },
  {
    issue: "AI disclosure requirements",
    status: "Open",
    owners: "PM, Legal",
    desc: "State-by-state requirements. Recommend always disclosing with option to transfer.",
  },
  {
    issue: "Pricing model",
    status: "Open",
    owners: "PM, CEO, Finance",
    desc: "Flat fee vs. usage-based vs. hybrid. Recommend flat fee with tier structure.",
  },
  {
    issue: "PCI compliance approach",
    status: "Open",
    owners: "PM, Engineering, Security",
    desc: "May need secure SMS payment link during call. Defer to Phase 2 deep-dive.",
  },
  {
    issue: "Multi-language timeline",
    status: "High Priority",
    owners: "PM, Engineering, CS",
    desc: "Spanish is highest demand. Run discovery to determine if Phase 2 is needed in pilot geographies.",
  },
];

export const vendors = [
  {
    name: "Blank Metal",
    category: "AI Engineering Consultancy",
    score: 4.25,
    tier: "Build Accelerator",
    pricing: {
      model: "Sprint-based",
      plans: [{ name: "Per Sprint", price: "$30-50K", rate: "AI strategist + engineer", concurrency: "90-day production guarantee" }],
    },
    strengths: [
      "Expert guidance on agent architecture and eval systems",
      "90-day production guarantee",
      "Embed model means knowledge transfer (not permanent dependency)",
      "Formal Anthropic partner",
      "Has done similar multi-tenant AI work",
    ],
    weaknesses: [
      "Not a product — engagement adds $90-250K upfront",
      "Bond still needs engineering resources for handoff",
      "Small team may have availability constraints",
    ],
    verdict: "Not a vendor alternative — build accelerator. If Bond commits to building orchestration layer, Blank Metal is strongest option for expert guidance without long-term dependency.",
    scores: {
      voice: null,
      multiTenancy: 4,
      integration: 5,
      actionTaking: 5,
      massUpdate: 5,
      timeToProd: 3,
      costModel: 3,
      strategicControl: 5,
    },
  },
  {
    name: "Build In-House",
    category: "Full In-House Development",
    score: 4.1,
    tier: "Tier 1 - Long-term Best Option",
    pricing: {
      model: "Engineering time + infrastructure usage",
      plans: [
        { name: "MVP", price: "2-3 engineers × 3-6 months", rate: "ElevenLabs $0.08-0.10/min", concurrency: "N/A" },
        { name: "Ongoing", price: "1-2 engineers", rate: "Infrastructure costs only", concurrency: "N/A" },
      ],
    },
    strengths: [
      "Full ownership of every layer",
      "Deepest possible Bond integration",
      "Best long-term unit economics (no vendor margin)",
      "Multi-tenancy designed for Bond's exact needs",
      "Mass update capability fully in control",
      "Aligns with Phase 4 Bond Agents vision",
    ],
    weaknesses: [
      "Significant engineering investment (2-3 engineers × 3-6 months)",
      "Voice AI extremely hard in production",
      "Risk of underestimating complexity and timeline",
      "No customer feedback until MVP complete",
      "High upfront engineering costs impact cost model",
    ],
    verdict: "Best long-term option for strategic control, unit economics, and Bond Agents vision. Primary risk is timeline — 3-6 months to pilot, longer to production-harden. Significant upfront engineering investment impacts cost model. This is why hybrid approach (pilot with Bland while building) is recommended.",
    scores: {
      voice: 4,
      multiTenancy: 5,
      integration: 5,
      actionTaking: 5,
      massUpdate: 5,
      timeToProd: 2,
      costModel: 2,
      strategicControl: 5,
    },
  },
  {
    name: "Bland AI",
    category: "Voice AI Platform",
    score: 3.55,
    tier: "Tier 1 - Recommended for Pilot",
    pricing: {
      model: "Usage-based + monthly fee",
      plans: [
        { name: "Start", price: "Free", rate: "$0.14/min", concurrency: "10 calls" },
        { name: "Build", price: "$299/mo", rate: "$0.12/min", concurrency: "50 calls" },
        { name: "Scale", price: "$499/mo", rate: "$0.11/min", concurrency: "100 calls" },
        { name: "Enterprise", price: "Custom", rate: "Negotiated", concurrency: "Unlimited" },
      ],
    },
    strengths: [
      "Best-in-class voice quality with proprietary model",
      "Low latency and natural conversation",
      "Flexible pricing (per-facility, per-minute, flat fee)",
      "Forward-deployed engineer included",
      "Production-proven at enterprise scale",
    ],
    weaknesses: [
      "Mass update concern: unclear if policy changes can be pushed globally to 300+ facilities",
      "Vendor dependency for orchestration layer",
      "Per-minute pricing creates cost unpredictability",
    ],
    verdict: "Best option for fast pilot to validate product concept. Mass update risk and vendor lock-in make it poor long-term sole solution, but excellent de-risking vehicle while building Agent API in parallel.",
    scores: {
      voice: 5,
      multiTenancy: 3,
      integration: 4,
      actionTaking: 4,
      massUpdate: 2,
      timeToProd: 5,
      costModel: 3,
      strategicControl: 2,
    },
  },
  {
    name: "EmbedReach",
    category: "Embedded Marketing Suite for VSaaS",
    score: 3.5,
    tier: "Tier 2 - Monitor",
    pricing: {
      model: "Embedded model (Bond monetizes as add-on)",
      plans: [{ name: "Embedded Partnership", price: "Contact", rate: "Bond resells to facilities", concurrency: "N/A" }],
    },
    strengths: [
      "Voice AI Receptionist is live and production-ready — handles 80% of common questions",
      "Can integrate with APIs for reservations/cancellations if Bond endpoints exist",
      "Full transcripts and AI summaries post-call",
      "Can pull directly from Snowflake data warehouse — reduces Bond dev burden",
      "Reputation management module: Google Business Profile monitoring, automated review solicitation (40x higher SMS response rates)",
      "Two integration points: UI iframe (low effort) + data sync",
      "Phased rollout: start with reputation management (minimal integration), add voice incrementally",
      "Designed for VSaaS embedded model — aligns with Bond's platform approach",
      "SMS version launching in weeks",
    ],
    weaknesses: [
      "More of a marketing suite than dedicated AI agent platform — voice is one component among many",
      "Integration requires data sync setup (even with Snowflake option)",
      "Timing considerations: need automated triggers with time delta after purchase vs immediate",
      "Voice AI capabilities may be more limited than dedicated voice platforms",
      "Embedded model means Bond resells to facilities — need to structure pricing appropriately",
    ],
    verdict: "Stronger fit than initially evaluated. Voice AI Receptionist is production-ready and can integrate with Bond APIs for action-taking. Embedded VSaaS model aligns with Bond's platform approach. However, fundamentally a marketing suite with voice as one component — may be better fit for Phase 2+ marketing/reputation add-on than Phase 1 voice-first front desk agent. Worth evaluating for phased approach: start with reputation management, then add voice AI once data sync is established.",
    scores: {
      voice: 3,
      multiTenancy: 4,
      integration: 4,
      actionTaking: 3,
      massUpdate: 3,
      timeToProd: 4,
      costModel: 4,
      strategicControl: 3,
    },
  },
  {
    name: "ElevenLabs",
    category: "Voice Infrastructure",
    score: 2.75,
    tier: "Infrastructure Component",
    pricing: {
      model: "Per-minute",
      plans: [
        { name: "Starter/Creator/Pro", price: "$0.10/min", rate: "After 50% price cut", concurrency: "N/A" },
        { name: "Business (Annual)", price: "$0.08/min", rate: "Volume discount", concurrency: "N/A" },
        { name: "Enterprise", price: "Custom (lower)", rate: "Negotiated", concurrency: "N/A" },
      ],
    },
    strengths: [
      "Best-in-class voice quality (TTS)",
      "Aggressive pricing: $0.08-0.10/min is very competitive",
      "Can be used as pure infrastructure or full conversational platform",
      "Strong developer tools and APIs",
    ],
    weaknesses: [
      "Not a turnkey solution — Bond must build domain logic and multi-tenancy",
      "LLM costs currently absorbed will eventually be passed through",
      "Requires significant engineering investment",
    ],
    verdict: "Not a vendor alternative — infrastructure component. Best used as part of 'Build' option or as voice layer underneath vendor orchestrator.",
    scores: {
      voice: 5,
      multiTenancy: 1,
      integration: 2,
      actionTaking: 2,
      massUpdate: 1,
      timeToProd: 2,
      costModel: 5,
      strategicControl: 4,
    },
  },
  {
    name: "SidePilot",
    category: "Fitness AI Agent Platform",
    score: 2.55,
    tier: "Tier 2 - Monitor",
    pricing: {
      model: "Per-location monthly",
      plans: [
        { name: "Base", price: "$320/mo", rate: "5,000 tokens", concurrency: "1 agent" },
        { name: "Premium", price: "$720/mo", rate: "25,000 tokens", concurrency: "4 agents" },
        { name: "Enterprise", price: "Custom", rate: "75,000 tokens", concurrency: "Unlimited" },
      ],
    },
    strengths: [
      "Closest ICP alignment: purpose-built for fitness/gym industry",
      "White-label with master admin view (multi-tenant management)",
      "Cancellation save flows and payment recovery align with Phase 3-4 vision",
      "Competitive pricing validates Bond's target range",
    ],
    weaknesses: [
      "Voice agent was not mature at evaluation (disqualifying for Phase 1)",
      "Primarily outbound/appointment booking focus",
      "Would need full Bond integration build",
      "Token-based pricing creates cost ambiguity",
    ],
    verdict: "Strong ICP fit and right business model, but voice immaturity makes it unusable for Phase 1. Monitor for Phase 2+ text channels or revisit once voice matures.",
    scores: {
      voice: 1,
      multiTenancy: 4,
      integration: 2,
      actionTaking: 4,
      massUpdate: 3,
      timeToProd: 2,
      costModel: 4,
      strategicControl: 3,
    },
  },
  {
    name: "Intercom (Fin)",
    category: "AI Customer Service Platform",
    score: 2.55,
    tier: "Tier 3 - Not Recommended",
    pricing: {
      model: "Per-resolution (custom)",
      plans: [{ name: "Enterprise", price: "Custom", rate: "Contact Account Manager", concurrency: "N/A" }],
    },
    strengths: [
      "Bond already uses Intercom for B2B support",
      "Fin Voice has matured: 28 languages, smart routing, CSAT",
      "Voice Procedures (beta) enable action-taking via API",
      "Strong analytics and monitoring",
    ],
    weaknesses: [
      "Multi-tenancy is fundamental blocker: one workspace per company, not B2B2C",
      "Fin Voice not generally available (limited to select customers)",
      "Voice Procedures in closed beta",
      "Per-workspace costs compound at 300+ facilities",
    ],
    verdict: "Multi-tenancy gap remains deal-breaker. Architecture designed for B2B (one workspace per company), not B2B2C. Continue using for Bond's own B2B support.",
    scores: {
      voice: 3,
      multiTenancy: 1,
      integration: 4,
      actionTaking: 4,
      massUpdate: 1,
      timeToProd: 2,
      costModel: 2,
      strategicControl: 2,
    },
  },
  {
    name: "Decagon",
    category: "Enterprise AI Support Platform",
    score: 2.5,
    tier: "Tier 2 - Monitor",
    pricing: {
      model: "Custom (per-conversation or per-resolution)",
      plans: [{ name: "Enterprise", price: "Custom", rate: "Contact Sales", concurrency: "N/A" }],
    },
    strengths: [
      "Full multi-modal: voice, chat, email",
      "AOPs in plain English (no-code configuration)",
      "Enterprise-grade security and compliance",
      "Strong action-taking via tool calls",
    ],
    weaknesses: [
      "Pricing is deal-breaker: contract minimums too high for Bond's current stage",
      "Multi-tenancy not solved (actively researching)",
      "No public pricing creates budget uncertainty",
      "Per-conversation model means paying even when AI fails",
    ],
    verdict: "Impressive technology, wrong stage for Bond. Unsolved multi-tenancy and enterprise pricing make it poor fit today. Re-evaluate in 12-18 months if Bond's ARR and call volumes grow significantly.",
    scores: {
      voice: 4,
      multiTenancy: 1,
      integration: 3,
      actionTaking: 4,
      massUpdate: 2,
      timeToProd: 3,
      costModel: 1,
      strategicControl: 2,
    },
  },
];

export const evaluationCriteria = [
  { criterion: "Voice-First Capability", weight: 20, desc: "Live inbound voice quality, latency, natural conversation handling" },
  { criterion: "Multi-Tenancy at Scale", weight: 15, desc: "Ability to manage 300+ facility configurations under one Bond account" },
  { criterion: "Bond Data Integration", weight: 15, desc: "How naturally solution connects to Bond's Agent API for real-time data" },
  { criterion: "Action-Taking", weight: 15, desc: "Can agent book registrations, process cancellations, modify memberships?" },
  { criterion: "Mass Update & Config", weight: 10, desc: "Can Bond push policy changes to hundreds of facilities simultaneously?" },
  { criterion: "Time to Production", weight: 10, desc: "Realistic timeline from contract to live calls at pilot facilities" },
  { criterion: "Cost Model & Scalability", weight: 10, desc: "Pricing predictability at 300+ facilities; gross margin sustainability" },
  { criterion: "Strategic Control", weight: 5, desc: "Bond's ability to migrate away, own IP, evolve independently" },
];
