import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Git() {


    // let testObj = {'legs': 2}
    // console.log('\n')
    // console.log(typeof testObj)
    // console.log('\n')
    // let isObject = (typeof testObj == 'object')
    // console.log("isObject: ", isObject);

    console.log('\n')
    console.log('Number: ',typeof 4)
    console.log('String: ',typeof 'legs')
    console.log('Object: ',typeof {'legs':4})
    console.log('Array: ',typeof [4,5,6])
    console.log('\n')
console.log('Typeof typof: ', typeof (typeof 4))

 return (
   <div>
     <p>Look at console</p>
   </div>
 );
}