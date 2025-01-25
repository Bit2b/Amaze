import React, { memo } from "react";

type CellProps = {
  value: number;
};

const CellRenderer: React.FC<CellProps> = memo(({ value }) => {
  const top = value & 1 ? "border-t-2 border-primary" : "";
  const right = value & 2 ? "border-r-2 border-primary" : "";
  const bottom = value & 4 ? "border-b-2 border-primary" : "";
  const left = value & 8 ? "border-l-2 border-primary" : "";
  const player = value & 16 ? "bg-chart-5" : "";

  return (
    <div
      className={`w-16 h-16 flex items-center justify-center ${top} ${right} ${bottom} ${left} ${player}`}
    >
      {value}
    </div>
  );
});

export default CellRenderer;
