function sortedSquareArray(array){
    //Left index starts at ?
    let newArray = new Array(array.length).fill(0)
//creates a new array with the value newArray, sets it equal to our array length and  every cell in our new array is equal to 0.
    for (let i = 0; i < array.length; i++) {
//iterates through every element of the new array
        newArray[i] = array[i] *array[i];
//sets the value of each item of the array to its square
    }
    //consider an input with both negatives and positives
    newArray.sort ((a,b)=>a-b);
//uses the sort() method for arrays, converts elements to strings and sorts them alphabetically
/* a - the first element being compared
    b - the second element being compared
    a-b - is the comparison logic, if a - b, returns a negative number, a comes before b
    (a,b => a-b) - sorts numbers in ascending order */
    return newArray;
    
}

