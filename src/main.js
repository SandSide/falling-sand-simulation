import { initGrid, updateGrid, updateGridUsingActiveCells } from "./modules/grid.js";
import { populateGridRandom } from "./modules/populateGridRandom.js";
import { renderGrid, renderGridChanges } from "./modules/divGridRenderer.js";

window.onload = function(){

    const width = 200;
    const height = 100;
    const cellSize = 5;

    // Init grid
    const gridData = initGrid(width, height);
    let activeCells = populateGridRandom(gridData, 100);

    // Init grid rendering
    let renderedGrid = renderGrid(gridData, cellSize);

    function updateAndRender(){
        const { changes, newActiveCells } = updateGridUsingActiveCells(gridData, activeCells);
        activeCells = newActiveCells;

        if (changes.length === 0)
            return;

        renderGridChanges(renderedGrid, changes);
    }

    setInterval(updateAndRender, 100)

}