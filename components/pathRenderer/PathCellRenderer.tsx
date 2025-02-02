import { useDimensionsStore } from "@/store/dimensionsStore";
import React, { memo } from "react";

type CellProps = {
    value: number;
};

const PathCellRenderer: React.FC<CellProps> = memo(({ value }) => {
    const top = value & (1 << 0) ? "border-t-2 border-primary" : "";
    const right = value & (1 << 1) ? "border-r-2 border-primary" : "";
    const bottom = value & (1 << 2) ? "border-b-2 border-primary" : "";
    const left = value & (1 << 3) ? "border-l-2 border-primary" : "";
    const player = value & (1 << 4) ? "bg-chart-2" : "";
    const destination = value & (1 << 5) ? "bg-chart-5" : "";
    const initial = value & (1 << 6) ? "bg-purple-700" : "";
    const active = value & (1 << 7) ? "bg-violet-700" : "";
    const active2 = value & (1 << 8) ? "bg-indigo-700" : "";
    const completed = value & (1 << 9) ? "bg-blue-700" : "";
    const { cellSize } = useDimensionsStore();

    return (
        <div
            style={{ width: cellSize, height: cellSize }}
            className={`flex items-center justify-center ${top} ${right} ${bottom} ${left} ${initial} ${active} ${active2} ${completed} ${player} ${destination}`}
        ></div>
    );
});

PathCellRenderer.displayName = "PathCellRenderer";

export default PathCellRenderer;