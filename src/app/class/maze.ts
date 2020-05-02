export class Maze {
    n: number;
    constructor(val: number) {
        this.n = val;
    }
    
    createSol() {
        let sol = [];
        for(let i = 0; i < this.n; i++) {
            let temp = [];
            for(let j = 0; j < this.n; j++) {
                temp.push(0);
            }
            sol.push(temp);
        }
        
        return sol;
    }
    
    
    isSafe(x, y, maze) {
        return (x >= 0 && x < this.n &&
               y >= 0 && y < this.n && maze[x][y] == 1);
    }
    
    
    solveMaze(maze) {
        
        let sol = this.createSol();
        
        if(this.solveMazeUtil(0, 0, maze, sol)) {
            console.log(sol);
            return sol;
        }
        
        return undefined;
    }
    
    
    
    
    solveMazeUtil(x, y, maze, sol) {
        if(x == this.n - 1 && y == this.n - 1) {
            sol[x][y] = 1;
            return true;
        }
        
        if(this.isSafe(x, y, maze)) {
            
            sol[x][y] = 1;
            
            if(this.solveMazeUtil(x + 1, y, maze, sol)) {
                return true;
            }
            
            if(this.solveMazeUtil(x, y + 1, maze, sol)) {
                return true;
            }
            
            
            sol[x][y] = 0;
            
        }
        
        return false;
    }
}