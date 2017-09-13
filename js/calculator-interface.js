var Calculator = require('./../js/calculator.js').calcuModule;


$(document).ready(function(){
  $("#birthdate-form").submit(function(event){
    event.preventDefault();
    let calc = new Calculator("hot pink");
    let inputDate = new Date($("#bday").val());
    let age = calc.getAgeInYears(inputDate);
    let mercuryAge = calc.getAgeInMercury(age);
    let venusAge = calc.getAgeInVenus(age);
    let marsAge = calc.getAgeInMars(age);
    let jupiterAge = calc.getAgeInJupiter(age);
    $("#years").text(age + ' yrs.');
    $("#seconds").text(calc.getAgeInSeconds(age)+ ' seconds');
    $("#mercury").text(mercuryAge);
    $("#venus").text(venusAge);
    $("#mars").text(marsAge);
    $("#jupiter").text(jupiterAge);
    $("#earth-life").text(calc.getLifeLeft(age));
    $("#mercury-life").text(calc.getLifeLeft(mercuryAge));
    $("#venus-life").text(calc.getLifeLeft(venusAge));
    $("#mars-life").text(calc.getLifeLeft(marsAge));
    $("#jupiter-life").text(calc.getLifeLeft(jupiterAge));
  });
});
