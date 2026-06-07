import { useState, useEffect, useRef } from "react";
import preloaderWebM from "../../imports/preeconomik.webm";
import preloaderMp4 from "../../imports/preeconomik.mp4";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Block scroll during playback
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Fallback timer just in case video events don't fire
    const timeout = setTimeout(() => {
      handleComplete();
    }, 5500);

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  const handleComplete = () => {
    if (fadeOut) return;
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 600); // match duration-500 ease-out transition
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ease-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleComplete}
        className="w-[300px] sm:w-[400px] h-auto object-contain"
      >
        <source src={preloaderWebM} type="video/webm" />
        <source src={preloaderMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
