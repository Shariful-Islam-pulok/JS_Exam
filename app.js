// Qustion = 1 : Create a function that takes two numbers as arguments and returns their sum.

// answer :
function argument(firstNumber, secondNumber) {
    return sum = (firstNumber + secondNumber);
}


console.log(argument(3, 2));  //output = 5
console.log(argument(-3, -6));  //output = -9
console.log(argument(7, 3));  //output = 10



// Qustion = 2 : Write a function that takes an integer minutes and converts it to seconds.

// answer :
function convert(minutes) {
    return sourcing = (minutes * 60);
}


console.log(convert(5))  //output = 300
console.log(convert(3))  //output = 180
console.log(convert(2))  //output = 120



// Qustion = 3 : Create a function that takes a number as an argument, increments the number by +1, and returns the result

// answer :
function addition(number) {
    return sum = (number + 1);
}


console.log(addition(0))  //output = 1
console.log(addition(9))  //output = 10
console.log(addition(-3))  //output = -2



// Qustion = 4 : Write a function that takes the base and height of a triangle and return its area.

// answer :
function triArea(base, height) {
    return triangleArea = ((base * height) / 2);
}


console.log(triArea(3, 2))  //output = 3
console.log(triArea(7, 4))  //output = 14
console.log(triArea(10, 10))  //output = 50



// Qustion = 5 : Create a function that takes an array containing only numbers and return the first element.

//answer :
function getValue(array) {
    return array.length > 0 ? array[0] : "Array is empty";
}


console.log(getValue([1, 2, 3]));  //output = 1
console.log(getValue([80, 5, 100]));  //output = 80
console.log(getValue([-500, 0, 50]));  //output = -500



// Qustion = 6 : Create a function that takes the age in years and returns the age in days.

//answer :
function calcAge(age) {
    return days = (age * 365);
}


console.log(calcAge(65))  //output = s23725
console.log(calcAge(0))  //output = 0
console.log(calcAge(20))  //output = 7300



// Qustion = 7 : Create a function that takes voltage and current and returns the calculated power

//answer :
function circuitPower(voltage, current) {
    return sourcing = (voltage * current );
}


console.log(circuitPower(230, 10))  //output = 2300
console.log(circuitPower(110, 3))  //output = 330
console.log(circuitPower(480, 20))  //output = 9600



// Qustion = 8 : Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

//answer :
function nextEdge(firstSide, secondSide) {
    return range = ((firstSide +secondSide) - 1);
}


console.log(nextEdge(8, 10)) //output = 17
console.log(nextEdge(5, 7)) //output = 11
console.log(nextEdge(9, 2)) //output = 10



// Qustion = 9 :There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

//answer :
function remainder(firstNumber, secondNumber) {
    return rValue = (firstNumber % secondNumber);
}


console.log(remainder(1, 3))  //output = 1
console.log(remainder(3, 4))  //output = 3
console.log(remainder(-9, 45))  //output = -9
console.log(remainder(5, 5))  //output = 0



// Qustion = 10 : Write a function that returns the string "something" joined with a space " "and the given argument a

//answer :
function giveMeSomething(a) {
    return output = ("something" + a);
}


console.log(giveMeSomething("is better than nothing"));  // Output: "something is better than nothing"
console.log(giveMeSomething("Bob Jane"));                // Output: "something Bob Jane"
console.log(giveMeSomething("something"));               // Output: "something something"



// Qustion = 11 : Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do

//answer :
function squared(p) {
    return sourcing = (p * p);
  }
  

  
  console.log(squared(5));    // Output: 25
  console.log(squared(9));    // Output: 81
  console.log(squared(100));  // Output: 10000
  


  // Qustion = 12 : Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false

  //answer :
  function lessThanOrEqualToZero(num) {
    return boolean = (num <= 0);
  }
  

  
  console.log(lessThanOrEqualToZero(5));   // Output: false
  console.log(lessThanOrEqualToZero(0));   // Output: true
  console.log(lessThanOrEqualToZero(-2));  // Output: true



   // Qustion = 13 : Given an n-sided regular polygon n return the total sum of internal angles (in degrees).

  //answer :
  function sumPolygon(n) {
    return sourcing = ((n - 2) * 180);
  }
  
  
  console.log(sumPolygon(3));  // Output: 180
  console.log(sumPolygon(4));  // Output: 360
  console.log(sumPolygon(6));  // Output: 720



  
   // Qustion = 14 : A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with the string "Coder" and store it in a variable called result He needs your help to fix this code

  //answer :
  function nameString(name) {
    var result = name + "Coder";
    return result;
  }
  
 
  console.log(nameString("Mubashir"));     // Output: "MubashirCoder"
  console.log(nameString("Matt"));         // Output: "MattCoder"
  console.log(nameString("javaScript"));   // Output: "javaScriptCoder"

  


// Qustion = 15 : Given two numbers, return true if the sum of both numbers is less than 100. Otherwise, return false.

  //answer : 
  function lessThan100(num1, num2) {
    return sumNumber = ((num1 + num2) < 100);
  }
   

  
  console.log(lessThan100(22, 15));   // Output: true
  console.log(lessThan100(83, 34));   // Output: false
  console.log(lessThan100(3, 77));    // Output: true
  