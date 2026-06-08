"use client";

import { useRef } from "react";

type GamePlayerProps = {
  title: string;
  playUrl: string;
};

export function GamePlayer({ title, playUrl }: GamePlayerProps) {
  const frameRef = useRef<HTMLIFrameElement>(null);

  const requestFullscreen = async () => {
    if (!frameRef.current) {
      return;
    }
    if (frameRef.current.requestFullscreen) {
      await frameRef.current.requestFullscreen();
    }
  };

  return (
    <div className="glass-card rounded-2xl p-3 sm:p-4">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-semibold">{title}</p>
        <button
          onClick={requestFullscreen}
          className="rounded-md border border-indigo-400/60 px-3 py-1.5 text-sm text-indigo-200 transition hover:bg-indigo-500/15"
        >
          Fullscreen
        </button>
      </div>
      <div className="overflow-hidden rounded-xl">
        <iframe
          ref={frameRef}
          src={playUrl}
          title={title}
          className="h-[65vh] min-h-[420px] w-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </div>
  );
}
