var infoText = document.getElementById("info");
var advancedBtn = document.getElementById("advancedBtn");
var CreateLayoutBtn = document.getElementById("createLayoutBtn");
var clearBtn = document.getElementById("clearBtn");

// info

function showInfoAdvaced () {
  infoText.innerHTML = "Coming soon!";
};

function showInfoCreate () {
  infoText.innerHTML = "This will create new grid";
};

function showInfoClear () {
  infoText.innerHTML = "This will clear the grid";
};

function resetInfo () {
  infoText.innerHTML = "";
}

advancedBtn.onmouseenter = showInfoAdvaced;
advancedBtn.onmouseleave = resetInfo;
CreateLayoutBtn.onmouseenter = showInfoCreate;
CreateLayoutBtn.onmouseleave = resetInfo;
clearBtn.onmouseenter = showInfoClear;
clearBtn.onmouseleave = resetInfo;