#!/usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { massage: "Enter first number", type: "number", name: "firstNumber" },
  { massage: "Enter second number",type: "number",name:"secondNumber" },
  {massage:"select one of the operator to perform operation",
  type:"list",
  name:"operator",
  choices:["addition","subtraction","multiplication","division"]},
]);
  


 if(answer.operator==="addition"){
  console.log(answer.firstNumber + answer.secondNumber);
}
  else if(answer.operator==="subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
  }
  else if(answer.operator==="multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
  }
  else if(answer.operator==="division"){
    console.log(answer.firstNumber / answer.secondNumber);
  }
  else
  {
    console.log("enter correct information")
  }