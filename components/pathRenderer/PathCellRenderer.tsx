import { useDimensionsStore } from "@/store/dimensionsStore";
import React, { memo } from "react";

type CellProps = {
    value: number;
};

const PathCellRenderer: React.FC<CellProps> = memo(({ value }) => {
    const top = value & 1 ? "border-t-2 border-primary" : "";
    const right = value & 2 ? "border-r-2 border-primary" : "";
    const bottom = value & 4 ? "border-b-2 border-primary" : "";
    const left = value & 8 ? "border-l-2 border-primary" : "";
    const path = value & 64 ? "bg-blue-500" : "";
    let { cellSize } = useDimensionsStore();

    return (
        <div
            style={{ width: cellSize, height: cellSize }}
            className={`flex items-center justify-center ${top} ${right} ${bottom} ${left} ${path} `}
        ></div>
    );
});

export default PathCellRenderer;