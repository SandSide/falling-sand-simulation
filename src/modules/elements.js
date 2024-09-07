export class Element {
    constructor(name, color, behavior, properties = {}){
        this.name = name;
        this.color = color;
        this.behavior = behavior;
        this.properties = properties;
    }

    step(grid, nextGrid, row, col){
        this.behavior(grid, nextGrid, row, col, this);
    }
}


