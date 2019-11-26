/**
function Others() {
    rl.question('\nWhich Calculator Do You Want\n' +
        'Press 1 For Simple Interest.\n'+
        'PRess 2 for Compounded Interest.', (CalcChoose) => {
        switch (CalcChoose) {
            case '1':
                console.log("\n  You Chose Simple Interest.");
                Simple.principle();
                break;
            case'2':
                console.log("\n  You Chose Compounded Interest.");
                Compound.principle();
                break;
            default:
                console.log("\nIt seems as if you entered an invalid response\n" +
                    "Please try Again!");
                Others();
        }
    });
}

function CalcSelector() {
    rl.question('Would you like to try another calculator? (yes/no) \n ', (answer) => {
        switch (answer) {
            case 'yes':
                Others();
                break;
            case 'no':
                exit();
                break;
            default:
                invalid();
                exit();
                break
        }
    })

}**/