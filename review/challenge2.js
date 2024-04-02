//A function with two parameters, firstnum and last num.
function generateArray(firstnum, lastnum) {
//expression creates an array with appropriate length, fills it with udefined values and then maps each element to the corresponding number in the desired range.
    return Array(lastnum - firstnum + 1).fill().map((_, index) => firstnum + index);
  }
  
  // Example 
  let firstNumber = 13;
  let lastNumber = 20;
  let generatedArray = generateArray(firstNumber, lastNumber);
  console.log(generatedArray); 