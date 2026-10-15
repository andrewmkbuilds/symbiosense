import { motion } from "framer-motion";
import { Leaf, Cpu, Sparkles, UserPlus } from "lucide-react";

const PILLARS = [
  { icon: Leaf, title: "Nature", body: "Reading the living indicators already present in the ecosystem." },
  { icon: Cpu, title: "Engineering", body: "Building tools that turn scattered observations into structured evidence." },
  { icon: Sparkles, title: "Innovation", body: "Combining biology and AI to help direct limited field time." },
];

export default function Team() {
  return (
    <section id="team" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">07 / About the Team</p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-foreground leading-tight tracking-tight text-balance">
              SYMBIONIX
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              A FIRST LEGO League team bringing together nature, engineering and innovation. We wanted to explore
              whether connecting different kinds of evidence could help conservation teams decide where to look first.
            </p>
            <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Team motto</p>
              <p className="mt-2 text-xl text-foreground italic">
                “Connected by Nature. Driven by Innovation.”
              </p>
            </div>

            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {PILLARS.map((p) => (
                <div key={p.title} className="rounded-xl border border-border bg-card p-4">
                  <p.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  <p className="mt-2 text-sm font-bold text-foreground">{p.title}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground leading-snug">{p.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm font-bold text-foreground">Team members</p>
            <p className="text-[11px] text-muted-foreground">To be added — member profiles can be edited later.</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 rounded-2xl border border-dashed border-border bg-secondary/40 p-4"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border text-muted-foreground">
                    <UserPlus className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Member name</p>
                    <p className="text-[11px] text-muted-foreground/80">Role · to be added</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="mt-5 text-xs text-muted-foreground leading-relaxed">
              No member names, expert feedback, test results or achievements are listed here — those will be added as
              the project develops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}