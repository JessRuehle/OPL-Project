  /*
  There are three approaches to integrating these functions and event handlers into our program

  1. Put the functions in maze_solver.js as functions of the class and
    put the event handlers in the grid constructor
  2. Export the class in maze_solver.js and import it here
  3. Do #2 but create setters and getters in maze_solver.js class to
    limit (what I think could be) potential issues and tedious implementation
  
  */
  
  function moveForward(currStep) {

    alert("Forward Button Clicked!"); // event handling check

    // check to make sure we do not read out of bounds
    if (currStep + 1 >= fastestPath.length) { return; }

    // get the (x, y) coords of next move
    x = fastestPath[currStep + 1][0];
    y = fastestPath[currStep + 1][1];

    // set the next move to a path
    maze[x][y] = path;

    alert("Forward Button Clicked!");
  }

  function moveBackwards(currStep, maze, fastestPath) {

    alert("Backwards Button Clicked!"); // event handling check

    // check to make sure we do not read out of bounds
    if (currStep < 0 || currStep > maze.length) { return; }

    // get the (x, y) coords of the current move
    x = fastestPath[currStep][0];
    y = fastestPath[currStep][1];

    // set the current gridspace to an empty space
    maze[x][y] = empty;

    alert("Backwards Button Clicked!");
  }

  // access the two html button objects
  const buttonForward = document.getElementById('forward_button');
  const buttonBackwards = document.getElementById('backwards_button');

  // add event handling to each button
  buttonForward.addEventListener('click', () => moveForward(/* add args here */));
  buttonBackwards.addEventListener('click', () => moveBackwards(/* add args here */));
