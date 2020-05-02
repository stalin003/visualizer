import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SingleLinkedList } from './../class/SingleLL';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkedListService {

  sll: SingleLinkedList;
  constructor() {
    this.sll = new SingleLinkedList();
   }

  push(val:HTMLDivElement){
    return this.sll.push(val);
  }

  pop(){
    return this.sll.pop();
  }

  traverse(val){
    let tmp: HTMLDivElement[] = this.sll.traverse();

    return new Observable(observe=>{
      for(let i=0; i<tmp.length; i++) {
        this.createObserveable(tmp[i], observe, i, val);
      }
    })
  }

  createObserveable(node: HTMLDivElement, observe, i: number, val){
    setTimeout(()=>{
      observe.next(node);
      if(node.textContent == val){
        observe.complete();
      }
    }, 1000 * i)
  }

  unshift(val: HTMLDivElement){
    this.sll.unShift(val);
  }

  insert(pos){

    // this.insert(pos, val);

    let tmp: HTMLDivElement[] = this.sll.traverse();

    return new Observable(observe=>{
      for(let i=0; i<tmp.length; i++) {
        this.createObserveableIns(tmp[i], observe, i, pos, i);
      }
    })

  }

  createObserveableIns(node: HTMLDivElement, observe, i: number, val, cmpIndx){
    setTimeout(()=>{
      observe.next([node, i]);
      if(cmpIndx == val){
        observe.complete();
      }
    }, 1000 * i)
  }

  insertNodeAtPos(pos, val: HTMLDivElement) {
    this.sll.insert(pos, val);
  }


  shift() {
    return this.sll.shift();
  }

  remove(pos) {
    this.sll.remove(pos);
  }

  
}
