const prompt = require("prompt-sync")({ sigint: true });

console.log("Hello");

const hobby = prompt("What is your hobby?");

const car = prompt("What car do you drive?");

const height = prompt("How tall are you?");

console.log("My hobby is", hobby, "I drive a", car, "I am", height);
