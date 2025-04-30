import { Eye, EyeClosed } from "lucide-react";
import { IconButton } from "./icon-button";
import { useShowHideStore } from "@/store/showHideStore";

const ShowHideEmptyCell: React.FC = () => {
    const { showEmptyCell, toggleShowEmptyCell } = useShowHideStore();

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
