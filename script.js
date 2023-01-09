const board = document.querySelector(".board");
const reset = document.querySelector("#reset");
const eraser = document.querySelector("#eraser");
const black = document.querySelector("#black");
const rainbow = document.querySelector("#rainbow");

let erase = false;
let color = false;
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];

board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.border = "1px solid rgba(0, 0, 0, 0.1)";

  board.appendChild(square);
}

const squares = document.querySelectorAll(".square");

squares.forEach((square) =>
  square.addEventListener("mousemove", () => {
    if (color) {
      const random = Math.floor(Math.random() * colors.length);
      square.style.backgroundColor = colors[random];
    } else if (!erase) {
      square.style.backgroundColor = "black";
    } else {
      square.style.backgroundColor = "white";
    }
  })
);

reset.addEventListener("click", () => {
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});

eraser.addEventListener("click", () => {
  erase = true;
  color = false;
});

black.addEventListener("click", () => {
  erase = false;
  color = false;
});

rainbow.addEventListener("click", () => {
  color = true;
  erase = false;
});
