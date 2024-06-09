import React from "react";
import "bootstrap/dist/css/bootstrap.css";

 
export default function makingAnDictionary() {
 








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

let testAns={}

for (let x in arrObjs){
  console.log(`\n\n\n\tNew Iteration\n`)
    console.log(arrObjs[x])
  
    console.log( `category: ${arrObjs[x].category}` )
    console.log( `itemName: ${arrObjs[x].itemName}` )
    console.log(`onSale:  ${arrObjs[x].onSale}`)
    
    if(testAns[arrObjs[x].category]===undefined){
      if(arrObjs[x].onSale ==='true'){
        testAns[arrObjs[x].category] = [arrObjs[x].itemName +"($)"]
      }else{
        testAns[arrObjs[x].category] = [arrObjs[x].itemName]
      }
    }else{
      if(arrObjs[x].onSale ==='true'){
        testAns[arrObjs[x].category].push([arrObjs[x].itemName +"($)"])
      }else{
        testAns[arrObjs[x].category].push([arrObjs[x].itemName])
      }
    }
    console.log('\n')
    console.log(`Current Answer Object: \n`, testAns)
  }
    


console.log('\n')
console.log('\n')
console.log('\n')
console.log(`\n Final Object :\n`)
for(let x in testAns){
  console.log(`${x} : ${testAns[x]}`)
  // console.log('Array.isArray:', Array.isArray(testAns[x]))
}

console.log(`-------------------------`)
console.log(`----END OF CYCLE-----`)
console.log(`-------------------------`)


return (

<div>
  <p>Variable Testing</p>
</div>



)
}