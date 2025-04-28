import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "./ui/dialog";
import {
  Timer, Grid, Award, Trophy, GitBranch, Footprints,
  Gauge, Map, RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "./ui/separator";

// Import the necessary stores
import { useAlgorithmStore } from "@/store/algorithmStore";
import { useDimensionsStore } from "@/store/dimensionsStore";
import { usePositionStore } from "@/store/gamePositionStore";
import { useGameStore } from "@/store/gameStore";
import { useResultStore } from "@/store/resultStore";
import pathBfs from "@/algorithms/mazeSolver/pathBfs";
import { GameLevel } from "@/types";

interface ScoreCardProps {
  stepsTaken: number;
  visitedCells: number;
}

// Helper component props types
interface ScoreItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

interface ScoreItemWithComparisonProps extends ScoreItemProps {
  comparison: number;
  comparisonLabel: string;
}

// Format time to show seconds and milliseconds
const formatTime = (timeMs: number): string => {
  const seconds = Math.floor(timeMs / 100);
  const milliseconds = timeMs % 100;
  return `${seconds}.${milliseconds.toString().padStart(3, '0')}s`;
};

const ScoreCard: React.FC<ScoreCardProps> = ({ stepsTaken, visitedCells }) => {
  // Get data from stores
  const { gameTime, gameTries, resetGame } = useGameStore();
  const { currentAlgorithm } = useAlgorithmStore();
  const { height, width } = useDimensionsStore();
  const maze = useResultStore((state) => state.mazeResult.maze);
  const [isOpen, setIsOpen] = React.useState(true);
  const { setCurrentPosition, source, destination } = usePositionStore();
  const [gameLevel, setGameLevel] = useState(GameLevel.NORMAL);

  useEffect(() => {
    const GameLevelOptions = Object.values(GameLevel);
    const savedLevel = localStorage.getItem('selectedGameLevel') as GameLevel;
    
    setGameLevel((savedLevel && GameLevelOptions.includes(savedLevel)) 
      ? savedLevel 
      : GameLevel.EASY);
  }, []);

  // Calculate optimal path
  const optimalResults = React.useMemo(() => {
    if (!maze || !source || !destination) {
      return { optimalSteps: 0, optimalVisitedCells: 0 };
    }

    const optimalPath = pathBfs(maze, source, destination);
    const optimalVisitedCells = optimalPath.length;
    const optimalSteps = optimalVisitedCells - 1;

    return { optimalSteps, optimalVisitedCells };
  }, [maze, source, destination]);

  const { optimalSteps, optimalVisitedCells } = optimalResults;

  // Calculate scores
  const efficiency = optimalSteps > 0
    ? Math.min(100, (optimalSteps / stepsTaken) * 100)
    : 0;

  const expectedTime = optimalSteps * 500; // 500ms per optimal step
  const timeRating = Math.min(100, (expectedTime / gameTime) * 100);
  const overallScore = Math.round((efficiency * 0.6) + (timeRating * 0.4));

  // Get star rating
  const getStarRating = (): string => {
    if (overallScore >= 90) return "Excellent!";
    if (overallScore >= 75) return "Great!";
    if (overallScore >= 60) return "Good";
    if (overallScore >= 40) return "Fair";
    return "Keep practicing!";
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  const handlePlayAgain = (): void => {
    setIsOpen(false);
    resetGame();
    setCurrentPosition(source);
    // Game reset logic would go here
  };

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />
        <DialogContent className="fixed left-1/2 top-1/2 z-50 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card p-6 shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3">
            <Trophy className="h-8 w-8 text-primary" />
            <DialogTitle className="text-xl font-bold">
              Game Results
            </DialogTitle>
          </div>
          <Separator className="my-4" />

          {/* Overall Score */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="relative h-32 w-32">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold">{overallScore}</span>
              </div>
              <svg className="h-32 w-32 -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  strokeWidth="16"
                  stroke="currentColor"
                  fill="transparent"
                  className="text-muted/20"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  strokeWidth="16"
                  stroke="currentColor"
                  fill="transparent"
                  strokeDasharray={352}
                  strokeDashoffset={352 - (352 * overallScore) / 100}
                  className="text-primary"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mt-2">{getStarRating()}</h3>
          </div>

          {/* Score Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Left Column */}
            <div className="space-y-4">
              <ScoreItem
                icon={<Timer className="h-5 w-5 text-primary" />}
                label="Time Taken"
                value={formatTime(gameTime)}
              />
              <ScoreItem
                icon={<GitBranch className="h-5 w-5 text-primary" />}
                label="Algorithm"
                value={currentAlgorithm}
              />
              <ScoreItem
                icon={<Gauge className="h-5 w-5 text-primary" />}
                label="Level"
                value={gameLevel}
              />
              <ScoreItem
                icon={<RefreshCw className="h-5 w-5 text-primary" />}
                label="Tries"
                value={gameTries}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <ScoreItem
                icon={<Grid className="h-5 w-5 text-primary" />}
                label="Maze Size"
                value={`${height} x ${width}`}
              />
              <ScoreItemWithComparison
                icon={<Footprints className="h-5 w-5 text-primary" />}
                label="Steps"
                value={stepsTaken}
                comparison={optimalSteps}
                comparisonLabel="optimal"
              />
              <ScoreItemWithComparison
                icon={<Map className="h-5 w-5 text-primary" />}
                label="Cells Visited"
                value={visitedCells}
                comparison={optimalVisitedCells}
                comparisonLabel="optimal"
              />
              <ScoreItem
                icon={<Award className="h-5 w-5 text-primary" />}
                label="Efficiency"
                value={`${Math.round(efficiency)}%`}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="outline" onClick={handleClose}>
              Close
            </Button>
            <Button onClick={handlePlayAgain} className="bg-primary hover:bg-primary/90">
              Play Again
            </Button>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

// Helper components for cleaner JSX
const ScoreItem: React.FC<ScoreItemProps> = ({ icon, label, value }) => (
  <div className="flex items-center gap-3">
    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);

const ScoreItemWithComparison: React.FC<ScoreItemWithComparisonProps> = ({
  icon,
  label,
  value,
  comparison,
  comparisonLabel
}) => (
  <div className="flex items-center gap-3">
    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
      {icon}
    </div>
    <div className="flex-1">
      <div className="flex justify-between">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-sm">{value} / {comparison} {comparisonLabel}</p>
      </div>
    </div>
  </div>
);

export default ScoreCard;