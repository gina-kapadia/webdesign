/*The challenge: Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*/
function rot13(str) {
    var alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var rot13 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
    var strArr = str.split('');
    var result = [];
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
    return result.join('');
}

rot13("FPENAGBAVPVGL 2");
