import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "SYMBIOSENSE", to: "/innovation", highlight: true },
  { label: "Our Team", to: "/team" },
  { label: "Our Journey", to: "/journey" },
  { label: "Robot Game", to: "/robot-game" },
  { label: "Robot Design", to: "/robot-design" },
  { label: "Gallery", to: "/gallery" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-3"}`}>
      <nav className={`mx-auto max-w-7xl mx-3 sm:mx-auto transition-all duration-500 rounded-2xl ${
        scrolled
          ? "glass-strong depth-shadow-md px-4 sm:px-6"
          : "glass px-5 sm:px-8"
      }`}>
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground depth-shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
              <Leaf className="h-5 w-5" strokeWidth={1.75} />
              <span className="absolute inset-0 rounded-xl border border-accent/40" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-lg font-bold tracking-tight text-primary text-3d">SYMBIONIX</span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">FIRST CANOPY · 2026–27</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-xs font-semibold uppercase tracking-wide rounded-lg transition-colors ${
                    isActive ? "text-primary" : l.highlight ? "text-brand-teal bg-accent/25 hover:text-primary" : "text-foreground/60 hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-lg bg-secondary/70 depth-shadow-sm"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{l.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-primary hover:bg-secondary/50 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="lg:hidden mx-3 mt-2 glass-strong rounded-2xl depth-shadow-lg overflow-hidden"
        >
          <div className="px-4 py-3 flex flex-col gap-0.5">
            {NAV.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? "text-primary bg-secondary/60" : "text-foreground/70 hover:text-primary hover:bg-secondary/30"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}