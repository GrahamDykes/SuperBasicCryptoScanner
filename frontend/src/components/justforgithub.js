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

    function renderInventory(inventory) {
        //we going to loop through the MAIN array
        //grabbing each item from each designer
        //throwing it into a master string
        let masterString= ""
        for(let obj in inventory){
            for(let i = 0; i<inventory[obj].shoes.length;i++){
                // console.log(`${inventory[obj].name}, ${inventory[obj].shoes[i].name}, ${inventory[obj].shoes[i].price}`)
                console.log(`${inventory[obj].shoes[i].name.split(" ").includes('black')}`)
                masterString+=`${inventory[obj].name}, ${inventory[obj].shoes[i].name}, ${inventory[obj].shoes[i].price}\n`
            }
        }
        // for(let obj in inventory){
        //     for(let i = 0; i<inventory[obj].shoes.length;i++){
        //         console.log(`${inventory[obj].name}, ${inventory[obj].shoes[i].name}, ${inventory[obj].shoes[i].price}`)
        //         masterString+=`${inventory[obj].name}, ${inventory[obj].shoes[i].name}, ${inventory[obj].shoes[i].price}\n`
        //     }
        // }
        return masterString
        }
        renderInventory(currentInventory)
        //Create helper functions if needed










  return (
    <div>
      <p>Look at console</p>
    </div>
  );
}
