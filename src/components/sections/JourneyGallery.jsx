import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Plus, X, ImageIcon } from "lucide-react";
import TiltCard from "@/components/TiltCard";
import Grainient from "@/components/effects/Grainient";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Image } from "@/components/ui/image";

const DEFAULT_PHOTOS = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    caption: "Canopy survey — field site visit",
    location: "Rainforest edge",
    date: "Sep 2026",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e835?auto=format&fit=crop&w=1200&q=80",
    caption: "Lichen specimen collection",
    location: "North ridge",
    date: "Sep 2026",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80",
    caption: "Biodiversity quadrant sampling",
    location: "Stream bank",
    date: "Oct 2026",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    caption: "Invasive species identification",
    location: "Trail head",
    date: "Oct 2026",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1518173946687-a4c8892ebd20?auto=format&fit=crop&w=1200&q=80",
    caption: "Team field notes session",
    location: "Research station",
    date: "Oct 2026",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1e940?auto=format&fit=crop&w=1200&q=80",
    caption: "Microhabitat observation",
    location: "Forest floor",
    date: "Oct 2026",
  },
];

export default function JourneyGallery() {
  const [photos, setPhotos] = useLocalStorage("symbionix-field-photos-v1", DEFAULT_PHOTOS);
  const [active, setActive] = useState(null);

  const updatePhoto = (id, updates) => setPhotos(photos.map((p) => (p.id === id ? { ...p, ...updates } : p)));
  const addPhoto = () => setPhotos([...photos, { id: Date.now(), url: "", caption: "New field photo", location: "", date: "" }]);
  const removePhoto = (id) => setPhotos(photos.filter((p) => p.id !== id));

  return (
    <section className="pb-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Grainient colors={["#173F32", "#438B78", "#9ABF82"]} angle={125} flow={0.3} speed={0.2} grainAmount={0.03} opacity={0.1} />
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-brand-teal" />
              <p className="text-xs uppercase tracking-[0.22em] text-brand-teal font-semibold font-mono">Field Study Gallery</p>
            </div>
            <h2 className="mt-1 font-heading text-2xl font-bold text-primary text-3d">Our research in the field</h2>
            <p className="mt-1 text-sm text-muted-foreground max-w-2xl">
              Photos from our biodiversity field studies and SYMBIOSENSE research sessions. Captions are editable — replace the placeholder images with your own.
            </p>
          </div>
          <button onClick={addPhoto} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground btn-3d btn-glow">
            <Plus className="h-4 w-4" /> Add
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 18, rotateY: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="[perspective:1000px]"
            >
              <TiltCard max={8} depth={30} className="rounded-2xl glass-strong overflow-hidden card-shine depth-shadow-md h-full" contentClassName="p-0">
                <div className="preserve-3d">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary/40" style={{ transform: "translateZ(15px)" }}>
                    {p.url ? (
                      <Image src={p.url} alt={p.caption} fittingType="cover" className="h-full w-full transition-transform duration-500 hover:scale-105" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                        <ImageIcon className="h-8 w-8" />
                      </div>
                    )}
                    {/* Location badge */}
                    {p.location && (
                      <span className="absolute top-3 left-3 rounded-full glass px-2.5 py-1 text-[10px] font-semibold text-foreground depth-shadow-sm">
                        📍 {p.location}
                      </span>
                    )}
                    {/* Remove button */}
                    <button
                      onClick={() => removePhoto(p.id)}
                      className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full glass text-muted-foreground hover:text-destructive transition-colors depth-shadow-sm"
                      aria-label="Remove photo"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                    {/* Date */}
                    {p.date && (
                      <span className="absolute bottom-3 right-3 rounded-full glass px-2.5 py-1 text-[10px] font-mono font-semibold text-foreground depth-shadow-sm">
                        {p.date}
                      </span>
                    )}
                  </div>

                  {/* Caption */}
                  <div className="p-4" style={{ transform: "translateZ(10px)" }}>
                    <input
                      type="text"
                      value={p.caption}
                      onChange={(e) => updatePhoto(p.id, { caption: e.target.value })}
                      placeholder="Add a caption..."
                      className="w-full bg-transparent border-b border-transparent hover:border-border focus:border-primary outline-none font-heading text-sm font-bold text-primary"
                    />
                    <input
                      type="text"
                      value={p.url}
                      onChange={(e) => updatePhoto(p.id, { url: e.target.value })}
                      placeholder="Image URL..."
                      className="mt-2 w-full bg-secondary/50 border border-border rounded-md px-2.5 py-1.5 text-[10px] text-muted-foreground outline-none focus:border-primary font-mono"
                    />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {photos.length === 0 && (
          <div className="text-center py-12 text-sm text-muted-foreground">
            No field photos yet. Click "Add" to showcase your field study.
          </div>
        )}

        <p className="mt-6 text-xs text-muted-foreground text-center">
          Placeholder images are illustrative. Replace the URLs with your own field study photos — captions and locations are editable.
        </p>
      </div>
    </section>
  );
}