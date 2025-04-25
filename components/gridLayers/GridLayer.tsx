import { useResultStore } from "@/store/resultStore";
import CellRenderer from "./CellRenderer";
import { useDimensionsStore } from "@/store/dimensionsStore";
import { mazeChangeWrapper } from "@/algorithms/mazeChanger/mazeChangerWrapper";
import React from "react";
import { useMazeChangerLock } from "@/store/mazeChangerLock";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

type GridLayerProps = {
  grid?: number[][];
};

const GridLayer: React.FC<GridLayerProps> = ({ grid }) => {
  const result = useResultStore();
  const { height, width } = useDimensionsStore();
  const { isLocked } = useMazeChangerLock();
  const pathname = usePathname();

  // Default grid if not provided
  const activeGrid = grid ?? result.mazeResult.maze;

  const playHandler = (row: number, col: number) => {
    if (isLocked) return;
    if (pathname !== '/generate') return;

    const newMazeResult = mazeChangeWrapper(result.mazeResult.maze, height, width, row, col);
    if (newMazeResult.success) {
      result.setMazeResult({
        maze: newMazeResult.maze,
        mazeSteps: result.mazeResult.mazeSteps,
        isConstructive: result.mazeResult.isConstructive,
      });

      toast("Updated Successfully", {
        description: "Maze Updated Successfully",
      });
    } else {
      toast("Update Failed", {
        description: "This cell could not be changed choose another cell",
      });
    }
  };


  return (
    <div>
      {activeGrid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} onClick={() => playHandler(rowIndex, cellIndex)}>
              <CellRenderer value={cell} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GridLayer;
