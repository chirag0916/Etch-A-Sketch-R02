function generateRandomColor() {
 
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  
  var redHex = red.toString(16).padStart(2, '0');
  var greenHex = green.toString(16).padStart(2, '0');
  var blueHex = blue.toString(16).padStart(2, '0');

 
  var colorCode = '#' + redHex + greenHex + blueHex;

  return colorCode;
}

let gridAmount = document.querySelector(".grid-amount");
gridAmount.addEventListener("click",myGrid);

let myGridAmount;
let myGridRows; 
let myGridCols;

function myGrid () {
  
  myGridRows = prompt('How many Rows do you want?');
  myGridCols = prompt('How many Columns do you want?');
  
  if (myGridRows > 100) {
    alert("Rows Exceeded Limit");
    return;
  }
  else if (myGridCols>100 ) {
    alert("Columns Exceeded Limit");
    return;
  }
  else {
    createDivs();
  }
  
}



function createDivs() {
  let container = document.querySelector(".container");
  
  container.innerHTML = '';

  if (myGridRows != undefined && myGridCols != undefined) {
    for (let i =0;i<myGridRows * myGridCols;i++){
      let gridItem = document.createElement("div");
      gridItem.classList.add('grid-item');
  
     gridItem.addEventListener('mouseenter', hoverEnter)
      
      container.append(gridItem);
    }
  }
else {
  let numberofDivsRow=16;
  let numberofDivsColumn=16;
  for (let i =0;i<numberofDivsRow * numberofDivsColumn;i++){
    let gridItem = document.createElement("div");
    gridItem.classList.add('grid-item');

   gridItem.addEventListener('mouseenter', hoverEnter)
    
    container.append(gridItem);
  }
}
}


function hoverEnter() {
  this.style.backgroundColor = generateRandomColor();

}


document.addEventListener('DOMContentLoaded', createDivs);



