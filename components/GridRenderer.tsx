import React, { useEffect, useRef } from "react";
import RowRenderer from "./RowRenderer";
import { useGridStore } from "@/store/downloadStore";

type GridProps = {
  grid: number[][];
};


const GridRenderer: React.FC<GridProps> = ({ grid }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const setGridRef = useGridStore((state) => state.setGridRef);

  // Save the div ref to Zustand on mount
  useEffect(() => {
    if (gridRef.current) {
      setGridRef(gridRef.current);
    }
  }, [setGridRef]);

  return (
    <div ref={gridRef} className="bg-background p-4">
      {grid.map((row, index) => (
        <RowRenderer key={index} row={row} />
      ))}
    </div>
  );
};

export default GridRenderer;