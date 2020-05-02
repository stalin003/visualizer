import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleLinkedListRoutingModule } from './single-linked-list-routing.module';
import { LinkedListComponent } from './linked-list/linked-list.component';


@NgModule({
  declarations: [
    LinkedListComponent
  ],
  imports: [
    CommonModule,
    SingleLinkedListRoutingModule
  ]
})
export class SingleLinkedListModule { }
