"use client";

import { useEffect, useState } from "react";
import { cn } from "../../lib/utils.ts";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI((prev) => prev + 1);
      } else {
        clearInterval(typingEffect);

        // Wait for 1 second before restarting
        setTimeout(() => {
          setDisplayedText("Redefining How People Find Their Dream Homes");
          setI(0);
        }, 2000);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i, text, duration]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {displayedText}
    </h1>
  );
}
