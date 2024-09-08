export const fall = (grid, nextGrid, row, col, element) => {

    // If at bottom
    if (row === grid.length - 1) {
        nextGrid[row][col] = element;
        return;
    }

    let velocity = element.properties.velocity;
    let newRow = row;
    let newCol = col;

    for (let i = 0; i < velocity; i++) {

        if (newRow === grid.length - 1) {
            break;
        }

        const below = grid[newRow + 1][col];

        if (below === null) {
            newRow += 1;

        } else {

            const belowR = grid[newRow + 1][col + 1];
            const belowL = grid[newRow + 1][col - 1];

            if (belowR === null) {
                newRow += 1;
                newCol += 1;

            } else if (belowL === null) {
                newRow += 1;
                newCol -= 1;
            } else {
                velocity = 0;
                break;
            }
        } 
    }

    nextGrid[row][col] = null;
    nextGrid[newRow][newCol] = element;

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