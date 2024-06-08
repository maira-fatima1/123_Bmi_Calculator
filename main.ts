#!/usr/bin/env node

import inquirer from "inquirer";

console.log("\n\tMY-BMI_CALCULATOR\n");

let Questions = ([
    {
        name: "weight",
        type : "number",
        message:"Enter your Height(m):" 
    },
    {
        name: "height",
        type : "number",
        message:"Enter your Weight(kg):" 
    },
]);

let CalculatorBMI = (weight:number , height: number):number =>weight/(height * height);

let main = async() => {
    const {weight,height} =await inquirer.prompt(Questions);

    console.log(`BMI: ${CalculatorBMI(weight,height).toFixed(2)}`)
};
main();

