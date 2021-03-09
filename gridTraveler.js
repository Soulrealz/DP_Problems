/*
In a 2d Array, reach the bottom right space
calculate in how many moves can that be done 
when you can only move right or down
*/

const gridTraveler = (m, n, memo = {}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n ==== 0) return 0;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
};


// Time Space : O(m * n), O(n + m)
console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); //2_333_606_220