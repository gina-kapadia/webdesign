/*The challenge: Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.*/
function checkCashRegister(price, cash, cid) {
    /*Create a variable to hold the change required*/
    var changeIdeal = cash - price;
    /*Create a variable to hold the amount of change that still needs to be given*/
    var changeRem = cash - price;
    /*Create a blank object for the result*/
    var result = {
        status: null,
        change: []
    }
    /*Create a variable for the amount of change accumulated*/
    var change = 0 ;
    /*Create a variable for the number of coins or bills needed to give the required amount of change*/
    var numCoin;
    /*Create an array of the values of each type of coin or bill*/
    var val = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    /*Create a variable for the total value of the cash in the drawer*/
    var cidSum=0;
    /*Loop through the elements in cid to sum the amount of money in the drawer*/
    for (var i=8; i>=0; i--) {
        cidSum = cidSum + cid[i][1];
    }
    /*Set result for if too little money is in the drawer or if the exact amount of money is in the drawer*/
    if (cidSum < changeIdeal) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
    } else if (cidSum == changeIdeal) {
        result.status = "CLOSED";
        result.change = cid;
        return result;
    }
    /*Loop through each type of coin or bill in the cid array*/
    for (var i=8; i>=0; i--) {
        /*Calculate how many coins or bills are in the drawer*/
        cid[i][2] = Math.ceil(cid[i][1]/val[i]);
        /*If the amount of change remaining is greater than the value of the coin or bill*/
        if (changeRem >= val[i]) {
            /*Calculate numCoin*/
            numCoin = Math.floor(changeRem/val[i]);
            /*If numCoin is greater than the number of coins or bills in the drawer, set numCoin equal to the number of coins or bills in the drawer.*/
            if (numCoin > cid[i][2]) {
                numCoin = cid[i][2];
            }
            /*Increment change by the value of the money in numCoin*/
            change = change + numCoin*val[i];
            /*Update the change remaining*/
            changeRem = changeIdeal - change;
            /*Round changeRem to 2 decimal places*/
            changeRem = Math.round(changeRem*100)/100;
            /*Update the value of the money in the drawer*/
            cid[i][1] = cid[i][1] - numCoin*val[i];
            /*Update the number of coins or bills in the drawer*/
            cid[i][2] = cid[i][2] - numCoin;
            /*Push an array of the type of coin or bill and the value of numCoin to the result object*/
            result.change.push([cid[i][0],numCoin*val[i]])
        }
    }
    /*Set result for if changeIdeal could not be achieved and if changeIdeal is achieved with remaining cid*/
    if (changeRem != 0) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
    } else if (changeRem == 0) {
        result.status = "OPEN"
        return result;
    }

} 
  

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);