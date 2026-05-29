import { Link } from "wouter";
import { ArrowLeft, GraduationCap, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { producers } from "@/data/masterclasses";
import { useT } from "@/lib/i18n";

function ProducerCard({ producer, index }: { producer: typeof producers[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Link href={`/masterclass/${producer.id}`}>
        <div
          className="border border-border rounded-xl bg-card p-5 cursor-pointer group transition-all hover:border-opacity-60 h-full flex flex-col gap-4"
          style={{ borderColor: `${producer.color}30` }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = `${producer.color}70`)}
          onMouseLeave={e => (e.currentTarget.style.borderColor = `${producer.color}30`)}
        >
          {/* Avatar + name row */}
          <div className="flex items-start gap-4">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-xl font-bold shrink-0"
              style={{ backgroundColor: `${producer.color}20`, color: producer.color }}
            >
              {producer.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-foreground leading-tight">{producer.name}</p>
              {producer.realName && (
                <p className="text-[10px] font-mono text-muted-foreground/40 truncate">{producer.realName}</p>
              )}
              <p className="text-xs text-muted-foreground/60 mt-0.5">{producer.era} · {producer.origin}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground/30 shrink-0 group-hover:text-muted-foreground/70 transition-colors mt-1" />
          </div>

          {/* Tagline */}
          <p className="text-xs italic text-muted-foreground/70 leading-relaxed line-clamp-2">"{producer.tagline}"</p>

          {/* BPM + swing */}
          <div className="flex items-center gap-3 text-[10px] font-mono">
            <span style={{ color: producer.color }}>{producer.bpmRange[0]}–{producer.bpmRange[1]} BPM</span>
            <span className="text-muted-foreground/30">·</span>
            <span className="text-muted-foreground/50">{producer.swingRange[0]}–{producer.swingRange[1]}% swing</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-border/40">
            {producer.tags.map(tag => (
              <span
                key={tag}
                className="text-[9px] font-mono px-2 py-0.5 rounded uppercase tracking-widest"
                style={{ backgroundColor: `${producer.color}15`, color: producer.color }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function MasterClass() {
  const t = useT();
  return (
    <div className="min-h-[100dvh] bg-background text-foreground pb-20">
      <header className="border-b border-border bg-background/95 sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center gap-4">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> {t("Back", "Zurück")}
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="w-5 h-5 text-muted-foreground" />
            <h1 className="text-3xl font-bold tracking-tight">{t("Producer Masterclasses", "Produzenten-Masterclasses")}</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            {t("Style DNA, signature drum patterns, Maschine MK3 workflows, and pack-specific techniques from the most influential producers in hip hop and R&B. Specific to your tools, your packs, and your microKEY setup.", "Style-DNA, Signatur-Drum-Patterns, Maschine-MK3-Workflows und Pack-spezifische Techniken der einflussreichsten Produzenten aus Hip Hop und R&B. Spezifisch für deine Tools, deine Packs und dein microKEY-Setup.")}
          </p>
          <p className="text-xs text-muted-foreground/40 mt-2 font-mono">{producers.length} {t("producers", "Produzenten")} · {producers.reduce((a, p) => a + p.patterns.length, 0)} {t("patterns", "Patterns")} · {producers.reduce((a, p) => a + p.techniques.length, 0)} {t("techniques", "Techniken")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {producers.map((producer, i) => (
            <ProducerCard key={producer.id} producer={producer} index={i} />
          ))}
        </div>
      </main>
    </div>
  );
}
