let Calculator = require('./../js/calculator.js').calcuModule;

describe('Calculator', function() {
    let calc;
    let bday;
    let age;
  beforeEach(function(){
    calc = new Calculator("Maria");
    bday = new Date('2000-09-08');
    age = calc.getAgeInYears(bday);
 });

   it('should test whether it can instantiates a calculator object',function(){
      expect(calc.name).toEqual("Maria");
    });

  it('should test whether it can calculate the age from user birthday', function() {
    expect(calc.getAgeInYears(bday)).toEqual(17);
  });

  it('should test whether it can calculate the age in seconds', function() {
    expect(calc.getAgeInSeconds(age)).toEqual(536468184);
  });

  it('should test whether it can calculate the age in different planets', function() {
    expect(calc.getAgeInMercury(age)).toEqual('70.83');
    expect(calc.getAgeInVenus(age)).toEqual('27.42');
    expect(calc.getAgeInMars(age)).toEqual('9.04');
    expect(calc.getAgeInJupiter(age)).toEqual('1.43');
  });

  it('should test whether it can calculate the lifeExpectancy', function() {
    expect(calc.getEarthLifeLeft(age)).toEqual('62.00');
    expect(calc.getMercuryLifeLeft(calc.getAgeInMercury(age))).toEqual('longlife');
    expect(calc.getVenusLifeLeft(calc.getAgeInVenus(age))).toEqual('longlife');
    expect(calc.getMarsLifeLeft(calc.getAgeInMars(age))).toEqual('longlife');
    expect(calc.getJupiterLifeLeft(calc.getAgeInJupiter(age))).toEqual('125.99');
  });

  it('should display longlife when age is greater than lifeExpectancy', function() {
    expect(calc.getEarthLifeLeft(90)).toEqual('longlife');
  });

});
