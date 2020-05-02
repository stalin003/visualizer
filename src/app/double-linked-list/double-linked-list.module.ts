import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoubleLinkedListRoutingModule } from './double-linked-list-routing.module';
import { DoubleLinkedListComponent } from './double-linked-list/double-linked-list.component';


@NgModule({
  declarations: [
    DoubleLinkedListComponent
  ],
  imports: [
    CommonModule,
    DoubleLinkedListRoutingModule
  ]
})
export class DoubleLinkedListModule { }
