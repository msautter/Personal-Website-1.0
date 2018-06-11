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
    for (var i = 0; i < myArray.length; i+=1) {
        if (!isNumeric(myArray[i]) && isNumeric(myArray[i+1])) {
            var table = document.getElementById("friendTable");
            var row = table.insertRow(rowIndex);
            var cell1 = row.insertCell(-1);
            var cell2 = row.insertCell(0);
            var cell3 = row.insertCell(1);
            cell1.innerHTML = String(myArray[i]);
            cell2.innerHTML = String(myArray[i+1]);
            cell3.innerHTML = String(myArray[i+2]);
            rowIndex++;
        }
    }
}


function isNumeric(myString) {
    return !isNaN(parseFloat(myString)) && isFinite(myString);
  }