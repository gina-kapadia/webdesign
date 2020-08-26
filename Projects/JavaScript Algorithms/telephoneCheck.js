function telephoneCheck(str) {
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
    } else {
        return false;
    }
}

telephoneCheck("1 555)555-5555");