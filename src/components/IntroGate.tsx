"use client";

import {
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { siteConfig } from "@/data/site";

const INTRO_STORAGE_KEY = "they-went-ghost:intro-seen";

function subscribeToIntroStatus(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener("storage", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
  };
}

function getIntroSeenSnapshot() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(INTRO_STORAGE_KEY) === "true";
}

function getIntroSeenServerSnapshot() {
  return false;
}

export default function IntroGate({ children }: { children: ReactNode }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const hasSeenIntro = useSyncExternalStore(
    subscribeToIntroStatus,
    getIntroSeenSnapshot,
    getIntroSeenServerSnapshot
  );

  const [dismissed, setDismissed] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const [muted, setMuted] = useState(true);

  const showIntro = !hasSeenIntro && !dismissed;

  function markIntroSeen() {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(INTRO_STORAGE_KEY, "true");
    }
  }

  function finishIntro() {
    markIntroSeen();
    setFadingOut(true);

    window.setTimeout(() => {
      setDismissed(true);
    }, 700);
  }

  async function toggleMute() {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !muted;

    video.muted = nextMuted;
    setMuted(nextMuted);

    if (!nextMuted) {
      try {
        await video.play();
      } catch {
        // Some browsers may still block audio until user interaction.
      }
    }
  }

  return (
    <>
      {showIntro && (
        <section
          className={[
            "fixed inset-0 z-50 overflow-hidden bg-black transition-opacity duration-700",
            fadingOut ? "opacity-0" : "opacity-100",
          ].join(" ")}
          aria-label="They Went Ghost intro video"
        >
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={siteConfig.introVideo}
            poster={siteConfig.introPoster}
            autoPlay
            muted={muted}
            playsInline
            onEnded={finishIntro}
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-center gap-3 px-4">
            <button
              type="button"
              onClick={toggleMute}
              className="rounded-full border border-stone-300/40 bg-black/45 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-stone-100 backdrop-blur transition hover:bg-stone-100 hover:text-black"
            >
              {muted ? "Unmute" : "Mute"}
            </button>

            <button
              type="button"
              onClick={finishIntro}
              className="rounded-full border border-stone-300/40 bg-black/45 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-stone-100 backdrop-blur transition hover:bg-stone-100 hover:text-black"
            >
              Skip
            </button>
          </div>
        </section>
      )}

      <div className={showIntro ? "pointer-events-none" : ""}>{children}</div>
    </>
  );
}