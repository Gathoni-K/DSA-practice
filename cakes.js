/* 
-Help Pete find out how many cakes he could bake considering his recipes.
-Function takes the recipe(object) and the available ingredients, (object)
and returns the maximum number of cakes Pete can bake(integer)

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

-What we are doing is finding the bottleneck ingredient.
-For each ingredient, calculate how many complete cakes could be made if this ingredient was the only limitation.
-Pete can only make as many cakes as the worst ingredient allows.

1.The first object, reipe, tells us what we need for 1 cake.
2.For each ingredient in the recipe, if I only consider this one ingredient, how many cakes could I theoretically make.
    available(ingredient) / reipe(ingredient)
    round each result down to whole numbers
3.The ingredient giving the lowest number is the bottleneck, this is what we need.
**If any required ingredient is missing; flour, sugar, eggs, then no cakes can  be made.

-Iterate over our recipe object using a 'for..in' loop.
-Then inside the loop access both objects.

//Pattern:
for (let ingredient in recipe) {
let needed = recipe[ingredient];
//tells us how much ingredient is needed.
per cake
let availabe = available[ingredient];
//how much does Pete have
Calculation: available / needed = answer.
-Round off our answer to the nearest whole number using 'Math.floor()' when dividing.
-return the smallest number, 'return Math.min(...answer)', done outside the loop
}

*/
function cakes(recipe, available) {
    let answers =[];
    //declare an array where we will store the answers for our calculation.
  for (let ingredient in recipe) {
    //ingredient is the name for each property, is just a string containing the ingredient name
    let needed = recipe[ingredient];
    //the brackets use the names of the object items to get the value.
    //variable showing the value associated with the ingredient name
    let Available = available[ingredient];

    if (!Available || Available === 0) {
        return 0;
    }
    //statement checks if any required ingredient is missing then it returns the 0.
    let answer = Math.floor(Available / needed );
    //stores our calculation logic.
    answers.push(answer);
    //adds our answers to our 
  }
  return Math.min(...answers);
  //returns the least number.

}
//whatever properties exist in the recipe object are automatically the required ingredients