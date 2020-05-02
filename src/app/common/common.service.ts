import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }


  /***************** Creating Node and Adding anim class ****************** */
  createNode() {

    let divData = document.createElement('div');

    divData.classList.add('node-data');
    divData.classList.add('nodeDefaultAnime');

    return divData;

  }

  /***************** Creating Stack Node and Adding anim class ****************** */
  
  createStackNode() {

    let divData = document.createElement('div');

    divData.classList.add('stck-data');
    divData.classList.add('stckDefaultAnime');

    return divData;

  }

  /***************** Creating Stack Node and Adding anim class ****************** */
  
  createQueueNode() {

    let divData = document.createElement('div');

    divData.classList.add('queue-data');
    divData.classList.add('queueDefaultAnime');

    return divData;

  }

    /***************** Creating Edge and Arrow *******************/

  createNext(){
    let divNext = document.createElement('div');
    let edge = document.createElement('div');
    let arrow = document.createElement('div');

    divNext.classList.add('node-next');
    edge.classList.add('edge');
    arrow.classList.add('arrow');


    divNext.append(edge);
    edge.append(arrow);

    return divNext;
  }

  /***************** Creating Edge and Arrow *******************/

  createNextForDLL(){
    let divNext = document.createElement('div');
    let edge = document.createElement('div');
    let arrow = document.createElement('div');
    let arrowUp = document.createElement('div');


    divNext.classList.add('dll-node-next');
    edge.classList.add('dll-edge');
    arrow.classList.add('dll-down-arrow');
    arrowUp.classList.add('dll-up-arrow');


    divNext.append(edge);
    edge.append(arrow);
    edge.append(arrowUp);
    

    return divNext;
  }


  /***************** Insert Node at Head *******************/

  insertNodeHead(val, createNode, service, appendTo, createEdgeArrow?, edgeArrowStoringArray?, event?: HTMLInputElement, isDll?: boolean){

    if(!val || edgeArrowStoringArray.length < 1) {
      return;
    }

    if(event) {
      event.value = "";
    }

    // initializing the node
    let divData = createNode();

    if(edgeArrowStoringArray && createEdgeArrow) {

      //storing the edge arrow to the array
      edgeArrowStoringArray.splice(0, 0, createEdgeArrow());
      if(edgeArrowStoringArray.length > 0){

        //adding edge arrow animation class
        edgeArrowStoringArray[0].children[0].classList.add('anim');
        edgeArrowStoringArray[0].children[0].children[0].classList.add('animArrow');

        if(isDll){
          edgeArrowStoringArray[0].children[0].children[1].classList.add('animUpArrow');
        }

      }
    }

    //adding node value
    divData.innerHTML = `<p>${val}</p>`;

    //adding data to head in main datastructure class
    service.unshift(divData);

    // appendiing node to the Dom
    appendTo.prepend(divData);

    //appending edge arrow to node
    if(edgeArrowStoringArray) {
      divData.after(edgeArrowStoringArray[0]);
    }

  }

  /***************** Insert Node at Tail *******************/

  insertNodeTail(val, createNode, service, appendTo, isQueue:boolean, createEdgeArrow?, edgeArrowStoringArray?, event?: HTMLInputElement, isDll?: boolean){

    if(!val) {
      return;
    }

    if(event) {
      event.value = "";
    }

    let divData = createNode();

    if(edgeArrowStoringArray && createEdgeArrow) {
      if(edgeArrowStoringArray.length > 0){
        edgeArrowStoringArray[edgeArrowStoringArray.length - 1].children[0].classList.add('anim');
        edgeArrowStoringArray[edgeArrowStoringArray.length - 1].children[0].children[0].classList.add('animArrow');


        if(isDll){
          edgeArrowStoringArray[edgeArrowStoringArray.length - 1].children[0].children[1].classList.add('animUpArrow');
        }

      }
  
      edgeArrowStoringArray.push(createEdgeArrow());
    }

    divData.innerHTML = `<p>${val}</p>`;

    if(isQueue){
      service.enqueue(divData);
    } else {
      service.push(divData);
    }

    
    appendTo.append(divData);
    

    

    if(edgeArrowStoringArray && createEdgeArrow) {
      appendTo.append(edgeArrowStoringArray[edgeArrowStoringArray.length - 1]);
    }

  }

  /***************** Insert Node at Pos *******************/


  insertNodePos(pos: HTMLInputElement, val: HTMLInputElement, createNode, service, createEdgeArrow?, edgeArrowStoringArray?) {

    if(!pos.value || !val.value || edgeArrowStoringArray.length < 1){
      console.log('empty');
      return;
    }

    if(+pos.value < 1) {
      console.log('Invalid pos');
      pos.value = "";
      val.value = "";
      return;
    }

    let nodePos = (+pos.value) - 1;
    let nodeVal = val.value;

    pos.value = "";
    val.value = "";
    

    service.insert(nodePos).subscribe((next)=>{

      if(next[1] == nodePos){

        let div = createNode();
        div.innerHTML = `<p>${nodeVal}</p>`;


        edgeArrowStoringArray.splice(nodePos, 0, createEdgeArrow());
        if(nodePos < service.sll.length){
          edgeArrowStoringArray[nodePos].children[0].classList.add('anim');
          edgeArrowStoringArray[nodePos].children[0].children[0].classList.add('animArrow');
        }

        service.insertNodeAtPos(nodePos, div);

        next[0].before(div);
        div.after(edgeArrowStoringArray[nodePos]);

      } else {
        next[0].classList.remove('nodeDefaultAnime');
        next[0].classList.add('searchAnim');
        setTimeout(()=>{
          next[0].classList.remove('searchAnim');
        }, 1000);
      }
        
    });


  }

  /***************** Remove Node at Head *******************/

  deleteNodeHead(datastructure, service, edgeArrowStoringArray?){

    if(datastructure.length > 0) {


      let node = service.shift(); // node to be removed from DOM
       // removing node from linked list
      
      if(edgeArrowStoringArray) {
        edgeArrowStoringArray.shift().remove(); // removing the hidden arrow edge
      }


      /***** fade node effect **********/
      node.classList.add('nodeFadeOut');

      setTimeout(()=> {
        node.remove(); // removing node from DOM
      }, 500)
      

    }else {
      console.log('empty');
    }
  }

    /***************** Remove Node at Tail *******************/
  deleteNodeTail(datastructure, service, isQueue:boolean, edgeArrowStoringArray?, isDll?:boolean){


    if(datastructure.length > 0) {


      let node;

      if(isQueue) {
        node = service.dequeue();
      } else {
        node = service.pop(); // node to be removed from DOM
      }

       
        // removing node from linked list
      if(edgeArrowStoringArray){
        edgeArrowStoringArray.pop().remove(); // removing the hidden arrow edge

      /* Adding fade effect for prev arrow */
        if(edgeArrowStoringArray.length > 0) {
  
          /* Removing class for prev node */
          edgeArrowStoringArray[edgeArrowStoringArray.length - 1].children[0].classList.remove('anim');
          edgeArrowStoringArray[edgeArrowStoringArray.length - 1].children[0].children[0].classList.remove('animArrow');

          if(isDll) {
            edgeArrowStoringArray[edgeArrowStoringArray.length - 1].children[0].children[1].classList.remove('animUpArrow');
          }
  
        }
      }

      /***** fade node effect **********/
      node.classList.add('nodeFadeOut');

      setTimeout(()=> {
        node.remove(); // removing node from DOM
      }, 500)

    }else {
      console.log('empty');
    }
    
  }



    /***************** Remove Node at Pos *******************/

  deleteNodePos(pos: HTMLInputElement, datastructure, service, edgeArrowStoringArray?){

    if(!pos.value || edgeArrowStoringArray.length < 1){
      console.log('empty');
      return;
    }

    if(+pos.value < 1) {
      console.log("Invalid position")
      pos.value = "";
      return;
    }

    let nodePos = (+pos.value) - 1;

    pos.value = "";
    

    service.insert(nodePos).subscribe((next)=>{

      if(next[1] == nodePos){



        /* Adding fade effect for prev arrow */
        if(nodePos == datastructure.length - 1  && nodePos != 0) {

          /* Removing class for prev node */
          edgeArrowStoringArray[next[1] - 1].children[0].classList.remove('anim');
          edgeArrowStoringArray[next[1] - 1].children[0].children[0].classList.remove('animArrow');

        }

        service.remove(nodePos);

        edgeArrowStoringArray[next[1]].remove();
        edgeArrowStoringArray.splice(next[1], 1);

          /***** fade node effect **********/
        next[0].classList.add('nodeFadeOut');

        setTimeout(()=> {
          next[0].remove(); // removing node from DOM
        }, 500)


      } else {
        next[0].classList.remove('nodeDefaultAnime');
        next[0].classList.add('searchAnim');
        setTimeout(()=>{
          next[0].classList.remove('searchAnim');
        }, 1000);
      }
        
    });

  }


  /***************** Traverse Node *******************/

  traverse(val, service, sVal?: HTMLInputElement, bottomToTop?:boolean){

    if(!val) {
      return;
    }

    if(sVal) {
      sVal.value = "";
    }

    service.traverse(val, bottomToTop).subscribe((next: HTMLDivElement)=>{

      if(next.textContent == val){
        next.classList.remove('nodeDefaultAnime');
        next.classList.add('searchAnimSuccess');

        new Observable(observe=>{
          setTimeout(()=>{
            observe.next(next);
          }, 1000);
        }).subscribe((next: HTMLDivElement)=>{
          next.classList.remove('searchAnimSuccess');
          alert(next.textContent);
        })

      } else {
        next.classList.remove('nodeDefaultAnime');
        next.classList.add('searchAnim');
        setTimeout(()=>{
          next.classList.remove('searchAnim');
        }, 1000);
      }
        
    });
  }



}
