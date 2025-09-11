/*An array is monotonic if it is either monotone increasing or decreasing
-Monotone increasing is when all its elements from left to right are non-decreasing,
each term is more than or equal to the one before it.
-Monotone decreasing is all its elements from left to right are non-increasing,
each term is less than or equal to the one before it.
 */

//Given an integer array return true if the give array is monotonic or false otherwise.

/* Is an empty array monotonic?
    Is an array with only one integer monotonic?
    Yes YES YES 

TEST CASES: [1,2,2] - ND
            [3,2,1] - NI
            [3,3,3] - ND
            [] - True
            [7] - True.
*/

const checkMonotonic = function (array) {
    if (array.length === 0 ){
//if our array is empty, function returns true
        return true;
    }
        const first = array[0];
//stores our first value in this variable
        const last = array[array.length-1];
//stores our last value in this variable
        if (first === last) {
            for (let i= 0; i<array.length-1; i++){
                if(array[i+1]!==array[i]) return false;
            }

        } else if(first < last) {
            for (let i= 0; i<array.length-1; i++) {
                if(array[i+1] < array[i]) return false;
            }
        }
        else{
            //first > last
            for (let i= 0; i<array.length-1; i++) {
                if(array[i+1] > array[i]) return false;
            }
        }
        return true;
}
