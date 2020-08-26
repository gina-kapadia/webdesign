function palindrome(str) {
    var letters = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var arr2 = [];
    var arr1 = letters.split('');
    var length = arr1.length;
    arr1.map(
        function(char, i) {
            arr2[i] = arr1[length-i-1];
        }
    )
    var str1 = arr1.join('');
    var str2 = arr2.join('');
    if (str1 == str2) {
        return true;
    } else {
        return false;
    }

}

palindrome("A man, a plan, a canal. Panama");