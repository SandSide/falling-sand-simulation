export default class GridManager {
    constructor(grid){
        this.grid = grid;
    }

    getGrid(){
        return this.grid;
    }

    setGrid(newGrid){
        this.grid = newGrid;
    }

    addElement(element, x, y){
        if (this.isValidPos(x, y) && this.grid[y][x] === null){
            this.grid[y][x] = element;
            return true;
        }

        return false

    }

    isValidPos(x, y){
        return x >= 0 && y >= 0 && y < this.grid.length && x < this.grid[0].length;
    }



}