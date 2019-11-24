let Check = require("./CheckSplitter.js");
let Simple = require("./SimpleInterest.js");

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
main();
function main() {
    rl.question('\nWhich Calculator Do You Want\n' +
        'Press 1 For Tip/Check Splitter.\n' +
        'Press 2 For Simple Interest.', (CalcChoose) => {
        switch (CalcChoose) {
            case '1':
                Check.CheckSplit();
                break;
            case '2':
                Simple.interestCalculator();
                break;
            default:
                console.log("\nIt seems as if you entered an invalid response\n" +
                    "Please try Again!");
                main();
        }
    });
}

