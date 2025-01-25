import React from "react";
import RowRenderer from "./RowRenderer";

type GridProps = {
  grid: number[][];
};

const GridRenderer: React.FC<GridProps> = ({ grid }) => {
  return (
    <div className="p-4">
      {grid.map((row, index) => (
        <RowRenderer key={index} row={row} />
      ))}
    </div>
  );
};

export default GridRenderer;
