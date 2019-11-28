/*
Check splitter is the portion of the program that calculates the bill
Splits it amongst the patrons, and calculates if a tip is needed.
 */

//Read User Input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//A Function used to check if a value is an int, makes use of lambda's
function isInt(value) {
    return !isNaN(value) && (function (x) { return (x | 0) === x })(parseFloat(value))
}

//A simple function used to exit the software at its relevant points.
function exit() {
    return process.exit(1);
}

//A Function that Calculates the Tip, by taking the Total Bill and dividing it by the percent to be tipped.
function tip(bill, tipAmount) {
    const Bill = parseFloat(bill);
    const Tip = parseFloat(tipAmount);
    console.log("\nAlright, You're Leaving A Tip Of: "+Tip+"%");
    const tipNaked = ((Tip/100)*bill).toFixed(2);
    console.log("\nThe tip will cost you an extra $" + tipNaked);
    console.log("\nThe total after the tip is $"+((Bill * (Tip/100))+Bill).toFixed(2));
    console.log("\nWe Hope You Enjoy Your Meal!\n");
    return tipNaked;

}

//A Function that splits the total amount of the bill, by the number of diners.
function splitBill(numDiners, bill) {
    return (bill /numDiners).toFixed(2);
}

//A function that will return an error if the input is invalid.
function invalid() {
    console.log("\nIt Seems You Entered An Invalid Input, Please Try Again\n");
}

// A Function that asks if the check is to be split and uses that to move on to the next relevant question
function CheckSplit() {
    rl.question('Will You Be Splitting The Check? (yes/no) \n', (answer) => {
        switch (answer.toLowerCase()) {
            case 'yes':
            case 'y':
                question1();
                break;
            case 'no':
            case 'n':
                question2NoSplit();
                break;
            default:
                invalid();
                CheckSplit();
                break
        }
    })
}
//A Function Used To Ask The User How Many Patrons There Were, This Sends The Response To Question 2 For It To Process
function question1() {
    rl.question('How Many Patrons Were There? (Please provide a whole number) ', (numDiners) => {
        let numdinersInt = parseInt(numDiners);
        if (isNaN(numdinersInt) === false && numDiners > 0) {
            console.log(`Got it, There Were ${numDiners} Patron(s)\n`);
            question2(numDiners)
        } else {
            invalid();
            question1();
        }
    })
}

//A Function that asks for the total amount due, and sends that information combined with the number of patrons to Question 3
function question2(numDiners) {
    rl.question('What Is The Total Amount Due? (Please Enter A Number Using Two Decimal Places)\n', (totalBill) => {
        let totalBillFloat = parseFloat(totalBill);
        if (isNaN(totalBillFloat) === false && totalBill > 0) {
            console.log(`Alright, The Total Amount Due Is: $${totalBill}\n`);
            question3(numDiners,totalBill)}
        else {
            invalid();
            question2(numDiners);
        }
    })
}

//A Function to ask the user if a Tip will be left. Passes the value to the next relevant function depending on their response.
function question3(numDiners,totalBill) {
    if (isNaN(numDiners) === false) {
        let split =parseFloat(splitBill(numDiners, parseFloat(totalBill)));
        console.log('So Far An Even Split Would Be $' + split + ' Between ' + numDiners + ' Patron(s).\n');
        rl.question('Will You Be Leaving Your Server A Tip? (yes/no)) \n', (answer) => {
            switch (answer.toLowerCase()) {
                case 'yes':
                case 'y':
                    question3Yes(numDiners,totalBill,split);
                    break;

                case 'no':
                case 'n':
                    question3No(numDiners, totalBill);
                    break;

                case 'exit':
                case 'e':
                    exit();
                    break;
                default:
                    invalid();
                    question3(numDiners,totalBill);
                    break;
            }
        })
    } else {
        console.log("Something isn't right with the numbers you entered please try again");
        question1();
    }
}
//A Function Following Question3 That asks the amount of tip and passes that information to be calculated
function question3Yes(numdiners,totalbill,split) {
    rl.question('What Percent Tip Would You Like To Leave?(Example: 5.5)', (tipAmount) => {
        let tipAMT = parseFloat(tipAmount);
        if (isNaN(tipAMT) === false && tipAMT > 0) {
            let tipNaked = parseFloat(tip(totalbill,tipAMT));
            let tipsplit =tipNaked/numdiners;
            let splitTipsplit = (split+tipsplit);
            console.log("\nAlright If Everyone Is Sharing, The Total Cost Per Person Would Be: $"+
                splitTipsplit.toFixed(2));
            console.log("\nWe Hope You Enjoyed Your Visit! \n");
            exit();

        } else {
            invalid();
            question3Yes(numdiners,totalbill,split);
        }
    })
}

//A function For Users That Choose To Leave No Tip
function question3No(numDiners,totalBill) {
    console.log("Very Well Then.. Your Total Bill Is: $" + splitBill(numDiners, parseFloat(totalBill)) + ' Per Person \n');
    exit();
}
//A Function that fires if the bill isn't in fact being split
function question2NoSplit(){
    rl.question('What Is The Total Amount Due? (Please Enter A Number Using Two Decimal Places)\n ', (totalBill) => {
         const totalBillFloat = parseFloat(totalBill);
        if (isNaN(totalBillFloat) === false && totalBillFloat > 0) {
            console.log(`Alright, The Total Amount Due Is: $${totalBill}\n`);
            question3NoSplit(totalBill)
        }
        else {
            invalid();
            question2NoSplit();
        }
    })
}
//A Function to calculate a non split bills tip
function question3NoSplit(totalBill){
    rl.question('Will You Be Leaving Your Server A Tip? (yes/no)) \n', (tip) => {
        switch (tip.toLowerCase()) {
            case 'yes':
            case 'y':
                TipNoSplit(totalBill);
                break;

            case 'no':
            case 'n':
                NoTipNoSplit(totalBill);
                break;

            case 'exit':
            case 'e':
                exit();
                break;
            default:
                invalid();
                question3NoSplit(totalBill);
                break
        }
    })
}

//A Function to calculate a tip that is not being split.
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
//A Function To Print A Response To A User Who Chooses Not To Split The Bill, Or Leave A Tip
function NoTipNoSplit(totalBill) {
    console.log("Very Well Then.. Your Total Bill Is: $" + totalBill);
    exit();
}

//Exporting the module
module.exports = {
    CheckSplit,
};