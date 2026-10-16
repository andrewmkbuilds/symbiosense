import { useSimulation } from "@/hooks/useSimulation";
import ConsoleHero from "@/components/liveconsole/ConsoleHero";
import EcosystemMap from "@/components/liveconsole/EcosystemMap";
import RobotStatusPanel from "@/components/liveconsole/RobotStatusPanel";
import CameraViewPanel from "@/components/liveconsole/CameraViewPanel";
import LichenGuardPanel from "@/components/liveconsole/LichenGuardPanel";
import InvasiveFirewallPanel from "@/components/liveconsole/InvasiveFirewallPanel";
import BioRiskPanel from "@/components/liveconsole/BioRiskPanel";
import EventLog from "@/components/liveconsole/EventLog";
import ObservationTable from "@/components/liveconsole/ObservationTable";
import ConsoleInfo from "@/components/liveconsole/ConsoleInfo";

export default function LiveConsole() {
  const { sim, start, pause, resume, reset, runOne, setSpeed, setVerified, clearLog, inspectStation } = useSimulation();
  const controls = { start, pause, resume, reset, runOne, setSpeed };

  return (
    <div className="min-h-screen bg-[#0a1f1a] text-cream">
      <ConsoleHero sim={sim} controls={controls} />

      <main className="mx-auto max-w-7xl px-4 sm:px-8 pb-10 space-y-4">
        {/* Top disclaimer */}
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-center">
          <p className="text-[11px] text-amber-200 font-semibold font-mono">SIMULATED DEMO · ILLUSTRATIVE DATA · NOT LIVE SENSOR / ROBOT TELEMETRY</p>
        </div>

        {/* Row 1: Map + Robot status + Camera */}
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-2xl glass-strong p-4 depth-shadow-md">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs uppercase tracking-wide text-brand-teal font-bold font-mono">Robot Mission View · Ecosystem Map</p>
              <span className="text-[10px] font-mono text-muted-foreground">Top-down · fictional study area</span>
            </div>
            <EcosystemMap
              roverPos={sim.roverPos}
              roverHeading={sim.roverHeading}
              currentStationId={sim.currentStationId}
              observations={sim.observations}
              status={sim.status}
              onInspectStation={inspectStation}
            />
          </div>
          <div className="space-y-4">
            <RobotStatusPanel sim={sim} />
            <CameraViewPanel sim={sim} onInspectStation={inspectStation} />
          </div>
        </div>

        {/* Row 2: LichenGuard + Invasive Firewall + BioRisk */}
        <div className="grid lg:grid-cols-3 gap-4">
          <LichenGuardPanel sim={sim} />
          <InvasiveFirewallPanel sim={sim} onVerify={setVerified} />
          <BioRiskPanel sim={sim} />
        </div>

        {/* Row 3: Event log + Observation table */}
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1"><EventLog sim={sim} onClear={clearLog} /></div>
          <div className="lg:col-span-2"><ObservationTable sim={sim} /></div>
        </div>
      </main>

      <ConsoleInfo />
    </div>
  );
}