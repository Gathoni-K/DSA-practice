/*FIND THE WINNER OF THE CIRCULAR GAME */

/*
1.Start at the first friend.
2.Count the next k friends in the clockwise direction including the friend you started at
3.Last friend counted leaves the circle and loses the game.
4. If there is still more than one friend in the circle, go back to step 2 starting from the friend immediately
clockwise of the friend who just lost and repeat.
5. Else the last friend in the circle wins the game.
Given the number of friends, n, and integer k, return the winner
 */

/* Test Cases
 n = 2; k - 3; o/p = 1;
 n=3, k=3, o/p = 2
 n=4, k=3, o/p=1
 */

 // n =5, k=7
 /// [0+7-1] % 5;

 /*Base case: return the 1 element thst remains
 Recursive case: [0+7-1]%5 */

 /*Pseudocode
 -Build an array up to n
 -n is our input parameter
 function winner(arr, start) {
 if length(arr) = 1; return arr[0]
 remove = [start + k -1] % length;
 delete arr[remove]
 winner(arr, remove)
 //passing the removed index as the start position we are to start removing from

 }
 winner(arr, 0)
  */
 /*Space complexity : O(n)
 -every time an element is deleted till only 1 element remains
 -function will be called n times
 -deleting an element in array at a particular index: O(n)
 Time complexity: O(n^2)
  */

 const findTheWinner = function (n, k) {
    //n=3, arr will have 3 elements
    let arr = Array.from({length:n}, (_, i)=>i+1);
//created an array based on our input
    function helper(arr, startIndex) {
        //base case
        if(arr.length ===1) {
//checks if the length of our array is 1, if yes, it returns our array
            return arr[0];
        }
        //recursive case
        let indexToRemove = (startIndex+k -1)%arr.length;
        arr.splice(indexToRemove, 1);
        return helper(arr, indexToRemove);  

    }
//create our helper function
//parameters are our array and index where we are to start counting from
    helper(arr, 0);
//call our function and pass our array as a parameter, second parameter is
//index at which we are to start counting from which is 0

 }


 /*You have n people sitting in a circle and you count upto k, the k-th person
 is then eliminated.
  */