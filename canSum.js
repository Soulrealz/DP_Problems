/*
Given an array of numbers and a target
check if that sum can be reached using only those numbers
numbers can be repeated
*/

const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
}


// Time Space : O(m * n), O(m)
console.log(canSum(7, [2, 3])); // true
console.log(canSum(301, [2, 2])); // false
console.log(canSum(7, [2, 4])); // false
console.log(canSum(300, [7, 14])); // false
console.log(canSum(300, [7, 1])); // true