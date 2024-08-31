import { initGrid, updateGrid, updateGridUsingActiveCells } from "./modules/grid.js";
import { populateGridRandom } from "./modules/populateGridRandom.js";
import { renderGrid, renderGridChanges } from "./modules/canvasGridRenderer.js";

window.onload = function(){

    const rows = 400;
    const cols = 500;
    const cellSize = 1;

    // Init grid
    const gridData = initGrid(rows, cols);
    let activeCells = populateGridRandom(gridData, cols*.7);
    let renderedGrid = renderGrid(gridData, cellSize);

    function updateAndRender(){
        const { changes, newActiveCells } = updateGridUsingActiveCells(gridData, activeCells);
        activeCells = newActiveCells;

        if (changes.length === 0)
            return;

        renderGridChanges(renderedGrid, changes, cellSize);
    }

    setInterval(updateAndRender, 20)

}