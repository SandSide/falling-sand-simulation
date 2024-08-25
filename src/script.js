function createGrid(width, height, size){

    // Init container
    const gridContainer = document.getElementById('grid');
    gridContainer.style.gridTemplateColumns = `repeat(${width},${size})`;
    gridContainer.style.gridTemplateRows = `repeat(${height},${size})`;

    // Init grid
    const gridValues = Array.from({ length: height }, () => Array(width).fill(0));
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

function update(gridValues, gridElements){

    // while(true){

        for (let row = 0; row < gridValues.length; row++) {
            for (let col = 0; col < gridValues[row].length; col++) {
                
                if (row % 2 == 0)
                    gridElements[row][col].style.backgroundColor = 'gray';
            }
            
        }


    // }
}

window.onload = function(){
    const { gridValues, gridElements } = createGrid(100, 40, '10px');

    // update(gridValues, gridElements)
}