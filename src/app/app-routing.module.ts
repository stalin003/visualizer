import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'single-linked-list', loadChildren: ()=>import('./single-linked-list/single-linked-list.module').then(m=>m.SingleLinkedListModule)},
  {path: 'double-linked-list', loadChildren: ()=>import('./double-linked-list/double-linked-list.module').then(m=>m.DoubleLinkedListModule)},
  {path: 'stack', loadChildren: ()=>import('./stack/stack.module').then(m=>m.StackModule)},
  {path: 'queue', loadChildren: ()=>import('./queue/queue.module').then(m=>m.QueueModule)},
  {path: 'maze', loadChildren: ()=>import('./maze/maze.module').then(m=>m.MazeModule)},
  {path: '', redirectTo: '/single-linked-list', pathMatch: 'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
