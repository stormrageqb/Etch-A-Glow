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

// Cell Glow
const innerGlow = document.querySelector('.inner-glow-input');
const outerGlow = document.querySelector('.outer-glow-input');
const innerGlowForm = document.querySelector('.inner-glow-form');
const outerGlowForm = document.querySelector('.outer-glow-form');
const rainbowCheckbox = document.querySelector('input[name=checkbox-rainbow]');
const disableGlowCheckbox = document.querySelector('input[name=checkbox-glow]');
let rainbowColor;
let defaultShadow;
let innerGlowValue;
let outerGlowValue;
let toggle;
let toggleRainbow;

// Options
const saveBtn = document.querySelector('.save-btn');
const resetBtn = document.querySelector('.reset-btn');

resetBtn.addEventListener('click', function () {
  window.location.reload();
});

gridContainer.addEventListener('mouseover', function (e) {
  const boxEl = e.target.closest('div');
  if (!boxEl) return;
  boxEl.style.backgroundColor = defaultColor;
  boxEl.style.backgroundColor = `${cellColor}`;

  if (toggleRainbow) {
    boxEl.style.backgroundColor = getRandomColor(255);
  }

  if (toggle) {
    boxEl.style.boxShadow = `inset 0 0 1.2rem ${innerGlowValue}`;
  } else {
    boxEl.style.boxShadow = `0 0 1.2rem ${outerGlowValue}`;
  }
  boxEl.style.boxShadow = defaultShadow;
});

colorPaletteForm.addEventListener('input', function () {
  cellColor = rectColor.value;
  console.log(cellColor);
});

const changeGlow = function () {
  innerGlowForm.addEventListener('input', function () {
    innerGlowValue = innerGlow.value;
    toggle = true;
    console.log(innerGlowValue);
  });

  outerGlowForm.addEventListener('input', function () {
    outerGlowValue = outerGlow.value;
    toggle = false;
    console.log(outerGlowValue);
  });
};

changeGlow();

rainbowCheckbox.addEventListener('change', function () {
  if (this.checked) {
    // rainbowColor = getRandomColor(255);
    // console.log(rainbowColor);
    toggleRainbow = true;
  } else {
    toggleRainbow = false;
  }
});

disableGlowCheckbox.addEventListener('change', function () {
  if (this.checked) {
    defaultShadow = `0 3px 10px rgb(0 0 0 / 0.2)`;
  } else {
    defaultShadow = changeGlow();
  }
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

const getRandomColor = function (num) {
  const arr = [];
  // const possibilties = ['a','b','c','d']
  // const pound = '#';
  // arr.push(pound);
  // console.log(arr);
  const firstRandomNum = Math.floor(Math.random() * num);
  const secondRandomNum = Math.floor(Math.random() * num);
  const thirdRandomNum = Math.floor(Math.random() * num);
  console.log(firstRandomNum);
  console.log(secondRandomNum);
  console.log(thirdRandomNum);
  return `rgb(${firstRandomNum}, ${secondRandomNum}, ${thirdRandomNum})`;
};

getRandomColor(255);
// console.log(getRandomColor(255));

const bodyEl = document.querySelector('body');
const options = {
  filename: 'etch-a-glow-art.pdf',
  jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' },
};

saveBtn.addEventListener('click', function () {
  html2pdf().set(options).from(bodyEl).save();
});
