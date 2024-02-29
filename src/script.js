function createGrid(width,height, size){

    // Config container
    const gridContainer = document.getElementById('grid');
    gridContainer.style.gridTemplateColumns = `repeat(${width},${size})`;
    gridContainer.style.gridTemplateRows = `repeat(${height},${size})`;

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {

            // Create grid node
            const node = document.createElement('div');
            node.classList.add('node');
            node.style.width = size;
            node.style.height = size;

            gridContainer.appendChild(node);
        }
    }
}

window.onload = function(){
    createGrid(100,40,'10px');
}