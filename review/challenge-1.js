// Function for swapping the case os a string with the prameter (sentence)
function swapCase(sentence) {
//Variable that will store the the reslt of swapping the case in the sentence
    let swappedSentence = '';
    
    // Convert the string into an array of characters.(splits the string into individual characters and stores them in the "letterArray" varible)
    const letterArray = sentence.split('');
    
    // Iterate over each character using forEach
    letterArray.forEach(function(letter) {
      if (letter === letter.toUpperCase()) {
        swappedSentence += letter.toLowerCase();
      } else if (letter === letter.toLowerCase()) {
        swappedSentence += letter.toUpperCase();
      } else {
        swappedSentence += letter;
      }
    });
    
    return swappedSentence;
  }
  
  // Example 
  const sentence = "My name is Job Kweri, a student at Moringa.";
  console.log(swapCase(sentence)); 

  