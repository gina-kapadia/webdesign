/*The challenge: Convert the given number into a roman numeral. Must work up to 3999.*/
function convertToRoman(num) {
    /*Create an array of Roman numerals*/
    var roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "M", "MM", "MMM"];
    /*Create an array of Arabic numerals*/
    var arabic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000];
    /*Create an empty array for the result*/
    var result = [];
    /*Turn num into a string*/
    var numString = num.toString();
    /*Create an array of numString*/
    var numArr = numString.split('');
    /*For each element in numArr, convert it into an int, convert the int into thousands, hundreds, tens, or ones, and add the corresponding Roman numeral to the result array.*/
    numArr.map(
        function(number,i) {
            numArr[i] = parseInt(numArr[i]);
            numArr[i] = numArr[i] * Math.pow(10,numArr.length-i-1);
            result[i] = roman[arabic.indexOf(numArr[i])];
        }
    )
    /*Turn result into a string and return it*/
    return result.join('');
}
convertToRoman(3999);