export function renderGrid(grid, cellSize){

    console.log('Rendering Grid using DIV Elements')

    const height = grid.length;
    const width = grid[0].length;
   
    // Init container
    const gridContainer = document.getElementById('grid');
    gridContainer.innerHTML = '';
    gridContainer.style.gridTemplateColumns = `repeat(${width},${cellSize}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${height},${cellSize}px)`;
    
    const gridElements = Array.from({ length: height }, () => Array(width).fill(null));

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {

            // Create grid node
            const node = document.createElement('div');
            node.classList.add('node');
            node.style.width = cellSize;
            node.style.height = cellSize;
            node.style.backgroundColor =  grid[row][col] ?? 'black';

            gridContainer.appendChild(node)
            gridElements[row][col] = node;
        }
    }

    return gridElements;
}

export function renderGridChanges(renderedGrid, changes){

    if (changes.length === 0){
        console.log(`No changes found`);
        return;
    }
        
    console.log(`Rendering grid elements with ${changes.length} changes`);

    changes.forEach(change => {

        const { oldRow, oldCol, newRow, newCol, color } = change;

        renderedGrid[oldRow][oldCol].style.backgroundColor = 'black';
        renderedGrid[newRow][newCol].style.backgroundColor = color;
        
    });

}