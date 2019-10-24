'use strict';


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Is the check to be split (yes/no)) ', (answer1) => {
    // TODO: Log the answer in a database
    console.log(answer1);
 
    if (answer1.toLowerCase() == 'yes' || answer1.toLowerCase() == 'y') {
        rl.question('How many diners are there? (give a numerical value) ', (numDiners) => {
            // TODO: Log the answer in a database
            console.log(`Received: ${numDiners}`);

            rl.question('What was the total bill? (give a numerical value with 2 decimals) ', (totalBill) => {
                // TODO: Log the answer in a database
                console.log(`Received: ${totalBill}`);

                var splitBill = totalBill / numDiners;
                console.log('The split bill is ' + splitBill.toFixed(2) + ' between ' + numDiners + ' diners.');

                rl.question('Will you be leaving a tip (yes/no)) ', (answer2) => {
                    // TODO: Log the answer in a database
                    console.log(answer2);

                    if (answer2.toLowerCase() == 'yes' || answer2.toLowerCase() == 'y') {
                        rl.question('What percent tip would you like to leave? (type 10, 20, 30) ', (tipAmount) => {
                            // TODO: Log the answer in a database
                            console.log(`Received: ${tipAmount}`);
                            if (tipAmount == '10' || tipAmount == '20' || tipAmount == '30') {
                                console.log('Each person owes a $' + (splitBill * (tipAmount / 100)).toFixed(2) + ' tip each or one person owes $' + (totalBill * (tipAmount / 100)).toFixed(2) + ' total tip.');
                            } else { console.log('Stop wasting our time>') };
                            
                        });

                    } else if (answer2.toLowerCase() == 'no' || answer2.toLowerCase() == 'n') {
                        console.log('Alright cheapskate, thanks for dining')
                    } else {
                        console.log('Did you even eat here?');
                    };
                });
            });
        });
    } else if (answer1.toLowerCase() == 'no' || answer1.toLowerCase() == 'n') {
        rl.question('What was the total bill? (give a numerical value with 2 decimals) ', (totalBill) => {
            // TODO: Log the answer in a database
            console.log(`Received: ${totalBill}`);

            rl.question('Do you want to tip (yes/no) ', (response) => {
                console.log(`Recieved: ${response}`)

                if (response.toLowerCase() == 'yes' || response.toLowerCase() == 'y') {
                    rl.question('What percent tip would you like to leave? (type 10, 20, 30) ', (tipAmount) => {
                        // TODO: Log the answer in a database
                        console.log(`Received: ${tipAmount}`);
                        if (tipAmount == '10' || tipAmount == '20' || tipAmount == '30') {
                            console.log('You owe $' + (totalBill * (tipAmount / 100)).toFixed(2) + ' in tip.');
                        } else { console.log('Stop wasting our time>') };
                    });

                } else if (response.toLowerCase() == 'no' || response.toLowerCase() == 'n') {
                    console.log('Alright cheapskate, thanks for dining')
                } else {
                    console.log('Did you even eat here?');
                };
            });
        });
    } else {
            (console.log('Did you even eat here?'))
        };
});



