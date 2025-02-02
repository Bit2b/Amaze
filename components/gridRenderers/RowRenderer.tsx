import React, { memo } from "react";
import CellRenderer from "./CellRenderer";

type RowProps = {
  row: number[];
};

const RowRenderer: React.FC<RowProps> = memo(({ row }) => {
  return (
    <div className="flex">
      {row.map((cell, index) => (
        <CellRenderer key={index} value={cell} />
      ))}
    </div>
  );
});

RowRenderer.displayName = "RowRenderer";

export default RowRenderer;
