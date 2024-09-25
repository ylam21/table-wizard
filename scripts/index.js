//  controls section

// grid setup
const rowsInput = document.getElementById("rowsInput");
const columnsInput = document.getElementById("columnsInput");

// type of data
const typeInputGetAll = document.getElementsByName("type")
const typeOfDataNumberInput = document.getElementById("checkTypeNumber")
const typeOfDataStringInput = document.getElementById("checkTypeString")

const createLayoutBtn = document.getElementById("createLayoutBtn");
const clearBtn = document.getElementById("clearBtn");

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
  // rowsInput.value = btnValue
  // columnsInput.value = btnValue
} 

x5times5.addEventListener("click", () => changeGridInput(x5times5.value))
x10times10.addEventListener("click", () => changeGridInput(x10times10.value))
x20times20.addEventListener("click", () => changeGridInput(x20times20.value))
x50times50.addEventListener("click", () => changeGridInput(x50times50.value))
x100times100.addEventListener("click", () => changeGridInput(x100times100.value))
x0times0.addEventListener("click",() => changeGridInput(x0times0.value))


//  output section
const horizontalFlex = document.getElementById ("horFlex");
const verticalFlex = document.getElementById ("verFlex");
const layoutGrid = document.getElementById("layoutGrid");

let rows,columns,totalItemsCalc;

const clearOutput = () => {
  document.documentElement.style.setProperty("--rowsInput", 0);
  document.documentElement.style.setProperty("--columnsInput", 0); 
  horizontalFlex.innerHTML = "";
  verticalFlex.innerHTML = "";
  layoutGrid.innerHTML = "";
};


const adjustOutput = (rows,columns) => {
  
  document.documentElement.style.setProperty("--rowsInput", rows);
  document.documentElement.style.setProperty("--columnsInput", columns); 
};

const createHorizontalFlex = (columns) => {
  horizontalFlex.classList.add("output__horizontal-flex");
  
  for (let c=0;c<=columns;c++) {
    let createNewPar = document.createElement("p");
    let createNewDiv = document.createElement("div");

    createNewPar.appendChild(document.createTextNode(c));
    createNewDiv.appendChild(createNewPar);
    createNewDiv.classList.add("output__horizontal-item");

    horizontalFlex.appendChild(createNewDiv);
  };

};

const createVerticalFlex = (rows) => {
  verticalFlex.classList.add("output__vertical-flex")
  
  for (let r=1;r<=rows;r++) {
    let createNewPar = document.createElement("p");
    let createNewDiv = document.createElement("div");

    createNewPar.appendChild(document.createTextNode(r));
    createNewDiv.appendChild(createNewPar);
    createNewDiv.classList.add("output__vertical-item");

    verticalFlex.appendChild(createNewDiv);
  };
};

const createContentGrid = (totalItemsCalc) => {
  layoutGrid.classList.add("output__layout-grid");

  for (let i = 0; i<totalItemsCalc; i++) {
   let createNewDiv = document.createElement("div");
   let createNewP = document.createElement("p");

   createNewP.appendChild(document.createTextNode(i));
   createNewDiv.appendChild(createNewP);
   createNewDiv.classList.add("output__layout-item");
   layoutGrid.appendChild(createNewDiv);
  };
};



const createLayout = () => {
  // console.log(Array.from(typeInputGetAll).filter(x => x.checked === true)[0].value)
// update inputs values
    rows = rowsInput.value;
    columns = columnsInput.value;
    totalItemsCalc = rows * columns;

// check if input is right
if (rows > 100 || columns > 100 || rows < 0 || columns < 0) {
  return 0;
}

else {
  clearOutput();
  adjustOutput(rows,columns);
  createHorizontalFlex(columns);
  createVerticalFlex(rows);
  createContentGrid(totalItemsCalc);
}
};


createLayoutBtn.addEventListener("click",createLayout);
clearBtn.addEventListener("click",clearOutput);