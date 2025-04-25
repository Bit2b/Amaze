'use client';

import { useDimensionsStore } from '@/store/dimensionsStore';
import { Cell } from '@/types';
import { useEffect, useRef } from 'react';

interface GameLayerProps {
  source: Cell;
  destination: Cell;
}

const GameLayer: React.FC<GameLayerProps> = ({ source, destination }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { height, width, cellSize } = useDimensionsStore();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width * cellSize;
    canvas.height = height * cellSize;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //source
    ctx.fillStyle = '#34d399';
    ctx.fillRect(source.y * cellSize, source.x * cellSize, cellSize, cellSize);

    //destination
    ctx.fillStyle = '#fb7185';
    ctx.fillRect(destination.y * cellSize, destination.x * cellSize, cellSize, cellSize);

  }, [source, destination, height, width, cellSize]);

  return <canvas ref={canvasRef} />;
};

export default GameLayer;