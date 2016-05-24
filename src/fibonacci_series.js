'use strict';

function fibonacci_series(n) {
    var fibonacciNumber = buildFibonacciNumber(n);
    return fibonacciNumber;
}

function buildFibonacciNumber(n) {
    var fibonacciNumber = [0, 1];
    for (var i = 2; i < n + 1; i++) {
        fibonacciNumber.push(fibonacciNumber[i - 1] + fibonacciNumber[i - 2]);
    }
    return fibonacciNumber;
}

module.exports = fibonacci_series;
