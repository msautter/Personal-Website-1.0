function removeIndecies(myArray, from, to) {
    for (var i = from; i < to; i++) {
        delete myArray[i];
    }
    return myArray;
  };

function removeString (myArray, myString1, myString2) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i] == myString1 || myArray[i] == myString2) {
            delete myArray[i];
        }
    }
    return myArray;
}

function readAllData() {
    var arrayOfLines = $('#rawData').val().split('\n');
    arrayOfLines = arrayOfLines.filter(Boolean)
    arrayOfLines = removeIndecies(arrayOfLines, 0, 25);
    arrayOfLines = removeString(arrayOfLines, "Friend", "Friends");
    console.log(arrayOfLines);
    printToTable(arrayOfLines);
}


function printToTable(myArray) {
    var rowIndex = 0;
    console.log(myArray);
    
    for (var i = 0; i < myArray.length; i+=3) {
        if (myArray[i] == "More About You") {
            break
        }
        else {
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

