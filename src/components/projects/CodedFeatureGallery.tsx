import type { ReactElement } from "react";
import { microloop } from "@/data/content";
import { InteractiveSurface } from "@/components/InteractiveSurface";

export function CodedFeatureGallery(): ReactElement {
  return (
    <section className="mt-20">
      <div className="mb-7 grid gap-4 border-y border-[var(--line)] py-5 md:grid-cols-[5rem_1fr_1fr] md:items-end">
        <span className="technical-label">02</span>
        <h2 className="text-3xl leading-none sm:text-4xl">Coded product flows</h2>
        <p className="max-w-xl text-sm leading-6 text-[var(--quiet)] md:justify-self-end">
          Five working interactions from the shipped SwiftUI prototype. Play any recording
          to inspect the implemented behavior.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
        {microloop.codedFeatures.map((feature, index) => (
          <InteractiveSurface
            key={feature.title}
            className={`bg-[var(--surface)] xl:col-span-2 ${index === 3 ? "xl:col-start-2" : ""} ${index === 4 ? "xl:col-start-4" : ""}`}
          >
            <div className="relative flex aspect-[239/280] items-center justify-center overflow-hidden bg-black">
              <video
                controls
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={microloop.designedFeatures[index % microloop.designedFeatures.length].image}
                className="h-full w-full object-contain"
                style={{ objectPosition: feature.videoOffset }}
                aria-label={`${feature.title} MicroLoop demonstration`}
              >
                <source src={feature.video} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <span className="pointer-events-none absolute left-3 top-3 bg-black/85 px-2 py-1 text-[0.6rem] uppercase text-white">
                0{index + 1} / Video
              </span>
            </div>
            <div className="min-h-40 p-5">
              <h3 className="text-xl">{feature.title}</h3>
              <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
                {feature.description}
              </p>
            </div>
          </InteractiveSurface>
        ))}
      </div>
    </section>
  );
}
