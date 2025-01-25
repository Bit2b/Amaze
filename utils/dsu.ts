class DisjointSetUnion {
  height: number;
  width: number;
  parent: { [key: string]: string };

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
    this.parent = {};

    // Initialize each cell to be its own parent (disjoint sets)
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const key = `${i},${j}`;
        this.parent[key] = key;
      }
    }
  }

  // Find the root (representative) of the set for a given element
  findSet(element: string): string {
    if (this.parent[element] !== element) {
      this.parent[element] = this.findSet(this.parent[element]);
    }
    return this.parent[element];
  }

  // Union of two sets (sets become one)
  unionSet(edge: Edge) {
    const keyU = `${edge.cellA.x},${edge.cellA.y}`;
    const keyV = `${edge.cellB.x},${edge.cellB.y}`;
    const rootU = this.findSet(keyU);
    const rootV = this.findSet(keyV);

    // If they are in different sets, unify them
    if (rootU !== rootV) {
      this.parent[rootU] = rootV;
    }
  }

  // Check if two cells are in the same set
  isInSameSet(edge: Edge): boolean {
    const keyU = `${edge.cellA.x},${edge.cellA.y}`;
    const keyV = `${edge.cellB.x},${edge.cellB.y}`;
    return this.findSet(keyU) === this.findSet(keyV);
  }
}

// Interface for Edge
interface Edge {
  cellA: { x: number; y: number };
  cellB: { x: number; y: number };
}

export default DisjointSetUnion;
