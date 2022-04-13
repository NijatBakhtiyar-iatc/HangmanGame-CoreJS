import inquirer from 'inquirer';

const word = "apple";
let wordArr = word.split('')
let dash = [];
let count = word.length;

for (let i = 0; i < word.length; i++) {
    dash.push("- ");
}
function callAgain() {
    inquirer.prompt([{
        message: "Write a letter and find word?",
        name: "letter",
        type: "input"
    }]).then(result => {

        if (count > 0 && dash.includes("- ")) {
            if (wordArr.join('').toLowerCase().includes(result.letter)) {

                for (let i = 0; i < wordArr.length; i++) {
                    for (let j = i + 1; j < wordArr.length; j++) {

                        if (wordArr[i] === result.letter) {
                            dash[i] = wordArr[i] + " ";
                        } else if (wordArr[j] === result.letter) {
                            dash[j] = wordArr[j] + " ";
                        }
                    }
                }
            }

            console.log(`You had ${count - 1} chances!!!`);
            console.log(dash.join(''));

            if (!dash.includes("- ")) {
                console.log("Game finished");
                console.log("You win");
            }

            else {
                count -= 1;

                if (count > 0) {
                    callAgain()
                } else {
                    console.log("Game finished");
                    console.log("You lost Game");
                }
            }
        }

        else {
            console.log("Game finished");
            if (dash.includes("- ")) {
                console.log("You lost Game");
            } else {
                console.log("You win");
            }
        }
    })
}

callAgain();