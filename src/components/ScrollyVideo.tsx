"use client";

import { useScroll, useMotionValueEvent, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";

/** Taller hero scroll area = same video spans more pixels, so each wheel step scrubs less time. */
const SCROLL_HEIGHT_VH = 750;

interface ScrollyVideoProps {
  src: string;
  children?: (progress: MotionValue<number>) => ReactNode;
}

export default function ScrollyVideo({ src, children }: ScrollyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Direct scroll→time mapping (no spring): avoids lag and overshoot after each scroll.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const el = videoRef.current;
    if (!el || !Number.isFinite(el.duration) || el.duration <= 0) return;
    if (el.readyState < HTMLMediaElement.HAVE_METADATA) return;
    const t = Math.min(Math.max(latest, 0), 1) * el.duration;
    if (Number.isFinite(t)) el.currentTime = t;
  });

  return (
    <div ref={containerRef} className="relative" style={{ height: `${SCROLL_HEIGHT_VH}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          className="h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
        />
        {children && children(scrollYProgress)}
      </div>
    </div>
  );
}
