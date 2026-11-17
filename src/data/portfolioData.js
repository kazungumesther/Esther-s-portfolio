export const PROFILE = {
  name: "Esther Kazungu",
  firstName: "Esther",
  lastName: "Kazungu.",
  tags: [
    { label: "Software Development", color: "bg-white" },
    { label: "Flutter", color: "bg-sun" },
    { label: "Mobile & Web", color: "bg-white" },
  ],
  bioLead:
    "A software developer passionate about turning ideas into meaningful digital experiences.",
  bioSub:
    "I enjoy building applications, solving practical problems and exploring how technology can make everyday experiences better.",
  heroCaption: "A curious mind and a keyboard. That's usually where it starts.",
  email: "kazungumesther@gmail.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
  cvUrl: "/Esther_Kazungu_CV.pdf",
};

export const PROJECTS = [
  {
    slug: "afyra",
    badge: "Case study",
    badgeColor: "bg-sun",
    role: "Featured · Product + Mobile & Web",
    title: "Afyra",
    hook: "Turning scattered crop residues into safe, recoverable livestock feed across Kenya.",
    description:
      "A digital crop-residue collection and logistics platform backed by primary field research across Kenya's 33M MT feed deficit.",
    stack: ["Flutter", "Dart", "Product Research", "Logistics", "Mobile & Web"],
    linkText: "Read the story →",
    meta: {
      role: "Primary research, problem validation, user flows & Flutter interface",
      team: "4-person research & product team",
      timeline: "19 days",
      tools: "Flutter · Dart · Figma · Primary Field Research",
    },
        banner: {
      tagline: "Crop residues, connected to livestock feed.",
      pill: "Validated across Kenya's livestock feed value chain",
      subtext:
        "Helping farmers list safe, low-moisture crop residues and enabling feed millers and livestock keepers to aggregate bulk supply before spoilage.",
      image: "/images/home.png",
      ctaText: "View Web Dashboard ↗",
      ctaUrl: "http://afyra-dashboard.vercel.app/",
    },

    problem: [
      "Kenya needs 55 million metric tonnes of dry matter livestock feed each year but produces only 40% (22M MT) leaving a crippling 33M MT national deficit while 46.3% of produced feed is lost post-harvest.",
      "Meanwhile, millions of tonnes of maize stovers, wheat straw, and rice husks rot or are burned in fields because feed millers and livestock keepers lack real-time visibility into harvest timelines and scattered rural supply.",
    ],
    research: {
      insight:
        "Biomass presence does not equal usable feed. Once feed moisture exceeds 12% to 14% during damp rural storage or transit, toxigenic molds proliferate—creating severe aflatoxin hazards for livestock and human consumers.",
      source:
        "Sources: State Department for Livestock Development, AKEFEMA, ILRI & FAO (2026)",
      paragraphs: [
        "We conducted a comprehensive research study across a 2020–2026 review window, analyzing data from AKEFEMA, ILRI, AU-IBAR, and primary stakeholders across Kenya's feed value chain.",
        "We translated those findings into strict quality, moisture, and aggregation requirements so buyers can trust the safety and recoverability of listed residues.",
      ],
    },
    flows: [
      "We mapped the end-to-end journey between crop farmers holding post-harvest residues, rural aggregation points, and feed manufacturers operating at 50–60% capacity.",
      "I translated these requirements into clear mobile workflows covering residue type, estimated tonnage, moisture condition, location, and pickup scheduling.",
    ],
    decision: {
      question: "Should farmers list any leftover crop residue without quality checks?",
      options: [
        "Allow open listings with no moisture or condition verification",
        "Require lab testing before every single farm pickup",
        "Guided self-assessment + moisture & elapsed-time checks at listing and collection",
      ],
      chosen: "Option 3.",
      why: "Drought-affected or damp stalks can harbor hazardous molds and aflatoxins if moisture exceeds 12–14%. Requiring a lab test for every smallholder would block adoption, while guided moisture and harvest-window checks keep feed safe without slowing down rural collection.",
      tradeoff:
        "Requires designing a clear, intuitive verification step in the mobile app and training collection agents on basic moisture checks.",
    },
        screens: [
      {
        title: "Listing crop residues",
        caption: "Farmers log crop type, tonnage, and harvest condition.",
        image: "/images/listings.png", 
        bg: "bg-[#CFE0C8]",
      },
      {
        title: "Quality check",
        caption: "Guided checks flag safe, uses computer vision to analyse the quality of the uploaded photos.",
        image: "/images/quality.png", 
        bg: "bg-[#F6D365]/60",
      },
      {
        title: "Bulk aggregation & pickup",
        caption: "Buyers and millers coordinate regional transport, turn by turn navigation as the driver picks the residue from the farmer.",
        image: "/images/driver.png", 
        bg: "bg-[#D6E2F5]",
      },
    ],

    results: [
      {
        number: "33M MT",
        label: "Annual dry-matter feed gap addressed by domestic residue recovery",
      },
      {
        number: "46.3%",
        label: "Post-harvest feed loss targeted via faster pickup & dry storage",
      },
      {
        number: "70–80%",
        label: "Share of livestock costs driven by expensive imported raw inputs",
      },
      {
        number: "<14%",
        label: "Critical moisture threshold enforced to prevent aflatoxin spoilage",
      },
    ],
    resultsNote:
      "Grounded in primary stakeholder evidence from Kenyan farmers, agro-dealers, and feed manufacturers (AKEFEMA) to ensure the platform solves real coordination failures.",
    reflection:
      "In the next iteration, I would integrate offline SMS/USSD listing alerts alongside the Flutter app so farmers in low-connectivity rural areas can log available residues immediately after harvest without needing mobile data.",
    nextProject: {
      slug: "medminder",
      title: "MedMinder",
    },
  },
    {
    slug: "medminder",
    badge: "Personal project",
    badgeColor: "bg-sky",
    role: "Mobile & Web Dashboard · Flutter · React Native ",
    title: "MedMinder",
    hook: "Helping patients stay consistent with daily medications through clear schedules and timely alerts.",
    description:
      "A mobile medication management app built to reduce missed doses, simplify complex prescriptions, and track daily adherence.",
    stack: ["Flutter", "Dart", "Local Notifications", "SQLite"],
    linkText: "Read the story →",
    meta: {
      role: "End-to-end UI/UX design, Flutter development & local notifications",
      team: "Solo build",
      timeline: "2 weeks · 2026",
      tools: "Flutter · Dart · Local Notifications · SQLite",
    },
    banner: {
      tagline: "Never miss a dose that matters.",
      pill: "Built for simple, stress-free daily adherence",
      subtext:
        "Organizing multi-dose schedules, meal timing instructions, and instant reminders into a calm, accessible mobile experience.",
     leftBg: "bg-[#16325C]",
      rightBg: "bg-[#CFE2FA]",
      image: "/images/homemed.png", 
      ctaText: "View MedMinder web dashboard ↗",
      ctaUrl: "https://medminder-dashboard-wbmk.vercel.app/",
    },
    problem: [
      "Managing multiple prescriptions with different dosages, frequencies, and meal instructions (before vs. after food) is overwhelming especially for patients on chronic care or short-term recovery regimens.",
      "Standard phone alarms lack context, leading to accidental double-dosing, missed evening pills, and confusion over whether a scheduled dose was actually taken.",
    ],
    research: {
      insight:
        "People rarely miss medication out of carelessness they miss doses because alarms ring at inconvenient moments and disappear without a clear log of whether the pill was taken.",
      source: "Informal interviews with 10+ everyday medication users & caregivers",
      paragraphs: [
        "I spoke with friends, family members, and caregivers managing daily prescriptions to understand why generic alarm apps fail.",
        "The top pain points were cluttered medical jargon, alarms that couldn't be snoozed thoughtfully, and zero visibility into daily completion streaks.",
      ],
    },
    flows: [
      "I designed a streamlined three-step flow: adding a medication with dosage and frequency, receiving actionable push notifications, and logging 'Taken' or 'Snooze' in a single tap.",
      "The home screen prioritizes today's timeline chronologically so users immediately see what is due next without digging through menus.",
    ],
    decision: {
      question: "Where should prescription schedules and reminder logs be stored?",
      options: [
        "Cloud-only database requiring constant internet access and sign-up",
        "Local on-device database with native scheduled notifications",
      ],
      chosen: "Option 2.",
      why: "Medication reminders must fire reliably even when a user has no mobile data or Wi-Fi. Storing schedules locally with native device notifications guarantees zero-latency alerts and instant privacy.",
      tradeoff:
        "Data stays on the user's device unless exported, so a future version would add optional encrypted cloud backup.",
    },
        screens: [
      {
        title: "Daily dose timeline",
        caption: "Clear chronological view of morning, afternoon, and evening meds.",
        image: "/images/dashboard.png",
        bg: "bg-[#D6E2F5]",
      },
      {
        title: "Add prescription flow",
        caption: "Quick setup for dosage, frequency, and meal instructions.",
        image: "/images/reminder.png",
        bg: "bg-[#CFE0C8]",
      },
      {
        title: "Adherence & history log",
        caption: "Visual daily progress and taken/missed dose tracking.",
        image: "/images/history.png",
        bg: "bg-[#F6D365]/60",
      },
    ],

    results: [
      {
        number: "1-Tap",
        label: "Actionable notification flow to mark a dose as taken or snoozed",
      },
      {
        number: "100%",
        label: "Offline reliability for scheduled alerts and prescription logs",
      },
      {
        number: "3 Steps",
        label: "Fast onboarding flow to add a new recurring medication",
      },
      {
        number: "0 Clutter",
        label: "High-contrast, accessible typography designed for quick reading",
      },
    ],
    resultsNote:
      "Built in Flutter with a focus on clean state management, accessible font sizing, and dependable background notification scheduling.",
    reflection:
      "In the next version, I would add a caregiver alert feature that notifies a trusted family member if an important dose remains unlogged after two snoozes, plus low-pill refill reminders.",
           nextProject: {
      slug: "stocktake",
      title: "Stocktake",
    },


  },

   {
    slug: "stocktake",
    badge: "Personal project",
    badgeColor: "bg-mint",
    role: "Offline-First App · Flutter",
    title: "Stocktake",
    hook: "An inventory app that keeps working with no internet and catches up on its own when the connection comes back.",
    description:
      "Built for store rooms, farm sheds, and delivery trucks where connectivity is unreliable saving every change locally first with Drift (SQLite) and syncing seamlessly to Supabase.",
    stack: ["Flutter", "Dart", "Riverpod", "Drift (SQLite)", "Supabase"],
    linkText: "Read the story →",
    meta: {
      role: "Architecture, offline sync engine, local database & Flutter UI",
      team: "Solo build",
      timeline: "2026 · Mobile & Web Build",
      tools: "Flutter · Riverpod · Drift (SQLite) · Supabase (Postgres)",
    },
    banner: {
      tagline: "Track stock anywhere, even without a connection.",
      pill: "Local-first SQLite storage with automatic cloud sync",
      subtext:
        "Every edit is written to the on-device database immediately so the UI is never waiting on the network, then synced via pull-merge-push when online.",
      leftBg: "bg-[#1C2536]",
      rightBg: "bg-[#D8DCE6]",
      image: "/images/dsbd.png", 
      ctaText: "View Stocktake on GitHub ↗",
      ctaUrl: "https://github.com",
    },
    problem: [
      "Inventory tracking in store rooms, farm sheds, and delivery trucks often happens in dead zones where mobile data drops or stalls.",
      "Cloud-dependent apps freeze, lose edits, or block workers from logging stock movements (+/-) when the network is unreachable.",
    ],
    research: {
      insight:
        "Offline is not an error state it is the normal operating environment for field inventory. The UI must read exclusively from local storage so every tap feels instantaneous.",
      source: "Offline-first architecture & sync state modeling",
      paragraphs: [
        "I designed Stocktake around a strict local-first architecture: UI (Riverpod) → InventoryRepository → Local SQLite database (Drift) as the single source of truth.",
        "Every item carries its own sync state (synced, pending, failed) with exponential retry backoff (5s, 10s, 20s up to 15 minutes) and CSV export so teams can work standalone or with optional Supabase accounts.",
      ],
    },
    flows: [
      "Users can add, edit, and delete items (name, quantity, unit, location, notes) and adjust counts with quick + / − buttons with zero network delay.",
      "A summary dashboard tracks total items, total units, and low-stock alerts (5 or fewer) while showing real-time sync status badges on every row.",
    ],
    decision: {
      question: "How should offline edits and multi-device conflicts be tracked and resolved?",
      options: [
        "Maintain a separate outbox queue table for every individual edit",
        "Store sync state directly on each row with client-generated UUIDs and last-write-wins timestamps",
      ],
      chosen: "Option 2.",
      why: "Keeping sync state on the row is simpler to keep consistent, lets users create items offline via client-generated UUIDs before ever hitting the server, and ensures only the latest state of an item is synced.",
      tradeoff:
        "Concurrent edits to different fields of the same item resolve to the newest edit rather than a field-by-field merge, and quantity edits overwrite rather than delta-merge (+3, -1).",
    },
    screens: [
      {
        title: "Stocktake inventory list",
        caption: "Search items, adjust counts with + / − buttons, and view sync status.",
        type: "mobile",
        image: "/images/inventory.png",
        bg: "bg-[#D8DCE6]",
      },
      {
        title: "Add item flow",
        caption: "Log item name, quantity, unit, location, and notes offline.",
        type: "mobile",
        image: "/images/add.png",
        bg: "bg-[#CFE0C8]",
      },
      {
        title: "Stock summary dashboard",
        caption: "Instant overview of total items, total units, and low-stock alerts.",
        type: "mobile",
        image: "/images/dsbd.png",
        bg: "bg-[#F6D365]/60",
      },
    ],
    results: [
      {
        number: "0 ms",
        label: "Network wait time all reads and writes hit local SQLite first",
      },
      {
        number: "3 States",
        label: "Row-level sync tracking (synced, pending, failed) with auto-retry",
      },
      {
        number: "RLS",
        label: "Row Level Security in Supabase Postgres for multi-user isolation",
      },
      {
        number: "CSV",
        label: "One-tap inventory export alongside local-only standalone mode",
      },
    ],
    resultsNote:
      "Plain-Dart sync service and business logic tested against an in-memory database and fake server for reliable offline conflict handling.",
    reflection:
      "In the next iteration, I would store stock movements as delta adjustments (+3, -1) rather than absolute counts so two devices adjusting stock offline merge cleanly without overwriting each other, and add field-by-field conflict resolution.",
        nextProject: {
      slug: "jkuat-redesign",
      title: "JKUAT Redesign",
    },

  },
    

]

export const EARLY_PROJECTS = [
  "Two calculators — HTML/CSS/JS and Flutter",
  "A weather app using OpenWeather API",
  "A personal task tracker in Dart",
  "My first responsive portfolio layout",
];

export const CURRENTLY_LEARNING = [
  "Advanced Flutter state management & animations",
  "Scalable backend APIs & databases",
  "UI/UX design systems & accessibility",
  "Modern web architectures with React",
];

export const OPEN_TO = [
  "Software developer roles (Mobile & Web).",
  "Exciting collaborations and freelance builds.",
  "Tech communities, hackathons, and coffee chats.",
];
