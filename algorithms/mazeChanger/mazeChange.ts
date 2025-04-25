import { Cell } from '@/types';
import { shuffle } from '@/utils/shuffle';

interface TreeNode {
  readonly cellIndex: Cell;
  parent: Cell | null;
  virtualNeighbors: Cell[];
}

type TreeGrid = TreeNode[][];

function removeNeighbor(tree: TreeGrid, cell: Cell, neighbor: Cell) {
  tree[cell.x][cell.y].virtualNeighbors = tree[cell.x][
    cell.y
  ].virtualNeighbors.filter((n) => n !== neighbor);
  tree[neighbor.x][neighbor.y].virtualNeighbors = tree[neighbor.x][
    neighbor.y
  ].virtualNeighbors.filter((n) => n !== cell);
}

function addNeighbor(tree: TreeGrid, cell: Cell, neighbor: Cell) {
  tree[cell.x][cell.y].virtualNeighbors.push(neighbor);
  tree[neighbor.x][neighbor.y].virtualNeighbors.push(cell);
}

function isAncestor(
  ancestorCandidate: TreeNode,
  node: TreeNode,
  tree: TreeGrid
): boolean {
  let currentNode: TreeNode = node;
  while (currentNode.parent) {
    const parentCell = tree[currentNode.parent.x][currentNode.parent.y];
    if (parentCell.cellIndex.x === ancestorCandidate.cellIndex.x && parentCell.cellIndex.y === ancestorCandidate.cellIndex.y) {
      return true;
    }
    currentNode = structuredClone(parentCell);
  }
  return false;
}

function reverseParentLinks(
  tree: TreeGrid,
  changingCell: Cell,
  neighborCell: Cell
): void {
  removeNeighbor(tree, changingCell, neighborCell);
  let current: Cell = neighborCell;
  let previous: Cell = changingCell;

  while (
    tree[current.x][current.y].parent?.x !== changingCell.x ||
    tree[current.x][current.y].parent?.y !== changingCell.y
  ) {
    const nextParent = tree[current.x][current.y].parent;

    if (!nextParent) break;
    tree[current.x][current.y].parent = previous;
    previous = current;
    current = nextParent;
  }
  tree[current.x][current.y].parent = previous;

  addNeighbor(tree, current, changingCell);
}

//can also return cell that is removed and that is added with true case
export function modifyMazeStructure(
  tree: TreeGrid,
  changingCell: Cell
): boolean {
  const currentTreeNode = tree[changingCell.x][changingCell.y];

  if (currentTreeNode.virtualNeighbors.length === 0) return false;
  shuffle(currentTreeNode.virtualNeighbors);

  const neighborCell = currentTreeNode.virtualNeighbors.pop();
  if (!neighborCell || !currentTreeNode.parent) return false;

  const neighborTreeNode = tree[neighborCell.x][neighborCell.y];

  // console.log("Neighbor is ancestor of neighbor",isAncestor(neighborTreeNode, currentTreeNode, tree));
  // console.log("Changing is ancester of neighbor",isAncestor(currentTreeNode, neighborTreeNode, tree));
  if (
    isAncestor(neighborTreeNode, currentTreeNode, tree) ||
    (!isAncestor(currentTreeNode, neighborTreeNode, tree) &&
      !isAncestor(neighborTreeNode, currentTreeNode, tree))
  ) {
    addNeighbor(tree, currentTreeNode.parent, changingCell);
    currentTreeNode.parent = neighborCell;
    removeNeighbor(tree, neighborCell, changingCell);
  } else {
    reverseParentLinks(tree, changingCell, neighborCell);
  }

  return true;
}
