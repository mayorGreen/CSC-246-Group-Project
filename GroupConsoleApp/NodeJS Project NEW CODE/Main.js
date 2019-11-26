let Check = require("./CheckSplitter.js");
let Simple = require("./SimpleInterest.js");
let Compound = require("./Compound interest.js");

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
main();
function main() {
    rl.question('\nWhich Calculator Do You Want\n' +
        'Press 1 For Tip/Check Splitter.\n' +
        'Press 2 For Simple Interest.\n'+
        'PRess 3 for Compounded Interest.', (CalcChoose) => {
        switch (CalcChoose) {
            case '1':
                console.log("\n  You Chose Tip/Check Splitter");
                Check.CheckSplit();
                break;
            case '2':
                console.log("\n  You Chose Simple Interest.");
                Simple.principle();
                break;
            case'3':
                console.log("\n  You Chose Compounded Interest.");
                Compound.principle();
                break;
            default:
                console.log("\nIt seems as if you entered an invalid response\n" +
                    "Please try Again!");
                main();
        }
    });
}
