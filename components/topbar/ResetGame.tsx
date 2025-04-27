import { usePositionStore } from "@/store/gamePositionStore"
import { IterationCwIcon } from "lucide-react"
import { IconButton } from "./icon-button";

const ResetGame = () => {
  const { setCurrentPosition, source } = usePositionStore();
  const onClickHandler = () => {
    setCurrentPosition(source);
  }
  return (
    <IconButton onClick={onClickHandler} tooltip="Reset">
      <IterationCwIcon />
    </IconButton>

  )
}

export default ResetGame