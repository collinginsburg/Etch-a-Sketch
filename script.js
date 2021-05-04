let i = 1;
let row = 100;
let column = 100;
let grid = row * column;

const gridcontainer = document.querySelector('.gridcontainer');

while (i <= grid){
    let square = document.createElement('div');
    square.style.cssText = "width:100%; height:100%";
    square.classList.add(`square`, `${i}`, `unsketched`);
    gridcontainer.appendChild(square);
    i++;
}

const squares = document.querySelectorAll('.square');


function sketch(){
    this.classList.add('sketched');
    this.classList.remove('unsketched');
}

squares.forEach(item => {item.addEventListener('mouseover', sketch)  
});

squares.forEach(item => {item.addEventListener('mousedown', sketch)  
});


function unsketch(){
    squares.forEach(item => item.classList.remove('sketched'));
    squares.forEach(item => item.classList.add('unsketched'));
}