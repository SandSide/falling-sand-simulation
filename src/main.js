import { renderGrid } from "./modules/canvasGridRenderer.js";
import { Element } from "./modules/elements.js";
import { fall, float } from "./modules/behavior.js";

window.onload = () => {

    const rows = 100;
    const cols = 100;
    const cellSize = 5;

    let grid = Array.from({ length: rows }, () => Array(cols).fill(null));

    const sand = new Element(
        'sand', 
        'yellow', 
        fall,
        {
            fallingSpeed: 1
        }
    )

    const cloud = new Element(
        'cloud', 
        'white', 
        float,
        {}
    )

    grid[1][1] = sand;
    grid[55][5] = cloud;

    const update = () => {

        console.log('Updating')
        const nextGrid = updateGrid(grid);
        renderGrid(nextGrid, cellSize);
        grid = nextGrid;
     
        requestAnimationFrame(update);
    }

    requestAnimationFrame(update);

    
    // setInterval(update, 20);

    // const spawnSand = () => {

    //     grid[1][1] = sand;
    //     grid[99][10] = cloud;
     
    // }

    // setInterval(spawnSand, 20);

}

const updateGrid = (grid) => {

    const rows = grid.length;
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