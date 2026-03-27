"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  className?: string;
  size?: number;
  src?: string;
  glow?: boolean;
  initials?: string;
}

export function Avatar({ className, size = 200, src, glow = false, initials }: AvatarProps) {
  const [error, setError] = useState(false);

  return (
    <div 
      className={cn(
        "relative rounded-full overflow-hidden bg-surface flex items-center justify-center border-4 shrink-0 transition-all duration-500",
        glow ? "border-primary shadow-[0_0_40px_rgba(204,0,0,0.5)]" : "border-surface shadow-2xl hover:border-primary",
        className
      )}
      style={{ width: size, height: size }}
    >
      {src && !error && !initials ? (
        <Image
          src={src}
          alt="Avatar"
          fill
          className="object-cover"
          onError={() => setError(true)}
          sizes={`${size}px`}
          priority
        />
      ) : (
        <span 
          className="text-primary italic underline underline-offset-8 mr-2" 
          style={{ 
            fontSize: size * 0.45,
            fontFamily: 'var(--font-fancy), serif'
          }}
        >
          {initials || "JB"}
        </span>
      )}
    </div>
  );
}
