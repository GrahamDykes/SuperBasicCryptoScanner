import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import chalk from "chalk";

export default function Git() {
 
    var currentInventory = [
        {
          name: 'Brunello Cucinelli',
          shoes: [
            {name: 'tasselled black low-top lace-up', price: 1000},
            {name: 'tasselled green low-top lace-up', price: 1100},
            {name: 'plain beige suede moccasin', price: 950},
            {name: 'plain olive suede moccasin', price: 1050}
          ]
        },
        {
          name: 'Gucci',
          shoes: [
            {name: 'red leather laced sneakers', price: 800},
            {name: 'black leather laced sneakers', price: 900}
          ]
        }
      ];

      function listAllBlackShoes(inventory) {
        let masterString = ""
        
        for(let i = 0; i<inventory.length;i++){
            for(let j = 0; j<inventory[i].shoes.length;j++){
                if(inventory[i].shoes[j].name.split(" ").includes('black')){
                    masterString+=`${inventory[i].name}, ${inventory[i].shoes[j].name}, ${inventory[i].shoes[j].price}\n`
                }
            }
        }
        
        console.log(masterString)
        return masterString
        
        }
        listAllBlackShoes(currentInventory)
        //Create helper functions if needed










  return (
    <div>
      <p>Look at console</p>
    </div>
  );
}
