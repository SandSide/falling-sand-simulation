import { initGrid, updateGrid, updateGridUsingActiveCells } from "./modules/grid.js";
import { populateGridRandom } from "./modules/populateGridRandom.js";
// import { renderGrid, renderGridChanges } from "./modules/divGridRenderer.js";
import { renderGrid } from "./modules/canvasGridRenderer.js";

window.onload = function(){

    const rows = 20;
    const cols = 40;
    const cellSize = 10;

    // Init grid
    const gridData = initGrid(rows, cols);
    let activeCells = populateGridRandom(gridData, 100);
    renderGrid(gridData, cellSize)

    // // Init grid rendering
    // let renderedGrid = renderGrid(gridData, cellSize);

    // function updateAndRender(){
    //     const { changes, newActiveCells } = updateGridUsingActiveCells(gridData, activeCells);
    //     activeCells = newActiveCells;

    //     if (changes.length === 0)
    //         return;

    //     renderGridChanges(renderedGrid, changes);
    // }

    // setInterval(updateAndRender, 100)

}