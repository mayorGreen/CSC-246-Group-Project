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


//A Boolean Function to test if an input value is an int
function isInt(value) {
    return !isNaN(value) && (function (x) { return (x | 0) === x })(parseFloat(value))
}


//A Function that Calculates the Tip, by taking the Total Bill and dividing it by the percent to be tipped.
function tip(bill, tipAmount) {
    return (bill * (tipAmount / 100)).toFixed(2)
}

//A Function that splits the total amount of the bill, by the number of diners.
function splitBill(numDiners, bill) {
    return (bill /numDiners).toFixed(2)
}
function compoundinterest(p,r,m,t){
    var rate = r/100;
    var RoverM = rate/m;
    var MtimesT = m*t;
    var end = p*(Math.pow(1+RoverM,MtimesT));
    console.log(end)
}


console.log('Type exit or press control C to quit');
rl.question('What Fuction Do you want\n1: Check Splitter\n2: Interest Calculator\n3: Compound Interest Calculator ', (answer2) => {
    switch (answer2) {
        case '1':
        case 'check splitter':
            rl.question('Is the check to be split (yes/no)) ', (answer) => {
                switch (answer) {
                    case 'yes':
                    case 'Yes':
                    case 'y':
                    case 'Y':
                        rl.question('How many diners are there? (give a whole numerical value) ', (numDiners) => {
                            console.log(`Got it, There Were ${numDiners} Diners`)
                            if (isInt(numDiners) == true) {
                                rl.question('What was the total bill? (give a numerical value with 2 decimals) ', (totalBill) => {
                                    console.log(`Alright, the total bill was: $${totalBill}`)
                                    if (isNaN(totalBill) == false) {
                                        console.log('So Far An Even Split Would Be $' + splitBill(numDiners, parseFloat(totalBill)) + ' Between ' + numDiners + ' Diners.')
                                        rl.question('Will you be leaving a tip (yes/no)) ', (answer) => {
                                            switch (answer) {
                                                case 'yes':
                                                case 'Yes':
                                                case 'y':
                                                case 'Y':
                                                    rl.question('What percent tip would you like to leave? (type a whole number) ', (tipAmount) => {
                                                        console.log(`Received: ${tipAmount}`)
                                                        if (isInt(tipAmount) == true && tipAmount > 0) {
                                                            console.log('Each Person Would Owe a $' + tip(splitBill(numDiners, totalBill), tipAmount) + ' Tip Each Or A Single Diner Owes $' + tip(totalBill, tipAmount) + ' total tip.')
                                                            return process.exit(1)
                                                        } else {
                                                            console.log('Stop wasting our time.')
                                                            return process.exit(1)
                                                        }
                                                    })
                                                    break

                                                case 'no':
                                                case 'No':
                                                case 'n':
                                                case 'N':
                                                    console.log("That isn't nice. You should reconsider")
                                                    return process.exit(1)

                                                case 'exit':
                                                case 'Exit':
                                                    return process.exit(1)

                                                default:
                                                    console.log('Did you even eat here?')
                                                    return process.exit(1)

                                            }
                                        })
                                    } else {
                                        console.log("Did you even eat here?")
                                        return process.exit(1)
                                    }
                                })
                            } else {
                                console.log("Did you even eat here?")
                                return process.exit(1)

                            }
                        })
                        break

                    case 'no':
                    case 'No':
                    case 'n':
                    case 'N':
                        rl.question('What was the total bill? (give a numerical value with 2 decimals) ', (totalBill) => {
                            console.log(`Received: ${totalBill}`)

                            if (isNaN(totalBill) == false) {
                                rl.question('Do you want to tip (yes/no) ', (answer) => {
                                    switch (answer) {

                                        case 'yes':
                                        case 'Yes':
                                        case 'y':
                                        case 'Y':
                                            rl.question('What percent tip would you like to leave? (type a whole number) ', (tipAmount) => {
                                                console.log(`Received: ${tipAmount}`)
                                                if (isInt(tipAmount) == true && tipAmount > 0) {
                                                    console.log('You owe $' + tip(totalBill, tipAmount) + ' in tip.')
                                                    return process.exit(1)
                                                } else {
                                                    console.log('Stop wasting our time.')
                                                    return process.exit(1)
                                                }
                                            })
                                            break

                                        case 'no':
                                        case 'No':
                                        case 'n':
                                        case 'N':
                                            console.log('Alright cheapskate, thanks for dining')
                                            return process.exit(1)

                                        case 'exit':
                                        case 'Exit':
                                            return process.exit(1)

                                        default:
                                            console.log('Did you even eat here?')
                                            break
                                            return process.exit(1)
                                    }
                                })
                            } else {
                                console.log("Did you even eat here?")
                                return process.exit(1)
                            }
                        })
                        break;

                    case 'exit':
                    case 'Exit':
                        return process.exit(1)

                    default:
                        console.log('Did you even eat here.')
                        return process.exit(1)

                }
            })
        case '2':
        case 'interest calculator':
            rl.question('What is the Principal of the loan: ', function (PR) {
                console.log(`Received: ${PR}`);
                if(isInt(PR) == true && PR > 0) {

                    rl.question('What is the interest rate: ', function (IN) {
                        rl.question("How many Monthly payments are there", function (PE) {
                            //   Monthly Payment/ ((1 + Interest rate per annum/100) ^ Term of loan) * Term of loan * 12
                            var Interest = IN / 10
                            var pay = (PR * Interest) / (1 - Math.pow(1 + IN, -PE));
                            processLoan(pay);
                            rl.close();
                            return process.exit(1)
                        });
                    });
                }
                else {console.log("Invalid input please re-run the program.")
                }
            });
        case '3':
            rl.question('What is the Principal?', function (PR) {
                rl.question('What is the Rate?', function (RT){
                    rl.question('How many times per year is it compounded?', function (M) {
                        rl.question('What is the ammount of years of the loan', function (T) {
                            compoundinterest(PR,RT,M,T)
                            rl.close();
                            return process.exit(1)
                        })
                    })
                })
            })
    }
});