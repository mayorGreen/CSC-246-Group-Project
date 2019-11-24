const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
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
function CheckSplit() {
    rl.question('Will You Be Splitting The Check? (yes/no) \n ', (answer) => {
        switch (answer) {
            case 'yes':
                question1();
                break;
            case 'no':
                console.log('Hello');
                break
        }
    })
}
function question1() {
    rl.question('How Many Patrons Were There? (Please provide a whole number) ', (numDiners) => {
        console.log(`Got it, There Were ${numDiners} Patrons\n`)
        if (isInt(numDiners) === true) {question2(numDiners)}
    })
}
function question2(numDiners) {
    rl.question('What Is The Total Amount Due? (Please Enter A Number Using Two Decimal Places)\n ', (totalBill) => {
        console.log(`Alright, The Total Amount Due Is: $${totalBill}\n`)
        if (isNaN(totalBill) === false) {question3(numDiners,totalBill)}
    })
}
function question3(numDiners,totalBill) {
    console.log('So Far An Even Split Would Be $' + splitBill(numDiners, parseFloat(totalBill)) + ' Between ' + numDiners + ' Patrons.\n');
    rl.question('Will You Be Leaving Your Server A Tip? (yes/no)) \n', (answer) => {
        switch (answer) {
            case 'yes':
            case 'Yes':
            case 'y':
            case 'Y':
                question3Yes();
                break
        }

        function question3Yes() {
            rl.question('What Percent Tip Would You Like To Leave? (Please Enter A Whole Number) ', (tipAmount) => {
                console.log(`Received: ${tipAmount}`)
                if (isInt(tipAmount) == true && tipAmount > 0) {
                    console.log('Alright If Everyone Is Sharing, The Total Cost Per Person Would Be: $' + tip(splitBill(numDiners, totalBill), tipAmount) + ' Otherwise, A Single Person Owes: $' + tip(totalBill, tipAmount) + ' For A Tip.')
                    return process.exit(1)
                } else {
                    console.log('Stop wasting our time.')
                    return process.exit(1)
                }
            })
        }
    });
}


module.exports = {
    CheckSplit
};


                                        /**   rl.question('What Percent Tip Would You Like To Leave? (Please Enter A Whole Number) ', (tipAmount) => {
                                                console.log(`Received: ${tipAmount}`)
                                                if (isInt(tipAmount) == true && tipAmount > 0) {
                                                    console.log('Alright If Everyone Is Sharing, The Total Cost Per Person Would Be: $' + tip(splitBill(numDiners, totalBill), tipAmount) + ' Otherwise, A Single Person Owes: $' + tip(totalBill, tipAmount) + ' For A Tip.')
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
                                            console.log("That Isn't Very Nice Of You. Your Total Bill Is: $" + splitBill(numDiners, parseFloat(totalBill))+' Per Person \n')
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
                    console.log(`Alright, The Total Bill Was: $${totalBill}`)

                    if (isNaN(totalBill) == false) {
                        rl.question('Do you want to tip (yes/no) \n', (answer) => {
                            switch (answer) {

                                case 'yes':
                                case 'Yes':
                                case 'y':
                                case 'Y':
                                    rl.question('What percent tip would you like to leave? (type a whole number) \n', (tipAmount) => {
                                        console.log(`Alright, The Waiter Is Getting A: ${tipAmount} % Tip\n`)
                                        if (isInt(tipAmount) == true && tipAmount > 0) {
                                            console.log('Alright, The Tip Would Be: $' + tip(totalBill, tipAmount) + '\n')
                                            return process.exit(1)
                                        } else {
                                            console.log('Invalid Input Received. Exiting Check Splitter')
                                            return process.exit(1)
                                        }
                                    })
                                    break

                                case 'no':
                                case 'No':
                                case 'n':
                                case 'N':
                                    console.log("That Isn't Very Nice! You Should Reconsider. Your Total Is: $"+ totalBill)
                                    return process.exit(1)

                                case 'exit':
                                case 'Exit':
                                    return process.exit(1)

                                default:
                                    console.log('Invalid Input Received. Exiting Check Splitter')
                                    break
                                    return process.exit(1)
                            }
                        })
                    } else {
                        console.log("Invalid Input Received. Exiting Check Splitter")
                        return process.exit(1)
                    }
                })
                break;

            case 'exit':
            case 'Exit':
                return process.exit(1)
            default:
                console.log('Invalid Input Received. Exiting Check Splitter')
                return process.exit(1)
module.exports = {
   CheckSplit
};**/