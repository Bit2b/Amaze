import { useMazeChangerLock } from "@/store/mazeChangerLock";
import { LockIcon, LockOpenIcon } from "lucide-react";
import { IconButton } from "./icon-button";

const MazeChanger = () => {
  const { isLocked, toggleisLocked } = useMazeChangerLock();
  return (
    <IconButton onClick={toggleisLocked} tooltip={isLocked ? 'Unlock' : 'Lock'}>
      {isLocked ? <LockIcon /> : <LockOpenIcon />}
    </IconButton>

  );
};

export default MazeChanger;
