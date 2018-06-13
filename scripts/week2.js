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
    var rowIndex = 1;
    var hasNumber = /\d/;
    var textBox = document.getElementById("rawData");
    var table = document.getElementById("friendTable");
    var isMut = false;
    textBox.value = "Name,Num,Mut\n";
    for (var i = 0; i < myArray.length; i++) {
        if ((hasNumber.test(myArray[i]) == false) && (hasNumber.test(myArray[i+1]) == true)) {
            isMut = false;
            
            var row = table.insertRow(rowIndex)
            var name = row.insertCell(0);
            var num = row.insertCell(1);
            var mut = row.insertCell(2);
            name.innerHTML = myArray[i];
            myArray[i+1] = myArray[i+1].replace(" friends", "");
            myArray[i+1] = myArray[i+1].replace(" friend", "");
            if (myArray[i+1].includes("mutual")) {
                myArray[i+1] = myArray[i+1].replace("mutual","")
                mut.innerHTML = myArray[i+1];
                isMut = true;
            }
            else {num.innerHTML = myArray[i+1]}

            textBox.value += myArray[i] + ",";
            if (isMut) {
                textBox.value += "," + myArray[i+1] + "\n";
            }
            else {textBox.value += myArray[i+1] + ",,\n";}

        rowIndex++;
        }
    }
}


