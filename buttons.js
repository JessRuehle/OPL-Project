 
  function moveForward() {

    alert("Forward Button Clicked!"); // event handling check

    // check to make sure we do not read out of bounds
    if (currStep + 1 >= fastestPath.length) { return; }

    // get the (x, y) coords of next move
    x = fastestPath[currStep + 1][0];
    y = fastestPath[currStep + 1][1];

    // set the next move to a path
    maze[x][y] = path;

    // update current step
    currStep++;

    alert("Forward Button Clicked!");
  }

  function moveBackwards() {

    alert("Backwards Button Clicked!"); // event handling check

    // check to make sure we do not read out of bounds
    if (currStep < 0 || currStep > maze.length) { return; }

    // get the (x, y) coords of the current move
    x = fastestPath[currStep][0];
    y = fastestPath[currStep][1];

    // set the current gridspace to an empty space
    maze[x][y] = empty;

    // update current step
    currStep--;

    alert("Backwards Button Clicked!");
  }

  // access the two html button objects
  const buttonForward = document.getElementById('forward_button');
  const buttonBackwards = document.getElementById('backwards_button');

  // add event handling to each button
  buttonForward.addEventListener('click', () => moveForward());
  buttonBackwards.addEventListener('click', () => moveBackwards());
