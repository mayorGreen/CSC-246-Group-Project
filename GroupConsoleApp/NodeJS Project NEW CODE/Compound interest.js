/*
Compound Interest is the portion of the program that calculates the Compound Interest on a loan
 */

//Variables To Capture User Input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Function to Perform the compounding
function compounder(p,r,m,t){
    const rate = r / 100;
    const rOVERm = rate / m;
    const mTIMESt = m * t;
    const end = p * (Math.pow(1 + rOVERm, mTIMESt));
    console.log("\nThe Total amount after interest is $"+end.toFixed(2));
    exit();
}

//A Function To Allow Process Exiting
function exit() {return process.exit(1);}

//A Function to detect invalid input
function invalid() {console.log("\nIt Seems You Entered An Invalid Input, Please Try Again\n");}

//A Function to collect the principle of the loan
function principle() {
    rl.question('\nWhat is the Principal?', (PR_old) => {
        let PR = parseFloat(PR_old);
        if (isNaN(PR) === false && PR > 0) {
            console.log("\nGot it, The Principle is: $"+PR);
            rate(PR)
        } else {
            invalid();
            principle();
        }
    });
}

//A Function to collect the rate of the loan
function rate(PR) {
    rl.question('\nWhat is the Rate?', function (RT_old) {
        let RT = parseFloat(RT_old);
        if (isNaN(RT) === false && RT > 0) {
            console.log("\nGot it, the rate is: "+RT+"%");
            compounded(PR,RT)
        } else {
            invalid();
            rate(PR);
        }
    });
}

//A Function to ask the frequency that the item is compounded.
function compounded(PR,RT) {
    rl.question('\nHow many times per year is it compounded?', function (M_old) {
        let M = parseInt(M_old);
        if (isNaN(M) === false && M > 0) {
            console.log("\nGot it, The interest is compounded "+M+" Times");
            time(PR,RT,M)
        } else {
            invalid();
            compounded(PR,RT);
        }
    });
}

//A Function To Gather how many years the loan is for
function time(PR,RT,M) {
    rl.question('\nHow Many Years Is The Loan Over?', function (T_old) {
        let T = parseInt(T_old);
        if (isNaN(T) === false && T > 0) {
            console.log("\nGot it, The Loan Is Over "+T+" Years");
            compounder(PR, RT, M, T);
            rl.close();}
        else {
            invalid();
            time(PR,RT,M);
        }
    });
}

//Exporting the Principle module
module.exports = {
    principle
};