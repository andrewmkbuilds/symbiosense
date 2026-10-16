import { motion } from "framer-motion";
import { Users, Leaf, FlaskConical, Bot, Cpu, Wrench, Calendar, Plus, CheckCircle2, Circle, Trophy, TrendingUp } from "lucide-react";
import JourneyHero from "@/components/sections/JourneyHero";
import TiltCard from "@/components/TiltCard";
import DotField from "@/components/effects/DotField";
import Grainient from "@/components/effects/Grainient";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const ICON_MAP = { Users, Leaf, FlaskConical, Bot, Cpu, Wrench, Calendar, Circle };
const getIcon = (name) => ICON_MAP[name] || Circle;

const DEFAULT_MILESTONES = [
  { id: 1, icon: "Users", title: "Team Formation", date: "Aug 2026", desc: "Our team came together and registered for the BIOGLOW™ 2026–2027 season under FIRST® CANOPY™. We assigned roles and met our mentor Pahini.", done: true },
  { id: 2, icon: "Leaf", title: "Season Kickoff & Theme Study", date: "Aug 2026", desc: "We studied the BIOGLOW™ challenge, explored biodiversity themes, and read the official Robot Game Rulebook and scoresheet.", done: true },
  { id: 3, icon: "FlaskConical", title: "Research & Brainstorming", date: "Sep 2026", desc: "We researched environmental challenges in biodiversity and brainstormed innovation project ideas, focusing on ecosystem monitoring.", done: false },
  { id: 4, icon: "FlaskConical", title: "Innovation Project: SYMBIOSENSE", date: "Sep–Oct 2026", desc: "We developed SYMBIOSENSE — our concept for combining biological indicators (lichens) with AI-assisted invasive plant detection to help conservation teams prioritise field investigations.", done: false },
  { id: 5, icon: "Bot", title: "Robot Building & Coding", date: "Oct 2026", desc: "We designed, built, and coded our SPIKE™ Prime robot for the 15 BIOGLOW™ missions. Veer leads coding; Arnav, Ryan, and Dhruv lead building.", done: false },
  { id: 6, icon: "Cpu", title: "Testing & Iteration", date: "Oct–Nov 2026", desc: "We tested our robot on the practice mat, iterated on attachments and code, and tracked our scores with the mission tracker.", done: false },
  { id: 7, icon: "Wrench", title: "Presentation Preparation", date: "Nov 2026", desc: "We prepared our innovation project presentation, robot design pitch, and practised demonstrating Core Values. Pranav leads communication.", done: false },
  { id: 8, icon: "Calendar", title: "Competition Day", date: "Nov 2026 – Apr 2027", desc: "We present our project, run three official matches, and celebrate the season with other teams at the FLL UAE event.", done: false },
];

export default function Journey() {
  const [milestones, setMilestones] = useLocalStorage("symbionix-milestones-v2", DEFAULT_MILESTONES);

  const updateMilestone = (id, updates) => setMilestones(milestones.map((m) => (m.id === id ? { ...m, ...updates } : m)));
  const toggleDone = (id) => setMilestones(milestones.map((m) => (m.id === id ? { ...m, done: !m.done } : m)));
  const addMilestone = () => setMilestones([...milestones, { id: Date.now(), icon: "Circle", title: "New Milestone", date: "", desc: "", done: false }]);

  const doneCount = milestones.filter((m) => m.done).length;
  const progress = milestones.length > 0 ? Math.round((doneCount / milestones.length) * 100) : 0;

  return (
    <div>
      <JourneyHero
        doneCount={doneCount}
        total={milestones.length}
        progress={progress}
        nextUp={milestones.find((m) => !m.done)?.title?.split(" ")[0]}
      />

      {/* Progress overview */}
      <section className="pb-10" id="timeline">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <TiltCard max={3} scale={1.005} depth={20} className="rounded-2xl glass-strong depth-shadow-md p-6 sm:p-8" contentClassName="p-0">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
              <div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-brand-teal" />
                  <p className="text-xs uppercase tracking-[0.22em] text-brand-teal font-semibold font-mono">Season Progress</p>
                </div>
                <h2 className="mt-2 font-heading text-2xl font-bold text-primary text-3d">{doneCount} of {milestones.length} milestones complete</h2>
              </div>
              <div className="text-right">
                <p className="text-4xl font-bold text-primary font-mono">{progress}%</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground font-mono">Complete</p>
              </div>
            </div>
            {/* Progress bar */}
            <div className="h-4 w-full rounded-full bg-secondary/60 overflow-hidden depth-shadow-sm">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-brand-leaf via-brand-teal to-primary relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
              </motion.div>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2 text-center">
              {[
                { label: "Done", value: doneCount, color: "text-brand-teal" },
                { label: "Pending", value: milestones.length - doneCount, color: "text-amber-600" },
                { label: "Total", value: milestones.length, color: "text-primary" },
                { label: "Next Up", value: milestones.find((m) => !m.done)?.title?.split(" ")[0] || "—", color: "text-muted-foreground" },
              ].map((s) => (
                <div key={s.label} className="rounded-lg bg-secondary/30 p-2">
                  <p className={`text-lg font-bold font-mono ${s.color}`}>{s.value}</p>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-mono">{s.label}</p>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>
      </section>

      {/* Interactive timeline */}
      <section className="pb-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <DotField dotRadius={1.2} dotSpacing={30} gradientFrom="#173F32" gradientTo="#9ABF82" glowColor="#438B78" glowRadius={150} glowIntensity={0.4} baseOpacity={0.18} speed={0.25} />
        </div>
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-brand-teal font-semibold font-mono">Interactive Timeline</p>
              <h2 className="mt-1 font-heading text-2xl font-bold text-primary text-3d">Season Milestones</h2>
            </div>
            <button onClick={addMilestone} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground btn-3d btn-glow">
              <Plus className="h-4 w-4" /> Add
            </button>
          </div>

          <div className="relative">
            {/* Vertical gradient line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-leaf via-brand-teal to-primary opacity-30" />

            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: -20, rotateY: -10 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative pl-16 [perspective:1000px]"
                >
                  {/* Node button */}
                  <button
                    onClick={() => toggleDone(m.id)}
                    className={`absolute left-0 flex h-12 w-12 items-center justify-center rounded-full border-2 depth-shadow-sm transition-all hover:scale-110 z-10 ${
                      m.done
                        ? "bg-primary border-primary text-primary-foreground"
                        : "glass-strong border-brand-teal/40 text-muted-foreground hover:border-brand-teal"
                    }`}
                    aria-label={`Toggle ${m.title}`}
                  >
                    {m.done ? <CheckCircle2 className="h-5 w-5" /> : (() => { const Icon = getIcon(m.icon); return <Icon className="h-5 w-5" strokeWidth={1.75} />; })()}
                  </button>

                  {/* Connector dot on line */}
                  <span className={`absolute left-[22px] top-5 h-2 w-2 rounded-full ${m.done ? "bg-brand-teal" : "bg-border"} z-0`} />

                  {/* TiltCard */}
                  <TiltCard
                    max={6}
                    scale={1.01}
                    depth={25}
                    className={`rounded-2xl p-5 transition-colors card-shine ${m.done ? "glass border-brand-teal/30" : "glass-strong"}`}
                    contentClassName="p-0"
                  >
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`flex h-6 w-6 items-center justify-center rounded-lg text-xs font-bold font-mono ${m.done ? "bg-brand-teal text-white" : "bg-primary/10 text-primary"}`}>
                          {i + 1}
                        </span>
                        <input
                          type="text"
                          value={m.title}
                          onChange={(e) => updateMilestone(m.id, { title: e.target.value })}
                          className="bg-transparent border-b border-transparent hover:border-border focus:border-primary outline-none font-heading text-lg font-bold text-primary"
                        />
                      </div>
                      <button
                        onClick={() => toggleDone(m.id)}
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap transition-colors ${
                          m.done ? "bg-brand-teal/15 text-brand-teal" : "bg-secondary/50 text-muted-foreground"
                        }`}
                      >
                        {m.done ? <CheckCircle2 className="h-3 w-3" /> : <Circle className="h-3 w-3" />}
                        {m.done ? "Done" : "Pending"}
                      </button>
                    </div>
                    <input
                      type="text"
                      value={m.date}
                      onChange={(e) => updateMilestone(m.id, { date: e.target.value })}
                      placeholder="Add date..."
                      className="w-full bg-transparent border-b border-transparent hover:border-border focus:border-primary outline-none text-sm text-brand-teal font-semibold font-mono mb-2"
                    />
                    <textarea
                      value={m.desc}
                      onChange={(e) => updateMilestone(m.id, { desc: e.target.value })}
                      rows={2}
                      className="w-full bg-transparent border border-border/60 rounded-lg p-2.5 hover:border-border focus:border-primary outline-none text-sm text-muted-foreground resize-none transition-colors"
                    />
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-xs text-muted-foreground text-center">
            Click the circle icon to mark a milestone as complete. Edit titles, dates, and descriptions directly — changes are saved automatically.
          </p>

          {/* Completion celebration */}
          {progress === 100 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 rounded-2xl glass-strong p-6 text-center depth-shadow-lg"
            >
              <Trophy className="h-10 w-10 mx-auto mb-3 text-brand-teal" />
              <h3 className="font-heading text-xl font-bold text-primary">Season Complete!</h3>
              <p className="mt-2 text-sm text-muted-foreground">All milestones achieved. Great work, SYMBIONIX!</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}