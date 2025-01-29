import { Slider } from "@/components/ui/slider";
import { useDimensionsStore } from "@/store/dimensionsStore";

const CellSizeSlider = () => {
  const { cellSize, setCellSize} = useDimensionsStore(); 

  return (
    <div className="w-64 p-4">
      <label className="block text-sm font-medium pb-3">Cell Size: {cellSize/4}</label>
      <Slider
        defaultValue={[cellSize]}
        min={4}
        max={24}
        step={4}
        onValueChange={(value) => setCellSize(value[0])} 
      />
    </div>
  );
};

export default CellSizeSlider;
