// controls section

// get buttons
const x5times5 = document.getElementById("5x5");
const x10times10 = document.getElementById("10x10");
const x20times20 = document.getElementById("20x20");
const x50times50 = document.getElementById("50x50");
const x100times100 = document.getElementById("100x100");
const x0times0 = document.getElementById("0x0");


const changeGridInput = (btnValue) => {
  rowsInput.value = Number(btnValue)
  columnsInput.value = Number(btnValue)
} 

x5times5.addEventListener("click", () => changeGridInput(x5times5.value))
x10times10.addEventListener("click", () => changeGridInput(x10times10.value))
x20times20.addEventListener("click", () => changeGridInput(x20times20.value))
x50times50.addEventListener("click", () => changeGridInput(x50times50.value))
x100times100.addEventListener("click", () => changeGridInput(x100times100.value))
x0times0.addEventListener("click",() => changeGridInput(x0times0.value))