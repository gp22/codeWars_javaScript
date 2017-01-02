// The Fibonacci numbers are the numbers in the following integer sequence (Fn):
//
//     0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
//
// such as
//
//     F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.
//
// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying
//
//     F(n) * F(n+1) = prod.
//
// Your function productFib takes an integer (prod) and returns an array:
//
// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
//
// depending on the language if F(n) * F(n+1) = prod.
//
// If you don't find two consecutive F(m) verifying F(m) * F(m+1) = prodyou will return
//
// [F(m), F(m+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
//
// F(m) being the smallest one such as F(m) * F(m+1) > prod.
// Examples
//
// productFib(714) # should return [21, 34, true],
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34
//
// productFib(800) # should return [34, 55, false],
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21

'use strict';

function productFib(prod) {
    // generate Fibonacci numbers up to a certain size and store them in an array
    function genFib(bound) {
        let fibArray = [0, 1, 1];
        // check if fibArray is already big enough, if it is, return as is
        if (fibArray.slice(-1) >= bound) {
            return fibArray;
        }
        // otherwise, build fibArray up to bound
        for (let i = 2; fibArray.slice(-1) < bound; i++) {
            fibArray.push(fibArray[i] + fibArray[i - 1]);
        }
        return fibArray;
    }
    // iterate through the array of Fibonacci numbers two at a time, finding if the product of any two equals prod
    function findProd(array) {
        let product = 0;
        for (var i = 2; product < prod; i++) {
            product = array[i] * array[i - 1];
            if (product === prod) {
                return [array[i - 1], array[i], true];
            }
        }
        return [array[i - 2], array[i - 1], false];
    }
}
