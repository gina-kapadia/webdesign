function palindrome(str) {
    /*Remove non-alphanumeric characters and convert all letters to lowercase*/
    var letters = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    /*Create an empty array for the new reversed string*/
    var arr2 = [];
    /*Create an array of the characters in letters*/
    var arr1 = letters.split('');
    /*The the length of arr1*/
    var length = arr1.length;
    /*Fill arr2 by reversing the order of the elements in arr1*/
    arr1.map(
        function(char, i) {
            arr2[i] = arr1[length-i-1];
        }
    )
    /*Turn arr1 into a string*/
    var str1 = arr1.join('');
    /*Turn arr2 into a string*/
    var str2 = arr2.join('');
    /*If str1 and str2 are equal, then str is a palindrome*/
    if (str1 == str2) {
        return true;
    } else {
        return false;
    }

}

palindrome("A man, a plan, a canal. Panama");