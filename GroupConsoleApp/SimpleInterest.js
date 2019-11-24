const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function processLoan(number) {
    // Insert code to do whatever with sum here.
    console.log('The Estimated Amount of interest Is: $', number);
}

function interestCalculator() {
    rl.question('What is the Principal of the loan: ', function (PR) {
        rl.question('What is the interest rate: ', function (IN) {
            rl.question("How many Monthly payments are there", function (PE) {
                //   Monthly Payment/ ((1 + Interest rate per annum/100) ^ Term of loan) * Term of loan * 12
                var Interest = IN / 10
                var pay = (PR * Interest) / (1 - Math.pow(1 + IN, -PE));
                processLoan(pay);
                rl.close();
            });
        });
    })

}
module.exports = {
    interestCalculator
};