"use client";

import { Slider } from "@/components/ui/slider";
import { useDimensionsStore } from "@/store/dimensionsStore";

const WidthSlider = () => {
    const { width, setWidth } = useDimensionsStore();

    return (
        <div className="w-64 p-4">
            <label className="block text-sm font-medium pb-3">width: {width}</label>
            <Slider
                defaultValue={[width]}
                min={1}
                max={50}
                step={1}
                onValueChange={(value) => setWidth(value[0])}
            />
        </div>
    );
};

export default WidthSlider;
