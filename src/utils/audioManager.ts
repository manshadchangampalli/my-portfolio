// audioManager.ts
class AudioManager {
  private unlocked = false;
  private muted = false;
  private sounds: Map<string, HTMLAudioElement> = new Map();

  unlock() {
    if (this.unlocked) return;

    const audio = new Audio();
    audio.volume = 0;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.unlocked = true;
          console.log("Audio unlocked");
        })
        .catch(() => {
          console.log("Audio unlock failed");
        });
    }
  }

  preload(src: string) {
    if (this.sounds.has(src)) return;

    const audio = new Audio(src);
    audio.preload = "auto";
    audio.load(); // Force immediate loading

    this.sounds.set(src, audio);
  }

  play(src: string, volume: number = 1, loop: boolean = false) {
    if (this.muted) return;

    let audio = this.sounds.get(src);
    if (!audio) {
      audio = new Audio(src);
      audio.preload = "auto";
      audio.volume = volume;
      audio.loop = loop;
      this.sounds.set(src, audio);
    } else {
      audio.volume = volume;
      audio.loop = loop;
    }

    audio.currentTime = 0;
    audio.muted = this.muted;
    audio.play().catch((err) => {
      console.error("Failed to play audio:", err);
    });
  }

  mute(value: boolean) {
    this.muted = value;
    this.sounds.forEach((audio) => {
      audio.muted = value;
    });
  }

  setVolume(src: string, volume: number) {
    const audio = this.sounds.get(src);
    if (audio) {
      audio.volume = Math.max(0, Math.min(1, volume));
    }
  }
  resume(src: string) {
    const audio = this.sounds.get(src);
    if (audio) {
      audio.play();
    }
  }

  stop(src: string) {
    const audio = this.sounds.get(src);
    if (audio) {
      audio.pause();
    }
  }
}

export const audioManager = new AudioManager();
