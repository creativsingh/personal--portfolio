"use client";

import React, { useState, useRef, useEffect } from "react";
import { PERSONA_DATA } from "../data/persona";
import { Play, Pause, Disc, ArrowUpRight, ExternalLink } from "lucide-react";

function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

export function MusicPlayer() {
  const [activeTrackId, setActiveTrackId] = useState<string>(PERSONA_DATA.music.sampleTracks[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = PERSONA_DATA.music.sampleTracks.find(t => t.id === activeTrackId) || PERSONA_DATA.music.sampleTracks[0];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [activeTrackId]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  return (
    <section id="music" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-6">

        {/* Hidden Audio Element for Streaming MP3 preview */}
        <audio
          ref={audioRef}
          src={currentTrack.audioUrl || "https://p.scdn.co/mp3-preview/45c6fbddb3d496997e93e2c199b4df36dc2572a3"}
          onEnded={() => setIsPlaying(false)}
        />

        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-2">
              05 / Music &amp; Creative Sanctuary
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
              {PERSONA_DATA.music.artistName} on Spotify
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#1DB954]/10 text-[#1DB954] border border-[#1DB954]/20 font-medium">
                Verified Artist
              </span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-base max-w-xl">
              {PERSONA_DATA.music.intro}
            </p>
          </div>

          {/* Spotify Profile Link Badge */}
          <a
            href={PERSONA_DATA.music.spotifyArtistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1DB954] hover:bg-[#1aa34a] text-zinc-950 font-mono text-xs font-bold shadow-md transition-all shrink-0"
          >
            <SpotifyIcon className="w-4 h-4 fill-current" />
            View Spotify Profile
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Music Player Container */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-[#121215] text-zinc-900 dark:text-zinc-100 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xl relative overflow-hidden">

          {/* Top Bar / Now Playing */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-4">
              {/* Cover Art / Spinning Disc */}
              <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-md bg-zinc-200 dark:bg-zinc-800 shrink-0">
                {currentTrack.coverImage ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={currentTrack.coverImage}
                    alt={currentTrack.title}
                    className={`w-full h-full object-cover transition-transform ${isPlaying ? "scale-105" : ""}`}
                  />
                ) : (
                  <div className={`w-full h-full bg-linear-to-tr from-emerald-500 to-teal-500 flex items-center justify-center ${isPlaying ? "animate-spin" : ""}`} style={{ animationDuration: "6s" }}>
                    <Disc className="w-7 h-7 text-zinc-900" />
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#1DB954] uppercase tracking-wider font-semibold">Now Playing</span>
                  {isPlaying && (
                    <span className="flex items-center gap-1">
                      <span className="w-1 h-3 bg-[#1DB954] animate-pulse"></span>
                      <span className="w-1 h-4 bg-[#1DB954] animate-pulse delay-75"></span>
                      <span className="w-1 h-2 bg-[#1DB954] animate-pulse delay-150"></span>
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{currentTrack.title}</h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">By {PERSONA_DATA.music.artistName} • {currentTrack.genre}</p>
              </div>
            </div>

            {/* Audio Controls & Spotify Direct Track Link */}
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-semibold text-xs font-mono hover:opacity-90 transition-colors shadow-md"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-current" /> Pause Preview
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" /> Play Preview
                  </>
                )}
              </button>

              {currentTrack.spotifyUrl && (
                <a
                  href={currentTrack.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open track on Spotify"
                  className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-[#1DB954] hover:bg-[#1DB954]/10 transition-colors"
                >
                  <SpotifyIcon className="w-4 h-4 fill-current" />
                </a>
              )}
            </div>
          </div>

          {/* Track Description */}
          <div className="py-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 italic border-b border-zinc-200/80 dark:border-zinc-800/80">
            &ldquo;{currentTrack.description}&rdquo;
          </div>

          {/* Playlist Selection */}
          <div className="pt-6 space-y-3">
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">
              Invin — Spotify Tracks &amp; Releases
            </span>
            <div className="space-y-2">
              {PERSONA_DATA.music.sampleTracks.map((track) => (
                <div
                  key={track.id}
                  onClick={() => {
                    setActiveTrackId(track.id);
                  }}
                  className={`cursor-pointer p-3.5 rounded-xl border flex items-center justify-between transition-all ${activeTrackId === track.id
                    ? "bg-white border-[#1DB954]/60 text-zinc-900 dark:bg-zinc-800/90 dark:border-[#1DB954]/50 dark:text-white shadow-xs"
                    : "bg-white/60 border-zinc-200/60 text-zinc-600 hover:text-zinc-900 hover:bg-white dark:bg-zinc-900/50 dark:border-zinc-800/60 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-800/40"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#1DB954] font-bold">
                      {track.id === activeTrackId && isPlaying ? "►" : "•"}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-200 flex items-center gap-2">
                        {track.title}
                        {track.audioUrl && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            Audio Preview
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-mono text-zinc-500">{track.genre} • {track.instrument}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    <span>{track.duration}</span>
                    <a
                      href={track.spotifyUrl || PERSONA_DATA.music.spotifyArtistUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#1DB954] font-semibold hover:underline flex items-center gap-0.5 text-[11px]"
                    >
                      Spotify <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Setup tags & Artist Badge */}
          <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-zinc-500">Genres &amp; Setup:</span>
              {PERSONA_DATA.music.genres.map((g) => (
                <span key={g} className="text-[11px] font-mono px-2.5 py-1 rounded bg-white dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50 shadow-2xs">
                  {g}
                </span>
              ))}
            </div>

            <a
              href={PERSONA_DATA.music.spotifyArtistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#1DB954] font-bold hover:underline flex items-center gap-1"
            >
              Open Invin on Spotify &rarr;
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
