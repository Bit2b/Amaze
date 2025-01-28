'use client';

import SpeedSlider from "@/components/sliders/SpeedSlider";
import { ThemeColorToggle } from "@/components/sliders/theme-color-toggle";
import { ThemeModeToggle } from "@/components/sliders/theme-mode-toggle";
import CellSizeSlider from "@/components/sliders/CellSizeSlider";
import HeightSlider from "@/components/sliders/HeightSlider";
import WidthSlider from "@/components/sliders/WidthSlider";


const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-secondary-2 space-y-4">
      <div className="flex flex-row space-x-8">
        <ThemeColorToggle />
        <ThemeModeToggle />
      </div>
      <SpeedSlider />
      <CellSizeSlider />
      <HeightSlider />
      <WidthSlider />
    </div>
  );
};

export default App;
