// audioManager.ts
class AudioManager {
  private unlocked = false;
  private muted = false;
  private sounds: Map<string, HTMLAudioElement> = new Map();

  unlock() {
    if (this.unlocked) return;

    const audio = new Audio();
    audio.volume = 0;
    audio.play().catch(() => {});

    this.unlocked = true;
  }

  play(src: string) {
    if (!this.unlocked || this.muted) return;

    let audio = this.sounds.get(src);
    if (!audio) {
      audio = new Audio(src);
      this.sounds.set(src, audio);
    }

    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

  mute(value: boolean) {
    this.muted = value;
    this.sounds.forEach((a) => (a.muted = value));
  }
}

export const audioManager = new AudioManager();
