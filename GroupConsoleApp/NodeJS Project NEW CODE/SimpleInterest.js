
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function exit() {return process.exit(1);}
function invalid() {console.log("\nInvalid Input\nPlease try Again!");}

function processLoan(PR,IN,PY) {
    let Interest = IN / 100;
    let A = PR*(1+(Interest*PY));
    console.log("The Ammount of interest is: $",(A-PR).toFixed(2));
    console.log('The Estimated Amount After interest Is: $', A.toFixed(2));
}

function principle() {
    rl.question('What is the Principal of the loan: ', function (PR_OLD) {
        let PR = parseFloat(PR_OLD);
        if (isNaN(PR) === false && PR > 0) {
            console.log(`Received: ${PR}`);
            interest(PR)
        } else {
            invalid();
            principle();
        }
    });
}

function interest(PR){
    rl.question('\nWhat is the interest rate: ', function (IN_OLD) {
        let IN = parseFloat(IN_OLD);
        if (isNaN(IN) === false && IN > 0) {
            console.log("Received: ",IN,"%");
            payments(PR,IN)
        } else {
            invalid();
            interest(PR);
        }
    });
}

function payments(PR,IN){
    rl.question("\nHow many Monthly payments are there", function (PY_OLD) {
        let PY = parseInt(PY_OLD);
        if (isNaN(PY) === false && PY > 0) {
            console.log("Received: ",PY);
            let PYout = PY/12;
            processLoan(PR,IN,PYout);
        } else {
            invalid();
            payments(PR,IN);
        }
        });
}

module.exports = {
    principle,
};