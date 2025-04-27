import { useShowEmptyCellStore } from "@/store/showEmptyCellStore";
import { Eye, EyeClosed } from "lucide-react";
import type { FC } from "react";
import { IconButton } from "./icon-button";

const ShowHideEmptyCell: FC = () => {
    const { showEmptyCell, toggleShowEmptyCell } = useShowEmptyCellStore();

    return (
        <IconButton
            onClick={toggleShowEmptyCell}
            tooltip={showEmptyCell ? "Hide empty cells" : "Show empty cells"}
        >
            {showEmptyCell ? <EyeClosed /> : <Eye />}
        </IconButton>
    );
};

export default ShowHideEmptyCell;
