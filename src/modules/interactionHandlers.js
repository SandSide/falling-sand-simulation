export function handleUserClick(event, canvas, gridManager, elementSelector, cellSize){
    const mousePos = getMousePosition(canvas, event);
    const gridPos = worldToGridPosition(mousePos, cellSize);


    const element = elementSelector.getSelectedElement();
    console.log(`Adding ${element.name} at ${gridPos.col},${gridPos.row}`);
    
    const success = gridManager.addElement(element, gridPos.col, gridPos.row);


}

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    return { x, y };
}

function worldToGridPosition(worldPos, cellSize){
    return {
        col: Math.floor(worldPos.x / cellSize),
        row: Math.floor(worldPos.y / cellSize),
    }
}