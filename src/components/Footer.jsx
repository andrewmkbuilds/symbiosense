import { Link } from "react-router-dom";
import { Leaf, ArrowUpRight } from "lucide-react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Team", to: "/team" },
  { label: "Innovation", to: "/innovation" },
  { label: "Robot Game", to: "/robot-game" },
  { label: "Robot Design", to: "/robot-design" },
  { label: "Journey", to: "/journey" },
  { label: "Gallery", to: "/gallery" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Ambient layers */}
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-brand-teal/15 blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl animate-drift" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16">
        {/* Top section */}
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary depth-shadow-sm">
                <Leaf className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div className="leading-none">
                <p className="font-heading text-2xl font-bold text-3d-light">SYMBIONIX</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-accent/80 mt-1">FIRST CANOPY · 2026–27</p>
              </div>
            </div>
            <p className="mt-5 font-display text-2xl text-accent italic max-w-sm text-3d-light">
              "Connected by Nature. Driven by Innovation."
            </p>
            <p className="mt-3 text-sm text-primary-foreground/60 max-w-sm">
              A FIRST LEGO League Challenge team exploring the connection between nature, robotics, and innovation.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-accent/70 mb-4 font-semibold">Explore</p>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4">
              {NAV.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="group inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {l.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-accent/70 mb-4 font-semibold">Season</p>
            <div className="glass-dark rounded-xl p-4">
              <p className="text-sm text-primary-foreground/80">FIRST LEGO League Challenge</p>
              <p className="text-sm text-primary-foreground/80">2026–2027 · FIRST CANOPY</p>
              <p className="mt-3 text-xs text-accent/60 font-mono">Innovation Project: SYMBIOSENSE</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/50 leading-relaxed max-w-4xl">
            <span className="font-semibold text-primary-foreground/70">Scientific disclaimer:</span> SYMBIOSENSE is an educational innovation concept. The interactive demo uses simulated, illustrative data and does not connect to live sensors or perform scientifically validated AI analysis. Any species classifications are flags for human verification, not confirmed identifications.
          </p>
          <p className="mt-4 text-xs text-primary-foreground/35">
            © {new Date().getFullYear()} SYMBIONIX · Built for FIRST LEGO League Challenge 2026–2027.
          </p>
        </div>
      </div>
    </footer>
  );
}