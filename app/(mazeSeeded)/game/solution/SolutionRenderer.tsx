import DownloadableGridWrapper from "@/components/DownloadableGridWrapper";
import GameLayer from "@/components/gridLayers/GameLayer";
import GridLayer from "@/components/gridLayers/GridLayer";
import PathLayer from "@/components/gridLayers/PathLayer";
import { Cell } from "@/types";
// import PathLayer2 from "./gridLayers/PathLayer2";

type GridProps = {
  path: Cell[];
  currentIndex: number;
};

const SolutionRenderer: React.FC<GridProps> = ({ path, currentIndex }) => {
  // Handle cases where path is empty to prevent errors
  const source = path.length > 0 ? path[0] : null;
  const destination = path.length > 0 ? path[path.length - 1] : null;

  return (
    <DownloadableGridWrapper>
      <div className="bg-background flex flex-col items-center">
        <div className="p-8 bg-primary/10 dark:bg-sidebar flex flex-col items-center rounded-md">
          <div className="relative bg-background">
            {
              source && destination && (
                <GameLayer source={source} destination={destination} />
              )
            }
            {
              path.length > 0 && (
                <div className="absolute inset-0">
                  <PathLayer path={path} currentIndex={currentIndex} />
                </div>
              )
            }

            <div className="absolute inset-0 pointer-events-none">
              <GridLayer />
            </div>
          </div>
        </div>
      </div>
    </DownloadableGridWrapper>
  );
};

export default SolutionRenderer;
