// Find prime numbers between two user-given numbers
// Check if a number is prime
const isPrime = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= num / 2; i++) {
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
        let reminderDigit = num % 10;
        sum = sum + reminderDigit;
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
        document.getElementById('sumResult').innerHTML = `The sum of digits of ${sumNumberInput} is <strong> ${sum} </strong>.`;
    }
}
// Calculate the sum of digits in a number

// Find the minimum and maximum values in the array
const findMinMax = () => {
    var input = document.getElementById('arrayInputMinMax').value;
    var array = input.split(',').map(Number);
    var min = Math.min(...array);
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    document.getElementById('minMaxResult').innerText = 'Min: ' + min + ', Max: ' + max;
}
// Find the minimum and maximum values in the array


// Find the average in the array
function avg(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

function calculateAverage() {
    const input = document.getElementById('arrayInputAverage').value;
    const array = input.split(',').map(Number); 
    const average = avg(array);
    document.getElementById('averageResult').innerHTML = `The average of this [ ${array} ] - array is <strong>${average}</strong>`;
}
// Find the average in the array