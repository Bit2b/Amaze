import kruskalsAlgorithm from '@/algorithms/mazeGeneration/kruskalsAlgorithm';
import { CellEdge } from '@/types';
import { createFullGrid } from '@/utils/gridUtils';
import { removeEdge } from '@/utils/wallUtil';
import React, { useEffect, useState } from 'react';
import GridRenderer from './GridRenderer';
import primsAlgorithm from '@/algorithms/mazeGeneration/primsAlgorithm';
import recursiveBacktracker from '@/algorithms/mazeGeneration/recursiveBacktracker';

const Visualizer = () => {
    const [maze, setMaze] = useState<number[][]>(createFullGrid(10, 10));
    const [wallChanges, setWallChanges] = useState<CellEdge[]>([]);

    useEffect(() => {
        // const { wallChanges } = kruskalsAlgorithm(10, 10);
        // const {wallChanges}=primsAlgorithm(10,10);
        const {wallChanges}=recursiveBacktracker(10,10);
        setWallChanges(wallChanges);
    }, []);

    useEffect(() => {
        if (wallChanges.length === 0) return;

        wallChanges.forEach((edge, index) => {
            setTimeout(() => {
                setMaze(prevMaze => {
                    const newMaze = prevMaze.map(row => [...row]);
                    removeEdge(newMaze, edge);
                    return newMaze;
                });
            }, index * 100);
        });

    }, [wallChanges]);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <GridRenderer grid={maze} />
        </div>
    );
};

export default Visualizer;
