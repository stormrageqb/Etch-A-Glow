'use strict';

const gridContainer = document.querySelector('.grid-container');

// Grid Sizing:
const rectInp = document.querySelector('.rectangle-input');
const gapInp = document.querySelector('.gap-input');
const gridSizingForm = document.querySelector('.grid-sizing-form');

// Grid Coloring:
const rectColor = document.querySelector('.cell-color-input');
const gapColor = document.querySelector('.gap-color-input');
const colorPaletteForm = document.querySelector('.grid-color-form');
const defaultColor = '#ff143fca';
let cellColor;

gridContainer.addEventListener('mouseover', function (e) {
  const boxEl = e.target.closest('div');
  if (!boxEl) return;
  boxEl.style.backgroundColor = defaultColor;
  boxEl.style.backgroundColor = `${cellColor}`;
});

colorPaletteForm.addEventListener('input', function () {
  cellColor = rectColor.value;
  console.log(cellColor);
});

gridSizingForm.addEventListener('input', e => {
  e.preventDefault();
  const rectValue = +rectInp.value;
  const gapValue = +gapInp.value;
  console.log(gapValue);
  const numOfRect = rectValue * rectValue;
  console.log(rectValue);
  gridContainer.innerHTML = '';
  for (let i = 1; i <= numOfRect; i++) {
    // gridContainer.style.gridTemplateColumns = `repeat(${formValue}, minmax(0.5rem, 1fr)`;
    if (rectValue >= 101) return;
    if (gapValue >= 6) return;
    gridContainer.style.gridTemplateColumns = `repeat(${rectValue}, minmax(0.1rem, 1fr)`;
    gridContainer.style.gap = `${gapValue / 10}rem`;
    const rectEl = document.createElement('div');
    rectEl.setAttribute('data-id', 'box');
    rectEl.classList.add('rect');
    gridContainer.appendChild(rectEl);
  }
});

colorPaletteForm.addEventListener('input', function () {
  const gapColorValue = gapColor.value;
  // console.log(gapColorValue);
  gridContainer.style.backgroundColor = gapColorValue;
});
