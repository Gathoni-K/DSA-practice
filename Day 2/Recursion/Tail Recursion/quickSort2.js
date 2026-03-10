/*
-Below is the Quick sort function after tail call elimination

-In this code, the number of recursive calls have clearly been reduced.
*/

function quickSort(arr, low, high) {
    while(low < high) {
        let pi = partition(arr, low, high);
        /*
        'partition' is a helper picking a pivot element, rearranging the array so
        everything smaller than the pivot is on the left and everything larger is on the right
        then returns the pivot's final position 'pi'
        
        */

        quickSort(arr, low, pi - 1);
        //sorts the left part

        low = pi + 1;
        //tail recursion eliminates the right part
        //handles the right part iteratively
    }
}

/*
-Although the number of recursive calls have been reduced, the above code can still use O(n)
auxiliary space in worst case.
-In worst case, it is possible that the array is divided in a way that the first part always has 
'n - 1' elements.
-This may happen when the last element is chosen as pivot and the array is sorted in increasing order as shown below 

-As shown if the left part becomes smaller, then the recursive call is made for the left part else for the right
part.

*/

function quickSort(arr, low, high) {
    while (low < high) {

        var pi = partition(arr, low, high);

        if(pi - low < high - pi){
            quickSort(arr, low, pi - 1);
            low = pi + 1;
        }
        /*
        If left part is smaller then recur for left
        part and handle right part iteratively
        
        */

        else{
            quickSort(arr, pi + 1, high);
            high = pi - 1;
        }
        //else recur for the right part
    }
}