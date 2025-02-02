import React, { memo } from "react";
import PathCellRenderer from "./PathCellRenderer";

type RowProps = {
  row: number[];
};

const PathRowRenderer: React.FC<RowProps> = memo(({ row }) => {
  return (
    <div className="flex">
      {row.map((cell, index) => (
        <PathCellRenderer key={index} value={cell} />
      ))}
    </div>
  );
});

PathRowRenderer.displayName = "PathRowRenderer";

export default PathRowRenderer;
