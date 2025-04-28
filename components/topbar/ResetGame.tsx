import { usePositionStore } from "@/store/gamePositionStore"
import { IterationCwIcon } from "lucide-react"
import { IconButton } from "./icon-button";
import { useGameStore } from "@/store/gameStore";

const ResetGame = () => {
  const { setCurrentPosition, source } = usePositionStore();
  const { gameTries, setGameTime, setGameTries } = useGameStore();
  const onClickHandler = () => {
    setCurrentPosition(source);
    setGameTries(gameTries + 1);
    setGameTime(0);
  }
  return (
    <IconButton onClick={onClickHandler} tooltip="Reset">
      <IterationCwIcon />
    </IconButton>
  )
}

export default ResetGame