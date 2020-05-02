import { Stack } from './../class/Stack';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StackService {

  stack: Stack;
  constructor() {
    this.stack = new Stack();
   }

  push(val:HTMLDivElement){
    this.stack.push(val);
  }

  pop(){
    return this.stack.pop();
  }

}
