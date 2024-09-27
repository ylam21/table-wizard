// utility for index.js
const randNum = (max) => {
  return Math.floor(Math.random()* max + 1)
}

//  controls section

// grid setup
const rowsInput = document.getElementById("rowsInput");
const columnsInput = document.getElementById("columnsInput");
let rows,columns,totalItemsCalc;



const createLayoutBtn = document.getElementById("createLayoutBtn");
const clearBtn = document.getElementById("clearBtn");

//  output section
const horizontalFlex = document.getElementById ("horFlex");
const verticalFlex = document.getElementById ("verFlex");
const layoutGrid = document.getElementById("layoutGrid");


const clearCurrentOutput = () => {
  document.documentElement.style.setProperty("--rowsInput", 0);
  document.documentElement.style.setProperty("--columnsInput", 0); 
  horizontalFlex.innerHTML = "";
  verticalFlex.innerHTML = "";
  layoutGrid.innerHTML = "";
};


const adjustOutputCss = (rows,columns) => {
  
  document.documentElement.style.setProperty("--rowsInput", rows);
  document.documentElement.style.setProperty("--columnsInput", columns); 
};

const createHorizontalFlex = (columns) => {
  horizontalFlex.classList.add("output__horizontal-flex");
  
  for (let c=0;c<=columns;c++) {
    let createNewSpan = document.createElement("span");

    createNewSpan.appendChild(document.createTextNode(c));
    createNewSpan.classList.add("output__horizontal-item");
    horizontalFlex.appendChild(createNewSpan);
  };

};

const createVerticalFlex = (rows) => {
  verticalFlex.classList.add("output__vertical-flex")
  
  for (let r=1;r<=rows;r++) {
    let createNewSpan = document.createElement("span");

    createNewSpan.appendChild(document.createTextNode(r));
    createNewSpan.classList.add("output__vertical-item");
    verticalFlex.appendChild(createNewSpan);
  };
};

const createContentGrid = (totalItemsCalc) => {
  layoutGrid.classList.add("output__layout-grid");

  for (let i = 0; i<totalItemsCalc; i++) {
    let createNewSpan = document.createElement("span");
  
    createNewSpan.appendChild(document.createTextNode(i));
    createNewSpan.classList.add("output__layout-item");
    layoutGrid.appendChild(createNewSpan);
  };
};

const createContentGridPathOne = (totalItemsCalc) => {
  layoutGrid.classList.add("output__layout-grid");

  for (let i = 0; i<totalItemsCalc; i++) {
   let createNewSpan = document.createElement("span");
  
   createNewSpan.appendChild(document.createTextNode(randNum(10)));
   createNewSpan.classList.add("output__layout-item");
   layoutGrid.appendChild(createNewSpan);
  }
}

const sumOutput = () => {
 let gridItems = Array.from(document.getElementsByClassName("output__layout-item"));
return gridItems.map(item => Number(item.innerHTML))
}


const defOutput = () => {
  let array = sumOutput();
  let output = array.reduce((acc,item)=>{
      if (acc[item]) {
        acc[item] = ++acc[item]
      }
      else {
      acc[item] = 1
      }

    return acc
    },{})

return output
}


let testBtn = document.getElementById("testBtn")
const testFunction = () => {
// update inputs values
rows = rowsInput.value;
columns = columnsInput.value;
totalItemsCalc = rows * columns;

// check if input is right
  if (rows < 0 || rows > 100 || columns < 0 || columns > 100) {
  return 0;
  }

  else {
  clearCurrentOutput();
  adjustOutputCss(rows,columns);
  createHorizontalFlex(columns);
  createVerticalFlex(rows);
  createContentGridPathOne(totalItemsCalc);

  // sum info
    let sumInfo = document.getElementById("sum")
    let mytext = defOutput()
    sumInfo.innerHTML = JSON.stringify(mytext)
  }
};

testBtn.addEventListener("click",testFunction)

const updateAllInputValues = () => {
  // type of data
const typeInputGetAll = document.getElementsByName("type")
const typeOfDataNumberInput = document.getElementById("checkTypeNumber")
const typeOfDataStringInput = document.getElementById("checkTypeString")
const arrangeInputGetAll = document.getElementsByName("arrange")

  // grid setup section
  rows = rowsInput.value;
  columns = columnsInput.value;
  totalItemsCalc = rows * columns;
  // data type section 
  // console.log(Array.from(typeInputGetAll).filter(x => x.checked === true)[0].value)
}

const createLayout = () => {
  
  // check if input is right
  if (rows > 100 || columns > 100 || rows < 0 || columns < 0) {
    return 0;
  }
  
  else {
  clearCurrentOutput();
  updateAllInputValues();
  adjustOutputCss(rows,columns);
  createHorizontalFlex(columns);
  createVerticalFlex(rows);
  createContentGrid(totalItemsCalc);
}
};

// !rename functions
createLayoutBtn.addEventListener("click",createLayout);
clearBtn.addEventListener("click",clearCurrentOutput);
