/*
Simple interest is the portion of the program that calculates the simple interest on a loan.
 */

//Variables used to capture user inputs.
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//A Function To Allow Process exiting
function exit() {return process.exit(1);}
function invalid() {console.log("\nIt Seems You Entered An Invalid Input, Please Try Again\n");}

// A Function to actually process the loan and return the amount of interest and the amount after interest
function processLoan(PR,IN,PY) {
    let Interest = IN / 100;
    let A = PR*(1+(Interest*PY));
    console.log("\nThe Amount of interest is: $",(A-PR).toFixed(2));
    console.log('\nThe Estimated Amount After interest Is: $', A.toFixed(2));
    exit();
}

//A Function to gather the value of the principle
function principle() {
    rl.question('\nWhat is the Principal of the loan? ', function (PR_OLD) {
        let PR = parseFloat(PR_OLD);
        if (isNaN(PR) === false && PR > 0) {
            console.log(`\nGot it, The Principal Amount is: $${PR}`);
            interest(PR)
        } else {
            invalid();
            principle();
        }
    });
}

//A Function To Gather The Interest Rate From The User
function interest(PR){
    rl.question('\nWhat is the interest rate? ', function (IN_OLD) {
        let IN = parseFloat(IN_OLD);
        if (isNaN(IN) === false && IN > 0) {
            console.log("\nGot it, The Interest Rate Is:",IN,"%");
            payments(PR,IN)
        } else {
            invalid();
            interest(PR);
        }
    });
}

//A Function To Gather How Many Monthly Payments There Are From The User
function payments(PR,IN){
    rl.question("\nHow many Monthly payments are there?", function (PY_OLD) {
        let PY = parseInt(PY_OLD);
        if (isNaN(PY) === false && PY > 0) {
            console.log("\nGot it, There Are: ",PY,"Monthly Payments");
            let PYOut = PY/12;
            processLoan(PR,IN,PYOut);
        } else {
            invalid();
            payments(PR,IN);
        }
    });
}

//Exporting the module for its use in Main.
module.exports = {
    principle,
};