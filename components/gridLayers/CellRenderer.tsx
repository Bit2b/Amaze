import { useDimensionsStore } from "@/store/dimensionsStore";
import { useShowHideStore } from "@/store/showHideStore";
import React, { memo } from "react";

type CellProps = {
  value: number;
};

const CellRenderer: React.FC<CellProps> = memo(({ value }) => {
  const { cellSize } = useDimensionsStore();
  const showEmptyGrid = useShowHideStore((state) => state.showEmptyCell);


  const borders = [
    value & 1 ? "border-t-2 border-primary" : "",
    value & 2 ? "border-r-2 border-primary" : "",
    value & 4 ? "border-b-2 border-primary" : "",
    value & 8 ? "border-l-2 border-primary" : "",
  ].join(" ");

  return (
    <div
      style={{ width: cellSize, height: cellSize }}
      className={`flex items-center justify-center ${value === 15 && showEmptyGrid ? "bg-primary/10 dark:bg-sidebar" : borders}`}
    />
  );
});

CellRenderer.displayName = "CellRenderer";

export default CellRenderer;
