function Calculator(name) {
  this.name = name;
}

Calculator.prototype.getAgeInYears = function(birthDate){
  let currentDate = new Date();
  let years = currentDate.getFullYear() - birthDate.getFullYear();
  if (currentDate.getMonth() < birthDate.getMonth()){
    years--;
  } else if (currentDate.getMonth() == birthDate.getMonth()){
    if(currentDate.getDate() < birthDate.getDate()){
      years--;
    }
  }
  return years;
};

Calculator.prototype.getAgeInSeconds = function(ageInYears){
  let yearsToSeconds = 31556952;
  return ageInYears * yearsToSeconds;
};

Calculator.prototype.getAgeInMercury = function(ageInYears){
  const mercury = 0.24;
  return (ageInYears / mercury).toFixed(2);
};

Calculator.prototype.getAgeInVenus = function(ageInYears){
  const venus = 0.62;
  return (ageInYears / venus).toFixed(2);
};

Calculator.prototype.getAgeInMars = function(ageInYears){
  const mars = 1.88;
  return (ageInYears / mars).toFixed(2);
};

Calculator.prototype.getAgeInJupiter = function(ageInYears){
  const jupiter = 11.86;
  return (ageInYears / jupiter).toFixed(2);
};

Calculator.prototype.getEarthLifeLeft = function(age){
  const lifeExpectancy = 79; //Based in Portland Oregon
  if (lifeExpectancy <= age){
    return "longlife";
  } else {
    return (lifeExpectancy - age).toFixed(2);
  }
};

Calculator.prototype.getMercuryLifeLeft = function(age){
  const lifeExpectancy = 79;
  let mercuryLF = Calculator.prototype.getAgeInMercury(lifeExpectancy);
  if (mercuryLF <= age){
    return "longlife";
  } else {
    return (mercuryLF - age).toFixed(2);
  }
};

Calculator.prototype.getVenusLifeLeft = function(age){
  const lifeExpectancy = 79;
  let venusLF = Calculator.prototype.getAgeInVenus(lifeExpectancy);
  if (venusLF <= age){
    return "longlife";
  } else {
    return (venusLF - age).toFixed(2);
  }
};

Calculator.prototype.getMarsLifeLeft = function(age){
  const lifeExpectancy = 79;
  let marsLF = Calculator.prototype.getAgeInVenus(lifeExpectancy);
  if (marsLF <= age){
    return "longlife";
  } else {
    return (marsLF - age).toFixed(2);
  }
};

Calculator.prototype.getJupiterLifeLeft = function(age){
  const lifeExpectancy = 79;
  let jupiterLF = Calculator.prototype.getAgeInVenus(lifeExpectancy);
  if (jupiterLF <= age){
    return "longlife";
  } else {
    return (jupiterLF - age).toFixed(2);
  }
};

exports.calcuModule = Calculator;
