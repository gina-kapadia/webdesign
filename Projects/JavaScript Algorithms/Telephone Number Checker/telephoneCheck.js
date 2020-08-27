function telephoneCheck(str) {
    /*If a 10-digit number is provided, return true if any of the accepted formats are detected. Return false otherwise.*/
    if (str.match(/\d/g).join('').length == 10) {
        if (/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(str)) {
            return true;
        } else if (/^\([0-9]{3}\) ?[0-9]{3}-[0-9]{4}$/.test(str)) {
            return true;
        } else if (/^[0-9]{3} [0-9]{3} [0-9]{4}$/.test(str)) {
            return true;
        } else if (/^[0-9]{3}[0-9]{3}[0-9]{4}$/.test(str)) {
            return true;
        } else {
            return false;
        }
    /*If an 11-digit number is provided, return true if any of the accepted formats are detected. Return false otherwise.*/
    } else if (str.match(/\d/g).join('').length == 11) {
        if (/^1 [0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(str)) {
            return true;
        } else if (/^1 ?\([0-9]{3}\) ?[0-9]{3}-[0-9]{4}$/.test(str)) {
            return true;
        } else if (/^1 [0-9]{3} [0-9]{3} [0-9]{4}$/.test(str)) {
            return true; 
        } else if (/^1 ?[0-9]{3}[0-9]{3}[0-9]{4}$/.test(str)) {
            return true;
        } else {
            return false;
        }
    /*If the input is not a 10 or 11 digit number, return false*/
    } else {
        return false;
    }
}

telephoneCheck("1 555)555-5555");