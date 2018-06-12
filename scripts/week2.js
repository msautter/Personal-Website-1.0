function readAllData() {
    var arrayOfLines = $('#rawData').val().split('\n');
    arrayOfLines = arrayOfLines.filter(Boolean)
    arrayOfLines = copyArray(arrayOfLines);
    postToTable(arrayOfLines);
}

function copyArray(myArray) {
    var myCopiedArray = [];
    for (var i = 25; i < myArray.length; i+=1){
        if (myArray[i] == "More About You") {
            break;
        }
        if (myArray[i] != "Friend" && myArray[i] != "Friends") {
            myCopiedArray.push(myArray[i]);
        }
    }
    return myCopiedArray;
}

function postToTable(myArray) {
    var rowIndex = 0;
    var hasNumber = /\d/;
    console.log("Hello there");
    for (var i = 0; i < myArray.length; i++) {
        //if (hasNumber.test(myArray[i])) console.log("I am positive" + myArray[i]);
        //else (console.log("I am negative" + myArray[i+1]));
        console.log(myArray[i])
    }
}


