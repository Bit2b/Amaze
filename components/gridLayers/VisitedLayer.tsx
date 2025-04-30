import { useDimensionsStore } from "@/store/dimensionsStore";
import { useGameStore } from "@/store/gameStore";
import { useShowHideStore } from "@/store/showHideStore";

type VisitedLayerProps = {
  visited: boolean[][];
};

const VisitedLayer: React.FC<VisitedLayerProps> = ({ visited }) => {
  const { gameStatus } = useGameStore();
  const { showVisitedCell } = useShowHideStore();
  return (
    <div>
      {visited.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((isVisited, cellIndex) => (
            <div key={cellIndex}>
              {/* if game not started it does not required to print the visited cells */}
              <VisitedCellRenderer value={gameStatus === 'Ready' || showVisitedCell === false ? false : isVisited} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const VisitedCellRenderer = (({ value }: { value: boolean }) => {
  const { cellSize } = useDimensionsStore();

  return (
    <div
      style={{ width: cellSize, height: cellSize }}
      className={value ? "bg-primary/40" : ""}
    />
  );
});

export default VisitedLayer;
