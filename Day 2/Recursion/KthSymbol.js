/*
Build a table of n rows (1-indexed)
Start by writing 0 in the 1st row.
In every subsequent row, look at the previous row and replace each occurrence of 0 with 01,
and each occurence of 1 with 10.
E.g: for n =3, the 1st row is 0, the 2nd row is 01, the third row is 0110
-Given 2 integers n and k, return the kth(1-indexed) symbol in the nth row of a table of n rows
 */

/*Clarifying questions
-Is it possible that n given is 0? 
No.
-Can k be out of bound? can k = 5? 
No.
*/

/*Test Cases
-combinatons of input and the expected output
0 n =1;
01 n =2;
0110 n =3;
01101001 n=4;

n = 1, k  = 1, return 0
n = 4, k = 1, return 0
n = 4, k = 8, return 1
*/

/* 
Base case : last valid/first invalid case  n = 0;
Recurrence relation

-For any row, the first half is the exact same as the previous row.
-For any row, the second half is not of a previous row.
-To find the kth symbol at row n, find the previous row(n-1), find the k in that row.
-k in that row is found by, k-mid
Base case: last valid = 1, if n = 1, output 0
*/

/*Pseudocode:
function Kgram (inputs) {
if n=1, return 0;
//our base case
l = (2 ^n -1)
//our recursive case is finding the length 
half = l / 2;
if k <= half;
return Kgram (n-1, k)
if k >= half;
return !Kgram (n-1, k-half)
 } 

******Time and Space Complexity******

Time =  O(n)
Space = O(n)

 */

var kthGrammar = function (n, k) {
/*
0
01
0110
01101001
 */
    //Base case below
    if (n === 1) {
        return 0;
    }

    let length = Math.pow(2, n-1);
    let half = length / 2;

    if (k<=half) {
        return kthGrammar(n-1, k);
    }
    else{
        return  1 - kthGrammar(n-1, k-half);
        //returns the opposite.
    }
}