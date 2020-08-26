# Cash Register

This project was completed as part of the JavaScript Algorithms and Data Structures curriculum from freeCodeCamp. The challenge was to design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument. 

cid is a 2D array listing available currency (e.g. [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]).

The function returns an object with a status key and a change key. If cash-in-drawer is less than the change due or if you cannot return the exact change, it returns {status: "INSUFFICIENT_FUNDS", change: []}. If cash-in-drawer is equal to the change due, it returns {status: "CLOSED", change: [...]} with cash-in-drawer as the key value for change. Otherwise, it returns {status: "OPEN", change: [...]} with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.