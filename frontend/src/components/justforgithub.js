import React from "react";
import "bootstrap/dist/css/bootstrap.css";
 

export default function Git() {
    console.log('\x1b[36m%s\x1b[0m', 'I am cyan on clear');  //cyan
    console.log('\x1b[31m','\x1b[40m', 'I am Red on Black');  //red on black



   // an array of items to count
var arrayOfItemsToCount = ['a', 'b', 'a', 'b', 'c', 'b'];
// an object to store the counts
var objectOfCounts = {};

// we loop over the array of items to count
for (var i = 0; i < arrayOfItemsToCount.length; i++) {
  var currentItem = arrayOfItemsToCount[i];
  // if we have not counted current item
  if (objectOfCounts[currentItem] === undefined) {
    // add it to count object with a value of 1
    objectOfCounts[currentItem] = 1;
  // otherwise (we have counted it at least once)
  } else {
    // increment value in count object by 1
    objectOfCounts[currentItem]++;
  }
}
console.log(objectOfCounts);

 return (
   <div>
     <p>Look at console</p>
   </div>
 );
}