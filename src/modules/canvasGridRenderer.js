export function renderGrid(grid, pixelSize){

    const height = grid.length;
    const width = grid[0].length;

    var canvas = document.getElementById("grid-canvas");
    var ctx = canvas.getContext("2d");

    canvas.width = width * pixelSize;
    canvas.height = height * pixelSize;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < height; row++) {
        
        for (let col = 0; col < width; col++) {

            const color = grid[row][col] ?? 'black';
            ctx.fillStyle = color;
            ctx.fillRect(col * pixelSize, row*pixelSize, pixelSize, pixelSize); 
        }  
    }

    return ctx;
}
