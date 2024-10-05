const prompt = require("prompt-sync")({ sigint: true });

console.log("Hello. Tell me about yourself.");

const name = prompt("What is your name? ");

const age = prompt("How old are you? ");

const job = prompt("What do you do for living? ");

const hobby = prompt("What do you like to do for fun? ")

const favoriteFoods = ["Gimbab", "Sushi", "Tacos", "Steak"];

console.log("My name is " + name + ". I am " + age + " years old." + " My job is " + job + "." + " My hobby is " + hobby + "."); 
const number = prompt("Pick a number between 0 and 3.");
const food = favoriteFoods[number];

console.log("We are having", food, "for dinner.");
