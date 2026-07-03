import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";

const evidenceImages = [
  {
    src: "/images/schedule-mc.jpeg",
    alt: "MicroLoop scheduling interface",
    label: "MicroLoop",
    fit: "cover",
  },
  {
    src: "/images/Photoresistor%20culminating.png",
    alt: "Arduino photoresistor circuit",
    label: "Embedded systems",
    fit: "cover",
  },
  {
    src: "/images/jabogpt%20picture.jpeg",
    alt: "JaboGPT application interface",
    label: "Software",
    fit: "contain",
  },
] as const;

export function HeroEvidence(): ReactElement {
  return (
    <div className="relative z-10 border-t border-[var(--line)] bg-black/88 backdrop-blur-md">
      <div className="page-shell py-6">
        <div className="mb-5 flex items-center gap-4">
          <span className="technical-label">01 / Selected work</span>
          <span className="rule flex-1" />
          <Link
            href="/projects"
            className="hidden items-center gap-2 text-xs uppercase text-[var(--muted)] hover:text-white sm:flex"
          >
            Explore all projects <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {evidenceImages.map((image) => (
            <Link
              key={image.label}
              href="/projects"
              className="media-frame proof-card group relative aspect-[16/9] overflow-hidden bg-black"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`${image.fit === "contain" ? "object-contain" : "object-cover"} opacity-85 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100`}
              />
              <span className="absolute inset-x-0 bottom-0 bg-black/82 px-4 py-3 text-xs font-semibold uppercase text-white">
                {image.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
