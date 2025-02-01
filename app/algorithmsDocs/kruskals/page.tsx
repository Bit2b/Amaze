export default function KruskalMazePage() {
  return (
    <div className="flex flex-col h-screen justify-center text-foreground p-8">
      <div className="max-w-3xl mx-auto bg-card-4 text-card-foreground p-6 rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Kruskal's Algorithm for Maze Generation</h1>

        <p className="text-lg mb-6 p-4 overflow-hidden">
          Kruskal's algorithm for maze generation works by treating each cell in the maze as a separate set and systematically
          removing walls (edges) between adjacent cells to connect them, ensuring no cycles are formed.
          The process starts with a grid filled with walls and a list of possible edges (walls between adjacent cells).
          These edges are shuffled randomly, and then each edge is considered; if the two cells it connects belong to different sets,
          the wall is removed, and the two sets are merged. This continues until all cells are connected into one single set,
          forming a maze with no loops and a random, unique structure.
          The use of the union-find data structure ensures that the maze remains free of cycles while allowing efficient merging of sets.
        </p>
      </div>
    </div>
  );
}
