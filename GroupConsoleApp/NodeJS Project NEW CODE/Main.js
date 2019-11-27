/*
This is a javascript calculation program. It is meant to assist the user in calculating several financial plans.

It Includes The Following:

* Simple Interest
* Compound Interest
* Splitting A Check Evenly Amongst Patrons, And Calculating The Tip.

Each calculator has its own files, and functions, and main drives them all.
Each calculator is broken down to its base level functions to make debugging / updating / Adding easier.
If An Invalid Input is detected, an error is returned and the relevant question is reloaded.

Functions are used frequently to ensure users stay on the right track, and allow for easier debugging
 */

//Variables to refer to their specific calculator
let Check = require("./CheckSplitter.js");
let Simple = require("./SimpleInterest.js");
let Compound = require("./Compound interest.js");

//Variable to read and analyze user input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
main();

//The Main Function, asking users which calculator they'd like to use, and calling that function.
function main() {
    rl.question('\nWhich Calculator Would You Like To Use Today?\n' +
        '\nPress 1 To Split A Check / Calculate The Tip\n' +
        '\nPress 2 To Calculate Simple Interest\n'+
        '\nPress 3 To Calculate Compound Interest',
        (CalcChoose) => {
        switch (CalcChoose) {
            case '1':
                console.log("\nLoading Tip Calculator / Check Splitter \n");
                Check.CheckSplit();
                break;
            case '2':
                console.log("\nLoading Simple Interest Calculator\n");
                Simple.principle();
                break;
            case'3':
                console.log("\nLoading Compound Interest Calculator\n");
                Compound.principle();
                break;
            default:
                console.log("\nYou've Entered An Invalid Response. Please Try Again\n");
                main();
        }
    });
}
