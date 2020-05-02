import { CommonService } from './../../common/common.service';
import { StackService } from './../../service/stack.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

  append;
  constructor(
    private service: StackService,
    private commonService: CommonService
    ) { }

  @ViewChild('stck') ele: ElementRef;

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.append = this.ele.nativeElement;

    for(let i = 0; i < 3; i++) {
      this.push(Math.floor(Math.random() * 100));
    }

  }
  
  ngOnDestroy() {
    this.destroy();
    
  }

  /**********************NgOnDestroy***************************/

  destroy() {
    let length = this.service.stack.stack.length;
    for(let i = 0; i < length; i++) {
      this.service.stack.pop();
    }
  }


  /***************** Insert Node at Tail *******************/


  push(val,event?: HTMLInputElement){

    if(event) {
      event.value = "";
    }

    if(this.service.stack.stack.length + 1 > 6)
    {
      alert('stack overflow');
      return;
    }

    this.commonService.insertNodeTail(
      val, 
      this.commonService.createStackNode, 
      this.service, 
      this.append,
      false
    );

  }



  /***************** Remove Node at Tail *******************/

  pop(){

    if(!this.service.stack.stack.length){
      alert('stack underflow');
      return;
    }

    this.commonService.deleteNodeTail(
      this.service.stack.stack,
      this.service,
      false
    );
  }



}
