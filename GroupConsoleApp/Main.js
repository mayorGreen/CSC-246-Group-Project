let Check = require("./CheckSplitter.js");
let Simple = require("./SimpleInterest.js");

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question('Which Calculator Do You Want', (CalcChoose) =>{
         switch (CalcChoose){
             case '1':
                Check.CheckSplit();
                break;
             case '2':
                 Simple.interestCalculator();
                 break;
    }
});

