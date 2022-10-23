"use strict";

const gridContainer = document.querySelector(".grid-container");
const rectInp = document.querySelector(".rectangle-input");
const numberFormEl = document.querySelector(".number-form");

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

numberFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formValue = +rectInp.value;
  const numOfRect = formValue * formValue;
  console.log(formValue);
  gridContainer.innerHTML = "";
  for (let i = 1; i <= numOfRect; i++) {
    // gridContainer.style.gridTemplateColumns = `repeat(${formValue}, minmax(0.5rem, 1fr)`;
    gridContainer.style.gridTemplateColumns = `repeat(${formValue}, minmax(0.1rem, 1fr)`;
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
