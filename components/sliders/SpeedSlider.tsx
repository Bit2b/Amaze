"use client";

import { Slider } from "@/components/ui/slider";
import { useDimensionsStore } from "@/store/dimensionsStore";

const SpeedSlider = () => {
  const { speed, setSpeed } = useDimensionsStore();

  return (
    <div className="w-64 p-4">
      <label className="block text-sm font-medium pb-3">Speed: {speed / 25}</label>
      <Slider
        defaultValue={[speed]}
        min={25}
        max={500}
        step={25}
        onValueChange={(value) => setSpeed(value[0])}
      />
    </div>
  );
};

export default SpeedSlider;
