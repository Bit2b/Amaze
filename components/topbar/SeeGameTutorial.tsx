import { GraduationCapIcon } from "lucide-react";
import { IconButton } from "./icon-button";
import { useTutorialStore } from "@/store/tutorialStore";

const SeeGameTutorial = () => {
  const { setTutorialSeen } = useTutorialStore();
  return (
    <IconButton onClick={() => setTutorialSeen(false)} tooltip="Tutorial">
      <GraduationCapIcon />
    </IconButton>
  );
};

export default SeeGameTutorial;
