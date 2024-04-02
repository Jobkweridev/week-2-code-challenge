//Create an array with numbers
let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
//Create a function for finding the prime numbers in the array

function primeNum(numbers) {
    //Ensures that the output > 1
    if(numbers <= 1) {
        return "Not prime number";
    }
    

    for(i = 2; 1 <= Math.sqrt(numbers); i++) {

        if(numbers % i === 0) {
            return "Not prime number";
        }
    }
    return numbers;
    }
    
console.log(arrayNum.filter(primeNum));