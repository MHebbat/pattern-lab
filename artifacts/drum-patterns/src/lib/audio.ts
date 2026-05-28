export class PatternAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private currentStep = 0;
  private nextNoteTime = 0;
  private scheduleAheadTime = 0.1;
  private lookahead = 25.0; // ms
  private intervalId: number | null = null;
  
  private bpm: number = 120;
  private pattern: { instrument: string, pattern: boolean[], velocity?: number[] }[] = [];
  
  public onStepCallback: ((step: number) => void) | null = null;

  constructor() {}

  public loadPattern(bpm: number, patternData: any) {
    this.bpm = bpm;
    this.pattern = patternData;
  }

  public play() {
    if (this.isPlaying) return;
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    
    this.isPlaying = true;
    this.currentStep = 0;
    this.nextNoteTime = this.ctx.currentTime + 0.05;
    this.scheduler();
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      window.clearTimeout(this.intervalId);
      this.intervalId = null;
    }
    if (this.onStepCallback) {
      this.onStepCallback(-1);
    }
  }

  public toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }
  }

  public get isCurrentlyPlaying() {
    return this.isPlaying;
  }

  private scheduleNote(stepNumber: number, time: number) {
    if (this.onStepCallback) {
      const waitTime = (time - this.ctx!.currentTime) * 1000;
      setTimeout(() => {
        if (this.isPlaying && this.onStepCallback) {
          this.onStepCallback(stepNumber);
        }
      }, waitTime);
    }

    this.pattern.forEach(track => {
      if (track.pattern[stepNumber]) {
        let vel = track.velocity ? track.velocity[stepNumber] : 100;
        let gain = vel / 127;
        this.playDrum(track.instrument, time, gain);
      }
    });
  }

  private nextNote() {
    const secondsPerBeat = 60.0 / this.bpm;
    // 16th notes
    this.nextNoteTime += 0.25 * secondsPerBeat;
    this.currentStep++;
    if (this.currentStep === 16) {
      this.currentStep = 0;
    }
  }

  private scheduler = () => {
    while (this.isPlaying && this.nextNoteTime < this.ctx!.currentTime + this.scheduleAheadTime) {
      this.scheduleNote(this.currentStep, this.nextNoteTime);
      this.nextNote();
    }
    if (this.isPlaying) {
      this.intervalId = window.setTimeout(this.scheduler, this.lookahead);
    }
  }

  private playDrum(instrument: string, time: number, gainVal: number) {
    if (!this.ctx) return;
    const name = instrument.toLowerCase();

    if (name.includes("kick") || name.includes("808")) {
      this.playKick(time, gainVal, name.includes("808"));
    } else if (name.includes("snare") || name.includes("rim") || name.includes("clap")) {
      this.playSnare(time, gainVal, name.includes("clap"));
    } else if (name.includes("open")) {
      this.playHiHat(time, gainVal, true);
    } else if (name.includes("hat") || name.includes("hh") || name.includes("shaker")) {
      this.playHiHat(time, gainVal, false);
    } else {
      this.playPerc(time, gainVal);
    }
  }

  private playKick(time: number, gainVal: number, is808: boolean) {
    const osc = this.ctx!.createOscillator();
    const gain = this.ctx!.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx!.destination);
    
    osc.frequency.setValueAtTime(is808 ? 150 : 150, time);
    osc.frequency.exponentialRampToValueAtTime(is808 ? 40 : 30, time + 0.1);
    
    gain.gain.setValueAtTime(gainVal, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + (is808 ? 0.8 : 0.2));
    
    osc.start(time);
    osc.stop(time + (is808 ? 0.8 : 0.2));
  }

  private playSnare(time: number, gainVal: number, isClap: boolean) {
    const osc = this.ctx!.createOscillator();
    const gainOsc = this.ctx!.createGain();
    
    osc.type = 'triangle';
    osc.connect(gainOsc);
    gainOsc.connect(this.ctx!.destination);
    
    osc.frequency.setValueAtTime(250, time);
    gainOsc.gain.setValueAtTime(gainVal * 0.5, time);
    gainOsc.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
    
    osc.start(time);
    osc.stop(time + 0.1);

    // Noise
    const bufferSize = this.ctx!.sampleRate * 0.2; 
    const buffer = this.ctx!.createBuffer(1, bufferSize, this.ctx!.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = this.ctx!.createBufferSource();
    noise.buffer = buffer;
    
    // Filter
    const filter = this.ctx!.createBiquadFilter();
    filter.type = isClap ? 'bandpass' : 'highpass';
    filter.frequency.value = isClap ? 1500 : 2000;
    
    const gainNoise = this.ctx!.createGain();
    gainNoise.gain.setValueAtTime(gainVal * (isClap ? 0.8 : 1), time);
    gainNoise.gain.exponentialRampToValueAtTime(0.01, time + 0.2);
    
    noise.connect(filter);
    filter.connect(gainNoise);
    gainNoise.connect(this.ctx!.destination);
    
    noise.start(time);
  }

  private playHiHat(time: number, gainVal: number, open: boolean) {
    const ratio = 1.2;
    const osc1 = this.ctx!.createOscillator();
    const osc2 = this.ctx!.createOscillator();
    const osc3 = this.ctx!.createOscillator();
    const osc4 = this.ctx!.createOscillator();
    const osc5 = this.ctx!.createOscillator();
    const osc6 = this.ctx!.createOscillator();
    
    const bandpass = this.ctx!.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.value = 10000;
    
    const highpass = this.ctx!.createBiquadFilter();
    highpass.type = "highpass";
    highpass.frequency.value = 7000;
    
    const gain = this.ctx!.createGain();
    
    osc1.frequency.value = 200;
    osc2.frequency.value = 300;
    osc3.frequency.value = 400;
    osc4.frequency.value = 500;
    osc5.frequency.value = 600;
    osc6.frequency.value = 700;
    
    osc1.connect(bandpass);
    osc2.connect(bandpass);
    osc3.connect(bandpass);
    osc4.connect(bandpass);
    osc5.connect(bandpass);
    osc6.connect(bandpass);
    
    bandpass.connect(highpass);
    highpass.connect(gain);
    gain.connect(this.ctx!.destination);
    
    const duration = open ? 0.3 : 0.05;
    
    gain.gain.setValueAtTime(0.00001, time);
    gain.gain.exponentialRampToValueAtTime(gainVal * 0.8, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.00001, time + duration);
    
    osc1.start(time);
    osc2.start(time);
    osc3.start(time);
    osc4.start(time);
    osc5.start(time);
    osc6.start(time);
    
    osc1.stop(time + duration);
    osc2.stop(time + duration);
    osc3.stop(time + duration);
    osc4.stop(time + duration);
    osc5.stop(time + duration);
    osc6.stop(time + duration);
  }

  private playPerc(time: number, gainVal: number) {
    const osc = this.ctx!.createOscillator();
    const gain = this.ctx!.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(800, time);
    osc.connect(gain);
    gain.connect(this.ctx!.destination);
    gain.gain.setValueAtTime(gainVal * 0.5, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
    osc.start(time);
    osc.stop(time + 0.1);
  }
}
