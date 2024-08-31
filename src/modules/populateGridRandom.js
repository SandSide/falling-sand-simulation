export function populateGridRandom(grid, num){

    console.log(`Populating grid by ${num} randomly`);

    const changes = [];
    const activeCells = []
    const value = 'orange';

    for (let i = 0; i < num; i++) {
        const row = 0;
        const col = Math.floor(Math.random() * grid[0].length);

        grid[row][col] = value;

        changes.push({ row, col, newRow: row, newCol: col, value });
        activeCells.push({ row, col, value });
    }

    return { changes, activeCells };
}