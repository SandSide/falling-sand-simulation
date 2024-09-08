import { renderGrid } from "./modules/canvasGridRenderer.js";
import { Element } from "./modules/elements.js";
import { fall, float } from "./modules/behavior.js";
import GridManager from "./modules/GridManager.js";
import { handleUserClick, handleElementSwitch } from "./modules/interactionHandlers.js";
import { ElementSelector } from "./modules/ElementSelector.js";
12
window.onload = () => {

    // Element prototypes
    const sand = new Element('sand', 'yellow', fall, { velocity: 1, maxVelocity: 2 })
    const water = new Element('sand', 'blue', fall, { velocity: 1, maxVelocity: 2 })
    const cloud = new Element('smoke32', 'grey', float, {})
    
    const elements = [sand, sand, water, cloud];

    const rows = 40;
    const cols = 40;
    const cellSize = 10;

    let grid = Array.from({ length: rows }, () => Array(cols).fill(null));
    const gridManager = new GridManager(grid);
    gridManager.addElement(sand, 1, 1);

    startAnimation(gridManager, cellSize);

    const elementSelector = new ElementSelector();
    elementSelector.setSelectedElement(water);21111

    const canvas = document.getElementById('grid');
    document.getElementById('grid').addEventListener('mousedown', (e) => handleUserClick(e, canvas, gridManager, elementSelector, cellSize));
    document.getElementById('grid').addEventListener('mousemove', (e) => handleUserClick(e, canvas, gridManager, elementSelector, cellSize));

    document.addEventListener('keydown', (e) => handleElementSwitch(e, elementSelector, elements));

}

function startAnimation(gridManager, cellSize){
    
    function update(){
        console.log('Updating');

        const grid = gridManager.getGrid();
        const nextGrid = updateGrid(grid);
        gridManager.setGrid(nextGrid);
        renderGrid(gridManager.getGrid(), cellSize);

        requestAnimationFrame(update);
    }

    requestAnimationFrame(update);

}


const updateGrid = (grid) => {

    const rows = grid.length;21
    const cols = grid[0].length;

    const nextGrid = Array.from({ length: rows }, () => Array(cols).fill(null));

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            const element = grid[row][col];

            if (element) {
                element.step(grid, nextGrid, row, col);
            }
        }
    }

    return nextGrid;

}