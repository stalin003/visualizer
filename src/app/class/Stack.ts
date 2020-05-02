export class Stack{
    stack: HTMLDivElement[] = [];

    push(ele: HTMLDivElement) {
        this.stack.push(ele);
    }

    pop():HTMLDivElement {
        if(this.stack.length > 0) {
            return this.stack.pop();
        }
    }
}