/*
Given a target sum and an array of numbers
return array of numbers which combined 
give that target sum (if possible)
*/

const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null;
    return null;
}

// Time Space : O(n * m^2), O(m^2)
console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(301, [2, 2])); // null
console.log(howSum(7, [2, 4])); // null
console.log(howSum(300, [7, 14])); // null
console.log(howSum(300, [7, 1])); // too long result...a shit load of 7s in this one 