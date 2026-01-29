// components/layout/ThemeWrapper.tsx
"use client";

import { useEffect, useRef } from "react";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.style.opacity = "1";
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        opacity: 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      {children}
    </div>
  );
}
