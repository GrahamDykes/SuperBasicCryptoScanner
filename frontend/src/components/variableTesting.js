import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
 
export default function variableTesting() {
 








const arrObjs = [
  {
    category: "fruit",
    itemName: "banana",
    onSale: "true",
  },
  {
    category: "fruit",
    itemName: "orange",
    onSale: "false",
  },
  {
    category: "frozen",
    itemName: "pizza",
    onSale: "true",
  },
  {
    category: "frozen",
    itemName: "icecream",
    onSale: "false",
  },
  {
    category: "baking",
    itemName: "cake",
    onSale: "false",
  },
];



// for (let i = 0; i < arrObjs.length; i++){

// }

let testAns={}

for (let x in arrObjs){
  console.log(`\n\n\n\tNew Iteration\n`)
    console.log(arrObjs[x])
    // let surgery = Object.keys(arrObjs[x])
    let surgery = Object.values(arrObjs[x])
    console.log( `surgery: ${surgery}` )
    console.log(`surgery[0]: ${surgery[0]}`)
    console.log(`\ntestAns[surgery[0]] : ${testAns[surgery[0]]}\n`)
    if(testAns[surgery[0]] === undefined){
      // testAns[surgery[0]] = (testAns[surgery[3]]? [testAns[surgery[1]].concat('($)')]:testAns[surgery[1]])
      testAns[surgery[0]] = 2
    } else {
      // testAns[surgery[0]] = [...testAns[surgery[0]],(testAns[surgery[3]]? [testAns[surgery[1]].concat('($)')]:testAns[surgery[1]])]
    }
console.log(`\ntestAns:\n${testAns[surgery[0]]}`)

}

console.log(`\ntestAns:\n${testAns}`)
for(let x in testAns){
  console.log(`${x} : ${testAns[x]}`)
}


let answer = arrObjs.reduce((a, b)=>{
  if ( !a[b.category] ){
   a[b.category] = []
  }
  if( b.onSale == 'true'){
      a[b.category].push(b.itemName.concat('($)'))
  }else{
   a[b.category].push(b.itemName)
  }
  return a
},{});

console.log(`\n\n\n\n`)
for(let x in answer){
  console.log(`${x} : ${answer[x]}`)
}
console.log(`\n\n\n\n`)
console.log(`Answer:\n${answer}`)
// let arr1 = []
// let arr2 = []
// let arr3 = []

// let ansObj = {
// property1:arr1,
// property2:arr2,
// property3:arr3
// }

// return ansObj


return (

<div>
  <p>Variable Testing</p>
</div>



)
}