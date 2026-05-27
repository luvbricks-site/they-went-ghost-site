"use client";

const INTRO_STORAGE_KEY = "they-went-ghost:intro-seen";

export default function ReplayIntroButton() {
  function replayIntro() {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(INTRO_STORAGE_KEY);
      window.location.href = "/";
    }
  }

  return (
    <button
      type="button"
      onClick={replayIntro}
      className="text-xs font-bold uppercase tracking-[0.25em] text-stone-500 transition hover:text-stone-100"
    >
      Replay Intro
    </button>
  );
}