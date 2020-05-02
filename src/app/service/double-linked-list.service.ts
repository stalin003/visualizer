import { Observable } from 'rxjs';
import { DLL } from './../class/DLL';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoubleLinkedListService {

  dll: DLL;
  constructor() {
    this.dll = new DLL();
   }

  push(val:HTMLDivElement){
    return this.dll.push(val);
  }

  pop(){
    return this.dll.pop();
  }

  traverse(val, bottomToTop?: boolean){
    let tmp: HTMLDivElement[] = this.dll.traverse();

    if(bottomToTop) {
      tmp.reverse();
    }

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
    this.dll.unShift(val);
  }

  insert(pos){

    // this.insert(pos, val);

    let tmp: HTMLDivElement[] = this.dll.traverse();

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
    this.dll.insert(pos, val);
  }


  shift() {
    return this.dll.shift();
  }
  
}
