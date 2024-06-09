import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import chalk from 'chalk';

export default function Git() {
    // console.log('\x1b[36m%s\x1b[0m', 'I am cyan on clear');  //cyan
    // console.log('\x1b[31m','\x1b[40m', 'I am Red on Black');  //red on black










let testArr= [0,1,2,3,4,5,6,7]
console.log(chalk.cyan.bold("testArr: ", testArr))
// testArr.splice(3,0,'X','Y','Z')
console.log("testArr.splice(3,2,'X','Y','Z'): ", testArr.splice(3,2,'X','Y','Z'));
console.log(chalk.green.bold("testArr: ", testArr))



    var answer = 4;
    console.log(chalk.red.bold('should be true:', answer === 4));


















 return (
   <div>
     <p>Look at console</p>
   </div>
 );
}