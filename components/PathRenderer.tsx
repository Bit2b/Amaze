import { useEffect, useRef } from "react";
import { useDownloadGridStore } from "@/store/downloadStore";
import PathRowRenderer from "./pathRenderer/PathRowRenderer";

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
    <div ref={gridRef} className="bg-background p-4">
      {grid.map((row, index) => (
        <PathRowRenderer key={index} row={row} />
      ))}
    </div>
  );
};

export default PathRenderer;