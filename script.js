        // Function to generate a random character
        function getRandomCharacter() {
            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            const randomIndex = Math.floor(Math.random() * characters.length);
            return characters[randomIndex];
        }

        // Function to generate a 2D array of random characters
        function generateRandomCharacterGrid(rows, cols) {
            const grid = [];
            for (let i = 0; i < rows; i++) {
                const row = [];
                for (let j = 0; j < cols; j++) {
                    row.push(getRandomCharacter());
                }
                grid.push(row);
            }
            return grid;
        }

        // Function to display the character grid on the website
        // function displayImageGrid(grid) 
        // {
        //     const characterGridDiv = document.getElementById("characterGrid");
        //     characterGridDiv.innerHTML = "";

        //     for (let i = 0; i < grid.length; i++) 
        //     {
        //         const rowDiv = document.createElement("div");
        //         for (let j = 0; j < grid[i].length; j++) 
        //         {
        //             const cellSpan = document.createElement("span");
        //             cellSpan.textContent = grid[i][j] + "   ";
        //             rowDiv.appendChild(cellSpan);
        //         }
        //         characterGridDiv.appendChild(rowDiv);
        //     }
        // }

        function displayImageGrid(grid) {
            const characterGridDiv = document.getElementById("characterGrid");
            characterGridDiv.innerHTML = "";
        
            // Define the mapping for your characters to image sources
            const characterToImage = {
                '1': 'border.png',
                '-': 'tile.png',
                'b': 'start.png',
                'e': 'exit.png',
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


        // Generate the random character grid and display it
        const randomCharacterGrid = generateRandomCharacterGrid(numRows, numCols);
        displayImageGrid(grid);
