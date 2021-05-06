// *****************************etch a sketch*********************************

// 1. grid reset
let squares = document.querySelectorAll('.square');

function unsketch(){
    squares.forEach(item => item.style.opacity = 0);
}

// 2. remove old squares
function removeOldSquares(){
    squares.forEach(item => gridcontainer.removeChild(item));
}


// 3. reset grid template
function resetGridTemplate(){
    gridcontainer.style.gridTemplateRows = "none";
    gridcontainer.style.gridTemplateColumns = "none";
}

// 4. user prompt - how many squares
let userInput;

function howManySquares(){
    // userInput = parseInt(prompt('How many squares do you want on each side of your grid? (Max 100)'));
    userInput = slider.value; // sliders value goes into user input variable
    return userInput
}

// 5. & 6. set new grid container
const gridcontainer = document.querySelector('.gridcontainer');

function setGridRow(){
    gridcontainer.style.gridTemplateRows = `repeat(${userInput}, auto)`;
}
function setGridColumn(){
    gridcontainer.style.gridTemplateColumns = `repeat(${userInput}, auto)`;
}

// 7. create grid squares
function createGrid(){

    let i = 1;
    let column = userInput;
    let grid = userInput * column;

    while (i <= grid){
        let square = document.createElement('div');
        square.style.cssText = "width:100%; height:100%; background-color: black; opacity: 0";
        square.classList.add(`square`, `${i}`);
        gridcontainer.appendChild(square);
        i++;
    }

    squares = document.querySelectorAll('.square');
    return squares
}

// 8. add event listeners to the squares
function addEventListeners(){
    squares.forEach(item => {item.addEventListener('touchstart', addOpacity);  
    });
    squares.forEach(item => {item.addEventListener('mouseover', addOpacity);  
    });
}

// 9. add opacity to squares
let currentOpacity;

function addOpacity(e){
    currentOpacity = Number(e.target.style.opacity);
    slightlyDarker = currentOpacity + .1;

    if (currentOpacity < 1){
        e.target.style.opacity = slightlyDarker;
        console.log(slightlyDarker);
    }
}

// 10. allow user to toggle between gradient and non-gradient

// let 









// *******************************BUTTONS!!!!*******************************

// slider

let slider = document.querySelector('.slider');
let output = document.querySelector('.sliderdisplay');
output.textContent = `Density: ${slider.value * slider.value} squares`;

slider.oninput = function() {
    if (this.value < 2){
        output.textContent = `Density: ${this.value * this.value} block`
    } else {
        output.textContent = `Density: ${this.value * this.value} blocks`;
    }
}

// reset button

const BUTTON = document.querySelector('.resetButton');
BUTTON.addEventListener('click', newGrid); 




// *******************************BIG OPERATIONAL FUNCTIONS****************************

// reset the grid and input user's slider value

function newGrid(){
    unsketch();
    removeOldSquares();
    resetGridTemplate();
    howManySquares();
    setGridRow();
    setGridColumn();
    createGrid();
    addEventListeners();
}

// set initial grid function

function initialGrid(){
    unsketch();
    resetGridTemplate();
    howManySquares();
    setGridRow();
    setGridColumn();
    createGrid();
    addEventListeners();
}


// *******************************on page load*******************************

initialGrid();