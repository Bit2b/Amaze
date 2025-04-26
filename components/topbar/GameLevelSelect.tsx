import { useState, useEffect } from "react";
import { usePositionStore } from "@/store/gamePositionStore";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select";
import { GameLevel } from "@/types";
import { findSourceAndDestination } from "@/utils/gameUtils";
import { useDimensionsStore } from "@/store/dimensionsStore";
import { useResultStore } from "@/store/resultStore";

const GAME_LEVEL_STORAGE_KEY = 'selectedGameLevel';

export default function GameLevelSelect() {
    const GameLevelOptions = Object.values(GameLevel);
    const { setSourceAndDestination, setCurrentPosition } = usePositionStore();
    const { height, width } = useDimensionsStore();
    const maze = useResultStore((state) => state.mazeResult.maze);

    const [currentGameLevel, setCurrentGameLevel] = useState<GameLevel>(GameLevel.EASY);

    useEffect(() => {
        const savedLevel = localStorage.getItem(GAME_LEVEL_STORAGE_KEY) as GameLevel;
        const levelToUse = (savedLevel && GameLevelOptions.includes(savedLevel)) ? savedLevel : GameLevel.EASY;
        setCurrentGameLevel(levelToUse);
        const { source, destination } = findSourceAndDestination(height, width, levelToUse, maze);
        setSourceAndDestination(source, destination);
        setCurrentPosition(source);
    }, [height, width, maze, setSourceAndDestination, setCurrentPosition]);

    const handleLevelChange = (value: GameLevel) => {
        setCurrentGameLevel(value);
        localStorage.setItem(GAME_LEVEL_STORAGE_KEY, value);
        const { source, destination } = findSourceAndDestination(height, width, value, maze);
        setSourceAndDestination(source, destination);
        setCurrentPosition(source);
    };

    return (
        <Select
            value={currentGameLevel}
            onValueChange={handleLevelChange}
        >
            <SelectTrigger className="w-[150px] text-foreground border-sm border-primary">
                <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className="text-xs text-muted-foreground px-2">Game Levels</SelectLabel>
                    {GameLevelOptions.map((level) => (
                        <SelectItem key={level} value={level}>
                            {level}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
