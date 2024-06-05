// Find prime numbers between two user-given numbers
// Check if a number is prime
const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Find prime numbers between two user-given numbers
const findPrimes = () => {
    const start = parseInt(document.getElementById('iVal1').value);
    const end = parseInt(document.getElementById('iVal2').value);
    const resultElement = document.getElementById('result');
    let primes = [];

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    resultElement.textContent = `Prime numbers between ${start} and ${end} are: ${primes}`;
}
// Find prime numbers between two user-given numbers


// Display the count of digits in a number
const displayDigitCount = () => {
    const numberInput = document.getElementById('numberInputDigitCount').value.trim();
    if (numberInput === '') {
        document.getElementById('digitCountResult').textContent = 'Please enter a number.';
        return;
    }
    const number = parseFloat(numberInput);
    if (isNaN(number)) {
        document.getElementById('digitCountResult').textContent = 'Please enter a valid number.';
        return;
    }
    const digitCount = number.toString().length;
    document.getElementById('digitCountResult').innerHTML = `The number ${number} has <strong>${digitCount}</strong> digits.`;
}
// Display the count of digits in a number

// Calculate the sum of digits in a number
const sumOfDigits = (num) => {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit;
        num = parseInt(num / 10);
    }
    return sum;
}

const calculateSum = () => {
    const sumNumberInput = parseInt(document.getElementById('numberInputSum').value);
    if (isNaN(sumNumberInput)) {
        document.getElementById('sumResult').textContent = 'Please enter a valid number.';
    } else {
        const sum = sumOfDigits(sumNumberInput);
        document.getElementById('sumResult').textContent = `The sum of digits of ${sumNumberInput} is <strong>${sum}</strong>.`;
    }
}
// Calculate the sum of digits in a number