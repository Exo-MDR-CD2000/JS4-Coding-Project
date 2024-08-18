// All coding questions and answers go here. Watch video on how to submit this assignment.
console.log("Code-JS4-Week7-Assignment:");

//Coding Steps:

//All questions should be printed to your Browser's console using console.log()

/*
    1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
       a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
           - Do not use numbers to reference the last element, find it programmatically.
           - ages[7] - ages[0] is not allowed!
*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Ages Array: ", ages);


let minusAge = ages[ages.length - 1]; // Accessing the last element of the array
console.log("Minus Age Value:", minusAge - ages[0]); // Subtract 1st element from last element and get the value: 90


//  1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(45); // Add a new age to the array
console.log("Updated Ages Array: ", ages); // Display the updated array
let minusAgePush = ages[ages.length - 1]; // Accessing the last element of the array
console.log("Pushed Minus Age Value:", minusAgePush - ages[0]); // Subtract 1st element from last element and get the value: 42



// 1c. Use a loop to iterate through the array and calculate the average age.
let sumOfAges = 0; // Initialize the sum of ages

for (let i = 0; i < ages.length; i++) {
    //console.log(i, "test");
    sumOfAges += ages[i]; // Add each age to the sum
    console.log("Index:", i, "Sum of Ages:", sumOfAges);
}
console.log("Sum of Ages:", sumOfAges); // Calculate the sum of ages: 228
let averageAge = sumOfAges / ages.length; // Calculate the average age
console.log("Average Age:", averageAge); // Calculate the average age: 30.55




/*    
   2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
       a. Use a loop to iterate through the array and calculate the average number of letters per name.
       b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

*/

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log("Names Array: ", names);

//2a.
let sumOfLetters = 0; // Initialize the sum of letters

for (let i = 0; i < names.length; i++) {
    sumOfLetters += names[i].length; // Add the length of each name to the sum
    console.log("Index:", i, "Name:", names[i], "Sum of Letters:", sumOfLetters); // Shows the index, name, and sum of letters
}

console.log("Sum of Letters:", sumOfLetters); // Calculate the sum of letters: 21
let averageLetters = sumOfLetters / names.length; // Calculate the average number of letters per name
console.log("Average Number of Letters per Name:", averageLetters); // Calculate the average number of letters per name: 3.5

//2b.
let concatNames = ""; // Initialize the concatenated names
for (let i = 0; i <names.length; i++) {
    concatNames += names[i] + " "; // Concatenate each name with a space
    console.log("Index:", i, "Concatenated Names:", concatNames); // Shows the index and concatenated names
}



// 3. How do you access the last element of any array?

console.log("Last element of name array:", names[names.length -1]); // Access the last element of the array: Bob
/* 
From documentation: 
    console.log(myArray[myArray.length - 1]);
*/

// 4. How do you access the first element of any array?

console.log("First element of name array:", names[0]); // Access the first element of the array: Sam

/*
From documentation: 
    console.log(myArray[0]);
*/

/* 
    5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

        For example:
        let names = ["Kelly", "Sam", "Kate"];    // starting with this array
        let nameLengths = [5, 3, 4];             // create a new array
*/

let nameLengths = []; // Initialize the name lengths array

for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length); // Add the length of each name to the name lengths array
    console.log("Index", i, "Name Lengths Array:", nameLengths); // Display the name lengths array by each index
}

// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

let charsTotal = 0; // Initialize the sum of name lengths

for (let i = 0; i < nameLengths.length; i++) {
    charsTotal += nameLengths[i]; // Add each name length to the sum
    console.log("Index:", i, "Characters Total:", charsTotal); // Display the sum of name lengths by each index

}
// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

// function concatenateWord (word, n) {
//     let result = ""; // Initialize the result
//     for (let i = 0; i < n; i++) {
//         result += word; // Concatenate the word to itself n number of times
//     }
//     return result; // Return the concatenated word
// }

// console.log("Concatenated Word:", concatenateWord("Jose", 3)); // Concatenate the word "Hello" to itself 3 times: HelloHelloHello

function concatWord (word, n) {
    console.log("WordParameter:", word, "NumberParameter:", n);
    let concat = word.repeat(n); // Concatenate the word to itself n number of times
    console.log("Concatenated Word:", concat); // Display the concatenated word
}

concatWord("Jag", 5); // Concatenate the word "Hello" to itself 3 times: HelloHelloHello


// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.


function fullName (firstName, lastName) {
    let fullName = firstName + " " + lastName; // Concatenate the first and last name separated by a space
    console.log("Full Name:", fullName); // Display the full name
}

fullName("Jose", "Guillen"); // Concatenate the first name "Jose" and last name "Guillen" separated by a space: Jose Guillen


// 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

// 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

// 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
