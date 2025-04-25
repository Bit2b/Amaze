import DownloadableGridWrapper from "./DownloadableGridWrapper";
import GridLayer from "./gridLayers/GridLayer";

type GridProps = {
  grid?: number[][];
};

const GenerateRenderer: React.FC<GridProps> = ({ grid }) => {
  return (
    <DownloadableGridWrapper>
      <div className="flex flex-col items-center bg-background">
        <div className="p-8 bg-primary/10 dark:bg-sidebar flex flex-col items-center rounded-md">
          <div className="bg-background">
            <GridLayer grid={grid} />
          </ div>
        </div>
      </div>
    </DownloadableGridWrapper>
  );
};

export default GenerateRenderer;
