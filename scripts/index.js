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

    clearOutput();
    adjustOutput(rows,columns);
    createHorizontalFlex(columns);
    createVerticalFlex(rows);
    createContentGrid(totalItemsCalc);
};


createLayoutBtn.addEventListener("click",createLayout);
clearBtn.addEventListener("click",clearOutput);