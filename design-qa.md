# Design QA

## Visual truth

- Source: `C:\tmp\personal-website-audit-2026-06-30\concept-2-oscilloscope-editorial.png`
- Static implementation: `C:\tmp\personal-website-final-static-v2.png`
- Interactive R3F implementation: `C:\tmp\personal-website-final-webgl-v4.png`
- Mobile implementation: `C:\tmp\personal-website-final-mobile.png`
- Side-by-side comparison: `design-qa-final-comparison.webp`
- Viewports: 1280 x 720 desktop and 390 x 844 mobile
- State: home route, initial viewport

## Fidelity review

- Typography: condensed display face, monospaced support copy, uppercase navigation, and oversized name hierarchy match the selected direction.
- Layout: desktop composition preserves the left-aligned identity block, right-side signal field, and visible project-proof strip. Mobile reflows without horizontal overflow.
- Color: black field, cool white text, muted instrument lines, and restrained crimson accents match the source.
- Image quality: the 20 KB canvas fallback is sharp and nonblank on desktop and mobile. Pointer intent replaces it with the live R3F field without shifting the layout.
- Copy: identity, discipline labels, calls to action, and project evidence use real portfolio content. Fake code and placeholder project imagery from the concept were intentionally replaced with actual project assets.

## Findings and patches

- P0: none.
- P1: none.
- P2: none.
- P3: React Three Fiber 8 emitted a Three.js clock deprecation warning with Three 0.185. Three was pinned to the compatible 0.180 release line.
- P3: the project transition used `popLayout`, which attempted to attach a ref to a function component. The unsupported mode was removed and the route now reports zero browser errors and warnings.
- P3: eager WebGL initialization missed the PRD performance target. The selected signal visual now renders through a 20 KB canvas fallback and mounts the real R3F scene on user intent.
- P3: the route wrapper initially declared hidden content. First-render hiding was removed, bringing measured LCP to 1.9 seconds.
- Lighthouse: Performance 86, Accessibility 100, Best Practices 100, SEO 100.

final result: passed
