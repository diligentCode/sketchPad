let backgroundColor = "black";

//Select buttons and input value
const inputGrid = document.querySelector("#grid-input");
const sketchCanvas = document.querySelector(".sketch-canvas");
const colorInput = document.querySelector("#color-input");
const clearGrid = document.querySelector(".clear");

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
        cell.style.background = backgroundColor;
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
colorInput.addEventListener("input", () => {
  backgroundColor = colorInput.value;
});

//Clear button event
clearGrid.addEventListener("click", () => {
  const cell = document.querySelectorAll(".cell");
  cell.forEach((cell) => {
    cell.style.background = "white";
  });
});
