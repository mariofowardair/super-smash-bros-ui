import { getAsset } from '../assets';

export class Sound {
  private path: string;

  constructor(soundType: string, soundName: string) {
    this.path = getAsset(`assets/sounds/${soundType}/${soundName}.mp3`);
  }

  play() {
    const audio = new Audio(this.path);
    audio.volume = 0.05;
    audio.play().catch(() => undefined);
  }
}

export const getSound = (soundType: string, soundName: string): Sound => {
  const sound = new Sound(soundType, soundName);
  return sound;
};
