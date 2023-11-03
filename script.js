// THESE ARE just the current values, nothing is dependent on them, change them here and everything will work the same
const calhoun_char = 'b';
const out_letter = 'e';
const wall = '1';
const empty = '-';
const path = 'p';
const fastest_path_count = 0;    
let currStep = 0;    

        function displayImageGrid(grid) {
            const characterGridDiv = document.getElementById("characterGrid");
            characterGridDiv.innerHTML = "";
        
            // Define the mapping for your characters to image sources
            const characterToImage = {
                [wall] : 'border.png',
                [empty] : 'tile.png',
                [calhoun_char] : 'start.png',
                [out_letter] : 'exit.png',
            };
        
            for (let i = 0; i < grid.length; i++) 
            {
                const rowDiv = document.createElement("div");
                rowDiv.style.display = 'flex'; // Center content horizontally
        
                for (let j = 0; j < grid[i].length; j++) 
                {
                    const cellImg = document.createElement("img");
                    const character = grid[i][j];
        
                    if (characterToImage[character]) 
                    {
                        if(j == 0)
                        {
                            cellImg.style.textIndent = '50px';
                        }
                        cellImg.src = characterToImage[character];
                        cellImg.alt = character; // Optional, set alt text for accessibility
        
                        // Adjust the image size using JavaScript
                        cellImg.style.width = '65px'; // Adjust the size as needed
                        cellImg.style.height = '65px'; // Adjust the size as needed
    
        
                        rowDiv.appendChild(cellImg);
                    }
                }
                characterGridDiv.appendChild(rowDiv);
            }
        }
        
        function gridifyMaze(string, rows, cols) {
            const grid = [];
            for (let i = 0; i < rows; i++) {
                const row = [];
                for (let j = 0; j < cols; j++) {
                    let value = (i * rows) + j;
                    row.push(string.charAt(value));
                }
                grid.push(row);
            }
            return grid;
        }

        // Define the size of the grid (change these values as needed)
        const numRows = 10;
        const numCols = 10;
        const mazeMess = "1111111111b------1-11--1-1---11-111111111-1----1-11-1--1-1-11-1111-1-11----1---11-1----1-e1111111111";

        let grid = gridifyMaze(mazeMess, numRows, numCols);

        displayImageGrid(grid);

        let solver = new Maze_Solver(grid);
        solver.solve();
        let fastestPath = solver.getFastestPath();
        for (let i = 0; i < fastestPath.length; i++) {
            console.log(fastestPath[i][0] + " " + fastestPath[i][1]);
        }

        // access the two html button objects
        const buttonForward = document.getElementById('forward_button');
        const buttonBackwards = document.getElementById('backwards_button');
                
        // add event handling to each button
        buttonForward.addEventListener('click', () => {
            moveForward();
            displayImageGrid(grid);
        });
        buttonBackwards.addEventListener('click', () => moveBackwards());

        function moveForward() {

            // alert("Forward Button Clicked!"); // event handling check
        
            // check to make sure we do not read out of bounds
            if (currStep + 1 >= fastestPath.length) { return; }
        
            // get the (x, y) coords of next move
            y = fastestPath[currStep + 1][0];
            x = fastestPath[currStep + 1][1];
        
            // set the next move to a path
            grid[y][x] = calhoun_char;
        
            // update current step
            currStep++;
        
            // alert("Forward Button Clicked!");
          }
        
          function moveBackwards() {
        
            // alert("Backwards Button Clicked!"); // event handling check
        
            // check to make sure we do not read out of bounds
            if (currStep < 0 || currStep > maze.length) { return; }
        
            // get the (x, y) coords of the current move
            x = fastestPath[currStep][0];
            y = fastestPath[currStep][1];
        
            // set the current gridspace to an empty space
            grid[x][y] = empty;
        
            // update current step
            currStep--;
        
            alert("Backwards Button Clicked!");
          }
        



