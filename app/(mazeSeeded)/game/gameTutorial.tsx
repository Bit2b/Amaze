import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "../../../components/ui/dialog";
import {
  RefreshCw, Waypoints, Undo2,
  GraduationCap, Map, Trophy
} from "lucide-react";
import { useTutorialStore } from "@/store/tutorialStore";
import { Separator } from "../../../components/ui/separator";

const Key = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-secondary text-sm font-medium shadow-sm sm:h-10 sm:w-10">
    {children}
  </div>
);

const GameTutorial = () => {
  const { tutorialSeen, setTutorialSeen } = useTutorialStore();
  const [isOpen, setIsOpen] = useState(!tutorialSeen);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => setIsOpen(!tutorialSeen), [tutorialSeen]);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setCurrentPage(1);
      setTutorialSeen(true);
    }
  };

  const handlePrevious = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () => currentPage < 3 ? setCurrentPage(currentPage + 1) : handleOpenChange(false);

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" />
        <DialogContent className="fixed left-1/2 top-1/2 z-50 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card p-6 shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            <DialogTitle className="text-xl font-bold">
              Maze Game Tutorial
            </DialogTitle>
          </div>
          <Separator />

          {/* Tutorial Content */}
          <div className="mt-4 flex h-80 flex-col overflow-hidden">
            {currentPage === 1 && (
              <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
                <Map className="h-16 w-16 text-primary" />
                <h3 className="text-2xl font-bold">Welcome to the Maze!</h3>
                <p className="text-base text-muted-foreground max-w-md">
                  Embark on an exciting journey through dynamically generated mazes.
                  Click anywhere on the maze to start exploring, and watch the maze unveil itself
                  as you navigate. Your mission: find the optimal path from start to
                  finish in record time!
                </p>
              </div>
            )}

            {currentPage === 2 && (
              <div className="flex flex-1 flex-col items-center justify-around space-y-6">
                <h3 className="text-xl font-bold">Navigation Controls</h3>
                <div className="flex flex-col gap-6 sm:flex-row w-full justify-around">
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-1">
                      <div className="col-start-2"><Key>↑</Key></div>
                      <div className="col-start-1"><Key>←</Key></div>
                      <div className="col-start-2"><Key>↓</Key></div>
                      <div className="col-start-3"><Key>→</Key></div>
                    </div>
                    <p className="text-center text-sm text-muted-foreground font-medium">
                      Arrow Keys
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-1">
                      <div className="col-start-2"><Key>W</Key></div>
                      <div className="col-start-1"><Key>A</Key></div>
                      <div className="col-start-2"><Key>S</Key></div>
                      <div className="col-start-3"><Key>D</Key></div>
                    </div>
                    <p className="text-center text-sm text-muted-foreground font-medium">
                      WASD Controls
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentPage === 3 && (
              <div className="flex flex-1 flex-col items-center justify-center space-y-1">
                <Trophy className="h-12 w-12 text-primary" />
                <h3 className="text-lg font-bold">Game Features</h3>
                <div className="w-full max-w-md space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                    <RefreshCw className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Generate New Maze</p>
                      <p className="text-xs text-muted-foreground">Fresh challenges await</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                    <Waypoints className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Auto-Solve</p>
                      <p className="text-xs text-muted-foreground">Reveal optimal path</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                    <Undo2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Reset Game</p>
                      <p className="text-xs text-muted-foreground">Start fresh anytime</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Pagination and Action Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex gap-2">
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`h-2 w-6 rounded-full transition-all ${currentPage === page ? "bg-primary" : "bg-muted"
                    } hover:bg-primary/80`}
                  aria-label={`Page ${page}`}
                />
              ))}
            </div>

            <div className="flex w-full sm:w-auto gap-2">
              <Button
                variant='outline'
                onClick={() => handleOpenChange(false)}
                className="text-sm cursor-pointer"
              >
                Skip
              </Button>
              {currentPage > 1 && (
                <Button
                  variant='secondary'
                  onClick={handlePrevious}
                  className="text-sm cursor-pointer"
                >
                  Back
                </Button>
              )}
              <Button
                onClick={handleNext}
                className="bg-primary text-sm cursor-pointer hover:bg-primary/90"
              >
                {currentPage === 3 ? "Let's Play!" : "Next"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default GameTutorial;