# NOTES ON TAIL RECURSION.

-Is defined as a recursive function in which the recursive call is the last statement executed by the function.

-These are better than non-tail-recursive ones as they can be optimized by the compiler.

-Recursion uses a stack to keep track of function calls.

-With every function call, a new frame is pushed onto the stack containing local variables and data of that call.

## Tail Call Elimination.

-Recall that tail recursive functions do not leave any blanks waiting to be filled, JS recognizes this and takes advantage of it.

-Normally, every function creates a new frame on the stack, but if the engine sees a true tail call, meaning there's nothing left to do after it returns, it says: 

    'There's no point keeping the current frame alive, nothing is coming back to it anyway.'

-So instead of stacking a new frame on top, it reuses the current frame, the stack thus stays flat no matter how deep the recursion go.

-As function call is eliminated, no new stack frames are created and the function is thus executed in constant memory space.

-Without it, deep recursion crashes.