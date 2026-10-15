// ─────────────────────────────────────────────────────────────
// BIOGLOW™ 2026–2027 Founders Edition — Challenge
// All data verified from official FIRST® LEGO® League sources.
// Last checked: 15 October 2026.
// ─────────────────────────────────────────────────────────────

export const LAST_CHECKED = "15 October 2026";

export const SEASON_INFO = {
  name: "BIOGLOW™",
  season: "2026–2027",
  umbrella: "FIRST® CANOPY™",
  edition: "Founders Edition",
  program: "Challenge",
  ages: "9–16 (varies by country)",
  grades: "Grades 4–8",
  technology: "LEGO® Education SPIKE™ Prime",
  matchDuration: "2.5 minutes",
  matchFormat: "Three official matches; best score counts toward awards and advancement",
  teamSize: "Up to 10 team members",
  challengeSet: "45832",
  finalSeason: true,
  kickoff: "August 4, 2026",
  registrationDeadline: "October 31, 2026 (Challenge teams)",
  events: "November 2026 – April 2027",
};

export const CORE_VALUES = [
  { name: "Teamwork", desc: "We are stronger when we work together." },
  { name: "Inclusion", desc: "We respect each other and embrace our differences." },
  { name: "Impact", desc: "We apply what we learn to improve our world." },
  { name: "Fun", desc: "We enjoy and celebrate what we do!" },
  { name: "Discovery", desc: "We explore new skills and ideas." },
  { name: "Innovation", desc: "We use creativity and persistence to solve problems." },
];

export const FOUR_PARTS = [
  { name: "Core Values", desc: "The lens through which judges evaluate the team throughout their work and event experience. Makes up 25% of the Champion's score." },
  { name: "Innovation Project", desc: "Teams identify and research a problem that puts biodiversity at risk and design an innovative solution that can help." },
  { name: "Robot Design", desc: "Teams design, build, and program a LEGO robot with unique attachments and code to complete missions in the robot game." },
  { name: "Robot Game", desc: "Teams race against the clock to complete as many missions as they can in each 2.5-minute match. 15 biodiversity-inspired missions." },
];

export const PRECISION_TOKENS = {
  starting: 6,
  points: { 0: 0, 1: 10, 2: 15, 3: 25, 4: 35, 5: 50, 6: 50 },
  rule: "You begin the match with six precision tokens worth 50 total points. If you interrupt the robot outside of home, the referee will remove one token. You earn points for the number of tokens remaining at the end of the match.",
};

export const EQUIPMENT_RULES = {
  inspection: "Before the match, there will be an equipment inspection. If your robot and all equipment fit completely in one launch area and under a height limit of 12 in, you pass inspection.",
  noEquipmentConstraint: "When the 'No Equipment Constraint' symbol appears in a mission, the rule is: 'A mission model cannot earn points if it is touching equipment at the end of the match.' This applies only to the specific mission in which the constraint appears.",
};

export const MISSIONS = [
  {
    number: 1,
    name: "Drone Survey",
    bags: "1, 2",
    objective: "Help the pilot launch the drone to create a LiDAR map of this rainforest ecosystem.",
    conditions: [
      { id: "m1_drone", label: "The drone is no longer touching the mat", type: "boolean", points: 20 },
      { id: "m1_bonus", label: "Bonus: the LiDAR map is completely flipped over, with the scan marker at least partly in the survey area", type: "bonus", points: 10, requires: "m1_drone" },
    ],
  },
  {
    number: 2,
    name: "Exploding Seeds",
    bags: "3",
    objective: "Details pending verification of the official Robot Game Rulebook.",
    conditions: [
      { id: "m2_seeds", label: "Number of seeds no longer touching the stalk", type: "count", max: 3, points: null },
    ],
  },
  {
    number: 3,
    name: "Flip the Rock",
    bags: "4, 5",
    objective: "Details pending verification of the official Robot Game Rulebook.",
    conditions: [
      { id: "m3_flag", label: "The research flag is down", type: "boolean", points: null },
      { id: "m3_bonus", label: "Bonus: and the rock has been returned to its original starting position", type: "bonus", points: null, requires: "m3_flag" },
    ],
  },
  {
    number: 4,
    name: "Lucky Leaves",
    bags: "6",
    objective: "Details pending verification of the official Robot Game Rulebook. Note: Leaves are randomized by the referee at the start of the match (Challenge Update 01).",
    conditions: [
      { id: "m4_leaves", label: "Number of leaves no longer touching the nest", type: "count", max: 2, points: null },
      { id: "m4_katydid", label: "The katydid is completely in the leaf habitat", type: "boolean", points: null },
      { id: "m4_bonus", label: "Bonus: and the katydid remained in its original position throughout the match", type: "bonus", points: null, requires: "m4_katydid" },
    ],
    update: "Update 01 (Sep 2, 2026): Before the match, leaves are randomized within the nest, and teams will not be told the starting placement of the katydid. If the katydid is completely outside the leaf habitat at any time during the match, the bonus is no longer available. If completely outside at the end, the team scores zero for this mission.",
  },
  {
    number: 5,
    name: "Reaching Roots",
    bags: "7",
    objective: "Details pending verification of the official Robot Game Rulebook.",
    conditions: [
      { id: "m5_root", label: "The plant root is extended", type: "tier", options: ["No", "Partially", "Completely"], points: null },
    ],
  },
  {
    number: 6,
    name: "Leafcutter Frenzy",
    bags: "8, 9, 10",
    objective: "Details pending verification of the official Robot Game Rulebook.",
    conditions: [
      { id: "m6_ant", label: "The ant is touching the nest", type: "boolean", points: null },
      { id: "m6_fragments", label: "Number of leaf fragments contained within the nest", type: "count", max: 4, points: null },
    ],
  },
  {
    number: 7,
    name: "Humongous Fungus",
    bags: "10",
    objective: "Details pending verification of the official Robot Game Rulebook.",
    conditions: [
      { id: "m7_mycelium", label: "The mycelium is completely extended", type: "boolean", points: null },
      { id: "m7_bonus", label: "Bonus: Number of connections formed between one team's extended mycelium and the opposing team's fully extended plant root", type: "count", max: 2, points: null, requires: "m7_mycelium" },
    ],
  },
  {
    number: 8,
    name: "Tangled",
    bags: "11, 12, 13, 14, 15",
    objective: "Details pending verification of the official Robot Game Rulebook.",
    conditions: [
      { id: "m8_vine", label: "The vine is touching the mat", type: "boolean", points: null },
    ],
    update: "Update 03 (Oct 14, 2026): Events are encouraged to stabilize the tree model by applying a thin strip of black tape along the mat border, directly behind the tree. Teams should practice and prepare to compete with either a taped or untaped tree.",
  },
  {
    number: 9,
    name: "Research Platform",
    bags: "11, 12, 13, 14, 15",
    objective: "Details pending verification of the official Robot Game Rulebook.",
    conditions: [
      { id: "m9_platform", label: "The research platform is raised", type: "boolean", points: null },
      { id: "m9_camera", label: "The camera trap is deployed", type: "boolean", points: null },
      { id: "m9_seed", label: "The seed is no longer touching the tree", type: "boolean", points: null },
    ],
    update: "Update 03 (Oct 14, 2026): Tree stabilization guidance applies (see Mission 8).",
  },
  {
    number: 10,
    name: "Fragile Microhabitats",
    bags: "16",
    objective: "Details pending verification of the official Robot Game Rulebook.",
    conditions: [
      { id: "m10_spider", label: "The spider habitat is in its original starting position", type: "boolean", points: null },
      { id: "m10_snail", label: "The snail habitat is in its original starting position", type: "boolean", points: null },
    ],
  },
  {
    number: 11,
    name: "Window to the Past",
    bags: "17",
    objective: "Details pending verification of the official Robot Game Rulebook.",
    conditions: [
      { id: "m11_cover", label: "The root cover is down, touching the mat", type: "boolean", points: null },
    ],
  },
  {
    number: 12,
    name: "Forest Elder",
    bags: "18",
    objective: "Details pending verification of the official Robot Game Rulebook.",
    conditions: [
      { id: "m12_cane", label: "The cane is completely raised, touching the tree", type: "boolean", points: null },
      { id: "m12_tie", label: "The support tie is around the post", type: "boolean", points: null },
    ],
  },
  {
    number: 13,
    name: "Keystone Species",
    bags: "19, 20",
    objective: "Details pending verification of the official Robot Game Rulebook. Interchangeable model — placement options: Mine dock, City dock, or Farm dock.",
    interchangeable: true,
    conditions: [
      { id: "m13_keystone", label: "Your keystone species is on the restoration platform, and the young trees are raised", type: "boolean", points: null },
    ],
  },
  {
    number: 14,
    name: "Seeds of Renewal",
    bags: "21",
    objective: "Details pending verification of the official Robot Game Rulebook. Interchangeable model — placement options: Mine dock, City dock, or Farm dock.",
    interchangeable: true,
    conditions: [
      { id: "m14_seeds", label: "Number of seeds contained within the replantation station", type: "count", max: 4, points: null },
      { id: "m14_bonus", label: "Bonus: and touching the mat", type: "count", max: 4, points: null, requires: "m14_seeds" },
    ],
  },
  {
    number: 15,
    name: "Biocentric Architecture",
    bags: "22, 23, 24",
    objective: "Details pending verification of the official Robot Game Rulebook. Interchangeable model — placement options: Mine dock, City dock, or Farm dock.",
    interchangeable: true,
    conditions: [
      { id: "m15_canopy", label: "The nesting canopy is raised", type: "boolean", points: null },
      { id: "m15_skylight", label: "The garden skylight is completely in", type: "boolean", points: null },
      { id: "m15_compost", label: "The compost hatch is completely opened, touching the mat", type: "boolean", points: null },
      { id: "m15_dock", label: "Dock location", type: "select", options: ["Mine", "City"], points: null },
    ],
  },
];

export const CHALLENGE_UPDATES = [
  {
    id: "update-03",
    date: "October 14, 2026",
    title: "Update 03 — Tree Stabilization (Missions 8 & 9)",
    body: "Events are encouraged to stabilize the tree model by applying a thin strip of black tape (matte black gaffers tape is recommended) along the mat border, directly behind the tree. Teams should practice and prepare to compete with either a taped or untaped tree, as event conditions may differ from the guidance provided.",
    affects: ["Missions 8 & 9", "Field setup"],
  },
  {
    id: "update-02",
    date: "2026 (before Oct 14)",
    title: "Update 02 — Releasing Interchangeable Models from Docks (Missions 13–15)",
    body: "Programming the robot to remove an interchangeable model from its dock using the model's built-in latch is allowed when done autonomously during the match. This is consistent with Rule 18, which prohibits separation of Dual Lock, taking models apart, or breaking a mission model.",
    affects: ["Missions 13–15", "Robot rules"],
  },
  {
    id: "update-01",
    date: "September 2, 2026",
    title: "Update 01 — Lucky Leaves",
    body: "Before the match begins, the leaves will be randomized within the nest, and teams will not be told the starting placement of the katydid. This is an intentional part of the challenge. The following mission constraint language replaces the previous version: The nest is the mission model that holds the leaves and the katydid. The leaf habitat includes the nest and the marked area on the mat that surrounds it. If the katydid is completely outside the leaf habitat at any time during the match, the bonus is no longer available. If the katydid is completely outside the leaf habitat at the end of the match, the team scores zero points for this mission.",
    affects: ["Mission 4", "Scoring"],
  },
];

export const ROBOT_DESIGN_RUBRIC = {
  categories: [
    {
      name: "Identify",
      desc: "Team determined which missions to attempt, explored building and coding resources, and sought guidance as needed.",
      rows: [
        { criterion: "Evidence of mission strategy", levels: ["Minimal evidence of mission strategy", "Partial evidence of mission strategy", "Clear evidence of mission strategy"] },
        { criterion: "Use of building or coding resources", levels: ["Minimal use of building or coding resources", "Some use of building or coding resources", "Clear use of building or coding resources to support their mission strategy"] },
      ],
    },
    {
      name: "Design",
      desc: "Team members worked collaboratively on their designs and developed the building and coding skills needed.",
      rows: [
        { criterion: "All team members contributed ideas", levels: ["Minimal evidence that all team members contributed ideas", "Partial evidence that all team members contributed ideas", "Clear evidence that all team members contributed ideas"] },
        { criterion: "Building and coding skills in all team members", levels: ["Minimal evidence of building and coding skills in all team members", "Partial evidence of building and coding skills in all team members", "Clear evidence of building and coding skills in all team members"] },
      ],
    },
    {
      name: "Create",
      desc: "Team developed original designs or improved on existing ones according to their mission strategy.",
      rows: [
        { criterion: "Explanation of attachments and their purpose", levels: ["Unclear explanation of attachments and their purpose", "Simple explanation of attachments and their purpose", "Clear explanation of innovative attachments and their purpose"] },
        { criterion: "Explanation of code and/or sensor use", levels: ["Unclear explanation of code and/or sensor use", "Simple explanation of code and/or sensor use", "Clear explanation of innovative code and/or sensor use"] },
      ],
    },
    {
      name: "Iterate",
      desc: "Team repeatedly tested their robot and code to identify areas for improvement and incorporated the findings into their solutions.",
      rows: [
        { criterion: "Evidence of testing their robot and code", levels: ["Minimal evidence of testing their robot and code", "Partial evidence of testing their robot and code", "Clear evidence of repeated testing of their robot and code"] },
        { criterion: "Improvements based on testing", levels: ["Minimal evidence of improvements based on testing", "Partial evidence of improvements based on testing", "Clear evidence of improvements based on testing"] },
      ],
    },
    {
      name: "Communicate",
      desc: "Team effectively explained what they learned from the robot design process and celebrated their progress.",
      rows: [
        { criterion: "Explanation of process and lessons learned", levels: ["Unclear explanation of process and lessons learned", "Simple explanation of process and lessons learned", "Detailed explanation of process and lessons learned"] },
        { criterion: "Pride or enthusiasm for their work", levels: ["Team shows minimal pride or enthusiasm for their work", "Team shows partial pride or enthusiasm for their work", "Team clearly shows pride or enthusiasm for their work"] },
      ],
    },
  ],
  levels: ["Beginning (1)", "Developing (2)", "Accomplished (3)", "Exceeds (4)"],
};

export const INNOVATION_PROJECT_RUBRIC = {
  categories: [
    {
      name: "Identify",
      desc: "Team had a clearly defined problem that was well researched.",
      rows: [
        { criterion: "Definition of the problem", levels: ["Unclear definition of the problem", "Partially clear definition of the problem", "Clear definition of the problem"] },
        { criterion: "Evidence of research", levels: ["Minimal evidence of research", "Partial evidence of research from one or more sources", "Clear, detailed research from a variety of sources"] },
      ],
    },
    {
      name: "Design",
      desc: "Team worked together while creating a project plan and developing their ideas.",
      rows: [
        { criterion: "Evidence of an effective project plan", levels: ["Minimal evidence of an effective project plan", "Partial evidence of an effective project plan", "Clear evidence of an effective project plan"] },
        { criterion: "Development process involved all team members", levels: ["Minimal evidence that development process involved all team members", "Partial evidence that development process involved all team members", "Clear evidence that development process involved all team members"] },
      ],
    },
    {
      name: "Create",
      desc: "Team developed an original idea or built on an existing one with a prototype model/drawing to represent their solution.",
      rows: [
        { criterion: "Explanation of innovation in solution", levels: ["Minimal explanation of innovation in solution", "Simple explanation of innovation in solution", "Detailed explanation of innovation in solution"] },
        { criterion: "Model/drawing that represents the solution", levels: ["Unclear model/drawing that represents the solution", "Simple model/drawing that represents the solution", "Detailed model/drawing that represents the solution"] },
      ],
    },
    {
      name: "Iterate",
      desc: "Team shared their ideas with others, collected feedback, and included improvements to their solution.",
      rows: [
        { criterion: "Sharing of their solution with others", levels: ["Minimal sharing of their solution with others", "Solution shared with at least one person/group", "Solution shared with multiple people/groups"] },
        { criterion: "Improvements based on feedback", levels: ["Minimal evidence of improvements based on feedback", "Partial evidence of improvements based on feedback", "Clear evidence of improvements based on feedback"] },
      ],
    },
    {
      name: "Communicate",
      desc: "Team shared an effective presentation of their solution, its impact on others, and celebrated their team's progress.",
      rows: [
        { criterion: "Explanation of solution and its potential impact", levels: ["Unclear explanation of the solution and its potential impact on others", "Partially clear explanation of solution and its potential impact on others", "Clear explanation of solution and its potential impact on others"] },
        { criterion: "Pride or enthusiasm for their work", levels: ["Presentation shows minimal pride or enthusiasm for their work", "Presentation shows partial pride or enthusiasm for their work", "Presentation clearly shows pride or enthusiasm for their work"] },
      ],
    },
  ],
  levels: ["Beginning (1)", "Developing (2)", "Accomplished (3)", "Exceeds (4)"],
};

export const OFFICIAL_LINKS = {
  fllGlobal: "https://www.firstlegoleague.org/",
  fllUae: "https://www.flluae.org/",
  fllUaeResources: "https://www.flluae.org/resources",
  fllDach: "https://www.first-lego-league.org/en/",
  fllDachRobotGame: "https://www.first-lego-league.org/en/2026-27-season/challenge-resources/robot-game",
  firstinspiresGetStarted: "https://www.firstinspires.org/programs/fll/get-started",
  firstinspiresGameSeason: "https://www.firstinspires.org/programs/fll/game-and-season",
  firstinspiresSeasonMaterials: "https://www.firstinspires.org/resources/library/fll/season-materials",
  firstCanopy: "https://www.firstinspires.org/first-canopy",
  // UAE-specific documents (from flluae.org/resources)
  uaeChallengeOverview: "https://www.flluae.org/assets/downloads/5.%20fll-challenge-bioglow-season-overview.pdf",
  uaeTmg: "https://www.flluae.org/assets/downloads/7.%20fll-challenge-bioglow-tmg%20(1).pdf",
  uaeEngineeringNotebook: "https://www.flluae.org/assets/downloads/6.%20fll-challenge-bioglow-en%20(1).pdf",
  uaeRulebook: "https://www.flluae.org/assets/downloads/8.%20fll-challenge-bioglow-rgr%20(1).pdf",
  uaeBuildingInstructions: "https://www.flluae.org/assets/downloads/3.%20Building%20instructions.zip",
  uaeFieldSetupGuide: "https://www.flluae.org/assets/downloads/1.%20fll-challenge-bioglow-field-setup-reference-guide.pdf",
  uaeTableInstructions: "https://www.flluae.org/assets/downloads/4.%20fll-challenge-bioglow-table-building-instructions.pdf",
  uaeScoresheet: "https://www.flluae.org/assets/downloads/2.%20fll-challenge-bioglow-software-scoresheet.pdf",
  uaeJudgingRubric: "https://www.flluae.org/assets/downloads/11.%20fll-challenge-bioglow-rubrics-color%20(1).pdf",
  uaeJudgingFlowchart: "https://www.flluae.org/assets/downloads/12.%20fll-challenge-bioglow-judging-session-flowchart%20(1).pdf",
  uaeSessionSlides: "https://www.flluae.org/assets/downloads/13.%20Session-Slides.zip",
  uaeGuidedMissionCode: "https://www.flluae.org/assets/downloads/10.%20guided-mission-bioglow-11.zip",
  // FIRST Inspires (global) documents
  fiTmg: "https://firstinspires.blob.core.windows.net/fll/challenge/2026-27/fll-challenge-bioglow-tmg.pdf",
  fiEngineeringNotebook: "https://firstinspires.blob.core.windows.net/fll/challenge/2026-27/fll-challenge-bioglow-en.pdf",
  fiRulebook: "https://firstinspires.blob.core.windows.net/fll/challenge/2026-27/fll-challenge-bioglow-rgr.pdf",
  fiRulebookInteractive: "https://firstinspires.blob.core.windows.net/fll/challenge/2026-27/interactive-rgr/index.html",
  fiUpdates: "https://firstinspires.blob.core.windows.net/fll/challenge/2026-27/fll-challenge-bioglow-updates.pdf",
  // Videos
  videoMissions: "https://www.youtube.com/watch?v=uhZZ8O1StiQ",
  videoFieldSetupUae: "https://www.youtube.com/watch?v=wDan0826cn0",
  videoMissionScoringUae: "https://www.youtube.com/watch?v=Ec6hpsqxa5I",
  // Registration
  uaeRegistration: "https://forms.cloud.microsoft/r/Y6L3q0HVCE",
  uaeKitShop: "https://atlabshoponline.com/",
};

export const RESOURCES = [
  { category: "Robot Game", title: "Robot Game Rulebook", source: "FLL UAE / FIRST® Inspires", url: "https://www.flluae.org/assets/downloads/8.%20fll-challenge-bioglow-rgr%20(1).pdf", available: true },
  { category: "Robot Game", title: "Robot Game Rulebook (Interactive)", source: "FIRST® Inspires", url: "https://firstinspires.blob.core.windows.net/fll/challenge/2026-27/interactive-rgr/index.html", available: true },
  { category: "Robot Game", title: "Robot Game Software Scoresheet", source: "FLL UAE", url: "https://www.flluae.org/assets/downloads/2.%20fll-challenge-bioglow-software-scoresheet.pdf", available: true },
  { category: "Robot Game", title: "Challenge Updates (updated Oct 14, 2026)", source: "FIRST® Inspires", url: "https://firstinspires.blob.core.windows.net/fll/challenge/2026-27/fll-challenge-bioglow-updates.pdf", available: true },
  { category: "Robot Game", title: "Robot Game Updates — Q&A log", source: "FLL UAE", url: "", available: false, note: "Coming soon" },
  { category: "Robot Game", title: "Mission Model Building Instructions", source: "FLL UAE", url: "https://www.flluae.org/assets/downloads/3.%20Building%20instructions.zip", available: true },
  { category: "Robot Game", title: "Field Setup Reference Guide", source: "FLL UAE", url: "https://www.flluae.org/assets/downloads/1.%20fll-challenge-bioglow-field-setup-reference-guide.pdf", available: true },
  { category: "Robot Game", title: "Robot Game Table Building Instructions", source: "FLL UAE", url: "https://www.flluae.org/assets/downloads/4.%20fll-challenge-bioglow-table-building-instructions.pdf", available: true },
  { category: "Robot Game", title: "Code for Guided Mission", source: "FLL UAE", url: "https://www.flluae.org/assets/downloads/10.%20guided-mission-bioglow-11.zip", available: true },
  { category: "Robot Game", title: "Robot Game Missions Video (Founders Edition)", source: "FIRST® Inspires / YouTube", url: "https://www.youtube.com/watch?v=uhZZ8O1StiQ", available: true },
  { category: "Robot Game", title: "Field Setup Video (Challenge)", source: "FLL UAE / YouTube", url: "https://www.youtube.com/watch?v=wDan0826cn0", available: true },
  { category: "Robot Game", title: "Mission Models & Scoring Video (Challenge)", source: "FLL UAE / YouTube", url: "https://www.youtube.com/watch?v=Ec6hpsqxa5I", available: true },
  { category: "Judging", title: "Challenge Judging Rubric", source: "FLL UAE", url: "https://www.flluae.org/assets/downloads/11.%20fll-challenge-bioglow-rubrics-color%20(1).pdf", available: true },
  { category: "Judging", title: "Challenge Judging Session Flowchart", source: "FLL UAE", url: "https://www.flluae.org/assets/downloads/12.%20fll-challenge-bioglow-judging-session-flowchart%20(1).pdf", available: true },
  { category: "Judging", title: "Engineering Notebook", source: "FLL UAE / FIRST® Inspires", url: "https://www.flluae.org/assets/downloads/6.%20fll-challenge-bioglow-en%20(1).pdf", available: true },
  { category: "Judging", title: "Team Meeting Guide", source: "FLL UAE / FIRST® Inspires", url: "https://www.flluae.org/assets/downloads/7.%20fll-challenge-bioglow-tmg%20(1).pdf", available: true },
  { category: "Judging", title: "Challenge Session Support Slides", source: "FLL UAE", url: "https://www.flluae.org/assets/downloads/13.%20Session-Slides.zip", available: true },
  { category: "Season", title: "Challenge Overview", source: "FLL UAE", url: "https://www.flluae.org/assets/downloads/5.%20fll-challenge-bioglow-season-overview.pdf", available: true },
  { category: "Season", title: "FIRST® CANOPY™ — Season Page", source: "FIRST® Inspires", url: "https://www.firstinspires.org/first-canopy", available: true },
  { category: "Season", title: "BIOGLOW™ Season Page (D-A-CH)", source: "HANDS on TECHNOLOGY", url: "https://www.first-lego-league.org/en/2026-27-season", available: true },
  { category: "Registration", title: "UAE Challenge Team Registration", source: "FLL UAE", url: "https://forms.cloud.microsoft/r/Y6L3q0HVCE", available: true },
  { category: "Registration", title: "Buy the Season Kit (ATLAB)", source: "ATLAB Shop", url: "https://atlabshoponline.com/", available: true },
  { category: "Registration", title: "FIRST® Dashboard (Register)", source: "FIRST® Inspires", url: "https://my.firstinspires.org/Dashboard/", available: true },
  { category: "General", title: "FIRST® LEGO® League — Global Site", source: "FIRST® / LEGO® Education", url: "https://www.firstlegoleague.org/", available: true },
  { category: "General", title: "FLL UAE — Official UAE Programme", source: "ATLAB / FLL UAE", url: "https://www.flluae.org/", available: true },
  { category: "General", title: "FLL Season Materials (FIRST® Inspires)", source: "FIRST® Inspires", url: "https://www.firstinspires.org/resources/library/fll/season-materials", available: true },
  { category: "General", title: "Get Started with FLL", source: "FIRST® Inspires", url: "https://www.firstinspires.org/programs/fll/get-started", available: true },
];