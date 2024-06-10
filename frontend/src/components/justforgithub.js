import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import chalk from 'chalk';

export default function Git() {
    // console.log('\x1b[36m%s\x1b[0m', 'I am cyan on clear');  //cyan
    // console.log('\x1b[31m','\x1b[40m', 'I am Red on Black');  //red on black


    
    function assertArraysEqual(actual, expected, testName) {
        // your code here
        if(actual.every((e,i)=>e===expected[i])){
            // console.log(chalk.blue(`e: ${e}`))
            // console.log(chalk.yellow(`expected[i]: ${expected[i]}`))
            console.log("passed")
        }else{
             console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`)
        }
    }
   
var array1 = ['a', 'b', 'c','d'];
var array2 = ['a', 'b', 'c','e'];
console.log(chalk.red.bold(assertArraysEqual(array1,array2,'derp derp derp')))














































 return (
   <div>
     <p>Look at console</p>
   </div>
 );
}