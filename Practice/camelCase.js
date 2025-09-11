/*
 Create a method or function so that it converts dash or underscore demilted words
to camel casing.
-First word within the output should be capitalized only if the original word
was capitalized, next words should always be capitalized.

Sample tests:
the-stealth-warrior : theStealthWarrior
The_Stealth_Warroir : TheStealthWarrior
The_Stealth-Warrior : TheStealthWarrior

-SO what our function does is remove underscore or dashes;
covert the string to an array, perform array methods, split, wherever there is a dash or underscore
-capitalize the word;
condition: capitalize the first word only if OG was capitalized, letter infront of the dash / underscore capitalized
skip an index, .toUpperCase() method.
Join our split array.
.join()

-convert it using '.split()', where to split, where there is the dash or underscore


Capitalization logic:
.charAt(0).toUpperCase() + .slice(1).toLowerCase();
//the first part selects the first character at index 0 and converts it to upper case
the the second part is responsible for keeping the rest of the letters in lower case

-After splitting, I have an array of items with separate words from the OG word, so check if the first item was capitalized, as for the other items, perform the capitalization logic.

 */
function toCamelCase(str){
    let arr =   str.split(/[-_]/);
    //creates a character class that matches either dashes or underscores
    //splits our string wherever there is the dash or underscore
    //stores our split string in this variable.

    //capitalization logic
    for (let i = 0; i<arr.length; i++) {
        if(i === 0) {
            if (str.charAt(0) === str.charAt(0).toUpperCase()) {
//takes the first character of our string and compares it to the first character when converted to uppercase,
//this will check if our first character was capitalized
      arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1).toLowerCase();
//converts the first character of the item in our array to capital letters
}   
else {
//this block of code will only run if the first letter was not capitalized in the OG word
   arr[0] = arr[0].charAt(0).toLowerCase() + arr[0].slice(1).toLowerCase();
//else it will print the first word of our array item to lower case
}
   }
   else {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
   }
        
    }
    return arr.join('');
}