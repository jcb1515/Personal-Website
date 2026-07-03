import Image from "next/image";
import type { ReactElement } from "react";
import { microloop } from "@/data/content";
import { InteractiveSurface } from "@/components/InteractiveSurface";

export function FeaturedProject(): ReactElement {
  return (
    <div>
      <InteractiveSurface className="grid bg-[var(--line)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative aspect-[528/370] overflow-hidden bg-white sm:aspect-auto sm:min-h-[30rem]">
          <Image
            src="/images/microloop-final-app-slide.jpeg"
            alt="MicroLoop final application presentation slide"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-contain"
          />
          <div className="absolute right-3 top-3 flex flex-col items-end gap-1 border border-[var(--signal)] bg-black/90 px-3 py-2 sm:right-5 sm:top-5">
            <span className="technical-label">Featured iOS project</span>
            <span className="text-[0.58rem] text-[var(--muted)]">Apple / CEC co-op</span>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[var(--surface)] p-7 sm:p-10">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-[3.25rem] w-[3.25rem] shrink-0 overflow-hidden border-2 border-[var(--signal)] bg-black">
                <Image
                  src="/images/microloop-app-icon.jpeg"
                  alt="MicroLoop application icon"
                  fill
                  sizes="52px"
                  className="scale-[1.16] object-cover grayscale contrast-125 brightness-75"
                />
              </div>
              <div>
                <span className="technical-label">01 / MicroLoop</span>
                <h2 className="mt-2 text-5xl leading-none sm:text-6xl">{microloop.title}</h2>
              </div>
            </div>
            <p className="mt-7 text-sm leading-7 text-[var(--muted)]">
              {microloop.description}
            </p>
            <p className="mt-6 border-l-2 border-[var(--signal)] pl-4 text-sm font-semibold text-white">
              Presented to a panel of Apple engineers at the end of the program.
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

      <div className="subsection-heading">
        <span className="technical-label">01.A / MicroLoop</span>
        <h3>Designed experiences</h3>
        <p>Interface decisions and product states created for the MicroLoop application.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
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
