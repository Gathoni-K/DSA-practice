/*
Finding the sum of natural numbers from 0 to n.
-Define our base case, the simplest possible case for which the solution is known.
    if (n==1), return 1;

-Identify our inductive step.
    sum(n) = n + sum(n-1)

    e.g, n = 3;
    sum(3) = 3 + sum(2),
    then sum(2) = 2 + sum(1)
 */
function sum(n) {
    if (n <= 1) return 1;
//our base case which handles one and zero effectively.
   return sum (n) = n + sum(n-1);
//this becomes our inductive case.

}

