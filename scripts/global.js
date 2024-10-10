const rowsInput = document.getElementById("rowsInput");
const columnsInput = document.getElementById("columnsInput");

let rows,columns,totalItemsCalc;

// math functions
const randNum = (max) => {
  return Math.floor(Math.random()* max)
}