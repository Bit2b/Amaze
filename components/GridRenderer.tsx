import CellRenderer from "./gridRenderers/CellRenderer";
import DownloadableGridWrapper from "./DownloadableGridWrapper";

type GridProps = {
  grid: number[][];
};


const GridRenderer: React.FC<GridProps> = ({ grid }) => {
  return (
    <DownloadableGridWrapper>
      <div className="bg-background p-4 flex flex-col items-center">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, cellIndex) => (
              <CellRenderer key={cellIndex} value={cell} />
            ))}
          </div>
        ))}
      </div>
    </DownloadableGridWrapper>
  );
};

export default GridRenderer;