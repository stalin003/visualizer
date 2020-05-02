import { CommonService } from '../../common/common.service';
import { DoubleLinkedListService } from '../../service/double-linked-list.service';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-double-linked-list',
  templateUrl: './double-linked-list.component.html',
  styleUrls: ['./double-linked-list.component.css']
})
export class DoubleLinkedListComponent implements OnInit, AfterViewInit, OnDestroy {

  append;
  nextNode: HTMLDivElement[] = [];
  constructor(
    private service: DoubleLinkedListService,
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
    this.onDestroy();
    

  }

  /******************** on Destroy *************************/

  onDestroy(){
    let length = this.service.dll.length;
    for(let i = 0; i < length; i++) {
      this.service.dll.pop();
    }

    while(this.nextNode.length){
      this.nextNode.pop();
    }
  }


   /***************** Insert Node at Head *******************/


   insertNodeHead(val,event?: HTMLInputElement){


    if(this.service.dll.length <= 0) {
      event.value = "";
      alert("empty");
      return;
    }

    this.commonService.insertNodeHead(
      val, 
      this.commonService.createNode, 
      this.service, 
      this.append,
      this.commonService.createNextForDLL,
      this.nextNode,
      event,
      true
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
      this.commonService.createNextForDLL,
      this.nextNode,
      event,
      true
    );

  }


  /***************** Remove Node at Head *******************/

  deleteNodeHead(){

    if(this.service.dll.length <= 0) {
      alert("empty");
      return;
    }

    this.commonService.deleteNodeHead(
      this.service.dll,
      this.service,
      this.nextNode
    )
  }


  /***************** Remove Node at Tail *******************/

  deleteNodeTail(){

    if(this.service.dll.length <= 0) {
      alert("empty");
      return;
    }

    this.commonService.deleteNodeTail(
      this.service.dll,
      this.service,
      false,
      this.nextNode,
      true
    );
  }



  /***************** Traverse Node *******************/

  traverse(val, sVal?: HTMLInputElement, bottomToTop?: boolean){

    if(this.service.dll.length <= 0) {
      sVal.value = "";
      alert("empty");
      return;
    }

    this.commonService.traverse(
      val,
      this.service,
      sVal,
      bottomToTop
    )
  }

}
