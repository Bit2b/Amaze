import { GamepadIcon } from "lucide-react";
import { IconButton } from "./icon-button";

const GoBack = () => {
    return (
        <IconButton onClick={() => window.history.back()} tooltip="Go Back">
            <GamepadIcon />
        </IconButton>

    );
};

export default GoBack;
