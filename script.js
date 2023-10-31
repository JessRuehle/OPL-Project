
// THESE ARE just the current values, nothing is dependent on them, change them here and everything will work the same
const in_letter = 'b';
const out_letter = 'e';
const wall = '1';
const empty = '-';
const path = 'p';
const fastest_path_count = 0;

        // Function to display the character grid on the website
        function displayCharacterGrid(grid, width, height) {
            const characterGridDiv = document.getElementById("characterGrid");
            // characterGridDiv.innerHTML = ""; <- this line would delete everything currently on the page?

            for (let i = 0; i < height; i++) {
                const rowDiv = document.createElement("div");
                for (let j = 0; j < width; j++) {
                    const cellSpan = document.createElement("span");
                    cellSpan.textContent = grid[i][j] + "   ";
                    rowDiv.appendChild(cellSpan);
                }
                characterGridDiv.appendChild(rowDiv);
            }
        }

        function gridifyMaze(string, width, height) {
            const grid = new Array(height);
            for (let i = 0; i < height; i++) {
                var row = new Array(width);
                grid[i] = row;
                for (let j = 0; j < width; j++) {
                    grid[i][j] = string.charAt((width * i) + j);
                }
            }
            return grid;
        }

        // Define the size of the grid (change these values as needed)
        const width = 10;
        const height = 10;

        const mazeMess ="1111111111b---1--1-11-1----1-11111-111-11-1----1-11---11---11-1--1-1-11-1111-1-11-1----1-e1111111111";
        let grid = gridifyMaze(mazeMess, width, height);


        displayCharacterGrid(grid, width, height);
        var start = new Array(2);

        const testingOutput = document.getElementById("characterGrid");

        const out = document.createElement("div");
        out.textContent = start[0] + " " + start[1];
        // out.textContent = "Sanity";

        testingOutput.appendChild(out);

        let solver = new Maze_Solver(grid);
        solver.solve();

        // this array is for jess
        let solved = solver.getFastestPath();
        for (let i = 0; i < solved.length; i++) {
console.log(solved[i][0] + " " + solved[i][1]);
        }
        solver.printSolution();
