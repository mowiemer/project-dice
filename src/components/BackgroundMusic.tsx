import { useRef, useState, useEffect } from "react";import song from "../music/song.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);


  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25; // 25% volume
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <div>
      <button onClick={toggleMusic}>
        {playing ? "Pause Music" : "Play Music"}
      </button>

      <audio ref={audioRef} loop>
        <source src={song} type="audio/mpeg" />
      </audio>
    </div>
  );
}