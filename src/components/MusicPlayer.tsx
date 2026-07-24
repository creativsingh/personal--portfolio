"use client";

import React, { useState, useRef, useEffect } from "react";
import { PERSONA_DATA } from "../data/persona";
import { Music, Play, Pause, Disc, Volume2, VolumeX, Sparkles, Guitar } from "lucide-react";

export function MusicPlayer() {
  const [activeTrackId, setActiveTrackId] = useState<string>(PERSONA_DATA.music.sampleTracks[0].id);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audioMuted, setAudioMuted] = useState<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const currentTrack = PERSONA_DATA.music.sampleTracks.find(t => t.id === activeTrackId) || PERSONA_DATA.music.sampleTracks[0];

  // Synthesize a soothing acoustic ambient tone when play is clicked
  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
      setIsPlaying(false);
    } else {
      startAudio();
      setIsPlaying(true);
    }
  };

  const startAudio = () => {
    try {
      if (!audioContextRef.current) {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioContextClass();
      }

      if (audioContextRef.current.state === "suspended") {
        audioContextRef.current.resume();
      }

      const ctx = audioContextRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Soft warm frequency (Acoustic E/A chord harmonic)
      osc.type = "sine";
      osc.frequency.setValueAtTime(220, ctx.currentTime); // A3

      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
    } catch {
      // Graceful fallback for browsers restricting auto audio
    }
  };

  const stopAudio = () => {
    if (gainNodeRef.current && audioContextRef.current) {
      try {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioContextRef.current.currentTime + 0.3);
        setTimeout(() => {
          oscillatorRef.current?.stop();
          oscillatorRef.current?.disconnect();
          oscillatorRef.current = null;
        }, 300);
      } catch {
        oscillatorRef.current = null;
      }
    }
  };

  useEffect(() => {
    return () => {
      stopAudio();
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <section id="music" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-2">
            06 / Personal Side &amp; Music
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
            Singer, Guitarist &amp; Music Producer
            <Guitar className="w-6 h-6 text-amber-500" />
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2 text-base max-w-xl">
            {PERSONA_DATA.music.intro}
          </p>
        </div>

        {/* Music Player Container */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 text-white dark:bg-[#121215] dark:text-zinc-100 border border-zinc-800 shadow-2xl relative overflow-hidden">
          
          {/* Top Bar / Now Playing */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div className="flex items-center gap-4">
              {/* Spinning Disc visualizer */}
              <div className={`w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center shadow-lg ${isPlaying ? "animate-spin" : ""}`} style={{ animationDuration: "6s" }}>
                <Disc className="w-7 h-7 text-zinc-900" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">Now Playing</span>
                  {isPlaying && (
                    <span className="flex items-center gap-1">
                      <span className="w-1 h-3 bg-amber-400 animate-pulse"></span>
                      <span className="w-1 h-4 bg-amber-400 animate-pulse delay-75"></span>
                      <span className="w-1 h-2 bg-amber-400 animate-pulse delay-150"></span>
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white">{currentTrack.title}</h3>
                <p className="text-xs font-mono text-zinc-400">{currentTrack.genre} • {currentTrack.instrument}</p>
              </div>
            </div>

            {/* Main Play Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 text-zinc-950 font-semibold text-xs font-mono hover:bg-amber-300 transition-colors shadow-md"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 fill-zinc-950" /> Pause Track
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-zinc-950" /> Play Preview
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Track Description */}
          <div className="py-4 text-xs sm:text-sm text-zinc-300 italic border-b border-zinc-800/80">
            &ldquo;{currentTrack.description}&rdquo;
          </div>

          {/* Playlist Selection */}
          <div className="pt-6 space-y-3">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
              Sample Tracks &amp; Compositions
            </span>
            <div className="space-y-2">
              {PERSONA_DATA.music.sampleTracks.map((track) => (
                <div
                  key={track.id}
                  onClick={() => {
                    setActiveTrackId(track.id);
                    if (!isPlaying) togglePlay();
                  }}
                  className={`cursor-pointer p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                    activeTrackId === track.id
                      ? "bg-zinc-800/90 border-amber-500/50 text-white"
                      : "bg-zinc-900/50 border-zinc-800/60 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-zinc-500">
                      {track.id === activeTrackId && isPlaying ? "►" : "•"}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-zinc-200">{track.title}</div>
                      <div className="text-xs font-mono text-zinc-500">{track.genre}</div>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-zinc-400">{track.duration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Music tags */}
          <div className="pt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-500">Instruments &amp; Setup:</span>
            {PERSONA_DATA.music.instruments.map((inst) => (
              <span key={inst} className="text-[11px] font-mono px-2.5 py-1 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                {inst}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
