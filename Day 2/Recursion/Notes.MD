# RECURSION.

-Is the process in which a function calls itself directly ot indirectly.

-A recursive algo takes one step towards a solution then recursively calls itself to further move, the algo stops once we reach the solution.

-A base case is provided to terminate the recursion process.


## Steps to Implement Recursion.

1. Define a base case - identify the simplest case for which the solution known is trivial.
-This is our stopping condition.

2.Define a recursive case - define the problem in terms of smaller subproblems, call the function recursively till the solution is found.

3.Ensure the recursion terminates - making sure our recursive function reaches the base case.

4.Combine the solutions of subproblems finding the solution.

-Recursion is just functions calling functions, the call stack remembers all the calls that have not finished yet.

-The call stack keeps tabs on all functions that have been called but have not finished yet.

-When a function completes, it gets popped off the stack and forgotten, the stack only holds the ones still waiting.

-So what happens is that:

    Going down - functions are called one after the other, each pausing and waiting until the base case is hit.
    Going up - base case returns a value and that triggers each waiting function to finally finish, one by one, back up the chain.