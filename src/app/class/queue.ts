export class Queue{
    queue: HTMLDivElement[] = [];

    enqueue(ele: HTMLDivElement) {
        this.queue.push(ele);
    }

    dequeue():HTMLDivElement {
        if(this.queue.length > 0) {
            return this.queue.shift();
        }
    }
}