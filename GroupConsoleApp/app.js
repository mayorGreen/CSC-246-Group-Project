'use strict'


const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function processLoan(number) {
    // Insert code to do whatever with sum here.
    console.log('The Estimated Ammount of interest $', number);
}

function isInt(value) {
    return !isNaN(value) && (function (x) { return (x | 0) === x })(parseFloat(value))
}

function tipCalculate(bill, tipAmount) {
    return (bill * (tipAmount / 100)).toFixed(2)
}

function splitBill(numDiners, bill) {
    return (bill /numDiners).toFixed(2)
}

function noTip() {
    console.log("Alright cheapskate, thanks for dining.")
    return process.exit(1)
}

function mistakeCall() {
    console.log("Did you even eat here?")
    return process.exit(1)
}

function exit() {
    return process.exit(1)
}

function tipAmount(totalBill) {
    rl.question('What percent tip would you like to leave? (type a whole number) ', (tipAmount) => {
        console.log(`Received: ${tipAmount}`)
        if (isInt(tipAmount) == true && tipAmount > 0) {
            console.log('You owe $' + tipCalculate(totalBill, tipAmount) + ' in tip.')
            return process.exit(1)
        } else mistakeCall()
    })
}


console.log('Type exit or press control C to quit')
rl.question('What Fuction Do you want\n1: Check Splitter\n2: Interest Calculator ', (answer2) => {
    switch (answer2) {
        case '1':
        case 'check splitter':
            rl.question('Is the check to be split (yes/no)) ', (answer) => {
                switch (answer.toLowerCase()) {

                    case 'yes':
                    case 'y':
                        rl.question('How many diners are there? (give a whole numerical value) ', (numDiners) => {
                            console.log(`Received: ${numDiners}`)

                            if (isInt(numDiners) == true) {
                                rl.question('What was the total bill? (give a numerical value with 2 decimals) ', (totalBill) => {
                                    console.log(`Received: ${totalBill}`)
                                    if (isNaN(totalBill) == false) {
                                        console.log('The split bill is ' + splitBill(numDiners, parseFloat(totalBill)) + ' between ' + numDiners + ' diners.')

                                        rl.question('Will you be leaving a tip (yes/no)) ', (answer) => {
                                            switch (answer.toLowerCase()) {

                                                case 'yes':
                                                case 'y':
                                                    rl.question('What percent tip would you like to leave? (type a whole number) ', (tipAmount) => {
                                                        console.log(`Received: ${tipAmount}`)
                                                        if (isInt(tipAmount) == true && tipAmount > 0) {
                                                            console.log('Each person owes a $' + tipCalculate(splitBill(numDiners, totalBill), tipAmount) + ' tip each or one person owes $' + tipCalculate(totalBill, tipAmount) + ' total tip.')
                                                            return process.exit(1)
                                                        } else mistakeCall()
                                                    })
                                                    break
                                                case 'no':
                                                case 'n': noTip()
                                                case 'exit':
                                                    exit()
                                                default: mistakeCall()
                                            }
                                        })
                                    } else mistakeCall()
                                })
                            } else mistakeCall()
                        })
                        break

                    case 'no':
                    case 'n':
                        rl.question('What was the total bill? (give a numerical value with 2 decimals) ', (totalBill) => {
                            console.log(`Received: ${totalBill}`)

                            if (isNaN(totalBill) == false) {
                                rl.question('Do you want to tip (yes/no) ', (answer) => {
                                    switch (answer.toLowerCase()) {

                                        case 'yes':
                                        case 'y':
                                            tipAmount(totalBill)
                                            break

                                        case 'no':
                                        case 'n': noTip()

                                        case 'exit': exit()

                                        default:
                                            mistakeCall()
                                    }
                                })
                            } else mistakeCall()
                        })
                        break;

                    case 'exit': exit()
                    default: mistakeCall()

                }
            })
        case '2':
        case 'interest calculator':
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
})
