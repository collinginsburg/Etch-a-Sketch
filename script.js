// remove old squares
function removeOldSquares(){
    squares.forEach(item => gridcontainer.removeChild(item));
}

// user prompt
let userInput;

function howManySquares(){
    userInput = parseInt(prompt('How many squares do you want on each side of your grid? (Max 100)'));
    return userInput
}

// grid reset
let squares = document.querySelectorAll('.square');

function unsketch(){
    squares.forEach(item => item.classList.remove('sketched'));
    squares.forEach(item => item.classList.add('unsketched'));
}
// reset grid template
function resetGridTemplate(){
    gridcontainer.style.gridTemplateRows = "none";
    gridcontainer.style.gridTemplateColumns = "none";

}
// set new grid container
const gridcontainer = document.querySelector('.gridcontainer');

function setGridRow(){
    gridcontainer.style.gridTemplateRows = `repeat(${userInput}, auto)`;
}
function setGridColumn(){
    gridcontainer.style.gridTemplateColumns = `repeat(${userInput}, auto)`;
}

// reset the grid and prompt user for new grid
function newGrid(){
    unsketch();
    removeOldSquares();
    resetGridTemplate();
    howManySquares();
    setGridRow();
    setGridColumn();
    createGrid();
    squares = document.querySelectorAll('.square');
    sketchTheGrid();
}

// set initial grid
function initialGrid(){
    unsketch();
    resetGridTemplate();
    howManySquares();
    setGridRow();
    setGridColumn();
    createGrid();
    squares = document.querySelectorAll('.square');
    sketchTheGrid();
}

// create squares
function createGrid(){

    let i = 1;

    let column = userInput;
    let grid = userInput * column;

    while (i <= grid){
        let square = document.createElement('div');
        square.style.cssText = "width:100%; height:100%";
        square.classList.add(`square`, `${i}`, `unsketched`);
        gridcontainer.appendChild(square);
        i++;
    }
}

// sketch the squares
function sketch(){
    this.classList.add('sketched');
    this.classList.remove('unsketched');
}
function sketchTheGrid(){

squares.forEach(item => {item.addEventListener('mouseover', sketch)  
});

squares.forEach(item => {item.addEventListener('mousedown', sketch)  
});

}

// reset button

const BUTTON = document.querySelector('.resetButton');
BUTTON.addEventListener('click', newGrid); 



// on page load
initialGrid();