export function initGrid(rows, cols){
    const gridData = Array.from({ length: rows }, () => Array(cols).fill(null));
    return gridData;
}

export function updateGrid(grid){
    console.log('Update');

    const changes = [];
    const rowSize = grid.length - 1;
    const colSize = grid[0].length - 1;

    for (let row = grid.length - 2; row >= 0; row--) {

        for (let col = 0; col < grid[row].length; col++) {

            const value = grid[row][col];

            // If not empty and not last row
            if (value !== null){

                console.log(`Found ${value} at [${row},${col}]`);

                const belowValue = grid[row + 1][col];

                // Check if down empty
                if (belowValue === null){

                    console.log(`Moving down to ${row + 1},${col}`);

                    grid[row][col] = null;
                    grid[row + 1][col] = value;

                    changes.push({ 
                        oldRow: row, 
                        oldCol: col, 
                        newRow: row + 1, 
                        newCol: col, 
                        value 
                    });
                }
            }
        }     
    }

    return changes;
}

export function updateGridUsingActiveCells(grid, activeCells){

    console.log('Updating grid using active cells');

    const changes = [];
    const rowSize = grid.length - 1;
    const colSize = grid[0].length - 1;
    const newActiveCells = [];
    

    activeCells.forEach(cell => {
        
        const { row, col, color } = cell;

        // If not at bottom
        if ( row < rowSize){

            const bottom = grid[row + 1][col];
            const bottomL = grid[row + 1][col - 1];
            const bottomR = grid[row + 1][col + 1];

            let newRow = row;
            let newCol = col;
            
            if (bottom === null){
                newRow = row + 1;

            } else if (bottomL === null && bottomR === null){
                newCol = col + (Math.random() < 0.5 ? -1 : 1)
                newRow = row + 1;

            } else if (bottomL === null){
                newRow = row + 1;
                newCol = col - 1;

            } else if (bottomR === null){
                newRow = row + 1;
                newCol = col + 1;
                
            } else{
                newCol, newRow = null;
            }

            if (newRow && newCol){

                grid[row][col] = null;
                grid[newRow][newCol] = color;

                changes.push({ 
                    oldRow: row, 
                    oldCol: col, 
                    newRow: newRow, 
                    newCol: newCol, 
                    color: color 
                });

                newActiveCells.push({ 
                    row: newRow,
                    col: newCol, 
                    color: color 
                });
            }

        }

    });

    return { changes, newActiveCells } 
}