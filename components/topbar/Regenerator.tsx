import { useState, useEffect } from "react";
import MazeAlgorithmSeeder from "../MazeAlgorithmSeeder";
import { RefreshCw } from "lucide-react";
import { IconButton } from "./icon-button";

const Regenerator = () => {
    const [shouldRun, setShouldRun] = useState(false);

    const playHandler = () => {
        setShouldRun(true);
    };

    useEffect(() => {
        if (shouldRun) {
            setShouldRun(false);
        }
    }, [shouldRun]);

    return (
        <div className="relative">
            <IconButton onClick={playHandler} tooltip="Regenerate">
                <RefreshCw />
            </IconButton>
            {shouldRun && <MazeAlgorithmSeeder />}
        </div>

    );
};

export default Regenerator;
