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


rl.question('Is the check to be split (yes/no)) ', (answer1) => {
    console.log(answer1)
 
    if (answer1.toLowerCase() == 'yes' || answer1.toLowerCase() == 'y') {
        rl.question('How many diners are there? (give a numerical value) ', (numDiners) => {
            console.log(`Received: ${numDiners}`)
            if (isInt(numDiners) == true) {
                rl.question('What was the total bill? (give a numerical value with 2 decimals) ', (totalBill) => {
                    console.log(`Received: ${Number(totalBill)}`)

                    console.log('The split bill is ' + splitBill(numDiners, totalBill) + ' between ' + numDiners + ' diners.')

                    rl.question('Will you be leaving a tip (yes/no)) ', (answer2) => {
                        console.log(answer2)

                        if (answer2.toLowerCase() == 'yes' || answer2.toLowerCase() == 'y') {
                            rl.question('What percent tip would you like to leave? (type a whole number) ', (tipAmount) => {
                                console.log(`Received: ${tipAmount}`)
                                if (isInt(tipAmount) == true && tipAmount > 0) {
                                    console.log('Each person owes a $' + tip(splitBill, tipAmount) + ' tip each or one person owes $' + tip(totalBill, tipAmount) + ' total tip.')
                                } else { console.log('Stop wasting our time.') }

                            })

                        } else if (answer2.toLowerCase() == 'no' || answer2.toLowerCase() == 'n') {
                            console.log('Alright cheapskate, thanks for dining')
                        } else {
                            console.log('Did you even eat here?')
                        }
                    })
                })
            } else { console.log("Did you even eat here?") }
        })
    } else if (answer1.toLowerCase() == 'no' || answer1.toLowerCase() == 'n') {
        rl.question('What was the total bill? (give a numerical value with 2 decimals) ', (totalBill) => {
            console.log(`Received: ${Number(totalBill)}`)
            console.log(isNaN(totalBill))

            rl.question('Do you want to tip (yes/no) ', (response) => {
                console.log(`Recieved: ${response}`)

                if (response.toLowerCase() == 'yes' || response.toLowerCase() == 'y') {
                    rl.question('What percent tip would you like to leave? (type a whole number) ', (tipAmount) => {
                        console.log(`Received: ${tipAmount}`)
                        if (isInt(tipAmount) == true && tipAmount > 0) {
                            console.log('You owe $' + tip(totalBill, tipAmount) + ' in tip.')
                        } else { console.log('Stop wasting our time.') }
                    })

                } else if (response.toLowerCase() == 'no' || response.toLowerCase() == 'n') {
                    console.log('Alright cheapskate, thanks for dining')
                } else {
                    console.log('Did you even eat here?')
                }
            })
        })
    } else {
            (console.log('Did you even eat here?'))
        }
})



