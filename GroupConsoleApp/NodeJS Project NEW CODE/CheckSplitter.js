const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isInt(value) {
    return !isNaN(value) && (function (x) { return (x | 0) === x })(parseFloat(value))
}

function exit() {
    return process.exit(1);
}

//A Function that Calculates the Tip, by taking the Total Bill and dividing it by the percent to be tipped.
function tip(bill, tipAmount) {
    const Bill = parseFloat(bill);
    const Tip = parseFloat(tipAmount);
    console.log("\nThe Tip ammount is "+Tip+"%");
    const tipNaked = ((Tip/100)*bill).toFixed(2);
    console.log("\nThe tip will cost you an extra $" + tipNaked);
    console.log("\nThe total after the tip is $"+((Bill * (Tip/100))+Bill).toFixed(2));
    return tipNaked;

}

//A Function that splits the total amount of the bill, by the number of diners.
function splitBill(numDiners, bill) {
    return (bill /numDiners).toFixed(2);
}

// This is basically a function that saves having to type out an input error print for everything
function invalid() {
    console.log("\nInvalid Input\n" +
        "Please try Again!");
}

// A Function that asks if the check is to be split and uses that to move on to the next question
function CheckSplit() {
    rl.question('Will You Be Splitting The Check? (yes/no) \n ', (answer) => {
        switch (answer) {
            case 'yes':
                question1();
                break;
            case 'no':
                question2NoSplit();
                break;
            default:
                invalid();
                CheckSplit();
               break
        }
    })
}
//Question1 polls how many people the check needs to be split by and send it to question2
function question1() {
        rl.question('How Many Patrons Were There? (Please provide a whole number) ', (numDiners) => {
            if (isNaN(numDiners) === false && numDiners > 0) {
                console.log(`Got it, There Were ${numDiners} Patrons\n`);
                question2(numDiners)
            } else {
                invalid();
                question1();
            }
        })
}

//Question2 polls total ammount due and sends that and the number of diners to question3
function question2(numDiners) {
    rl.question('What Is The Total Amount Due? (Please Enter A Number Using Two Decimal Places)\n ', (totalBill) => {
        console.log(`Alright, The Total Amount Received Is: $${totalBill}\n`);
        if (isNaN(totalBill) === false) {question3(numDiners,totalBill)}
        else question2(numDiners);
    })
}

//Question3 polls if a tip will be left
function question3(numDiners,totalBill) {
    if (isNaN(numDiners) === false) {
        let split =parseFloat(splitBill(numDiners, parseFloat(totalBill)));
        console.log('So Far An Even Split Would Be $' + split + ' Between ' + numDiners + ' Patrons.\n');
        rl.question('Will You Be Leaving Your Server A Tip? (yes/no)) \n', (answer) => {
            switch (answer) {
                case 'yes':
                case 'Yes':
                    question3Yes(numDiners,totalBill,split);
                    break;

                case 'no':
                case 'No':
                    question3No();
                    break;

                case 'exit':
                case 'Exit':
                    exit();
                    break;
                default:
                    invalid();
                    break
            }
        })
    } else {
        console.log("Something isn't right with the numbers you inserted please try again");
        question1();
    }
}
//Sub Function of question3 that polls for tip ammount and sends the info out to be calculated
function question3Yes(numdiners,totalbill,split) {
    rl.question('What Percent Tip Would You Like To Leave?(Example: 5.5)', (tipAmount) => {
        console.log(`Received: ${tipAmount}`);
        let tipAMT = parseFloat(tipAmount);
            if (isNaN(tipAMT) === false && tipAMT > 0) {
                let tipNaked = parseFloat(tip(totalbill,tipAMT));
                let tipsplit =tipNaked/numdiners;
                let splitTipsplit = (split+tipsplit);
                console.log("Alright If Everyone Is Sharing, The Total Cost Per Person Would Be: $"+
                    splitTipsplit.toFixed(2));
                exit();

            } else {
                invalid();
                question3Yes();
            }
    })
}

function question3No() {
    console.log("That Isn't Very Nice Of You. Your Total Bill Is: $" + splitBill(numDiners, parseFloat(totalBill)) + ' Per Person \n');
    exit();
}

function question2NoSplit(){
    rl.question('What Is The Total Amount Due? (Please Enter A Number Using Two Decimal Places)\n ', (totalBill) => {
        if (isNaN(totalBill) === false) {
            console.log(`Alright, The Total Amount Due Is: $${totalBill}\n`);
            question3NoSplit(totalBill)
        }
        else {
            invalid();
            question2NoSplit();
        }
    })
}

function question3NoSplit(totalBill){
    rl.question('Will You Be Leaving Your Server A Tip? (yes/no)) \n', (tip) => {
        switch (tip) {
            case 'yes':
            case 'Yes':
                TipNoSplit(totalBill);
                break;

            case 'no':
            case 'No':
                NoTipNoSplit(totalBill);
                break;

            case 'exit':
            case 'Exit':
                exit();
                break;
            default:
                invalid();
                question3NoSplit(totalBill);
                break
        }
    })
}

function TipNoSplit(totalBill) {
    rl.question('What Percent Tip Would You Like To Leave? (Please Enter A Whole Number) ', (tipAmount) => {
        if (isInt(tipAmount) === true && tipAmount > 0) {
            console.log(`Received: ${tipAmount}`);
            tip(totalBill, tipAmount);
            exit();
        } else {
            invalid();
            TipNoSplit(totalBill);
        }
    })
}

function NoTipNoSplit(totalBill) {
    console.log("That Isn't Very Nice Of You. Your Total Bill Is: $" + totalBill);
    exit();
}

module.exports = {
   CheckSplit,
   // TipNoSplit,
};