let backgroundColor = "black";
let isRainbow = false;

//Select buttons and input value
const inputGrid = document.querySelector("#grid-input");
const sketchCanvas = document.querySelector(".sketch-canvas");
const colorInput = document.querySelector("#color-input");
const clearGrid = document.querySelector(".clear");
const rainbow = document.querySelector(".rainbow");
const reset = document.querySelector(".reset");

//Handling input event
inputGrid.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    //create a grid:-
    //1]Get grid dimensions
    let gridSize = parseInt(inputGrid.value);
    //Grid Size should be less than 100
    if (gridSize > 100) {
      alert("Input Should be between 0-100");
      inputGrid.value = "";
      return;
    }

    //clear previous grid
    sketchCanvas.innerHTML = "";

    //Create a grid
    createGrid(gridSize);

    //Adding hover effect to grid
    const cell = document.querySelectorAll(".cell");
    cell.forEach((cell) => {
      cell.addEventListener("mouseover", () => {
        //Check if it is a rainbow effect or not
        if (isRainbow) {
          cell.style.background = randomColor();
        } else {
          cell.style.background = backgroundColor;
        }
      });
    });
  }
});

//Create the grid
function createGrid(gridSize) {
  //Create rows then columns wrt rows
  //rows
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const div = document.createElement("div");
      div.className = "cell";
      div.style.width = 100 / gridSize + "%";
      div.style.height = 100 / gridSize + "%";
      sketchCanvas.appendChild(div);
    }
  }
}

//Selecting a color
//Check for rainbow effect

colorInput.addEventListener("input", () => {
  if (isRainbow) {
    isRainbow = !isRainbow;
  }
  backgroundColor = colorInput.value;
});

//Clear button event
clearGrid.addEventListener("click", () => {
  const cell = document.querySelectorAll(".cell");
  cell.forEach((cell) => {
    cell.style.background = "white";
  });
});

//Rainbow button event
rainbow.addEventListener("click", () => {
  isRainbow = !isRainbow;
});

//Random color generator
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + color.join(", ") + ")";
}

//Reset the sketch-canvas
reset.addEventListener("click", () => {
  inputGrid.value = "";
  sketchCanvas.innerHTML = "";
});
