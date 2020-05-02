import { CommonService } from '../../common/common.service';
import { Observable } from 'rxjs';
import { LinkedListService } from '../../service/linked-list.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class LinkedListComponent implements OnInit, AfterViewInit, OnDestroy{

  append;
  nextNode: HTMLDivElement[] = [];
  constructor(
    private service: LinkedListService,
    private commonService: CommonService
    ) { }

  @ViewChild('cnt') ele: ElementRef

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.append = this.ele.nativeElement;

    for(let i = 0; i < 4; i++) {
      this.insertNodeTail(Math.floor(Math.random() * 100));
    }

  }
  
  ngOnDestroy() {
    this.destroy();
    
  }

  /**********************NgOnDestroy***************************/

  destroy() {
    let length = this.service.sll.length;
    for(let i = 0; i < length; i++) {
      this.service.sll.pop();
    }

    while(this.nextNode.length){
      this.nextNode.pop();
    }
  }


   /***************** Insert Node at Head *******************/


   insertNodeHead(val,event?: HTMLInputElement){

    if(this.service.sll.length <= 0) {

      event.value = "";
      alert("empty");

      return;
    }


    this.commonService.insertNodeHead(
      val, 
      this.commonService.createNode, 
      this.service, 
      this.append,
      this.commonService.createNext,
      this.nextNode,
      event
      );
  }


  /***************** Insert Node at Tail *******************/


  insertNodeTail(val,event?: HTMLInputElement){

    this.commonService.insertNodeTail(
      val, 
      this.commonService.createNode, 
      this.service, 
      this.append,
      false,
      this.commonService.createNext,
      this.nextNode,
      event
    );

  }


    /***************** Insert Node at Pos *******************/

  insertNodePos(pos: HTMLInputElement, val: HTMLInputElement) {

    if(this.service.sll.length <= 0) {

      pos.value = "";
      val.value = "";

      alert("empty");
      
      return;
    }

    if(+pos.value > this.service.sll.length || +pos.value < 1){
      pos.value = "";
      val.value = "";
      alert("Invalid position");
      return;
    }



    this.commonService.insertNodePos(
      pos,
      val,
      this.commonService.createNode, 
      this.service,
      this.commonService.createNext,
      this.nextNode,
    );

  }


  /***************** Remove Node at Head *******************/

  deleteNodeHead(){

    if(this.service.sll.length <= 0) {
      alert("empty");
      
      return;
    }

    this.commonService.deleteNodeHead(
      this.service.sll,
      this.service,
      this.nextNode
    )
  }


  /***************** Remove Node at Tail *******************/

  deleteNodeTail(){


    if(this.service.sll.length <= 0) {
      alert("empty");
      
      return;
    }

    this.commonService.deleteNodeTail(
      this.service.sll,
      this.service,
      false,
      this.nextNode
    );
  }


  /***************** Remove Node at Pos *******************/

  deleteNodePos(pos: HTMLInputElement){

    if(this.service.sll.length <= 0) {
      alert("empty");
      
      return;
    }

    if(+pos.value > this.service.sll.length){
      pos.value = "";
      alert("Invalid position");
      return;
    }

    this.commonService.deleteNodePos(
      pos,
      this.service.sll,
      this.service,
      this.nextNode
    )
  }



  /***************** Traverse Node *******************/

  traverse(val, sVal?: HTMLInputElement){


    if(this.service.sll.length <= 0) {

      sVal.value = "";
      alert("empty");
      
      return;
    }

    this.commonService.traverse(
      val,
      this.service,
      sVal
    )
  }


}
