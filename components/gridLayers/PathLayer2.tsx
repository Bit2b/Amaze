"use client";

import { useDimensionsStore } from "@/store/dimensionsStore";
import { Cell } from "@/types";
import { useEffect, useRef } from "react";

interface PathLayerProps {
  path: Cell[];
  currentIndex: number;
}

const PathLayer: React.FC<PathLayerProps> = ({ path, currentIndex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { height, width, cellSize } = useDimensionsStore();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width * cellSize;
    canvas.height = height * cellSize;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const fillColor = "#F00";
    ctx.strokeStyle = fillColor;
    ctx.lineWidth = 2;
    ctx.setLineDash([5,5])

    for (let i = 0; i < currentIndex; i++) {
      const currentCell = path[i];
      const nextCell = path[i + 1];

      if (nextCell) {
        const startX = currentCell.y * cellSize + cellSize / 2;
        const startY = currentCell.x * cellSize + cellSize / 2;
        const endX = nextCell.y * cellSize + cellSize / 2;
        const endY = nextCell.x * cellSize + cellSize / 2;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
    }
  }, [path, currentIndex, height, width, cellSize]);

  return <canvas ref={canvasRef} />;
};

export default PathLayer;