// *****************************etch a sketch*********************************


// 1. grid reset
let squares = document.querySelectorAll('.square');

function unsketch(){
    squares.forEach(item => item.style.opacity = 0.1);
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
        square.style.cssText = "width:100%; height:100%; background-color: black; opacity: 0.1";
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

        squares.forEach(item => {item.addEventListener('touchstart', addRandomColor);  
        });
        squares.forEach(item => {item.addEventListener('mouseover', addRandomColor);  
        });
    
}

// 9. add opacity to squares

let currentOpacity;
let opacityOn;

function addOpacity(e){
    opacityOn = document.querySelector('.opacity.Checkbox').checked;
    if (opacityOn === true){

        currentOpacity = Number(e.target.style.opacity);
        slightlyDarker = currentOpacity + .1;

        if (currentOpacity < 1){
            e.target.style.opacity = slightlyDarker;
            // console.log(slightlyDarker);
        }

    }else{
        e.target.style.opacity = 1;
    }
}

// 10. add random color to squares

let randomColorOn;
let newColor;

function randomColor(){
    newColor = Math.floor(Math.random()*16777215).toString(16);
    return newColor
}

function addRandomColor(e){
    randomColorOn = document.querySelector('.randomColor.checkbox').checked;
    if(randomColorOn === true){
        randomColor();
        e.target.style.backgroundColor = `${newColor}`;

    }else{
        e.target.style.backgroundColor = `black`;
    }
}











// *******************************BUTTONS!!!!*******************************

// slider

let slider = document.querySelector('.slider');
let output = document.querySelector('.sliderdisplay');
output.textContent = `${slider.value * slider.value} blocks`;

slider.oninput = function() {
    if (this.value < 2){
        output.textContent = `${this.value * this.value} block`
    } else {
        output.textContent = `${this.value * this.value} blocks`;
    }
}

// reset button

const RESETBUTTON = document.querySelector('.reset');
// const BUTTON1 = document.querySelector('.reset button');
RESETBUTTON.addEventListener('click', newGrid); 





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
