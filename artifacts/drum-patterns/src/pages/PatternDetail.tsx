import { useParams, Link } from "wouter";
import { patterns } from "@/data/patterns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Play, Square, Info, Settings2 } from "lucide-react";
import { PatternGrid } from "@/components/PatternGrid";
import { getGenreColorVar } from "@/components/PatternCard";
import { useState, useEffect, useRef } from "react";
import { PatternAudioPlayer } from "@/lib/audio";
import { motion } from "framer-motion";

export default function PatternDetail() {
  const params = useParams();
  const pattern = patterns.find(p => p.id === params.id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const playerRef = useRef<PatternAudioPlayer | null>(null);

  useEffect(() => {
    playerRef.current = new PatternAudioPlayer();
    return () => {
      if (playerRef.current) {
        playerRef.current.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (pattern && playerRef.current) {
      playerRef.current.loadPattern(pattern.bpm, pattern.steps);
      playerRef.current.onStepCallback = (step) => {
        setCurrentStep(step);
      };
      
      // Stop playing if pattern changes
      if (isPlaying) {
        playerRef.current.stop();
        setIsPlaying(false);
        setCurrentStep(-1);
      }
    }
  }, [pattern]);

  const togglePlayback = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.stop();
      setIsPlaying(false);
      setCurrentStep(-1);
    } else {
      playerRef.current.play();
      setIsPlaying(true);
    }
  };

  if (!pattern) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center text-muted-foreground flex-col gap-4">
        <p>Pattern not found</p>
        <Link href="/" className="text-primary hover:underline">Return to Browser</Link>
      </div>
    );
  }

  const color = getGenreColorVar(pattern.genre);

  return (
    <div className="min-h-[100dvh] bg-background text-foreground pb-20">
      <header className="border-b border-border bg-background/95 sticky top-0 z-40">
        <div className="container mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 text-sm font-medium mr-8">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="flex-1" />
          <Button 
            onClick={togglePlayback}
            className={`gap-2 ${isPlaying ? 'bg-destructive hover:bg-destructive/90 text-destructive-foreground' : 'bg-primary hover:bg-primary/90 text-primary-foreground'}`}
            data-testid="button-play"
          >
            {isPlaying ? (
              <><Square className="w-4 h-4" fill="currentColor" /> Stop Pattern</>
            ) : (
              <><Play className="w-4 h-4" fill="currentColor" /> Play Pattern</>
            )}
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="outline" style={{ color, borderColor: color }} className="font-mono bg-background/50">
              {pattern.genre.replace("-", " ").toUpperCase()}
            </Badge>
            <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm bg-secondary px-2 py-0.5 rounded">
              <Settings2 className="w-3 h-3" />
              {pattern.bpm} BPM
            </div>
            {pattern.swing && (
              <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm bg-secondary px-2 py-0.5 rounded">
                SWING: {pattern.swing}%
              </div>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{pattern.name}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {pattern.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {pattern.feel.map(f => (
              <span key={f} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full uppercase tracking-widest font-mono">
                {f}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                Step Sequencer
              </h2>
              <div className="text-xs text-muted-foreground flex gap-4 font-mono">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm" style={{ backgroundColor: color }}></div> Hit</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-sm" style={{ backgroundColor: color, opacity: 0.4 }}></div> Ghost</span>
              </div>
            </div>
            <PatternGrid pattern={pattern} currentStep={currentStep} />
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-muted-foreground" />
                Maschine Notes
              </h2>
              <ul className="space-y-4">
                {pattern.maschineNotes.map((note, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="font-mono text-primary select-none opacity-50">{i + 1}.</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
