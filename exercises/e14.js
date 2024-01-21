
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const depositSum = [];
  const withdrawalSum = [];
  const clientsWithWrongBalance = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].deposits) {
      depositSum.push(array[i].deposits[0]);
      for (let d = 1; d < array[i].deposits.length; d++) {
        depositSum[i] += array[i].deposits[d];
      }
    } else { depositSum.push(0); }
    if (array[i].withdrawals) {
      withdrawalSum.push(array[i].withdrawals[0]);
      for (let d = 1; d < array[i].withdrawals.length; d++) {
        withdrawalSum[i] += array[i].withdrawals[d];
      }
    } else { withdrawalSum.push(0); }
    if (depositSum[i] - withdrawalSum[i] !== array[i].balance) { clientsWithWrongBalance.push(array[i]); }
  }
  return clientsWithWrongBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
