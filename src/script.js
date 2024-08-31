function createGrid(width, height, size){

    // Init container
    const gridContainer = document.getElementById('grid');
    gridContainer.style.gridTemplateColumns = `repeat(${width},${size})`;
    gridContainer.style.gridTemplateRows = `repeat(${height},${size})`;

    // Init grid
    const gridValues = Array.from({ length: height }, () => Array(width).fill(null));
    const gridElements = Array.from({ length: height }, () => Array(width).fill(null));

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {

            // Create grid node
            const node = document.createElement('div');
            node.classList.add('node');
            node.style.width = size;
            node.style.height = size;

            gridContainer.appendChild(node)
            gridElements[row][col] = node;
        }
    }

    return { gridValues, gridElements };
}

function updateGridValues(gridValues){
    
    console.log('Update');

    const changes = [];

    for (let row = gridValues.length - 2; row >= 0; row--) {
        for (let col = 0; col < gridValues[row].length; col++) {

            const value = gridValues[row][col];

            // If not empty and not last row
            if (value !== null){

                console.log(`Found ${value} at [${row},${col}]`);

                const belowValue = gridValues[row + 1][col];

                // Check if down empty
                if (belowValue === null){

                    console.log(`Moving down to ${row + 1},${col}`);

                    gridValues[row][col] = null;
                    gridValues[row + 1][col] = value;

                    changes.push({ row, col, newRow: row + 1, newCol: col, value });
                }
            }
        }     
    }

    return changes;
}

function updateGridElements(gridValues, gridElements){

    for (let row = gridValues.length - 1; row >= 0; row--) {
        for (let col = 0; col < gridValues[row].length; col++) {

            const value = gridValues[row][col];
            const element = gridElements[row][col];

            if (value === null){
                element.style.backgroundColor = 'black';

            } else if (value === 1){
                element.style.backgroundColor = 'yellow';
            }
        }
    }
}

function updateGridElementsByChange(gridElements, changes){

    if (changes.length === 0){
        console.log(`No changes found`);
        return;
    }
        
    console.log(`Updating grid elements with ${changes.length} changes`);

    changes.forEach(change => {

        const { row, col, newRow, newCol, value } = change;

        gridElements[row][col].style.backgroundColor = 'black';
        gridElements[newRow][col].style.backgroundColor = 'yellow';
        
    });
}

function updateGrid(gridValues, gridElements){
    const changes = updateGridValues(gridValues);
    updateGridElementsByChange(gridElements, changes);
}

function populateGridRandom(num, gridValues){

    console.log(`Populating grid by ${num} randomly`);

    const changes = [];
    // const 
    const value = 1;

    for (let i = 0; i < num; i++) {
        const row = 0;
        const col = Math.floor(Math.random() * gridValues[0].length);

        gridValues[row][col] = value;

        changes.push({ row, col, newRow: row, newCol: col, value });
    }

    return changes;
}

function drawGrid(width, height, size){

    var c = document.getElementById("grid-canvas");
    var ctx = c.getContext("2d");

    // for (let row = 0; row < height; row++) {
    //     for (let col = 0; col < width; col++) {

      

    //     }
    // }
    
    ctx.moveTo(10, 1);
    ctx.lineTo(10, 1);
    ctx.stroke();


}

window.onload = function(){

    // drawGrid();
    const { gridValues, gridElements } = createGrid(300, 100, '5px');

    const changes = populateGridRandom(20, gridValues, gridElements);
    updateGridElementsByChange(gridElements, changes);

    // // Update
    setInterval(updateGrid, 50, gridValues, gridElements);

}