// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  const nameToLetters = [];
  const nameWithAskedLetter = [];
  
  for (let i = 0; i < array.length; i++) {
    nameToLetters.push(Array.from(array[i].name.toLowerCase()));
    for (let l = 0; l < nameToLetters[i].length; l++) {
      if (nameToLetters[i][l] == letter) {
        nameWithAskedLetter.push(array[i].name);
      }
    }
  }
  return nameWithAskedLetter;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
