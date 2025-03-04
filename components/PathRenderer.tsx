import DownloadableGridWrapper from "./DownloadableGridWrapper";
import PathCellRenderer from "./pathRenderer/PathCellRenderer";

type GridProps = {
  grid: number[][];
};

const PathRenderer: React.FC<GridProps> = ({ grid }) => {
  return (
    <DownloadableGridWrapper>
      <div className="bg-background p-4 flex flex-col items-center">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, cellIndex) => (
              <PathCellRenderer key={cellIndex} value={cell} />
            ))}
          </div>
        ))}
      </div>
    </DownloadableGridWrapper>
  );
};

export default PathRenderer;