
class AudioService {
  private context: AudioContext | null = null;
  private humOsc: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;

  init() {
    if (this.context) return;
    this.context = new (window.AudioContext || (window as any).webkitAudioContext)();
    this.gainNode = this.context.createGain();
    this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
    this.gainNode.connect(this.context.destination);
  }

  startHum() {
    if (!this.context || !this.gainNode) this.init();
    if (this.humOsc) return;

    this.humOsc = this.context!.createOscillator();
    this.humOsc.type = 'sine';
    this.humOsc.frequency.setValueAtTime(32, this.context!.currentTime); // Low sub-bass
    this.humOsc.connect(this.gainNode!);
    this.humOsc.start();

    // Increased from 0.08 to 0.3 for a significantly louder, more visceral sub-bass presence
    this.gainNode!.gain.exponentialRampToValueAtTime(0.3, this.context!.currentTime + 3);
  }

  playTone(freq: number = 440, duration: number = 0.5) {
    if (!this.context) return;
    const osc = this.context.createOscillator();
    const g = this.context.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.context.currentTime);
    g.gain.setValueAtTime(0.05, this.context.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, this.context.currentTime + duration);
    osc.connect(g);
    g.connect(this.context.destination);
    osc.start();
    osc.stop(this.context.currentTime + duration);
  }

  stopHum() {
    if (this.gainNode && this.context) {
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.context.currentTime + 1);
      setTimeout(() => {
        this.humOsc?.stop();
        this.humOsc = null;
      }, 1100);
    }
  }
}

export const audioService = new AudioService();
