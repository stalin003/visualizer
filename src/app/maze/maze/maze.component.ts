import { MazeService } from './../../service/maze.service';
import { Component, OnInit } from '@angular/core';
import { Maze } from '../../class/maze';

@Component({
  selector: 'app-maze',
  templateUrl: './maze.component.html',
  styleUrls: ['./maze.component.css']
})
export class MazeComponent implements OnInit {

  maze:number[][] = [
    [1, 1, 0, 0],
    [0, 1, 1, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 1]
  ];
  

  board: Maze;
  sol: number[][] = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  aSol: number[][];

  canEdit: boolean = true;

  constructor(private service: MazeService) {
    this.board = new Maze(this.maze.length);
   }

  ngOnInit() {
  }

  createTrans(createTra, reset) {

    this.canEdit = false;
    
    if(!this.service.createTrans(createTra, reset, this.aSol, this.board, this.maze, this.sol)){
      this.canEdit = true;
    }

  }

  reset(createTra) {
    this.service.reset(createTra, this.sol);
    this.canEdit = true;
  }

  setBlock(i:number, j:number) {

    if(this.canEdit){
      this.service.setBlock(i, j, this.maze);
    }

  }

  closePara(ele: HTMLDivElement) {

    ele.classList.add('close-para');

  }

}
