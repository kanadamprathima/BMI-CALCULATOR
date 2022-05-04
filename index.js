const weightInKg = parseInt(process.argv[2]);
const heightInM  = parseFloat(process.argv[3]);
var age=parseInt(process.argv[4]);
console.log("weight:", weightInKg);
console.log("height:", heightInM);
const BMI = (weightInKg)/(heightInM*heightInM);
const idealWeight=(22.5*heightInM*heightInM);
var BMR = 10*weightInKg + 6.25*(heightInM*100) - 5*age;
var dailyCalories = BMR * 1.4;
var losingWeight=weightInKg-idealWeight;
var timeTaken = losingWeight/0.5;
var calorieIntake = dailyCalories-500;
console.log(`
    **************
    BMI CALCULATOR
    **************
    
    height: ${heightInM} m
    weight: ${weightInKg}kg
    age: ${age}years
    ****************
    FACING THE FACTS
    ****************
    
    Your BMI is ${Math.round(BMI)}
    
    A BMI under 18.5 is considered underweight
    A BMI above 25 is considered overweight

    your idealweight is: ${Math.round(idealWeight)}kg;
    With a normal lifestyle you burn ${Math.round(dailyCalories)} calories a day
    
    
    ~~~~~~~~~~~~~
    DIET PLAN
    ~~~~~~~~~~~~~

    If you want to reach your ideal weight of ${Math.round(idealWeight)} kg:
    Eat ${Math.round(calorieIntake)} calories per day for ${Math.round(timeTaken)} weeks

`
    );
