import { useDimensionsStore } from "@/store/dimensionsStore";
import React, { memo } from "react";

type CellProps = {
  value: number;
};

const CellRenderer: React.FC<CellProps> = memo(({ value }) => {
  const top = value & 1 ? "border-t-2 border-primary" : "";
  const right = value & 2 ? "border-r-2 border-primary" : "";
  const bottom = value & 4 ? "border-b-2 border-primary" : "";
  const left = value & 8 ? "border-l-2 border-primary" : "";
  const player = value & 16 ? "bg-chart-2" : "";
  let { cellSize } = useDimensionsStore();
  cellSize = cellSize * 4;

  return (
    <div
      style={{ width: cellSize, height: cellSize }}
      className={`flex items-center justify-center ${top} ${right} ${bottom} ${left} ${player}`}
    ></div>
  );
});

export default CellRenderer;