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
    const initial = value & (1 << 6) ? "bg-purple-700" : "";
    const active = value & (1 << 7) ? "bg-violet-700" : "";
    const active2 = value & (1 << 8) ? "bg-indigo-700" : "";
    const completed = value & (1 << 9) ? "bg-blue-700" : "";
    let { cellSize } = useDimensionsStore();

    return (
        <div
            style={{ width: cellSize, height: cellSize }}
            className={`flex items-center justify-center ${top} ${right} ${bottom} ${left} ${initial} ${active} ${active2} ${completed} `}
        ></div>
    );
});

export default PathCellRenderer;