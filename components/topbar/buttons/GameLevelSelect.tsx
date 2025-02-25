import { useGameLevelStore } from "@/store/gameLevelStore";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../ui/select";
import { GameLevel } from "@/types";
import { SelectLabel } from "@radix-ui/react-select";

export default function GameLevelSelect() {
    const { currentGameLevel, gameLevels, setCurrentGameLevel } = useGameLevelStore();

    return (
        <Select
            value={currentGameLevel}
            onValueChange={(value: GameLevel) => setCurrentGameLevel(value)}
        >
            <SelectTrigger className="w-[150px] text-foreground border-sm border-primary">
                <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className="text-xs text-muted-foreground px-2">Game Levels</SelectLabel>
                    {gameLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                            {level}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}