const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function compoundinterest(p,r,m,t){
    var rate = r/100;
    var rOVERm = rate/m;
    var mTIMESt = m*t;
    var end = p*(Math.pow(1+rOVERm,mTIMESt));
    console.log("The Total ammount after interest is $"+end.toFixed(2))
}
function exit() {return process.exit(1);}
function invalid() {console.log("\nInvalid Input\nPlease try Again!");}

function principle() {
    rl.question('\nWhat is the Principal?', (PR_old) => {
        let PR = parseFloat(PR_old);
        if (isNaN(PR) === false && PR > 0) {
            console.log("Got it, The Principle is $"+PR);
            rate(PR)
        } else {
            invalid();
            principle();
        }
    });
}
function rate(PR) {
    rl.question('\nWhat is the Rate?', function (RT_old) {
        let RT = parseFloat(RT_old);
        if (isNaN(RT) === false && RT > 0) {
            console.log("\nGot it, the rate is "+RT+"%");
            compounded(PR,RT)
        } else {
            invalid();
            rate(PR);
        }
    });
}
function compounded(PR,RT) {
    rl.question('\nHow many times per year is it compounded?', function (M_old) {
        let M = parseInt(M_old);
        if (isNaN(M) === false && M > 0) {
            console.log("Got it, The interest is compounded "+M+" Times");
            time(PR,RT,M)
        } else {
            invalid();
            compounded(PR,RT);
        }
    });
}

function time(PR,RT,M) {
    rl.question('\nWhat is the ammount of years of the loan', function (T_old) {
        let T = parseInt(T_old);
        compoundinterest(PR, RT, M, T);
        rl.close();
        exit();
    });
}


module.exports = {
    principle
};