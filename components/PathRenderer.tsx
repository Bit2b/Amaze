import { useEffect, useRef } from "react";
import { useDownloadGridStore } from "@/store/downloadStore";
import PathCellRenderer from "./pathRenderer/PathCellRenderer";

type GridProps = {
  grid: number[][];
};


const PathRenderer: React.FC<GridProps> = ({ grid }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const setDownloadGridRef = useDownloadGridStore((state) => state.setDownloadGridRef);

  // Save the div ref to Zustand on mount
  useEffect(() => {
    if (gridRef.current) {
      setDownloadGridRef(gridRef.current);
    }
  }, [setDownloadGridRef]);

  return (
    <div ref={gridRef} className="bg-background p-4 flex flex-col items-center">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, cellIndex) => (
            <PathCellRenderer key={cellIndex} value={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PathRenderer;