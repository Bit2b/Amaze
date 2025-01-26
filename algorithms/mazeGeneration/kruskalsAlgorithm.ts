import DisjointSetUnion from '@/utils/dsu';
import { CellEdge, MazeResult } from '@/types';
import { removeEdge } from '@/utils/wallUtil';
import { shuffle } from '@/utils/shuffle';
import { createFullGrid, createAllEdges } from '@/utils/gridUtils';

export default function kruskalsAlgorithm(
  height: number,
  width: number
): MazeResult {
  const dsu = new DisjointSetUnion(height, width);
  const maze = createFullGrid(height, width);
  const wallChanges: CellEdge[] = [];
  const isConstructive = false;
  const edges = createAllEdges(height, width);
  shuffle(edges);

  edges.forEach((edge) => {
    if (!dsu.isInSameSet(edge)) {
      dsu.unionSet(edge);
      removeEdge(maze, edge);
      wallChanges.push(edge);
    }
  });

  return { maze, wallChanges, isConstructive };
}
