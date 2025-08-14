const prompt = require('prompt-sync')();

let age, studentCard;

age = 12
studentCard = true; 

if(age < 12 || age > 60) {
    console.log("Ganhou entrada gratuita");
}
else if (studentCard === true) {
    console.log("Ganhou meia entrada");
}
else {
    console.log("Entrada inteira")
}