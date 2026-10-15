import { useState, useMemo } from "react";
import { RotateCcw, Calculator, Info, AlertTriangle } from "lucide-react";
import { MISSIONS, PRECISION_TOKENS, LAST_CHECKED } from "@/lib/bioglowData";

const STORAGE_KEY = "symbionix-mission-tracker-v1";

function getDefaultState() {
  const state = { precisionTokens: 6 };
  MISSIONS.forEach((m) => {
    m.conditions.forEach((c) => {
      if (c.type === "boolean" || c.type === "bonus") state[c.id] = false;
      else if (c.type === "count") state[c.id] = 0;
      else if (c.type === "tier") state[c.id] = 0;
      else if (c.type === "select") state[c.id] = "";
    });
  });
  return state;
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return { ...getDefaultState(), ...JSON.parse(saved) };
  } catch {}
  return getDefaultState();
}

export default function MissionTracker() {
  const [state, setState] = useState(loadState);

  const update = (id, val) => {
    const next = { ...state, [id]: val };
    setState(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
  };

  const reset = () => {
    const def = getDefaultState();
    setState(def);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(def)); } catch {}
  };

  // Calculate verified score (only missions with verified point values)
  const { verifiedScore, verifiedMissions, unverifiedCount } = useMemo(() => {
    let score = 0;
    let verified = 0;
    let unverified = 0;
    MISSIONS.forEach((m) => {
      const hasPoints = m.conditions.some((c) => c.points !== null);
      if (hasPoints) {
        verified++;
        m.conditions.forEach((c) => {
          if (c.points === null) return;
          if (c.type === "boolean" || c.type === "bonus") {
            if (state[c.id]) {
              if (!c.requires || state[c.requires]) score += c.points;
            }
          } else if (c.type === "count") {
            if (!c.requires || state[c.requires] > 0) score += (state[c.id] || 0) * c.points;
          }
        });
      } else {
        unverified++;
      }
    });
    // Precision tokens
    score += PRECISION_TOKENS.points[state.precisionTokens] || 0;
    return { verifiedScore: score, verifiedMissions: verified, unverifiedCount: unverified };
  }, [state]);

  return (
    <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 depth-shadow-md">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="h-5 w-5 text-brand-teal" />
            <h3 className="font-heading text-lg font-bold text-primary">Interactive Mission Tracker</h3>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Team practice tool — not an official referee score. Last checked: {LAST_CHECKED}.
          </p>
        </div>
        <button
          onClick={reset}
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-2 text-xs font-semibold text-primary hover:bg-secondary transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Reset
        </button>
      </div>

      {/* Score display */}
      <div className="flex flex-wrap items-center gap-4 rounded-xl bg-secondary/50 border border-border p-4 mb-5">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground font-mono">Verified Score</p>
          <p className="text-3xl font-bold text-primary font-mono">{verifiedScore}</p>
        </div>
        <div className="h-10 w-px bg-border" />
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground font-mono">Precision Tokens</p>
          <div className="flex items-center gap-1.5 mt-1">
            {[6, 5, 4, 3, 2, 1, 0].map((n) => (
              <button
                key={n}
                onClick={() => update("precisionTokens", n)}
                className={`h-8 w-8 rounded-lg text-xs font-bold font-mono transition-colors ${
                  state.precisionTokens === n
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:border-brand-teal/50"
                }`}
              >
                {n}
              </button>
            ))}
            <span className="ml-2 text-sm font-semibold text-primary font-mono">
              = {PRECISION_TOKENS.points[state.precisionTokens] || 0} pts
            </span>
          </div>
        </div>
      </div>

      {/* Unverified warning */}
      {unverifiedCount > 0 && (
        <div className="flex items-start gap-2.5 rounded-xl border border-amber-500/30 bg-amber-500/5 p-3.5 mb-5">
          <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-amber-600" />
          <p className="text-xs text-amber-700 leading-relaxed">
            Point values for {unverifiedCount} of {MISSIONS.length} missions are pending verification against the official Robot Game Rulebook.
            The verified score above only includes Mission 01 (Drone Survey) and Precision Tokens.
            Use the <a href="https://www.flluae.org/assets/downloads/2.%20fll-challenge-bioglow-software-scoresheet.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold underline">official scoresheet</a> and <a href="https://www.flluae.org/assets/downloads/8.%20fll-challenge-bioglow-rgr%20(1).pdf" target="_blank" rel="noopener noreferrer" className="font-semibold underline">rulebook</a> to calculate your full score.
          </p>
        </div>
      )}

      {/* Mission conditions */}
      <div className="space-y-4">
        {MISSIONS.map((m) => {
          const hasPoints = m.conditions.some((c) => c.points !== null);
          return (
            <div key={m.number} className="rounded-xl border border-border p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground text-xs font-bold font-mono">
                  {m.number}
                </span>
                <h4 className="font-heading text-sm font-bold text-primary">{m.name}</h4>
                {m.interchangeable && (
                  <span className="text-[10px] uppercase tracking-wide text-brand-teal font-semibold font-mono bg-brand-teal/10 px-2 py-0.5 rounded-full">
                    Interchangeable
                  </span>
                )}
                {!hasPoints && (
                  <span className="text-[10px] uppercase tracking-wide text-amber-600 font-semibold font-mono bg-amber-500/10 px-2 py-0.5 rounded-full">
                    Points pending
                  </span>
                )}
              </div>
              {m.update && (
                <p className="text-xs text-amber-700 bg-amber-500/5 border border-amber-500/20 rounded-lg p-2 mb-3 leading-relaxed">
                  {m.update}
                </p>
              )}
              <div className="space-y-2.5">
                {m.conditions.map((c) => {
                  const disabled = c.requires && !state[c.requires];
                  return (
                    <div key={c.id} className={`flex items-center gap-3 ${disabled ? "opacity-40" : ""}`}>
                      <ConditionControl
                        condition={c}
                        value={state[c.id]}
                        onChange={(v) => update(c.id, v)}
                        disabled={disabled}
                      />
                      {c.points !== null && (
                        <span className="text-xs font-semibold text-brand-teal font-mono ml-auto">
                          {c.points > 0 ? `+${c.points}` : `${c.points}`} pts
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Manual verification note */}
      <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-brand-teal/30 bg-brand-teal/5 p-3.5">
        <Info className="h-4 w-4 shrink-0 mt-0.5 text-brand-teal" />
        <p className="text-xs text-foreground/80 leading-relaxed">
          <span className="font-semibold">Manual verification:</span> Always cross-check your tracker results against the
          {" "}<a href="https://www.flluae.org/assets/downloads/2.%20fll-challenge-bioglow-software-scoresheet.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-teal underline">official Robot Game Score Sheet</a>
          {" "}and the latest{" "}
          <a href="https://firstinspires.blob.core.windows.net/fll/challenge/2026-27/fll-challenge-bioglow-updates.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-teal underline">Challenge Updates</a>.
          {" "}Conditional scoring rules (bonuses, mutually exclusive conditions) must be verified against the official rulebook.
        </p>
      </div>
    </div>
  );
}

function ConditionControl({ condition, value, onChange, disabled }) {
  const { type, label, options, max } = condition;

  if (type === "boolean" || type === "bonus") {
    return (
      <button
        onClick={() => !disabled && onChange(!value)}
        disabled={disabled}
        className="flex items-center gap-2.5 text-left flex-1"
      >
        <span className={`flex h-5 w-5 items-center justify-center rounded-md border transition-colors ${
          value ? "bg-primary border-primary text-primary-foreground" : "border-border"
        }`}>
          {value && <span className="text-xs">✓</span>}
        </span>
        <span className="text-sm text-foreground leading-snug">{label}</span>
      </button>
    );
  }

  if (type === "count") {
    return (
      <div className="flex items-center gap-3 flex-1">
        <span className="text-sm text-foreground leading-snug flex-1">{label}</span>
        <div className="flex items-center gap-1">
          {Array.from({ length: (max || 5) + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => !disabled && onChange(i)}
              disabled={disabled}
              className={`h-7 w-7 rounded-md text-xs font-bold font-mono transition-colors ${
                value === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 border border-border text-muted-foreground hover:border-brand-teal/50"
              }`}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (type === "tier") {
    return (
      <div className="flex items-center gap-3 flex-1">
        <span className="text-sm text-foreground leading-snug flex-1">{label}</span>
        <div className="flex items-center gap-1">
          {(options || ["No", "Partially", "Completely"]).map((opt, i) => (
            <button
              key={opt}
              onClick={() => !disabled && onChange(i)}
              disabled={disabled}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                value === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 border border-border text-muted-foreground hover:border-brand-teal/50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (type === "select") {
    return (
      <div className="flex items-center gap-3 flex-1">
        <span className="text-sm text-foreground leading-snug flex-1">{label}</span>
        <div className="flex items-center gap-1">
          {(options || []).map((opt) => (
            <button
              key={opt}
              onClick={() => !disabled && onChange(opt)}
              disabled={disabled}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                value === opt
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 border border-border text-muted-foreground hover:border-brand-teal/50"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return null;
}