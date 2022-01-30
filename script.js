let gridInput = 16;
const container = document.querySelector('#container');
const grid = document.createElement('div');
const btn = document.querySelector('#reset');
const erase = document.querySelector('#erase');

grid.setAttribute('id', 'grid');

container.appendChild(grid);

btn.addEventListener('click', e => makeGrid(e));

erase.addEventListener('click', eraseAll);

function eraseAll() {
    let gridElement = container.querySelectorAll('div');
    gridElement.forEach(gridElement => gridElement.style.backgroundColor = '#ffffff');    
}

function makeGrid(input) {

    input = prompt('Give me a number');

    if (input < 101) {

        for (i = 0; i < (input * input); i++) {
        let gridElement = document.createElement('div');
        grid.appendChild(gridElement);
        gridElement.classList.add('gridElement');
        gridElement.addEventListener('mouseover', e => e.target.classList.add('hovering'));
        }

        grid.style.cssText = `grid-template-columns: repeat(${input}, ${800/input}px); grid-template-rows: repeat(${input}, ${800/input}px);`;
    }   else return alert("Must be <= 100!");
    
}

makeGrid(16);










//const container = document.querySelector("#container");
//const btn = document.querySelector('#reset');
//
//btn.addEventListener('click', promptUser);
//
//let squareNumber = 16;
//
//for (i = 0; i < (squareNumber * squareNumber); i++) {
//    let grid = document.createElement("div");
//    grid.id = 'grid' + i;
//    grid.className = 'grid';
//    container.appendChild(grid);
//    grid.addEventListener('mouseover', 
//    e => e.target.classList.add('hovering'));
//    //grid.addEventListener('mouseout', e => e.target.classList.remove('hovering'));
//}
//
//function promptUser() {
//    let user = prompt("Give me a number");
//    if (user < 101) {
//        squareNumber = user;
//    }
//}



