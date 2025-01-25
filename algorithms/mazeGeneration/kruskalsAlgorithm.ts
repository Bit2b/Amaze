import DisjointSetUnion from '@/utils/dsu';
import { CellEdge } from '@/types';
import { removeEdgeWall } from '@/utils/wallUtil';
import { shuffle } from '@/utils/shuffle';
import { createFullGrid, generateAllEdges } from '@/utils/gridUtils';

interface KruskalsResult {
  maze: number[][];
  wallChanges: CellEdge[];
  isConstructive: boolean;
}

export default function kruskalsAlgorithm(
  height: number,
  width: number
): KruskalsResult {
  const dsu = new DisjointSetUnion(height, width);
  const maze = createFullGrid(height, width);
  const wallChanges: CellEdge[] = [];
  const isConstructive = false;

  const edges = generateAllEdges(height, width);
  shuffle(edges);

  edges.forEach((edge) => {
    if (!dsu.isInSameSet(edge)) {
      dsu.unionSet(edge);
      removeEdgeWall(maze, edge);
      wallChanges.push(edge);
    }
  });

  return { maze, wallChanges, isConstructive };
}
