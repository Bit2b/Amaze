import { useEffect, useRef } from "react";
import { useGridStore } from "@/store/downloadStore";
import PathRowRenderer from "./pathRenderer/PathRowRenderer";

type GridProps = {
  grid: number[][];
};


const PathRenderer: React.FC<GridProps> = ({ grid }) => {
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
        <PathRowRenderer key={index} row={row} />
      ))}
    </div>
  );
};

export default PathRenderer;