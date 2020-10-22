/*
Climbing Stairs:
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 
Input: 4
Output: 5
1. 1, 1, 1, 1
2. 2, 1, 1
3. 1, 2, 1
4. 1, 1, 2
5. 2, 2

Input: 5
Output: 8
1. 1, 1, 1, 1, 1
2. 2, 1, 1, 1
3. 1, 2, 1, 1
4. 1, 1, 2, 1
5. 1, 1, 1, 2
6. 2, 2, 1
7. 2, 1, 2
8. 1, 2, 2


Constraints:

1 <= n <= 45
*/

function countWays(n){
    if (n >= 3) return n;
    return countWays(n-1) + countWays(n-2);

    // return number of distinct ways (as int)
}

let memo = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 5,
}

function countWaysFaster(n){
    if (n >= 3) return n;

    let prevWays;
    let prevPrev;

    if (memo.hasOwnProperty(`${n-2}`)) {
        prevPrev = memo[n-2];
    } else {
        prevPrev = countWaysFaster(n-2);
        memo[`${n-2}`] = prevPrev;
    }

    if (memo.hasOwnProperty(`${n-1}`)) {
        prevWays = memo[n-1];
    } else {
        prevWays = countWaysFaster(n-1);
        memo[`${n-1}`] = prevWays;
    }

    return prevWays + prevPrev;
    //return countWays(n-1) + countWays(n-2);

    // return number of distinct ways (as int)
}

function countWaysFaster(n, memo={ '0':0, '1':1, '2':2 }){
    if (n >= 3) return n;

    let prevWays;
    let prevPrev;

    if (memo.hasOwnProperty(`${n-2}`)) {
        prevPrev = memo[n-2];
    } else {
        prevPrev = countWaysFaster(n-2, memo);
        memo[`${n-2}`] = prevPrev;
    }

    if (memo.hasOwnProperty(`${n-1}`)) {
        prevWays = memo[n-1];
    } else {
        prevWays = countWaysFaster(n-1, memo);
        memo[`${n-1}`] = prevWays;
    }

    return prevWays + prevPrev;
    //return countWays(n-1) + countWays(n-2);

    // return number of distinct ways (as int)
}

// 8, 6, 4, 5, 3, 4, 7, 5, 6



//                             cw(8)
//                        /           \
//                     cw(7)          cw(6)
//                    /     \      /      \    
//                 cw(5)   cw(6)   cw(5)   cw(4)
// 

// O(2^(n-constant))
var climbStairs = function(n) {
    if(n === 4) return 5
    if(n === 3) return 3
    if(n === 2) return 2
    if(n === 1) return 1
    return climbStairs(n - 2) + climbStairs(n - 1)
}

/*
Approach 3: Dynamic Programming
Algorithm

As we can see this problem can be broken into subproblems, and it contains the optimal substructure property 
i.e. its optimal solution can be constructed efficiently from optimal solutions of its subproblems, 
we can use dynamic programming to solve this problem.

One can reach i^{th}i 
th
  step in one of the two ways:

Taking a single step from (i-1)^{th}(i−1) 
th
  step.

Taking a step of 22 from (i-2)^{th}(i−2) 
th
  step.

So, the total number of ways to reach i^{th}i 
th
  is equal to sum of ways of reaching (i-1)^{th}(i−1) 
th
  step and ways of reaching (i-2)^{th}(i−2) 
th
  step.

Let dp[i]dp[i] denotes the number of ways to reach on i^{th}i 
th
  step:

dp[i]=dp[i-1]+dp[i-2]dp[i]=dp[i−1]+dp[i−2]

public class Solution {
    public int climbStairs(int n) {
        if (n == 1) {
            return 1;
        }
        int[] dp = new int[n + 1];
        dp[1] = 1;
        dp[2] = 2;
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
}


Approach 4: Fibonacci Number
Algorithm

In the above approach we have used dpdp array where dp[i]=dp[i-1]+dp[i-2]dp[i]=dp[i−1]+dp[i−2]. It can be easily analysed that dp[i]dp[i] is nothing but i^{th}i 
th
  fibonacci number.

Fib(n)=Fib(n-1)+Fib(n-2)Fib(n)=Fib(n−1)+Fib(n−2)

Now we just have to find n^{th}n 
th
  number of the fibonacci series having 11 and 22 their first and second term respectively, i.e. Fib(1)=1Fib(1)=1 and Fib(2)=2Fib(2)=2.


  public class Solution {
    public int climbStairs(int n) {
        if (n == 1) {
            return 1;
        }
        int first = 1;
        int second = 2;
        for (int i = 3; i <= n; i++) {
            int third = first + second;
            first = second;
            second = third;
        }
        return second;
    }
}

​	
 
​	
  
*/

