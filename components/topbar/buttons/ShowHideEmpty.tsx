import { useShowEmptyCellStore } from "@/store/showEmptyCellStore";
import { Eye, EyeOff } from "lucide-react";
import type { FC } from "react";

const ShowHideEmptyCell: FC = () => {
    const { showEmptyCell, toggleShowEmptyCell } = useShowEmptyCellStore();

    return (
        <div className="relative group">
            <button
                onClick={() => toggleShowEmptyCell()}
                aria-label={showEmptyCell ? "Hide Cell" : "Show Cell"}
                className="p-1 hover:bg-accent rounded-md transition-colors"
            >
                {showEmptyCell ? (
                    <EyeOff className="h-6 w-6 text-primary" />
                ) : (
                    <Eye className="h-6 w-6 text-primary" />
                )}
            </button>
            <span className="absolute left-1/2 -translate-x-1/2 top-10 opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground text-sm px-2 py-1 rounded-lg shadow-md transition-opacity duration-300 pointer-events-none">
                {showEmptyCell ? "Hide Empty Cells" : "Show Empty Cells"}
            </span>
        </div>
    );
};

export default ShowHideEmptyCell;
