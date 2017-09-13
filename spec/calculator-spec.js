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
    expect(calc.getLifeLeft(age)).toEqual('62.00');
    expect(calc.getLifeLeft(calc.getAgeInMercury(age))).toEqual('8.17');
    expect(calc.getLifeLeft(calc.getAgeInVenus(age))).toEqual('51.58');
    expect(calc.getLifeLeft(calc.getAgeInMars(age))).toEqual('69.96');
    expect(calc.getLifeLeft(calc.getAgeInJupiter(age))).toEqual('77.57');
  });

  it('should display longlife when age is greater than lifeExpectancy', function() {
    expect(calc.getLifeLeft(90)).toEqual('longlife');
  });

});
