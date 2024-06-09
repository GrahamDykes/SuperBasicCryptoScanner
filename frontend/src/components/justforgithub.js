import React from "react";
import "bootstrap/dist/css/bootstrap.css";
 

export default function Git() {


let testObj = {
    'head': 'big',
    'teeth': 25,
    'chin' : 'square',
    eyes:'two',
    hair: 'blonde',
    6: 'car',
    7: 98,
}
for(let x in testObj){
    console.log('X: ',x)
    console.log('testObj[x]', testObj[x])
    
    console.log('typeof:', typeof x)
    console.log('-------\n')
}










 return (
   <div>
     <p>Look at console</p>
   </div>
 );
}