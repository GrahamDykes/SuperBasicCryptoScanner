import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import chalk from "chalk";

export default function Git() {
  // console.log('\x1b[36m%s\x1b[0m', 'I am cyan on clear');  //cyan
  // console.log('\x1b[31m','\x1b[40m', 'I am Red on Black');  //red on black

  // FUNCTION DEFINITION(S)
  function findMaxRepeatCountInWord(word) {
    let wordArr = word.toLowerCase().split("");
    // console.log("wordArr: ", wordArr);

    let wordObj = wordArr.reduce((a, b) => {
        
    //   console.log("A:\n", a);
    //   console.log("B:\n", b);

      if (a[b] === undefined) {
       a[b] = 1;
       return a
      } else {
     a[b]++;
     return a
      }
    //   console.log("A:\n", a);
    }, {});
    // console.log(`---------`);
    // console.log("wordObj: ", wordObj);
    let wordVals = Object.values(wordObj)
    // console.log("wordVals: ", wordVals);
    let winner = Math.max(...wordVals)
    // console.log(chalk.blue.bold(`\nWinner of ${word}: \n`, winner));
    // console.log("-------------------")
    return winner
  }

//   findMaxRepeatCountInWord("cow");
//   findMaxRepeatCountInWord("boymeetsword");
//   findMaxRepeatCountInWord("sassafrass");
//   findMaxRepeatCountInWord("cowabunga");

  function findFirstWordWithMostRepeatedChars(text) {
    var maxRepeatCountOverall = 0;
    var wordWithMaxRepeatCount = "";

    let wordsArr = text.toLowerCase().split(" ")
    console.log("wordsArr: ", wordsArr);
    let countArr= wordsArr.map(e=>findMaxRepeatCountInWord(e))
    console.log("countArr: ", countArr);
    console.log('Most repeated: ', Math.max(...countArr))
    console.log(`index of winner?: `, countArr.indexOf(Math.max(...countArr)))
    // Break up input text into words (space-delimited).
    // For each word...
    //   var repeatCountForWord = findMaxRepeatCountInWord(word)
    // If that max repeat count is higher than the overall max repeat count, then
    // update maxRepeatCountOverall
    // update wordWithMaxRepeatCount

    // return wordWithMaxRepeatCount;
    console.log(`Winning word: `, wordsArr[countArr.indexOf(Math.max(...countArr))])
    return wordsArr[countArr.indexOf(Math.max(...countArr))]
  }

  // ASSERTION FUNCTION(S) TO BE USED

  // TESTS CASES

  
  findFirstWordWithMostRepeatedChars("i was walking down the street when horror struck")
  findFirstWordWithMostRepeatedChars("i worship at the altar of slaughter")
  findFirstWordWithMostRepeatedChars("BoneDaddy Mc Crunky time")


























  return (
    <div>
      <p>Look at console</p>
    </div>
  );
}
