import Image from "next/image";
import type { ReactElement } from "react";
import { microloop } from "@/data/content";
import { InteractiveSurface } from "@/components/InteractiveSurface";

export function FeaturedProject(): ReactElement {
  return (
    <div>
      <InteractiveSurface className="grid bg-[var(--line)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[18rem] bg-black sm:min-h-[30rem]">
          <Image
            src={microloop.designedFeatures[0].image}
            alt="MicroLoop schedule interface"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-contain p-3 sm:p-6"
          />
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/85 px-5 py-4">
            <span className="technical-label">Featured / iOS</span>
            <span className="text-xs text-[var(--muted)]">Built during Apple / CEC co-op</span>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[var(--surface)] p-7 sm:p-10">
          <div>
            <span className="technical-label">01 / MicroLoop</span>
            <h2 className="mt-5 text-5xl leading-none sm:text-6xl">{microloop.title}</h2>
            <p className="mt-7 text-sm leading-7 text-[var(--muted)]">
              {microloop.description}
            </p>
            <p className="mt-6 border-l-2 border-[var(--signal)] pl-4 text-sm font-semibold text-white">
              Presented to a panel of Apple engineers at program conclusion.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {microloop.tech.map((technology) => (
              <span
                key={technology}
                className="border border-[var(--line)] px-3 py-2 text-[0.66rem] uppercase text-[var(--muted)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </InteractiveSurface>

      <div className="mt-px grid gap-px bg-[var(--line)] md:grid-cols-2">
        {microloop.designedFeatures.map((feature) => (
          <InteractiveSurface key={feature.title} className="bg-[var(--surface)]">
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
              <Image
                src={feature.image}
                alt={`${feature.title} interface in MicroLoop`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-3 sm:p-5"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl">{feature.title}</h3>
              <p className="mt-3 text-xs leading-6 text-[var(--muted)]">{feature.description}</p>
            </div>
          </InteractiveSurface>
        ))}
      </div>
    </div>
  );
}
