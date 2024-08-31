import { initGrid, updateGrid, updateGridUsingActiveCells } from "./modules/grid.js";
import { populateGridRandom } from "./modules/populateGridRandom.js";
import { renderGrid, renderGridByChanges } from "./modules/divGridRenderer.js";

window.onload = function(){

    const width = 100;
    const height = 100;
    const cellSize = 5;

    // Init grid
    const gridData = initGrid(width, height);
    const { temp, activeCells } = populateGridRandom(gridData, 10);

    // Init grid rendering
    let renderedGrid = renderGrid(gridData, cellSize);


    // function updateAndRender(){
        const test = updateGridUsingActiveCells(gridData, activeCells);
        // renderGridByChanges(renderedGrid, changes);
    // }

    // setInterval(updateAndRender, 200)


}
