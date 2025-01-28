import { Slider } from "@/components/ui/slider";
import { useDimensionsStore } from "@/store/dimensionsStore";

const HeightSlider = () => {
    const { height, setHeight } = useDimensionsStore();

    return (
        <div className="w-64 p-4">
            <label className="block text-sm font-medium pb-3">height: {height}</label>
            <Slider
                defaultValue={[height]}
                min={1}
                max={50}
                step={1}
                onValueChange={(value) => setHeight(value[0])}
            />
        </div>
    );
};

export default HeightSlider;
