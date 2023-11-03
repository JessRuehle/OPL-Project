
/*
    WORK IN PROGRESS, but as the great drueC says: the public interface will remain the same

    TO DO: copy the solved maze into an array as a ?backup? 
*/
class Maze_Solver {
    maze;    
    path = [];
    fastestPath = [];
    pathCount = 0;
    solutionCount = 0;
    solutionMaze;
    fastestPathCount = 0;
    currentPathCount = 0;

    constructor(grid) {
        this.maze = new Array(grid.length);
        // this.maze = grid;
        this.solutionMaze = new Array(grid.length);

        for (let i = 0; i < grid.length; i++) {
            this.maze[i] = new Array(grid[0].length);
            this.solutionMaze[i] = new Array(grid[0].length);

            var string = "";

            for (let j = 0; j < grid[0].length; j++) {
                this.maze[i][j] = grid[i][j];
                string += grid[i][j];
            }
            console.log(string);
        }

    }



    findSolution(currY, currX) {


        if (this.maze[currY][currX] == out_letter) {
            this.solutionCount++;

            // is this first solution?
            if (this.solutionCount == 1) {
                
                for (let i = 0; i < this.maze.length; i++) {
                    for (let j = 0; j < this.maze[0].length; j++) {
                        this.solutionMaze[i][j] = this.maze[i][j];
                    }
                }

                for (let i = 0; i < this.path.length; i++) {
                    this.fastestPath.push(this.path[i]);
                    console.log(i + " : " +this.path[i][0] + ", " + this.path[i][1]);
                }

                for (let i = 0; i < this.fastestPath.length; i++) {
                    // this.fastestPath.push(this.path[i]);
                    console.log(i + " : " +this.fastestPath[i][0] + ", " + this.fastestPath[i][1]);
                }

            }

            else if (this.fastestPathCount > this.currentPathCount) {
                this.fastestPathCount = this.currentPathCount;

                for (let i = 0; i < this.fastestPath.length; i++) {
                    this.fastestPath.pop();
                }

                for (let i = 0; i < this.path.length; i++) {
                    this.fastestPath.push(this.path[i]);
                }
            }

            for (let i = 0; i < this.path.length; i++) {
                this.path.pop();
            }
            return;
        }

                // can't go through walls, don't double search
                if(this.maze[currY][currX] == wall || this.maze[currY][currX] == path) {
                    return;
                }
            
                this.maze[currY][currX] = path;
                this.path.push([currY, currX]);
                this.currentPathCount++;
            
                // recursively check right
                if ((currX + 1) < this.maze[0].length) {
                    // var next = new Array(2);
                    // next[0] = currY;
                    // next[1] = currX + 1;
                    // this.path.push(next);
                    this.findSolution(currY, currX + 1);
                }
            
                // left
                if ((currX - 1) >= 0) {
                    var next = new Array(2);
                    // next[0] = currY;
                    // next[1] = currX - 1;
                    // this.path.push(next);
                    this.findSolution(currY, currX - 1);
                }
            
                // down
                if ((currY + 1) < this.maze.length) {
                    // var next = new Array(2);
                    // next[0] = currY + 1;
                    // next[1] = currX;
                    // this.path.push(next);
                    this.findSolution(currY + 1, currX);
                }
            
                // and up
                if ((currY - 1) >= 0) {
                    // var next = new Array(2);
                    // next[0] = currY - 1;
                    // next[1] = currX;
                    // this.path.push(next);
                    this.findSolution(currY - 1, currX);
                }
            
                // if there is no valid movement, it's a dead end. remove your tracks
                this.maze[currY][currX] = empty; 
                this.path.pop();
                this.currentPathCount--;
    }

    getFastestPath() {
        return this.fastestPath;
    }

    solve() {
        var start = findBeginning(this.maze);
        console.log(start[0] + ", " + start[1]);
        let y = start[0];
        let x = start[1];
        this.findSolution(y, x);
    }

    printMaze() {
        for (let i = 0; i < this.maze.length; i++) {
            var string = "";
            for (let j = 0; j < this.maze[0].length; j++) {
                string += this.maze[i][j];
            }
            console.log(string);
        }
    }

    printSolution() {
        for (let i = 0; i < this.maze.length; i++) {
            var string = "";
            for (let j = 0; j < this.maze[0].length; j++) {
                string += this.solutionMaze[i][j];
            }
            console.log(string);
        }
    }
}



function findBeginning(arr) {
    var start = new Array(2);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] == in_letter) {
                start[0] = i;
                start[1] = j;
            } 
        }
    }
    return start;
}