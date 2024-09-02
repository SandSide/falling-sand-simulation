import { initGrid, updateGrid, updateGridUsingActiveCells } from "./modules/grid.js";
import { populateGridRandom } from "./modules/populateGridRandom.js";
import { renderGrid, renderGridChanges } from "./modules/canvasGridRenderer.js";

window.onload = function(){

    const rows = 100;
    const cols = 100;
    const cellSize = 4;

    // Init grid
    const gridData = initGrid(rows, cols);
    const renderedGrid = renderGrid(gridData, cellSize);

    const updateAndRender = () => {
        const { changes, newActiveCells } = updateGridUsingActiveCells(gridData, activeCells);
        activeCells = newActiveCells;
        renderGridChanges(renderedGrid, changes, cellSize);
    }

    let activeCells = [];
    setInterval(updateAndRender, 10);


    // Mouse interaction handlers
    let intervalId;
    let mousePos;

    document.getElementById('grid-canvas').addEventListener('mousedown', function (e) {
        mousePos = getMousePosition(this, e);

        intervalId = setInterval(() => {
            const gridPos = worldToGridPosition(mousePos, cellSize);

            for (let i = gridPos.col - 1; i < gridPos.col + 1; i++) {

                for (let j = gridPos.row - 1; j < gridPos.row + 1; j++) {

                    const pos = {row: j, col: i};
                    const color = getRandomColor();
                    addCell(gridData, activeCells, pos, color);
                }
            }

        }, 50);

    });

    document.getElementById('grid-canvas').addEventListener('mousemove', function (e) {
        mousePos = getMousePosition(this, e);
    });

    document.getElementById('grid-canvas').addEventListener('mouseup', function (e) {
        clearInterval(intervalId);
    });

}

function addCell(grid, activeCells, gridPos, color){

    if (grid[gridPos.row][gridPos.col] === null){

        grid[gridPos.row][gridPos.col] = color;

        activeCells.push({ 
            row: gridPos.row, 
            col: gridPos.col, 
            color: color
        });
    }
}

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    return { x,y };
}

function worldToGridPosition(worldPos, cellSize){
    return {
        col: Math.floor(worldPos.x / cellSize),
        row: Math.floor(worldPos.y / cellSize),
    }
}

let hue = 0;

function getRandomColor(){
    hue = (hue + 1) % 360;
    return `hsl(${hue}, 75%, 50%)`;
}