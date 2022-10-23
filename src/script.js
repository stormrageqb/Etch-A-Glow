"use strict";

const gridContainer = document.querySelector(".grid-container");
const rectInp = document.querySelector(".rectangle-input");
const gapInp = document.querySelector(".gap-input");
const gridSizingForm = document.querySelector(".grid-sizing-form");

// const sixteenGrid = () => {
//   for (let i = 1; i <= 256; i++) {
//     const rectEl = document.createElement("div");
//     rectEl.setAttribute("data-id", "box");
//     rectEl.classList.add("rect");
//     gridContainer.appendChild(rectEl);
//   }
// };

// sixteenGrid();

gridContainer.addEventListener("mouseover", function (e) {
  const boxEl = e.target.closest("div");
  if (!boxEl) return;
  //   console.log(boxEl);
  //   console.log("box!!");
  boxEl.style.backgroundColor = "blue";
});

gridSizingForm.addEventListener("input", (e) => {
  e.preventDefault();
  const rectValue = +rectInp.value;
  const gapValue = +gapInp.value;
  console.log(gapValue);
  const numOfRect = rectValue * rectValue;
  console.log(rectValue);
  gridContainer.innerHTML = "";
  for (let i = 1; i <= numOfRect; i++) {
    // gridContainer.style.gridTemplateColumns = `repeat(${formValue}, minmax(0.5rem, 1fr)`;
    if (rectValue >= 101) return;
    if (gapValue >= 6) return;
    gridContainer.style.gridTemplateColumns = `repeat(${rectValue}, minmax(0.1rem, 1fr)`;
    gridContainer.style.gap = `${gapValue / 10}rem`;
    const rectEl = document.createElement("div");
    rectEl.setAttribute("data-id", "box");
    rectEl.classList.add("rect");
    gridContainer.appendChild(rectEl);
  }
});

// console.log(getFormValue());

// const twentyFourGrid = () => {
//   for (let i = 1; i <= 576; i++) {
//     const squareEl = document.createElement("div");
//     squareEl.classList.add("small-rect");
// Also change grid template columns
//     gridContainer.appendChild(squareEl);
//   }
// };

// twentyFourGrid();
