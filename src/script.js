"use strict";

const gridContainer = document.querySelector(".grid-container");

const sixteenGrid = () => {
  for (let i = 1; i <= 256; i++) {
    const rectEl = document.createElement("div");
    rectEl.setAttribute("data-id", "box");
    rectEl.classList.add("rect");
    gridContainer.appendChild(rectEl);
  }
};

sixteenGrid();

gridContainer.addEventListener("mouseover", function (e) {
  const boxEl = e.target.closest("div");
  if (!boxEl) return;
  console.log(boxEl);
  console.log("box!!");
  boxEl.style.backgroundColor = "blue";
});

// const twentyFourGrid = () => {
//   for (let i = 1; i <= 576; i++) {
//     const squareEl = document.createElement("div");
//     squareEl.classList.add("small-rect");
// Also change grid template columns
//     gridContainer.appendChild(squareEl);
//   }
// };

// twentyFourGrid();
