"use strict";

const gridContainer = document.querySelector(".grid-container");

const sixteenGrid = () => {
  for (let i = 1; i <= 256; i++) {
    const squareEl = document.createElement("div");
    squareEl.classList.add("square");
    gridContainer.appendChild(squareEl);
  }
};

sixteenGrid();

// const twentyFourGrid = () => {
//   for (let i = 1; i <= 576; i++) {
//     const squareEl = document.createElement("div");
//     squareEl.classList.add("small-square");
// Also change grid template columns
//     gridContainer.appendChild(squareEl);
//   }
// };

// twentyFourGrid();
