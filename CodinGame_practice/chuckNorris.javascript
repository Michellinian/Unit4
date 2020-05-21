```
/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline();

function text_to_binary(text) {
    var length = text.length;
    var output = "";
    for (var i=0; i<length; i++) {
        var bin = text.charCodeAt(i).toString(2);
        if (bin.length < 7) {
            bin = "0" + bin;
        }
        output += bin;
    }
    return output;
}

var encode = {
    "0" : "00",
    "1" : "0"
}

var binaryText = text_to_binary(MESSAGE);
var currentSign = binaryText[0];
var answer = encode[currentSign]+" "+"0";

for (var i = 1; i < binaryText.length; i++) {
    var nextBit = binaryText[i];
    answer += (nextBit != currentSign) ? " "+encode[nextBit]+" "+"0" : "0";
    currentSign = nextBit;
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(answer);
```
