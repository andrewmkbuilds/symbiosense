import { motion } from "framer-motion";
import { Bot, Wrench, Code, Cpu, Camera, GitBranch, FlaskConical, BookOpen, ExternalLink, Award } from "lucide-react";
import PageHero from "@/components/PageHero";
import OfficialSources from "@/components/OfficialSources";
import { ROBOT_DESIGN_RUBRIC, OFFICIAL_LINKS, SEASON_INFO } from "@/lib/bioglowData";
import TiltCard from "@/components/TiltCard";
import DotField from "@/components/effects/DotField";
import Grainient from "@/components/effects/Grainient";

const BUILD_IMAGES = Array.from({ length: 6 }, (_, i) => i);

const DESIGN_DECISIONS = [
  { title: "Chassis Choice", body: "Our chassis is built for stability on the BIOGLOW™ mat. We're testing a compact design that fits within the 12-inch height limit and the launch area, with a low centre of gravity for consistent navigation." },
  { title: "Attachment System", body: "We're developing modular attachments for the 15 BIOGLOW™ missions, including mechanisms for the Drone Survey, Exploding Seeds, and the interchangeable dock missions (13–15). Quick-swap design allows fast changes between runs." },
  { title: "Sensor Placement", body: "We're using SPIKE™ Prime color and gyro sensors for line following and navigation. Sensors are positioned for reliable detection on the competition mat, accounting for the mat's lighting conditions." },
  { title: "Code Architecture", body: "Our code is organised into reusable mission blocks for each of the 15 BIOGLOW™ missions. Veer leads coding with modular blocks that can be tested and debugged independently, with comments explaining each block." },
];

export default function RobotDesign() {
  return (
    <div>
      <PageHero
        label="Robot Design"
        title="Robot Design & Judging"
        subtitle="Official BIOGLOW™ Robot Design judging rubric and criteria, plus our team's robot-building journey. Official rubric content is verified from the official Challenge Judging Rubric."
      />

      {/* Official rubric */}
      <section className="pb-12 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <DotField dotRadius={1.2} dotSpacing={26} gradientFrom="#438B78" gradientTo="#9ABF82" gradientAngle={135} glowColor="#438B78" glowRadius={160} glowIntensity={0.4} baseOpacity={0.18} speed={0.25} />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center gap-2 mb-2">
            <Award className="h-5 w-5 text-brand-teal" />
            <p className="text-xs uppercase tracking-[0.22em] text-brand-teal font-semibold font-mono">Official Judging Rubric</p>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-primary mb-3 text-3d">Robot Design Rubric</h2>
          <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
            Judges evaluate Robot Design across five categories: Identify, Design, Create, Iterate, and Communicate.
            Each row is rated Beginning (1), Developing (2), Accomplished (3), or Exceeds (4). Core Values make up 25% of
            the Champion's score and are demonstrated throughout the team's work.
          </p>

          <div className="space-y-4">
            {ROBOT_DESIGN_RUBRIC.categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl glass p-5 depth-shadow-sm"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold font-mono">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-primary">{cat.name}</h3>
                    <p className="text-sm text-muted-foreground">{cat.desc}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {cat.rows.map((row, j) => (
                    <div key={j} className="rounded-xl border border-border/60 bg-secondary/30 p-3">
                      <p className="text-sm font-semibold text-primary mb-2">{row.criterion}</p>
                      <div className="grid sm:grid-cols-4 gap-1.5">
                        {row.levels.map((level, k) => (
                          <div key={k} className={`rounded-lg p-2 text-xs leading-snug ${k === 0 ? "bg-red-500/5 text-red-700" : k === 1 ? "bg-amber-500/5 text-amber-700" : k === 2 ? "bg-brand-teal/5 text-brand-teal" : "bg-primary/5 text-primary"}`}>
                            <span className="font-bold">{ROBOT_DESIGN_RUBRIC.levels[k]}</span>
                            <p className="mt-0.5">{level}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { label: "Challenge Judging Rubric (PDF)", url: OFFICIAL_LINKS.uaeJudgingRubric },
              { label: "Judging Session Flowchart (PDF)", url: OFFICIAL_LINKS.uaeJudgingFlowchart },
              { label: "Engineering Notebook (PDF)", url: OFFICIAL_LINKS.uaeEngineeringNotebook },
              { label: "Team Meeting Guide (PDF)", url: OFFICIAL_LINKS.uaeTmg },
              { label: "Challenge Overview (PDF)", url: OFFICIAL_LINKS.uaeChallengeOverview },
              { label: "FLL UAE Resources", url: OFFICIAL_LINKS.fllUaeResources },
            ].map((r) => (
              <a key={r.label} href={r.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2.5 rounded-xl glass p-3.5 hover:border-brand-teal/50 hover:shadow-sm transition-all">
                <ExternalLink className="h-4 w-4 shrink-0 text-brand-teal group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-primary leading-tight">{r.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SYMBIONIX practice tips */}
      <section className="py-12 bg-secondary/40 border-y border-border/60 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Grainient colors={["#438B78", "#9ABF82", "#F4F0E5"]} angle={125} flow={0.4} speed={0.3} grainAmount={0.04} opacity={0.1} />
        </div>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-2xl border border-brand-teal/30 bg-brand-teal/5 p-4 mb-6">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-teal font-bold font-mono">SYMBIONIX Practice Tips</p>
            <p className="text-sm text-muted-foreground mt-1">
              These are our team's own tips — not official judging requirements. We've labelled them clearly so they are never confused with official FLL guidance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: BookOpen, title: "Document Everything", body: "We keep notes on every design decision, code change, and test result so we can explain our process to judges." },
              { icon: Wrench, title: "Test on the Real Mat", body: "We practice on the actual competition mat surface to account for friction and lighting differences." },
              { icon: Code, title: "Comment Our Code", body: "Every mission block has comments explaining what it does, so any team member can understand and debug it." },
            ].map((t) => (
              <div key={t.title} className="rounded-2xl glass p-5 depth-shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                  <t.icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-base font-bold text-primary">{t.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYMBIONIX robot content (clearly separated) ── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-2xl border border-brand-teal/30 bg-brand-teal/5 p-4 mb-6">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-teal font-bold font-mono">SYMBIONIX Team Content</p>
            <p className="text-sm text-muted-foreground mt-1">
              The sections below document our robot build — not official FLL information. Photos and details will be added as our robot develops.
            </p>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Bot className="h-5 w-5" />
            </span>
            <h2 className="font-heading text-xl font-bold text-primary">Our Robot Overview</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
            Our robot is being designed and built for the BIOGLOW™ robot game using {SEASON_INFO.technology}.
            We are working through the engineering design process — brainstorming, prototyping, testing, and iterating.
          </p>

          <p className="text-xs uppercase tracking-[0.22em] text-brand-teal font-semibold font-mono mb-2">Build Gallery</p>
          <p className="text-sm text-muted-foreground mb-4">Placeholders for build-session photos — not photographs of our actual robot.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {BUILD_IMAGES.map((i) => (
              <div key={i} className="aspect-square rounded-2xl border-2 border-dashed border-border bg-secondary/40 flex flex-col items-center justify-center text-muted-foreground hover:border-brand-teal/50 transition-colors">
                <Camera className="h-8 w-8 mb-2 opacity-40" />
                <span className="text-xs font-mono">Photo {i + 1}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="rounded-2xl glass p-6 depth-shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <Wrench className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-lg font-bold text-primary">Chassis</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Our chassis design focuses on stability, precise movement, and quick attachment swaps. Details about
                drive type, wheel configuration, and structural choices will be added here.
              </p>
            </div>
            <div className="rounded-2xl glass p-6 depth-shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <GitBranch className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-lg font-bold text-primary">Attachments</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We are designing modular attachments for different mission sets. Each attachment will be documented
                with its purpose, mechanism, and the missions it supports.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {DESIGN_DECISIONS.map((d, i) => (
              <div key={d.title} className="rounded-2xl glass p-5 depth-shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-bold font-mono">{i + 1}</span>
                  <h3 className="font-heading text-base font-bold text-primary">{d.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficialSources
        sources={[
          { label: "Challenge Judging Rubric (UAE)", url: OFFICIAL_LINKS.uaeJudgingRubric },
          { label: "Judging Session Flowchart (UAE)", url: OFFICIAL_LINKS.uaeJudgingFlowchart },
          { label: "Engineering Notebook (UAE)", url: OFFICIAL_LINKS.uaeEngineeringNotebook },
          { label: "Team Meeting Guide (UAE)", url: OFFICIAL_LINKS.uaeTmg },
          { label: "Challenge Overview (UAE)", url: OFFICIAL_LINKS.uaeChallengeOverview },
          { label: "FLL UAE Resources", url: OFFICIAL_LINKS.fllUaeResources },
          { label: "FIRST® Inspires Season Materials", url: OFFICIAL_LINKS.firstinspiresSeasonMaterials },
        ]}
      />
    </div>
  );
}