import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MazeService {

  toUnsubscribe;
  constructor() { }

  createTrans(createTra, reset, aSol, board, maze, sol) {

    createTra.disabled = true;
    createTra.classList.add('disabled');
    reset.disabled = true;
    reset.classList.add('disabled');

    aSol = board.solveMaze(maze);

    if(aSol) {

      let time = 100;

      for(let i = 0; i < aSol.length; i++) {
        for(let j = 0; j < aSol.length; j++) {
          let observable = new Observable((observe)=>{
            setTimeout(()=>{
              observe.next(aSol[i][j] == 1)
            }, time+=100);
          });

          this.toUnsubscribe = observable.subscribe(next=>{
            if(next){
              sol[i][j] = 1;

              if(i == sol.length - 1 && j == sol.length - 1) {

                reset.disabled = false;
                reset.classList.remove('disabled');

              }

            }
          })

        }
      }

      return true;

    } else {

      alert("Invalid Maze");

      createTra.classList.remove('disabled');
      createTra.disabled = false;

      reset.classList.remove('disabled');
      reset.disabled = false;

      return false;

    }

  }

  reset(createTra, sol){

    createTra.disabled = false;
    if(createTra.classList.contains('disabled')){
      createTra.classList.remove('disabled');
    }

    if(this.toUnsubscribe) {
      this.toUnsubscribe.unsubscribe();
    }
    
    for(let i=0; i < sol.length; i++) {
      for(let j=0; j < sol.length; j++) {
        sol[i][j] = 0;
      }
    }

  }

  setBlock(i:number, j:number, maze){

    if(i == 0 && j == 0){
      alert("you can't block start point");
      return;
    }
    
    if(i == maze.length - 1 && j == maze.length - 1){
      alert("you can't block end point");
      return;
    } 

    if(maze[i][j] == 0) {
      maze[i][j] = 1;
    } else {
      maze[i][j] = 0;
    }

    return;

  }

}
