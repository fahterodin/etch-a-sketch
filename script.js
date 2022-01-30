let currentSize = 16;
let currentMode = 'black';

const grid = document.querySelector('#grid');
const size = document.querySelector('size');
const reset = document.querySelector('#reset');
const slider = document.querySelector('#slider');
const rainbowBtn = document.querySelector('#rainbow');
const blackBtn = document.querySelector('#black');
const fadeBtn = document.querySelector('#fade');

reset.onclick = () => reloadGrid();
slider.onchange = (e) => changeSize(e.target.value);
slider.onmousemove = (e) => updateSizeValue(e.target.value);
rainbowBtn.onclick = () => setCurrentMode('rainbow');
blackBtn.onclick = () => setCurrentMode('black');
fadeBtn.onclick = () => setCurrentMode('fade');

grid.onclick = () => togglePen;

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mouseover', changeColor);
        grid.appendChild(gridElement);
    }
}

function changeSize(value) {
    setCurrentSize(value);
    reloadGrid();
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

function updateSizeValue(value) {
    sizeValue.textContent = `${value} x ${value}`;
}

function reloadGrid() {
    clearGrid();
    setupGrid(currentSize);
}

let r = 255;
let g = 255;
let b = 255;

function changeColor(e) {
    if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'black') {
        e.target.style.backgroundColor = 'black';
    } else if (currentMode === 'fade') {
            if (r > 0) {
            r -= 25.5;
            g -= 25.5;
            b -= 25.5;
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        } else { r = 255; b = 255; g = 255};
    }
}

function clearGrid() {
    grid.textContent = '';
}

function setCurrentMode(newMode) {
    currentMode = newMode;
}

setupGrid(currentSize);

