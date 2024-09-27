// utility for index.js
const randNum = (max) => {
  return Math.floor(Math.random()* max + 1)
}

// grid setup
const rowsInput = document.getElementById("rowsInput");
const columnsInput = document.getElementById("columnsInput");
let rows,columns,totalItemsCalc;

// datatype setup
let checkedType;
// arrangement setup
let checkedArrange;

// type of data
const typeInputGetAll = document.getElementsByName("type")
const arrangeInputGetAll = document.getElementsByName("arrange")

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
  sumInfo.innerHTML = "";
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

let sumInfo;
sumInfo = document.getElementById("sumInfo")

const getSumInfo = () => {
  let result;
  let gridItems;
  gridItems = Array.from(document.getElementsByClassName("output__layout-item"));
  gridItems = gridItems.map(item => Number(item.innerHTML))
  result = gridItems.reduce((acc,item)=>{
    if (acc[item]) {
      acc[item] = ++acc[item]
    }
    else {
    acc[item] = 1
    }

  return acc
  },{})

  return result
};

const updateAllInputValues = () => {
  // grid setup section
  rows = rowsInput.value;
  columns = columnsInput.value;
  totalItemsCalc = rows * columns;
  // data type section
  checkedType = Array.from(typeInputGetAll).find(x => x.checked).value;
  // arrangement section
  checkedArrange = Array.from(arrangeInputGetAll).find(x => x.checked).value;
}

const findPath = (checkedType,checkedArrange,totalItemsCalc) => {
  layoutGrid.classList.add("output__layout-grid");

  if (checkedType == "typeNumber") {
    if (checkedArrange == "arrangeRandom") {
      for (let i = 0; i<totalItemsCalc; i++) {
      let createNewSpan = document.createElement("span");
      createNewSpan.appendChild(document.createTextNode(randNum(10)));
      createNewSpan.classList.add("output__layout-item");
      layoutGrid.appendChild(createNewSpan)}
    }

    else if (checkedArrange == "arrangeOrdered") {
      for (let i = 0; i<totalItemsCalc; i++) {
        let createNewSpan = document.createElement("span");
        createNewSpan.appendChild(document.createTextNode(i+1));
        createNewSpan.classList.add("output__layout-item");
        layoutGrid.appendChild(createNewSpan)}
   }
  }
};

const createLayout = () => {
  updateAllInputValues();
  // check if input is right
  if (rows > 100 || columns > 100 || rows < 0 || columns < 0) {
    return alert("Your input is not allowed.")
  }

  else if (rows == 0 || columns == 0) {
    return 0
  }
  
  else {
  clearCurrentOutput();
  adjustOutputCss(rows,columns);
  createHorizontalFlex(columns);
  createVerticalFlex(rows);
  findPath(checkedType,checkedArrange,totalItemsCalc);
  // sum info update
  if (checkedArrange != "arrangeOrdered") {
    sumInfo.innerHTML = String(JSON.stringify(getSumInfo())).replace(/[{}]/g, '')
}
}};

// !rename functions
createLayoutBtn.addEventListener("click",createLayout);
clearBtn.addEventListener("click",clearCurrentOutput);
