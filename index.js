const prompt = require("prompt-sync")({ sigint: true });

console.log("Hello let's print your name");

const name = prompt("what is your name? ");

const age = prompt("how old are you? ");

const job = prompt("what do you do for living? ");

console.log(
  "my name is " + name + " i am " + age + " years old" + " my job is " + job
);

const favoriteFoods = ["pizza", "burgers", "steak", "sushi"];
