/*
-The Quick sort algorithm is an example of a tail recursive function.
-Note that Merge sort is not tail recursive, reason why quick sort performs better

arr[] - array to be sorted
low - starting index
high - ending index

-The function below makes 2 recursive calls.

*/
function quickSort(arr, low, high){
    if(low < high){
        let pi = partition(arr, low, high);
        /*
        pi is the partitioning index, arr[p] is now at its right place
        */

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi+ 1, high);
        /*
        separately sort elements before
        partition and after partition
        */
    }
}