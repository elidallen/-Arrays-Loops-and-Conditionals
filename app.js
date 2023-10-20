////////////////////////////////
// Easy Going
////////////////////////////////

for (let i = 1; i <= 20; i++) {
    console.log(i);
}
// Commit message: "Easy Going answered"
// Commit message: "Easy Going answered"


////////////////////////////////
// Get Even
////////////////////////////////

for (let i = 0; i <= 200; i += 2) {
    console.log(i);
}
// Commit message: "Get Even answered"
// Commit message: "Get Even answered"

////////////////////////////////
// Fizz Buzz
////////////////////////////////

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
// Commit message: "Fizz Buzz answered"
// Commit message: "Fizz Buzz answered"

////////////////////////////////
// Wild Wild Life
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee[2]++; // Plantee's age increment
wolfy[3] = "Gotham City"; // Change Wolfy's hometown
dart.push("Hawkins"); // Add a second hometown for D'Art
wolfy[0] = "Gameboy"; // Replace "Wolfy" with "Gameboy" in the wolfy array

// Commit message: "Wild Wild Life answered"
// Commit message: "Wild Wild Life answered"

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let turtle of ninjaTurtles) {
    console.log(turtle.toUpperCase());
}
// Commit message: "Yell at the Ninja Turtles answered"
// Commit message: "Yell at the Ninja Turtles answered"


////////////////////////////////
// Methods Revisited
////////////////////////////////

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic')); // Index of "Titanic"

favMovies.sort(); // Sort the array (permanently altering it)
console.log(favMovies); // Log the sorted array

favMovies.pop(); // Remove the last element
favMovies.push("Guardians of the Galaxy"); // Add "Guardians of the Galaxy" to the end
favMovies.reverse(); // Reverse the array (permanently altering it)
favMovies.shift(); // Remove the first element
const unshiftResult = favMovies.unshift("The Godfather"); // Add "The Godfather" to the beginning and store unshift result
console.log(favMovies); // Log the modified array
console.log("unshiftResult:", unshiftResult); // Log the return value of unshift

const djangoIndex = favMovies.indexOf("Django Unchained"); // Find the index of "Django Unchained"
favMovies.splice(djangoIndex, 1, "Avatar"); // Replace "Django Unchained" with "Avatar"
console.log(favMovies);

const middleIndex = Math.floor(favMovies.length / 2); // Calculate the middle index
const lastHalf = favMovies.slice(middleIndex); // Slice the last half of the array
console.log(lastHalf); // Log the last half

console.log("Fast and Furious index:", favMovies.indexOf("Fast and Furious")); // Index of "Fast and Furious" after removal

// Commit message: "Methods Revisited answered"
// Commit message: "Methods Revisited answered"

////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [
    ["Timmy", "Frank"],
    "Eggbert",
    ["Lucinda", "Jacc", "Neff", "Snoop"],
    ["Petunia", ["Baked Goods", "Waldo"]]
  ];

whereIsWaldo.splice(1, 1); // Remove "Eggbert"
whereIsWaldo[2][2] = "No One"; // Change "Neff" to "No One"
console.log(whereIsWaldo[3][1][1]); // Access and log "Waldo"

// Commit message: "Where is Waldo answered"
// Commit message: "Where is Waldo answered"


////////////////////////////////
// Excited Kitten
////////////////////////////////

for (let i = 1; i <= 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
    if (i % 2 === 0) {
        const randomMessage = Math.random();
        if (randomMessage < 0.33) {
            console.log("...human... why you taking pictures of me...?");
        } else if (randomMessage < 0.66) {
            console.log("...the catnip made me do it...");
        } else {
            console.log("...why does the red dot always get away...?");
        }
    }
}
// Commit message: "Excited Kittens answered"
// Commit message: "Excited Kittens answered"


////////////////////////////////
// Find the Median
////////////////////////////////

const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];
nums.sort((a, b) => a - b); // Sort the array in ascending order
const middle = Math.floor(nums.length / 2); // Calculate the middle index
const median = nums[middle]; // Find the median
console.log("Median:", median);

// Commit message: "Find the Median answered"