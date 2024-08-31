import { initGrid, updateGrid, updateGridUsingActiveCells } from "./modules/grid.js";
import { populateGridRandom } from "./modules/populateGridRandom.js";
import { renderGrid, renderGridChanges } from "./modules/canvasGridRenderer.js";

window.onload = function(){

    const rows = 40;
    const cols = 40;
    const cellSize = 5;

    // Init grid
    const gridData = initGrid(rows, cols);
    let renderedGrid = renderGrid(gridData, cellSize);

    // let activeCells = populateGridRandom(gridData, 20);
    let activeCells = [];
    

    function updateAndRender(){

        const { changes, newActiveCells } = updateGridUsingActiveCells(gridData, activeCells);
        activeCells = newActiveCells;

        renderGridChanges(renderedGrid, changes, cellSize);
    }

    setInterval(updateAndRender, 20)

    document.getElementById('grid-canvas').addEventListener('mousedown', function (e) {
        const mousePos = getMousePosition(this, e);
        const gridPos = worldToGridPosition(mousePos, cellSize);

        console.log(gridPos);

        if (gridData[gridPos.row][gridPos.col] === null){

            console.log('Adding new cell');


            const color = getRandomColor();

            activeCells.push({ 
                row: gridPos.row, 
                col: gridPos.col, 
                color: color
            });
        }

    });

}

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    return { x,y };
}

function worldToGridPosition(worldPos, pixelSize){
    return {
        col: Math.floor(worldPos.x / pixelSize),
        row: Math.floor(worldPos.y / pixelSize),
    }
}

function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}