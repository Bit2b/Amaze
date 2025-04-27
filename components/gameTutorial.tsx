import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@radix-ui/react-dialog";

const Key = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-secondary text-sm font-medium shadow-sm sm:h-10 sm:w-10">
    {children}
  </div>
);

//show tutorial only once and make a button on top right corner for tutorial if missed
const GameTutorial = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) setCurrentPage(1);
  };

  const handlePrevious = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () => currentPage < 3 ? setCurrentPage(currentPage + 1) : setIsOpen(false);

  return (
    <div className="flex gap-4">
      {/* <button onClick={() => setIsOpen(true)} aria-label="Open tutorial">
        <Gamepad2Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
      </button> */}

      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogPortal>
          <DialogOverlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <DialogContent className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-2xl -translate-x-1/2 -translate-y-1/2 transform-none rounded-lg border border-border bg-card text-card-foreground shadow-xl sm:p-6">
            <DialogTitle className="text-lg font-semibold sm:text-xl">
              Game Tutorial
            </DialogTitle>

            <div className="mt-4 min-h-[300px] sm:min-h-[400px]">
              {currentPage === 1 && (
                <div className="flex h-full flex-col items-center justify-center space-y-4 p-4 text-center">
                  <h3 className="text-xl font-medium sm:text-2xl">
                    Getting Started
                  </h3>
                  <p className="text-muted-foreground sm:text-lg">
                    Click anywhere on the maze to begin your game. 
                    The maze will become fully visible once you start playing.
                  </p>
                </div>
              )}

              {currentPage === 2 && (
                <div className="flex h-full flex-col items-center justify-center space-y-6 p-4">
                  <h3 className="text-xl font-medium sm:text-2xl">
                    Game Controls
                  </h3>
                  <div className="flex flex-col gap-8 sm:flex-row">
                    <div className="space-y-2">
                      <div className="grid grid-cols-3 gap-1">
                        {/* Arrow keys visualization */}
                        <div className="col-start-2">
                          <Key>↑</Key>
                        </div>
                        <div className="col-start-1">
                          <Key>←</Key>
                        </div>
                        <div className="col-start-2">
                          <Key>↓</Key>
                        </div>
                        <div className="col-start-3">
                          <Key>→</Key>
                        </div>
                      </div>
                      <p className="text-center text-sm text-muted-foreground sm:text-base">
                        Arrow Keys
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="grid grid-cols-3 gap-1">
                        {/* WASD keys visualization */}
                        <div className="col-start-2">
                          <Key>W</Key>
                        </div>
                        <div className="col-start-1">
                          <Key>A</Key>
                        </div>
                        <div className="col-start-2">
                          <Key>S</Key>
                        </div>
                        <div className="col-start-3">
                          <Key>D</Key>
                        </div>
                      </div>
                      <p className="text-center text-sm text-muted-foreground sm:text-base">
                        WASD Keys
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {currentPage === 3 && (
                <div className="flex h-full flex-col items-center justify-center space-y-6 p-4">
                  <h3 className="text-xl font-medium sm:text-2xl">
                    Maze Solutions
                  </h3>
                  <div className="flex flex-col items-center gap-4 sm:flex-row">
                    <Button variant="outline" size="lg" className="sm:text-lg">
                      Solve
                    </Button>
                    <p className="text-center text-muted-foreground sm:text-left sm:text-lg">
                      Use the solve button in the toolbar to reveal the optimal path
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex gap-2">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`h-2 w-8 rounded-full transition-colors ${
                      currentPage === page ? "bg-primary" : "bg-muted"
                    }`}
                    aria-label={`Go to page ${page}`}
                  />
                ))}
              </div>
              
              <div className="flex w-full flex-col-reverse gap-3 sm:w-auto sm:flex-row sm:gap-2">
                <Button
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="sm:px-6 sm:py-2"
                >
                  Skip
                </Button>
                <div className="flex gap-2">
                  {currentPage > 1 && (
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      className="sm:px-6 sm:py-2"
                    >
                      Previous
                    </Button>
                  )}
                  <Button
                    onClick={handleNext}
                    className="sm:px-6 sm:py-2"
                  >
                    {currentPage === 3 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
};

export default GameTutorial;