"use client";

import { useDimensionsStore } from "@/store/dimensionsStore";
import { Cell } from "@/types";
import { useEffect, useRef } from "react";

interface PathLayerProps {
  path: Cell[];
  currentIndex: number;
}

const PathLayer2: React.FC<PathLayerProps> = ({ path, currentIndex }) => {
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

    const first = "#7e22ce";
    const second = "#6d28d9";
    const third = "#4338ca";
    const defaultColor = "#1d4ed8";

    for (let i = 0; i < currentIndex; i++) {
      if (i === currentIndex - 1) {
        ctx.fillStyle = first;
      } else if (i === currentIndex - 2) {
        ctx.fillStyle = second;
      } else if (i === currentIndex - 3) {
        ctx.fillStyle = third;
      } else {
        ctx.fillStyle = defaultColor;
      }

      ctx.fillRect(path[i].y * cellSize, path[i].x * cellSize, cellSize, cellSize);
    }
  }, [path, currentIndex, height, width, cellSize]);

  return <canvas ref={canvasRef} />;
};

export default PathLayer2;
