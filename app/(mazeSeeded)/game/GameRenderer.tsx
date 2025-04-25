import DownloadableGridWrapper from "@/components/DownloadableGridWrapper";
import GameLayer from "@/components/gridLayers/GameLayer";
import GridLayer from "@/components/gridLayers/GridLayer";
import { Cell } from "@/types";

type GridProps = {
  grid: number[][];
  location: Cell;
  destination: Cell;
};

const GameRenderer: React.FC<GridProps> = ({ location, destination }) => {
  return (
    <DownloadableGridWrapper>
      <div
        tabIndex={0}
        className="flex flex-col bg-background items-center blur-sm focus:blur-none transition duration-300 focus:outline-none"
      >
        <div className="p-8 bg-primary/10 dark:bg-sidebar flex flex-col items-center rounded-md">
          <div className="relative bg-background">
            <GridLayer />
            <div className="absolute inset-0 pointer-events-none">
              <GameLayer source={location} destination={destination} />
            </div>
          </div>
        </div>
      </div>
    </DownloadableGridWrapper>
  );
};

export default GameRenderer;
