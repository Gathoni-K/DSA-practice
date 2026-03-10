function prints(n) {
    if (n<0) {
        return;
    }
    //our base case
    console.log(n);

    prints(n -1 );
    //the recursive call
}

//this is an example of tail recursion, our recursive call is the last statement