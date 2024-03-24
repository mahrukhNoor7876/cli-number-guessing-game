#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to number Guessing Game");

const randomNumber=Math.floor(Math.random()*6+1);

const guessNumber=await inquirer.prompt([
    { message:"Please guess a number between 1-6: ", type:"number", name:"userGuessNumber" }
]);

if(guessNumber.userGuessNumber === randomNumber){
    console.log("Congratulations! You guessed right");
    }
else{
    console.log("You guessed wrong");    
}