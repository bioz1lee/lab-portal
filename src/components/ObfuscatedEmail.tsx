"use client";

import { useEffect, useRef } from "react";

export default function ObfuscatedEmail({
  user,
  domain,
  className = "",
}: {
  user: string;
  domain: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = `${user}@${domain}`;
    }
  }, [user, domain]);

  return (
    <span
      ref={ref}
      className={`select-none pointer-events-none ${className}`}
      aria-label="Email address"
      onCopy={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    />
  );
}
