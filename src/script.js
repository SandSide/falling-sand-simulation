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

    for (let row = gridValues.length - 2; row >= 0; row--) {
        for (let col = 0; col < gridValues[row].length; col++) {

            const value = gridValues[row][col];

            // If not empty and not last row
            if (value !== null){

                console.log(`Found ${value} at [${row},${col}]`);

                const belowValue = gridValues[row+1][col];

                // Check if down empty
                if (belowValue === null){

                    console.log(`Moving down to ${row+1},${col}`);

                    gridValues[row][col] = null;
                    gridValues[row+1][col] = value;

                }
            }
        }     
    }

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

function updateGrid(gridValues, gridElements){

    updateGridValues(gridValues);
    updateGridElements(gridValues, gridElements);
}

function populateGridRandom(num, gridValues){

    for (let i = 0; i < num; i++) {
        const row = 0;
        const col = Math.floor(Math.random() * gridValues[0].length);

        gridValues[row][col] = 1;
    }
}

window.onload = function(){
    const { gridValues, gridElements } = createGrid(400, 400, '2px');

    populateGridRandom(20, gridValues, gridElements);

    updateGrid(gridValues, gridElements);
    // setInterval(updateGrid, 100, gridValues, gridElements);

}