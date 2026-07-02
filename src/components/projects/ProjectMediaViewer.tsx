"use client";

import { CircuitBoard, FileText, ImageIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { ReactElement } from "react";

interface ProjectMediaViewerProps {
  image: string;
  schematicImage: string | null;
  title: string;
  type: "software" | "hardware";
}

export function ProjectMediaViewer({ image, schematicImage, title, type }: ProjectMediaViewerProps): ReactElement {
  const [view, setView] = useState<"circuit" | "schematic">("circuit");
  const showsSchematic = view === "schematic" && schematicImage !== null;

  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-[#08090a]">
      <div className={`absolute inset-0 transition-all duration-500 ${showsSchematic ? "scale-[0.97] opacity-0" : "scale-100 opacity-100"}`}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`${type === "hardware" ? "object-contain p-4 sm:p-6" : "object-contain p-2 sm:p-3"}`}
        />
      </div>
      {schematicImage !== null && showsSchematic && (
        <div className="absolute inset-0 bg-white p-2">
          <iframe
            src={`${schematicImage}#toolbar=0&view=FitH`}
            title={`${title} schematic`}
            className="h-full w-full border-0 bg-white"
          />
        </div>
      )}
      <span className="absolute left-4 top-4 flex items-center gap-2 bg-black/85 px-3 py-2 text-[0.62rem] uppercase text-white">
        {type === "hardware" ? <CircuitBoard size={13} /> : <ImageIcon size={13} />}
        {showsSchematic ? "Schematic" : type}
      </span>
      {schematicImage !== null && (
        <div className="absolute bottom-3 right-3 flex border border-white/20 bg-black/90 p-1" aria-label={`${title} media view`}>
          <button
            type="button"
            onClick={() => setView("circuit")}
            className={`media-toggle ${view === "circuit" ? "media-toggle-active" : ""}`}
            aria-pressed={view === "circuit"}
            title="View circuit image"
          >
            <ImageIcon size={15} /> <span>Circuit</span>
          </button>
          <button
            type="button"
            onClick={() => setView("schematic")}
            className={`media-toggle ${view === "schematic" ? "media-toggle-active" : ""}`}
            aria-pressed={view === "schematic"}
            title="View schematic"
          >
            <FileText size={15} /> <span>Schematic</span>
          </button>
        </div>
      )}
    </div>
  );
}
