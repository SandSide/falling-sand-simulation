export const fall = (grid, nextGrid, row, col, element) => {
    const targetRow = row + 1;

    if (targetRow >= grid.length) {
        nextGrid[row][col] = element;
        return;
    }
    const targetCell = grid[targetRow][col];

    if (targetCell === null){
        nextGrid[row][col] = null;
        nextGrid[row + 1][col] = element;
    }
    else{
        nextGrid[row][col] = element;
    }
}

export const float = (grid, nextGrid, row, col, element) => {
    const targetRow = row - 1;

    if (targetRow < 0) {
        nextGrid[row][col] = element;
        return;
    }


    const targetCell = grid[targetRow][col];

    if (targetCell === null){
        nextGrid[row][col] = null;
        nextGrid[targetRow][col] = element;
    }
    else{
        nextGrid[row][col] = element;
    }
}