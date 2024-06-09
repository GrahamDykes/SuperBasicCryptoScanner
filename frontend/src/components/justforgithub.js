import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import chalk from 'chalk';

export default function Git() {
    // console.log('\x1b[36m%s\x1b[0m', 'I am cyan on clear');  //cyan
    // console.log('\x1b[31m','\x1b[40m', 'I am Red on Black');  //red on black


    function greetCustomer(firstName) {
        var customerData = {
          'Joe': {
            visits: 1
          },
          'Carol': {
            visits: 2
          },
          'Howard': {
            visits: 3,
          },
          'Carrie': {
            visits: 4
          }
        };
        console.log(chalk.bold.yellow(`firstName: ${firstName}`))
        console.log("customerData[firstName]: ", customerData[firstName]);
        console.log("customerData[firstName][visits]: ", customerData[firstName].visits);
        

        //   if(customerData[firstName][visits]==0){
        //       return 'Welcome! Is this your first time?'
        //   }
        //   if(customerData[firstName][visits]==1){
        
        //       return `Welcome back, ${firstName}! We're glad you liked us the first time!`
        //   }
        //   if(customerData[firstName][visits]>1){
       
        //       return `Welcome back, ${firstName}! So glad to see you again!`
        //   }
          
          
          
          
          
        }


        greetCustomer('Joe')

























































 return (
   <div>
     <p>Look at console</p>
   </div>
 );
}