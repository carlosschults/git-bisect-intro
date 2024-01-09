const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a list of numbers separated by comma:\n', numbers => {
    let integers = numbers.split(',').map(x => parseInt(x) || 0);
    let negatives = integers.filter(x => x < 0);
    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(', ')}.`);
    }
    
    let sum = integers
      .filter(x => x <= 1000)
      .reduce((a, b) => a + b, 0);
    console.log(`The sum of the entered numbers is ${sum}.`);
    readline.close();
  });
