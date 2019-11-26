let Simple = require("./SimpleInterest.js");
let Compound = require("./Compound interest.js");


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
    var Bill = parseFloat(bill);
    var Tip = parseFloat(tipAmount);
  console.log("\nThe Tip ammount is "+Tip+"%"+
      "\nThe tip will cost you an extra $" + ((Tip/100)*bill).toFixed(2)+
      "\nThe total after the tip is $"+((Bill * (Tip / 100))+Bill).toFixed(2))

}

//A Function that splits the total amount of the bill, by the number of diners.
function splitBill(numDiners, bill) {
    return (bill /numDiners).toFixed(2);
}

function invalid() {
    console.log("\nInvalid Input\n" +
        "Please try Again!");
}
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
function question2(numDiners) {
    rl.question('What Is The Total Amount Due? (Please Enter A Number Using Two Decimal Places)\n ', (totalBill) => {
        console.log(`Alright, The Total Amount Received Is: $${totalBill}\n`);
        if (isNaN(totalBill) === false) {question3(numDiners,totalBill)}
        else question2(numDiners);
    })
}
function question3(numDiners,totalBill) {
    if (isNaN(numDiners) === false) {
        console.log('So Far An Even Split Would Be $' + splitBill(numDiners, parseFloat(totalBill)) + ' Between ' + numDiners + ' Patrons.\n');
        rl.question('Will You Be Leaving Your Server A Tip? (yes/no)) \n', (answer) => {
            switch (answer) {
                case 'yes':
                case 'Yes':
                    question3Yes();
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
        console.log("Something isnt right with the numbers you inserted please try again");
        question1();
    }
}
function question3Yes() {
    rl.question('What Percent Tip Would You Like To Leave? (Please Enter A Whole Number) ', (tipAmount) => {
        console.log(`Received: ${tipAmount}`);
            if (isInt(tipAmount) === true && tipAmount > 0) {
                console.log('Alright If Everyone Is Sharing, The Total Cost Per Person Would Be: $' +
                    tip(splitBill(numDiners, totalBill), tipAmount) + ' Otherwise, A Single Person Owes: $' +
                    tip(totalBill, tipAmount) + ' For A Tip.');
                H
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