'use strict';


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Is the check to be split (yes/no)) ', (answer) => {
    // TODO: Log the answer in a database
    console.log(answer);
 
    if (answer.toLowerCase() == 'yes' || answer.toLowerCase() == 'y') {
        rl.question('How many diners are there? (give a numerical value) ', (numDiners) => {
            // TODO: Log the answer in a database
            console.log(`Received: ${numDiners}`);

            rl.question('What was the total bill? (give a numerical value with 2 decimals) ', (totalBill) => {
                // TODO: Log the answer in a database
                console.log(`Received: ${totalBill}`);

                var splitBill = totalBill / numDiners;
                console.log('The split bill is ' + splitBill.toFixed(2) + ' between ' + numDiners + 'diners.');


            });
        });
    } else {
        if (answer.toLowerCase() == 'no' || answer.toLowerCase() == 'n') {
            rl.question('What was the total bill? (give a numerical value with 2 decimals) ', (totalBill) => {
                // TODO: Log the answer in a database
                console.log(`Received: ${totalBill}`);

                rl.question('Do you want to tip (yes/no) ', (response) => { console.log(`Recieved: ${response}`) });
            });
        }
        else {
            (console.log('Did you even eat here?'))
        };
    };
});



