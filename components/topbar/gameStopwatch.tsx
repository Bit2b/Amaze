'use client';

import { useEffect, useRef } from 'react';
import { Tooltip, TooltipTrigger, TooltipContent } from '../ui/tooltip';
import { Button } from '../ui/button';
import { useGameStore } from '@/store/gameStore';

export default function Stopwatch() {
  const { gameTime, setGameTime, gameStatus } = useGameStore();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    return clearTimer;
  }, []);

  useEffect(() => {
    if (gameStatus === 'Playing') {
      startTimeRef.current = Date.now() - gameTime * 10;
      intervalRef.current = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - (startTimeRef.current || 0)) / 10);
        setGameTime(elapsedTime);
      }, 10);
    } else {
      clearTimer();
    }

    return clearTimer;
  }, [gameStatus, setGameTime]);

  const formatTime = (centiseconds: number) => {
    const totalSeconds = Math.floor(centiseconds / 100);
    const cs = centiseconds % 100;
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const pad = (n: number, places: number = 2) => n.toString().padStart(places, '0');

    if (hrs > 0) {
      return `${pad(hrs)}:${pad(mins)}:${pad(secs)}.${pad(cs)}`;
    } else if (mins > 0) {
      return `${pad(mins)}:${pad(secs)}.${pad(cs)}`;
    } else {
      return `${secs}.${pad(cs)}s`;
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            aria-label="Stopwatch Timer"
            variant="ghost"
            size="default"
            className="cursor-default text-primary"
          >
            <div className="text-sm font-bold">{formatTime(gameTime)}</div>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="text-accent-foreground bg-accent">
          Elapsed Game Time
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
