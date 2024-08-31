export function initGrid(width, height){
    const gridData = Array.from({ length: height }, () => Array(width).fill(null));
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
        
        const { row, col, value } = cell;

        // If not at bottom
        if ( row < rowSize){

            const bottomCell = grid[row + 1][col];

            if (bottomCell === null){

                // console.log(`Moving [${row},${col}] down to [${row + 1},${col}]`);
                
                grid[row][col] = null;
                grid[row + 1][col] = value;
                
                changes.push({ 
                    oldRow: row, 
                    oldCol: col, 
                    newRow: row + 1, 
                    newCol: col, 
                    value 
                });

                newActiveCells.push({ 
                    row: row + 1, 
                    col: col, 
                    value 
                });


            }

        }


    });

    return { changes, newActiveCells } 
}