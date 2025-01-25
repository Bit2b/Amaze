import { CellEdge } from '@/types';

class DisjointSetUnion {
  private parent: Map<string, string>;

  constructor(private height: number, private width: number) {
    this.parent = new Map();

    // Initialize each cell to be its own parent (disjoint sets)
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const key = this.getKey(i, j);
        this.parent.set(key, key);
      }
    }
  }

  private getKey(x: number, y: number): string {
    return `${x},${y}`;
  }

  // Find the root (representative) of the set for a given element
  findSet(element: string): string {
    if (this.parent.get(element) !== element) {
      this.parent.set(element, this.findSet(this.parent.get(element)!));
    }
    return this.parent.get(element)!;
  }

  // Union of two sets (sets become one)
  unionSet(edge: CellEdge): void {
    const rootU = this.findSet(this.getKey(edge.cellA.x, edge.cellA.y));
    const rootV = this.findSet(this.getKey(edge.cellB.x, edge.cellB.y));

    if (rootU !== rootV) {
      this.parent.set(rootU, rootV);
    }
  }

  // Check if two cells are in the same set
  isInSameSet(edge: CellEdge): boolean {
    return (
      this.findSet(this.getKey(edge.cellA.x, edge.cellA.y)) ===
      this.findSet(this.getKey(edge.cellB.x, edge.cellB.y))
    );
  }
}

export default DisjointSetUnion;
