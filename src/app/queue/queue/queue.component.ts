import { CommonService } from './../../common/common.service';
import { QueueService } from './../../service/queue.service';
import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit, AfterViewInit, OnDestroy {

  append;
  constructor(
    private service: QueueService,
    private commonService: CommonService
    ) { }

  @ViewChild('stck') ele: ElementRef;

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.append = this.ele.nativeElement;

    for(let i = 0; i < 3; i++) {
      this.enqueue(Math.floor(Math.random() * 100));
    }

  }
  
  ngOnDestroy() {
    this.destroy();
    
  }

  /**********************NgOnDestroy***************************/

  destroy() {
    let length = this.service.queue.queue.length;
    for(let i = 0; i < length; i++) {
      this.service.queue.dequeue();
    }
    
  }


  /***************** Insert Node at Tail *******************/


  enqueue(val,event?: HTMLInputElement){

    if(event) {
      event.value = "";
    }

    if(this.service.queue.queue.length + 1 > 6)
    {
      alert('queue is full');
      return;
    }


    this.commonService.insertNodeTail(
      val, 
      this.commonService.createQueueNode, 
      this.service, 
      this.append,
      true
  
    );

  }



  /***************** Remove Node at Tail *******************/

  dequeue(){

    if(!this.service.queue.queue.length){
      alert('queue is empty');
      return;
    }

    this.commonService.deleteNodeTail(
      this.service.queue.queue,
      this.service,
      true
    );
  }

}
