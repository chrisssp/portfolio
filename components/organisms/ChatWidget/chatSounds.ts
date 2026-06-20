/**
 * Chat sound effects using Web Audio API.
 * No external audio files needed.
 * Enabled by default; toggle stored in sessionStorage('chat-sound-enabled').
 *
 * Sounds are inspired by WhatsApp:
 * - Send: short, soft bubble-pop (~50ms)
 * - Receive: two-note warm chime "ding-ding" (~200ms)
 */

const SOUND_KEY = "chat-sound-enabled";
const GAIN = 0.08;

export function isSoundEnabled(): boolean {
   if (typeof window === "undefined") return false;
   try {
      const stored = sessionStorage.getItem(SOUND_KEY);
      return stored === null ? true : stored === "true";
   } catch {
      return true;
   }
}

export function setSoundEnabled(enabled: boolean): void {
   if (typeof window === "undefined") return;
   try {
      sessionStorage.setItem(SOUND_KEY, String(enabled));
   } catch {
      // sessionStorage unavailable
   }
}

/**
 * Short soft "pop" for sent messages — like a small bubble popping.
 * Uses a noise burst shaped by a fast frequency sweep.
 */
export function playSendTone(): void {
   if (!isSoundEnabled()) return;
   try {
      const ctx = new AudioContext();
      const sr = ctx.sampleRate;
      const len = Math.floor(sr * 0.045); // 45ms
      const buf = ctx.createBuffer(1, len, sr);
      const ch = buf.getChannelData(0);

      // Noise burst with exponential decay, very short
      for (let i = 0; i < len; i++) {
         const t = i / sr;
         const decay = Math.exp(-t * 120);
         ch[i] = (Math.random() - 0.5) * 2 * decay * 0.25;
      }

      const src = ctx.createBufferSource();
      src.buffer = buf;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(GAIN, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      // Bandpass filter to make it sound like a soft "pop" not noise
      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.value = 600;
      filter.Q.value = 1.5;

      src.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      src.start();
   } catch {
      // AudioContext unavailable
   }
}

/**
 * Warm two-note chime for received messages — like WhatsApp's "ding-ding".
 * Two ascending tones with a soft attack and gentle decay.
 */
export function playReceiveTone(): void {
   if (!isSoundEnabled()) return;
   try {
      const ctx = new AudioContext();
      const mixGain = ctx.createGain();
      mixGain.gain.setValueAtTime(GAIN, ctx.currentTime);

      const playTone = (freq: number, startTime: number, duration: number) => {
         const osc = ctx.createOscillator();
         osc.type = "sine";
         osc.frequency.setValueAtTime(freq, startTime);

         const env = ctx.createGain();
         env.gain.setValueAtTime(0, startTime);
         env.gain.linearRampToValueAtTime(GAIN, startTime + 0.004);
         env.gain.setValueAtTime(GAIN, startTime + duration * 0.5);
         env.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

         osc.connect(env);
         env.connect(mixGain);
         osc.start(startTime);
         osc.stop(startTime + duration);
      };

      // Two ascending notes, like WhatsApp's "ding-ding"
      playTone(659, ctx.currentTime, 0.13); // E5
      playTone(830, ctx.currentTime + 0.1, 0.15); // G#5

      mixGain.connect(ctx.destination);
   } catch {
      // AudioContext unavailable
   }
}
