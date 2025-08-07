let valueTicket, age; 

valueTicket = 40;
age = 60;

const ElderlyRequirements = {Discount: 0.5, ageMinimum: 60};

if(age >= ElderlyRequirements.ageMinimum){
    let valueFinal = valueTicket * ElderlyRequirements.Discount
    console.log("Você recebeu o Desconto de 50%, valor final foi aplicado para:", valueFinal)
}
else{
    console.log("Você não recebeu desconto, valor final foi aplicado para:", valueTicket)
}
