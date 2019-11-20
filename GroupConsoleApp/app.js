'use strict'


const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function isInt(value) {
    return !isNaN(value) && (function (x) { return (x | 0) === x })(parseFloat(value))
}

function tip(bill, tipAmount) {
    return (bill * (tipAmount / 100)).toFixed(2)
}

function splitBill(numDiners, bill) {
    return (bill /numDiners).toFixed(2)
}


    console.log('Type exit or press control C to quit')
rl.question('Is the check to be split (yes/no)) ', (answer) => {
        switch (answer) {

            case 'yes':
            case 'Yes':
            case 'y':
            case 'Y':
                rl.question('How many diners are there? (give a whole numerical value) ', (numDiners) => {
                    console.log(`Received: ${numDiners}`)
                    
                    if (isInt(numDiners) == true) {
                        rl.question('What was the total bill? (give a numerical value with 2 decimals) ', (totalBill) => {
                            console.log(`Received: ${totalBill}`)
                            if (isNaN(totalBill) == false) {
                                console.log('The split bill is ' + splitBill(numDiners, parseFloat(totalBill)) + ' between ' + numDiners + ' diners.')


                                rl.question('Will you be leaving a tip (yes/no)) ', (answer) => {
                                    switch (answer) {

                                        case 'yes':
                                        case 'Yes':
                                        case 'y':
                                        case 'Y':
                                            rl.question('What percent tip would you like to leave? (type a whole number) ', (tipAmount) => {
                                                console.log(`Received: ${tipAmount}`)
                                                if (isInt(tipAmount) == true && tipAmount > 0) {
                                                    console.log('Each person owes a $' + tip(splitBill(numDiners, totalBill), tipAmount) + ' tip each or one person owes $' + tip(totalBill, tipAmount) + ' total tip.')
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
