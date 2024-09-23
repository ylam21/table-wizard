// header section
var infoText = document.getElementById("info");
// controls section
var rowsInput = document.getElementById("rowsInput");
var columnsInput = document.getElementById("columnsInput");
var createLayoutBtn = document.getElementById("createLayoutBtn");
var clearBtn = document.getElementById("clearBtn");

// output section
var horizontalFlex = document.getElementById ("horFlex");
var verticalFlex = document.getElementById ("verFlex");
var layoutGrid = document.getElementById("layoutGrid");

function clearOutput () {
  document.documentElement.style.setProperty("--rowsInput", 0);
  document.documentElement.style.setProperty("--columnsInput", 0); 
  horizontalFlex.innerHTML = "";
  verticalFlex.innerHTML = "";
  layoutGrid.innerHTML = "";
};

function adjustOutput () {
  var rows = rowsInput.value;
  var columns = columnsInput.value;

  document.documentElement.style.setProperty("--rowsInput", rows);
  document.documentElement.style.setProperty("--columnsInput", columns); 
};

function createHorizontalFlex () {
  var columns = columnsInput.value;
  horizontalFlex.classList.add("output__horizontal-flex");
  
  for (let c=0;c<=columns;c++) {
    var createNewPar = document.createElement("p");
    var createNewDiv = document.createElement("div");

    createNewPar.appendChild(document.createTextNode(c));
    createNewDiv.appendChild(createNewPar);
    createNewDiv.classList.add("output__horizontal-item");

    horizontalFlex.appendChild(createNewDiv);
  };

};

function createVerticalFlex () {
  var rows = rowsInput.value;
  verticalFlex.classList.add("output__vertical-flex")
  
  for (let r=1;r<=rows;r++) {
    var createNewPar = document.createElement("p");
    var createNewDiv = document.createElement("div");

    createNewPar.appendChild(document.createTextNode(r));
    createNewDiv.appendChild(createNewPar);
    createNewDiv.classList.add("output__vertical-item");

    verticalFlex.appendChild(createNewDiv);
  };
};

function createContentGrid () {
  var rows = rowsInput.value;
  var columns = columnsInput.value;
  var totalItemsCalc = rows * columns;
  layoutGrid.classList.add("output__layout-grid");

  for (var i = 0; i<totalItemsCalc; i++) {
   var createNewDiv = document.createElement("div");
   var createNewP = document.createElement("p");

   createNewP.appendChild(document.createTextNode(i));
   createNewDiv.appendChild(createNewP);
   createNewDiv.classList.add("output__layout-item");
   layoutGrid.appendChild(createNewDiv);
  };
};



function createLayout () {
  clearOutput();
  adjustOutput();
  createHorizontalFlex();
  createVerticalFlex ();
  createContentGrid();
};


createLayoutBtn.addEventListener("click",createLayout);
clearBtn.addEventListener("click",clearOutput);

// possible to turn on if needed
// rowsInput.addEventListener("change",createLayout);
// columnsInput.addEventListener("change",createLayout);