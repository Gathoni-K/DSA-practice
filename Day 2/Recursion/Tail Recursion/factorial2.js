/*
-Below is the factorial function optimized to a tail recursion
*/

//function used to calculate the factorial
function fact(n, a){
    if(n <= 0)

        return a;

    return fact(n - 1, n * a);
}

//this is a wrapper over our function
function factTR(n){
    return fact(n, 1);
}