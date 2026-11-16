import { useEffect, useRef, useState } from "react";
import abstractambient from "../assets/audio/atlasaudio-ambient.mp3";
import "./css/BackgroundMusic.css";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [panelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch (error) {
      console.error("Audio playback failed:", error);
      setPlaying(false);
    }
  };

  const handleVolumeChange = (event) => {
    setVolume(Number(event.target.value));
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={abstractambient}
        loop
        preload="metadata"
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />

      <div className="music-player">
        <button
          type="button"
          className={`music-main-button ${playing ? "music-active" : ""}`}
          onClick={toggleMusic}
          aria-label={playing ? "Pause background music" : "Play background music"}
          title={playing ? "Pause Music" : "Play Music"}
        >
          <span className="music-button-glow" />

          {playing ? (
            <span className="music-bars">
              <i />
              <i />
              <i />
              <i />
            </span>
          ) : (
            <span className="music-play-icon">♫</span>
          )}

          <span className="music-button-ring" />
        </button>

        <div className={`music-panel ${panelOpen ? "music-panel-open" : ""}`}>
          <div className="music-panel-header">
            <div className="music-track-icon">♫</div>

            <div className="music-track-info">
              <strong>Ambient Experience</strong>
              <span>{playing ? "Now Playing" : "Music Paused"}</span>
            </div>

            <button
              type="button"
              className="music-panel-toggle"
              onClick={() => setPanelOpen(false)}
              aria-label="Close music settings"
            >
              ×
            </button>
          </div>

          <div className="music-volume">
            <span>Volume</span>

            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              aria-label="Music volume"
              style={{
                "--volume-level": `${volume * 100}%`,
              }}
            />

            <span className="volume-value">
              {Math.round(volume * 100)}%
            </span>
          </div>

          <button
            type="button"
            className="music-panel-play"
            onClick={toggleMusic}
          >
            {playing ? "Ⅱ  Pause Music" : "▶  Play Music"}
          </button>
        </div>

        <button
          type="button"
          className="music-settings-button"
          onClick={() => setPanelOpen((prev) => !prev)}
          aria-label="Music settings"
          title="Music Settings"
        >
          <span>⚙</span>
        </button>
      </div>
    </>
  );
}