var infoText = document.getElementById("info");
var advancedBtn = document.getElementById("advancedBtn");
var CreateLayoutBtn = document.getElementById("createLayoutBtn");
var clearBtn = document.getElementById("clearBtn");
var seeCodeBtn = document.getElementById("seeCodeBtn")

// info text content
function showInfoAdvaced () {
  infoText.innerHTML = "Coming soon!";
};

function showInfoCreate () {
  infoText.innerHTML = "This will create new grid.";
};

function showInfoClear () {
  infoText.innerHTML = "This will clear the grid.";
};

function seeCodeInfo () {
  infoText.innerHTML = "This will send you to my Github page."
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
seeCodeBtn.onmouseenter = seeCodeInfo;
seeCodeBtn.onmouseleave = resetInfo;
