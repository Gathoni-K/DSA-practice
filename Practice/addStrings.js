/*
-Given two non-negative integers: num1 and num2 that are represented as a string
return the sum as a string
-Do not convert the inputs to integers directly.
-Solve theproblem without using any built-in library for handling large integers.

Test cases: 
num1 = "11", num2 = "132"
Output: "134"

-Normal addition of the numbers, but they are strings, but how?
-convert them to an array?

-Parameters: num1, num2
*/

// var addStrings = function(num1, num2) {
//  const result = +num1 + +num2;
//  const sum = result.toString();
//  //convert our result to a string
//  return sum;

// };
/* The block of code above works perfectly fne for small integers but not big ones */

/*
Add numbers digit by digit, start from the rightmost digits, add them together
-if the sum is 10 or more, write down the ones digit and carry over that tens digit to the next column
-move left and repeat

Edge cases:
-different lengths: if there are no numbers to be carried over, write down the remaining digits as they are
-iterate from right to left, like how one would add on pen and paper.
-Carry handling: when a digit is 10 or more, write down the ones digit, carry over the tesn digit
-Construct final answer string, note strings are built from left to right, and we are working from right to left, so how will we deal with that?

Overall structure:
-num1 and num2 as my inputs, work through them from right to left.
-Convert my num1 and num2 to arrays, start from the last index of each array and work backwards.
-For each position, perform the addition, consider the need to carry:
if the result is 10 or more, write down the ones digit, and carry the tens digit.

-Performing the addition, use the 'Number()' function, so it would look something like
when you are at position 'i' in our first array and position 'j' in our second array:
Number(arr1[i]) + Number(arr2[j])
-this will add the numbers individually.

Iteration: a while loop.
Syntax: while (condition) {//code to be executed}
-our condition is that our loop will run as long as there is work left to be done.
-Define work to be done: items left in either arrays or there is a carry to be performed, combine these conditions using '||'

-for the carry part, use the division and modulus operator, the modulus gives us the ones operator, the division with Math.floor() will give us the tens digit.
so define a condition if the result is 10 or more, perform these operations.


*/

var addStrings = function(num1, num2) {
    let arr1 = Array.from(num1);
    //create an array from our string and stores it in our variable
    let arr2 = Array.from(num2);
    let result = "";
    //build our result string that will store our results
    let i = arr1.length-1;
    //stores the rightmost position of our first array
    let j = arr2.length-1;
    //stores the rightmost position of our second array
    let carry = 0;
    //defines our carry variable

  {

    }

}