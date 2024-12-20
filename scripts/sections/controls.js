let myButtons = document.querySelectorAll(".preset-btn");

const changeGridInput = (btnValue) => {
  rowsInput.value = Number(btnValue)
  columnsInput.value = Number(btnValue)
} 

myButtons.forEach(btn => {
  btn.addEventListener("click",() => changeGridInput(btn.value))
});

// color change
let myColors = document.querySelectorAll(".item-color")
let mySquares = document.querySelectorAll(".item-color-picker")
let newSelectedSquare;

const openAndCloseMenu = ()=>{
  let pallete = document.getElementById("pallete-switch")
  if (pallete.style.display === "flex") {
    pallete.style.display = "none"
  }
  else {
    pallete.style.display = "flex"
  }
} 


const updateSelectedSquare = (el) => {
  newSelectedSquare = el
  let arrayOfSquares = Array.from(mySquares);
  let findSelected;
  if (arrayOfSquares.find(x => x.classList.contains("selected-square")) === undefined) {
    newSelectedSquare.classList.toggle("selected-square")
  }
  else if (newSelectedSquare === arrayOfSquares.find(x => x.classList.contains("selected-square"))) {
    newSelectedSquare.classList.toggle("selected-square")
  }
  else {
    findSelected = arrayOfSquares.find(x => x.classList.contains("selected-square"))
    findSelected.classList.toggle("selected-square")
    newSelectedSquare.classList.toggle("selected-square")
  }
}

mySquares.forEach(item => {
  item.addEventListener("click", () => updateSelectedSquare(item))
  item.addEventListener("click", openAndCloseMenu)
})

const assignColorValueToNewSelectedSqaure = (color,newSel)=> {
  newSel.style.backgroundColor = color.getAttribute("value")
  updateSelectedSquare(newSel)
  openAndCloseMenu()
}

myColors.forEach(item => {
 item.style.backgroundColor = item.getAttribute("value")
 item.addEventListener("click",() => assignColorValueToNewSelectedSqaure(item,newSelectedSquare))
})

//on page start resets --

document.getElementById("cond-name").value = "cond-1"
document.getElementById("condGroup").value = "table"
document.getElementById("row-col-index-input").value = "1"
document.getElementById("condData").value = "0"
document.getElementById("condCon").value = "exact"
document.getElementById("condTimes").value = "1"