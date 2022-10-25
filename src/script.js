'use strict';

const bodyEl = document.querySelector('body');
const gridContainer = document.querySelector('.grid-container');

// Grid Sizing:
const rectInp = document.querySelector('.rectangle-input');
const gapInp = document.querySelector('.gap-input');
const gridSizingForm = document.querySelector('.grid-sizing-form');

// Grid Coloring:
const rectColor = document.querySelector('.cell-color-input');
const gapColor = document.querySelector('.gap-color-input');
const colorPaletteForm = document.querySelector('.grid-color-form');
const rainbowCheckbox = document.querySelector('input[name=checkbox-rainbow]');
const colorOptions = 255;
const defaultColor = '#ff143fca';
let cellColor;
let rainbowColor;
let toggleRainbow;

// Cell Glow
const innerGlow = document.querySelector('.inner-glow-input');
const outerGlow = document.querySelector('.outer-glow-input');
const innerGlowForm = document.querySelector('.inner-glow-form');
const outerGlowForm = document.querySelector('.outer-glow-form');
const disableGlowCheckbox = document.querySelector('input[name=checkbox-glow]');
let defaultShadow;
let innerGlowValue;
let outerGlowValue;
let toggleShadow;

// Options
const saveBtn = document.querySelector('.save-btn');
const resetBtn = document.querySelector('.reset-btn');
const options = {
  filename: 'etch-a-glow-art.pdf',
  jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' },
};

// Functions

// Grid Sizing
const generateGrid = () => {
  const rectValue = +rectInp.value;
  const gapValue = +gapInp.value;
  const numOfRect = rectValue * rectValue;
  gridContainer.innerHTML = '';
  for (let i = 1; i <= numOfRect; i++) {
    // Validation:
    if (rectValue >= 101) return;
    if (gapValue >= 6) return;
    // Generate grid
    gridContainer.style.gridTemplateColumns = `repeat(${rectValue}, minmax(0.1rem, 1fr)`;
    gridContainer.style.gap = `${gapValue / 10}rem`;
    const rectEl = document.createElement('div');
    rectEl.setAttribute('data-id', 'box');
    rectEl.classList.add('rect');
    gridContainer.appendChild(rectEl);
  }
};

// Color Palette
const getCellColor = () => (cellColor = rectColor.value);

const changeGapColor = () => {
  const gapColorValue = gapColor.value;
  gridContainer.style.backgroundColor = gapColorValue;
};

const enableRainbow = function () {
  if (this.checked) {
    toggleRainbow = true;
  } else {
    toggleRainbow = false;
  }
};

const getRandomColor = function (num) {
  const firstRandomNum = Math.floor(Math.random() * num);
  const secondRandomNum = Math.floor(Math.random() * num);
  const thirdRandomNum = Math.floor(Math.random() * num);
  return `rgb(${firstRandomNum}, ${secondRandomNum}, ${thirdRandomNum})`;
};

// Glow Infuser Function
const changeGlow = function () {
  // Glow functions
  const getInnerGlow = () => {
    innerGlowValue = innerGlow.value;
    toggleShadow = true;
  };
  const getOuterGlow = () => {
    outerGlowValue = outerGlow.value;
    toggleShadow = false;
  };

  // Glow Event Listeners
  innerGlowForm.addEventListener('input', getInnerGlow);

  outerGlowForm.addEventListener('input', getOuterGlow);
};

const enableShadows = function () {
  if (this.checked) {
    defaultShadow = `0 3px 10px rgb(0 0 0 / 0.2)`;
  } else {
    defaultShadow = changeGlow();
  }
};

// Mouseover Div Function
const generateCellStyles = e => {
  const boxEl = e.target.closest('div');
  if (!boxEl) return;
  boxEl.style.backgroundColor = defaultColor;
  boxEl.style.backgroundColor = `${cellColor}`;

  if (toggleRainbow) {
    boxEl.style.backgroundColor = getRandomColor(colorOptions);
  }

  if (toggleShadow) {
    boxEl.style.boxShadow = `inset 0 0 1.2rem ${innerGlowValue}`;
  } else {
    boxEl.style.boxShadow = `0 0 1.2rem ${outerGlowValue}`;
  }
  boxEl.style.boxShadow = defaultShadow;
};

// Options
const saveToPDF = () => {
  html2pdf().set(options).from(bodyEl).save();
};

const refresh = () => window.location.reload();

// Event Listeners
resetBtn.addEventListener('click', refresh);

gridContainer.addEventListener('mouseover', generateCellStyles);

colorPaletteForm.addEventListener('input', getCellColor);

rainbowCheckbox.addEventListener('change', enableRainbow);

disableGlowCheckbox.addEventListener('change', enableShadows);

gridSizingForm.addEventListener('input', generateGrid);

colorPaletteForm.addEventListener('input', changeGapColor);

saveBtn.addEventListener('click', saveToPDF);

// Function calls
getRandomColor(colorOptions);
changeGlow();
