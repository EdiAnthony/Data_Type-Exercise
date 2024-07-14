let name = prompt("Enter your name:");
let age = parseInt(prompt("Enter your age:"));

const currentYear = new Date().getFullYear();
let yearOfBirth = currentYear - age;

alert(`Greetings ${name}! You are ${age} years old, so you were born in ${yearOfBirth}.`);