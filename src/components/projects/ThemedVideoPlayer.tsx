"use client";

import { Maximize2, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import type { ChangeEvent, ReactElement } from "react";

interface ThemedVideoPlayerProps {
  ariaLabel: string;
  index: number;
  poster: string;
  source: string;
  videoOffset: string;
}

function formatTime(value: number): string {
  if (!Number.isFinite(value)) {
    return "0:00";
  }
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function ThemedVideoPlayer({ ariaLabel, index, poster, source, videoOffset }: ThemedVideoPlayerProps): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const togglePlayback = async (): Promise<void> => {
    const video = videoRef.current;
    if (video === null) {
      throw new Error(`Unable to control video because its element is unavailable: ${ariaLabel}`);
    }
    if (video.paused) {
      await video.play();
      return;
    }
    video.pause();
  };

  const toggleMuted = (): void => {
    const video = videoRef.current;
    if (video === null) {
      throw new Error(`Unable to mute video because its element is unavailable: ${ariaLabel}`);
    }
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const seekVideo = (event: ChangeEvent<HTMLInputElement>): void => {
    const video = videoRef.current;
    if (video === null) {
      throw new Error(`Unable to seek video because its element is unavailable: ${ariaLabel}`);
    }
    const nextTime = Number(event.currentTarget.value);
    video.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const enterFullscreen = async (): Promise<void> => {
    const container = containerRef.current;
    if (container === null) {
      throw new Error(`Unable to enter fullscreen because the player is unavailable: ${ariaLabel}`);
    }
    await container.requestFullscreen();
  };

  return (
    <div ref={containerRef} className="themed-video-player">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={poster}
        className="h-full w-full object-contain"
        style={{ objectPosition: videoOffset }}
        aria-label={ariaLabel}
        onClick={() => void togglePlayback()}
        onDurationChange={(event) => setDuration(event.currentTarget.duration)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
      >
        <source src={source} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
      <span className="video-index">0{index + 1} / Video</span>
      <div className="video-controls">
        <button type="button" onClick={() => void togglePlayback()} aria-label={isPlaying ? "Pause video" : "Play video"}>
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
        <input
          aria-label="Video progress"
          type="range"
          min="0"
          max={duration || 0}
          step="0.01"
          value={Math.min(currentTime, duration || 0)}
          onChange={seekVideo}
        />
        <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
        <button type="button" onClick={toggleMuted} aria-label={isMuted ? "Unmute video" : "Mute video"}>
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
        <button type="button" onClick={() => void enterFullscreen()} aria-label="Enter fullscreen">
          <Maximize2 size={16} />
        </button>
      </div>
    </div>
  );
}
