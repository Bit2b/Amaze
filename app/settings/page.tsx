'use client';

import SpeedSlider from "@/components/sliders/SpeedSlider";
import { ThemeColorToggle } from "@/components/sliders/theme-color-toggle";
import { ThemeModeToggle } from "@/components/sliders/theme-mode-toggle";
import CellSizeSlider from "@/components/sliders/CellSizeSlider";
import HeightSlider from "@/components/sliders/HeightSlider";
import WidthSlider from "@/components/sliders/WidthSlider";
import MazeAlgorithmSeeder from "@/components/MazeAlgorithmSeeder";


const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-secondary-2 space-y-4">
      <div className="flex flex-row space-x-4">
        <ThemeColorToggle />
        <ThemeModeToggle />
      </div>
      <SpeedSlider />
      <CellSizeSlider />
      <HeightSlider />
      <WidthSlider />
      <MazeAlgorithmSeeder/>
    </div>
  );
};

export default App;
