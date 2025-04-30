import { Eye, EyeClosed } from "lucide-react";
import { IconButton } from "./icon-button";
import { useShowHideStore } from "@/store/showHideStore";

const ShowHideVisitedCell: React.FC = () => {
    const { showVisitedCell, toggleShowVisitedCell } = useShowHideStore();

    return (
        <IconButton
            onClick={toggleShowVisitedCell}
            tooltip={showVisitedCell ? "Hide Visited cells" : "Show Visited cells"}
        >
            {showVisitedCell ? <Eye /> : <EyeClosed />}
        </IconButton>
    );
};

export default ShowHideVisitedCell;
