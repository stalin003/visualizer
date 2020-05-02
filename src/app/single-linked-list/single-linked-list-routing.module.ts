import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkedListComponent } from './linked-list/linked-list.component';


const routes: Routes = [
  {path: '', component:LinkedListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingleLinkedListRoutingModule { }
