export class ElementSelector{
    constructor(){
        this.selectedElement = null;
    }

    setSelectedElement(element) {
        this.selectedElement = element;
    }

    getSelectedElement() {
        return this.selectedElement.copy();
    }
}