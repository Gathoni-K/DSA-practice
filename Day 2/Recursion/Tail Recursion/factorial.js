/*
-Below is a non-tail recursive function.
-It looks like a tail recursion at first glance but this is not so as the value returned by
fact(n-1) is used in fact(n) and call to fact(n-1) is not the last thing done by fact(n)
*/

function fact(n) {
    if (n === 0) {
        return 1;
    }

    return n * fact(n - 1);

}

console.log(fact(5));
//tester of our above function