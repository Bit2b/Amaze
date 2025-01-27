import kruskalsAlgorithm from '@/algorithms/mazeGeneration/kruskalsAlgorithm';
import { CellEdge } from '@/types';
import { createEmptyGrid, createFullGrid } from '@/utils/gridUtils';
import { addEdge, removeEdge } from '@/utils/wallUtil';
import React, { useEffect, useState } from 'react';
import GridRenderer from './GridRenderer';
import primsAlgorithm from '@/algorithms/mazeGeneration/primsAlgorithm';
import recursiveBacktracker from '@/algorithms/mazeGeneration/recursiveBacktracker';
import recursiveDivision from '@/algorithms/mazeGeneration/recursiveDivision';

const Visualizer = () => {
    const [maze, setMaze] = useState<number[][]>(createFullGrid(10, 10));
    const [mazeSteps, setmazeSteps] = useState<CellEdge[]>([]);
    const [isConstructive, setIsConstructive] = useState<Boolean>(false);

    useEffect(() => {
        // const { mazeSteps,isConstructive } = kruskalsAlgorithm(10, 10);
        // const {mazeSteps,isConstructive}=primsAlgorithm(10,10);
        // const {mazeSteps,isConstructive}=recursiveBacktracker(10,10);
        const { mazeSteps, isConstructive } = recursiveDivision(10, 10);
        setmazeSteps(mazeSteps);
        setIsConstructive(isConstructive);
    }, []);

    useEffect(() => {
        if (mazeSteps.length === 0) return;

        if (isConstructive) setMaze(createEmptyGrid(10, 10));
        mazeSteps.forEach((edge, index) => {
            setTimeout(() => {
                setMaze(prevMaze => {
                    const newMaze = prevMaze.map(row => [...row]);
                    if (isConstructive)
                        addEdge(newMaze, edge);
                    else
                        removeEdge(newMaze, edge);
                    return newMaze;
                });
            }, index * 100);
        });

    }, [mazeSteps]);

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <GridRenderer grid={maze} />
        </div>
    );
};

export default Visualizer;
