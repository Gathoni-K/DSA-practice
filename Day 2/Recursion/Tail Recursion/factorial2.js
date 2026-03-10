/*
-Below is the factorial function optimized to a tail recursion

-Tail recursions often have an extra variable,
our extra variable 'a' is our accumulator, it carries the running result forward
instead of wanting to calculate on the way back up.
*/

//function used to calculate the factorial
function fact(n, a){
    if(n <= 0)

        return a;

    return fact(n - 1, n * a);
}

//this is a wrapper over our function
//the work of this function is acting like a starting engine, it declares our 'a' as 1.
function factTR(n){
    return fact(n, 1);
}