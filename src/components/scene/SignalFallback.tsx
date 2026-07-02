"use client";

import { useEffect, useRef } from "react";
import type { ReactElement } from "react";

export function SignalFallback(): ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) {
      throw new Error("Signal fallback canvas was not mounted.");
    }

    const context = canvas.getContext("2d");
    if (context === null) {
      throw new Error("Signal fallback requires a 2D canvas context.");
    }

    const image = new window.Image();
    image.decoding = "async";
    const handleError = (): never => {
      throw new Error("Failed to load /hero-signal-fallback.webp.");
    };

    const draw = (): void => {
      const pixelRatio = Math.min(window.devicePixelRatio, 1.5);
      const width = Math.max(canvas.clientWidth, 1);
      const height = Math.max(canvas.clientHeight, 1);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);
      drawCover(context, image, width, height);
    };

    image.addEventListener("load", draw);
    image.addEventListener("error", handleError);
    window.addEventListener("resize", draw, { passive: true });
    image.src = "/hero-signal-fallback.webp";

    return () => {
      image.removeEventListener("load", draw);
      image.removeEventListener("error", handleError);
      window.removeEventListener("resize", draw);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-y-0 right-0 h-full w-[68%] opacity-70 sm:w-[55%]"
    />
  );
}

function drawCover(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  width: number,
  height: number,
): void {
  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const sourceWidth = width / scale;
  const sourceHeight = height / scale;
  const sourceX = image.naturalWidth - sourceWidth;
  const sourceY = (image.naturalHeight - sourceHeight) / 2;

  context.drawImage(
    image,
    sourceX,
    sourceY,
    sourceWidth,
    sourceHeight,
    0,
    0,
    width,
    height,
  );
}
