import { useMazeChangerLock } from "@/store/mazeChangerLock";
import { LockIcon, LockOpenIcon } from "lucide-react";

const MazeChanger = () => {
  const { isLocked, toggleisLocked } = useMazeChangerLock();
  return (
    <div className="relative group">
      <button onClick={() => toggleisLocked()} className="p-2 hover:bg-accent rounded-md transition-colors">
        {
          isLocked ?
            <LockIcon className="h-5 w-5 text-primary" /> :
            <LockOpenIcon className="h-5 w-5 text-primary" />
        }
      </button>
      <span className="absolute left-1/2 -translate-x-1/2 top-10 opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground text-sm px-2 py-1 rounded-lg shadow-md transition-opacity duration-300 pointer-events-none">
        {
          isLocked ? 'Unlock' : 'Lock'
        }
      </span>
    </div>
  );
};

export default MazeChanger;
