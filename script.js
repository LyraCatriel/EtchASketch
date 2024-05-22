const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.addEventListener("mouseover", mouseOver)
    container.appendChild(cell).className = "grid-item";

  };
};

function mouseOver() {
  this.style.backgroundColor = "red";
}

function resizeRows() {
  document.getElementById("container").innerHTML = "";
  rows = prompt("Pick an amount of squares per side ");
  cols = rows
  makeRows(rows, cols);
}

// makeRows(16, 16);
