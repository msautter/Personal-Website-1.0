var rand = 0;
var randCopy = 0;
var dir;
var pos = 0;
var triangle = document.getElementById("selector");
var allImg = document.querySelectorAll(".diceImg");
var speed = 1;
var id;

function updatePos(dir) {
    if (dir == true) {pos++;}
    else {pos--;}
    triangle.style.left = pos + 'px'; 
}

function updateBackground(index) {
    for (var i = 0; i < allImg.length; i++) {
        if (i == index) {
            allImg[i].style.background = "#f4511e";
        }
        else {
            allImg[i].style.background = "white";
        }
    }
}

function frame() {
    updatePos(dir);
    rand--;
    if (rand <= 0) {
        clearInterval(id);
        document.getElementById("normBtn").disabled = false;
        checkDice();
        updateList();
    }
    //If its gone past the bounds turn back
    if (pos >= 656 && document.getElementById("loopCheck").checked == false) { dir = false; }
    else if (pos >= 656) {pos = 10;}
    if (pos <= 2 && document.getElementById("loopCheck").checked == false) { dir = true; }
    else if (pos <= 2) {pos = 655;}
    if (pos >= 2 && pos <=112) {updateBackground(0);}
    if (pos >= 110 && pos <=220) {updateBackground(1);}
    if (pos >= 220 && pos <=330) {updateBackground(2);}
    if (pos >= 330 && pos <=440) {updateBackground(3);}
    if (pos >= 440 && pos <=550) {updateBackground(4);}
    if (pos >= 570) {updateBackground(5);}
}

function myMove() {
    var dir = true;
    rand = Math.floor(Math.random()* 1155) + 1;
    randCopy = rand;
    triangle.style.display = 'block';
    id = setInterval(frame, speed);
}

function myRandMove() {
    pos = Math.floor(Math.random()* 500) + 5;
    myMove();
}
