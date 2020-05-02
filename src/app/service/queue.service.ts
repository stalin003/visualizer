import { Queue } from './../class/queue';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  queue: Queue;
  constructor() {
    this.queue = new Queue();
   }

  enqueue(val:HTMLDivElement){
    this.queue.enqueue(val);
  }

  dequeue(){
    return this.queue.dequeue();
  }

}
