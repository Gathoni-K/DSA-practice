/*
Write a function that takes a string and returns it backwards.
-No loops.

Input: 'Hello'
Output: 'olleH'

Base case: if the string is empty, or has one character, return it
Recursive : take the last charachter, put it at the front, call the function again on the
rest of the string

*/

function reverseStringRec(res, l, r) {
    if (l >= r) return;
    //defining our base case
    //if the string has one character, return it

    [res[l], res[r]] = [res[r], res[l]];
    //swap the characters at the end

    reverseStringRec(res, l + 1, r - 1);
    //recur for the remaining string
}

function reverseString(s) {
    let res = s.split('');
    //convert string to array of characters
    reverseStringRec(res, 0, res.length - 1);

    return res.join('');
    //convert array back to string
};

/*
-The code above uses the 'Two Pointer technique'
-Instead of building a new string piece by piece, the string is turned
into a list and the latters on the ends are swapped till they meet in the middle.

-'Hello' is turned into an array, then 2 markers are created, 'l' left starting at index 0,
pointing to 'H'.
-The solution demands the knowledge of how pointers work.
-Pointers in JS are just 'index numbers'.
-In our code 'l' is a variable holding the number 0, 'r' being a variable holding the last
index of the provided string

*/
function ReverseString(s) {
    if (s.length === 0 || s.length <= 1) {
        return s;
    };
    //defining the base case

    // let reversedString = s.split(" ").reverse().join(" ");

    // return reversedString;

    //the approach will reverse a string but it is not recursion.
    //in recursion, the function must call itself.
    //putting a space between the speech marks in split tells JS to split our string by words not by characters which is wrong.
    return ReverseString(s.substring(1) + s.charAt(0));

    /*
    substring() - inbuilt js function telling JS to give us the rest of the string from index 1.
    */
}
