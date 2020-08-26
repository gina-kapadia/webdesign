/*The challenge: Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*/
function rot13(str) {
    /*Create array of regular alphabet*/
    var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    /*Create array of rotated alphabet*/
    var rot13 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    /*Split input str into an array of characters*/
    var strArr = str.split('');
    /*Create empty array for result*/
    var result = [];
    /*Map through the elements in strArr. If the element is found in the alpha array, add the corresponding rotated letter to result*/
    strArr.map(
        function (letter, i) {
            var index = rot13.indexOf(letter);
            if (index != -1) {
                result[i] = alpha[index];
            } else {
                result[i] = strArr[i];
            }
        }
    );
    /*Join the result array to create a string*/
    return result.join('');
}

rot13("FPENAGBAVPVGL 2"); //Outputs SCRANTONICITY 2