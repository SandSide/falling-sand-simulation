export function populateGridRandom(grid, num){

    console.log(`Populating grid by ${num} randomly`);

    const activeCells = []
    const color = 'orange';

    for (let i = 0; i < num; i++) {
        const row = 0;
        const col = Math.floor(Math.random() * grid[0].length);

        grid[row][col] = color;
        activeCells.push({ row, col, color });
    }

    return activeCells;
}