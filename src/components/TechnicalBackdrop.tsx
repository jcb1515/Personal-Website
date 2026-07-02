import type { ReactElement } from "react";

const rails = [18, 36, 64, 82] as const;

export function TechnicalBackdrop(): ReactElement {
  return (
    <div className="technical-backdrop" aria-hidden="true">
      {rails.map((position, index) => (
        <span key={position} className="backdrop-rail" style={{ left: `${position}%` }}>
          <i>{String(index + 1).padStart(2, "0")}</i>
        </span>
      ))}
      <span className="backdrop-axis backdrop-axis-top" />
      <span className="backdrop-axis backdrop-axis-bottom" />
    </div>
  );
}
