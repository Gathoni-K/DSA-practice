function sortedSquareArray(array) {
    const newArray = new Array(array.length).fill(0);
//creates the result array and stes its value to 0.
let pointerLeft = 0;
//stores the first value in this variable.
let pointerRight = array.length - 1;
//store the last variable in this element.
for (let i = array.length - 1; i>=0; i--) {
//loop begins at the last element till it reaches the first element
    const leftSquared = Math.pow(array[pointerLeft],2);
//calculates the square of the first value
//Math.pow() - built-in function used to raise a number to a power
//takes two parameters, the value and the exponent
    const rightSquared = Math.pow(array[pointerRight],2);
//array[pointerRight] is our value and 2 iur exponent

    if(leftSquared > rightSquared) {
        newArray[i] = leftSquared;
//places the larger value in this position
        pointerLeft ++;
//move the left pointer one step to the right
    }
    else{
        newArray[i] = rightSquared;
        pointerRight --;
    }
}
return newArray;

}