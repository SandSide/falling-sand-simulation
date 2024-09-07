export function renderGrid(grid, cellSize){

    const canvas = document.getElementById('grid');
    const ctx = canvas.getContext('2d');

    const rows = grid.length;
    const cols = grid[0].length;

    canvas.height = rows * cellSize;
    canvas.width = cols * cellSize;

    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

    for (let row = 0; row < rows; row++) {

      for (let col = 0; col < cols; col++) {

        const color = grid[row][col] ? grid[row][col].color : 'black';
        ctx.fillStyle = color;
        ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);  

      }

    }
}