"use client";

import { Slider } from "@/components/ui/slider";
import { useDimensionsStore } from "@/store/dimensionsStore";

const CellSizeSlider = () => {
  const { cellSize, setCellSize } = useDimensionsStore();

  return (
    <div className="w-64 p-4">
      <label className="block text-sm font-medium pb-3">Cell Size: {cellSize / 16}</label>
      <Slider
        defaultValue={[cellSize]}
        min={16}
        max={96}
        step={16}
        onValueChange={(value) => setCellSize(value[0])}
      />
    </div>
  );
};

export default CellSizeSlider;
