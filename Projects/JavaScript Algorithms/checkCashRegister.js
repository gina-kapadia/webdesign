function checkCashRegister(price, cash, cid) {
    var changeIdeal = cash - price;
    var changeRem = cash - price;
    var result = {
        status: null,
        change: []
    }
    var change = 0 ;
    var numCoin;
    var val = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    var cidSum=0;
    for (var i=8; i>=0; i--) {
        cidSum = cidSum + cid[i][1];
    }
    if (cidSum < changeIdeal) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
    } else if (cidSum == changeIdeal) {
        result.status = "CLOSED";
        result.change = cid;
        return result;
    }
    for (var i=8; i>=0; i--) {
        cid[i][2] = Math.ceil(cid[i][1]/val[i]);
        if (changeRem >= val[i]) {
            numCoin = Math.floor(changeRem/val[i]);
            if (numCoin > cid[i][2]) {
                numCoin = cid[i][2];
            }
            change = change + numCoin*val[i];
            changeRem = changeIdeal - change;
            changeRem = Math.round(changeRem*100)/100;
            cid[i][1] = cid[i][1] - numCoin*val[i];
            cid[i][2] = cid[i][2] - numCoin;
            result.change.push([cid[i][0],numCoin*val[i]])
        }
    }
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