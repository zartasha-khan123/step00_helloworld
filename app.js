"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// question no 1
console.log("hello world");
// qno 2
let personName = "zartashimran";
console.log(`"hello ${personName},would you like to learn some phython today?"`);
// question no 3
//uppercase
let personName1 = "zartashimran";
console.log(personName1.toUpperCase());
// lowercase
let personName2 = "ZARTASHIMRAN";
console.log(personName2.toLowerCase());
//
//titlecase
let personName4 = "zartashimran";
console.log(personName4.replace(/\b\w/g, (c) => c.toUpperCase()));
//question no 4
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} ! once said, "${quote}"`);
//qestion no 5
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, "${quote}"`;
console.log(message);
// question no 6
let personName5 = "\n\t   zartashimran \t\n";
console.log("original:", personName5);
console.log("stripped:", personName5.trim());
//question no 7
let operations = 8;
let a = 3 + 5;
let b = 9 - 1;
let c = 4 * 2;
let d = 16 / 2;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
//question no 8
console.log(5 + 3);
console.log(9 - 1);
console.log(4 * 2);
console.log(16 / 2);
//question no 9
let favoriteNumber = 66;
let number = "reveals : my favorite number";
console.log(`${number} is ${favoriteNumber}`);
// question no 10
// my name is zartash imran
// today current date is 2nd march 2024
// i will print hello everyone
console.log("hello everyone");
// // my name is zartash imran
// today current date is 2nd march 2024
// assume this is my 2nd file and iam doing program "2" which is about adding two digits together
console.log(2 + 2);
//question no 11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names = ["alisba", "alina", "zara", "kulsoom", "nadia", "madiha"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log(names[5]);
// or for using for loop method 2nd apply
let names1 = [
    "alisba",
    "alina",
    "zara",
    "kulsoom",
    "nadia",
    "madiha",
];
for (let i = 0; i <= names1.length; i++) {
    console.log(names1[i]);
}
//question no 12
let persons = [
    "alisba",
    "alina",
    "zara",
    "kulsoom",
    "nadia",
    "madiha",
];
let greetings = "welcome to the world of coding: ";
console.log(`${persons[0]}, ${greetings}`);
console.log(`${persons[1]}, ${greetings}`);
console.log(`${persons[2]} ,${greetings}`);
console.log(`${persons[3]}, ${greetings}`);
console.log(`${persons[4]} ,${greetings}`);
console.log(`${persons[5]}, ${greetings}`);
//using for loop
for (let i = 0; i < persons.length; i++) {
    console.log(greetings + persons[i]);
}
//question no 13
let array = ["motorcycle", "car", "truck", "bus", "sportbike"];
for (let i = 0; i < array.length; i++) {
    console.log("“I would like to own a " + array[i]);
}
//question no 14
let guest_list = ["grandparents", "father", "mother"];
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear Mr, " +
        guest_list[i] +
        ",\n\nIt is a great pleasure to come on dinner   \n\nThank you");
}
//question no 15
let guest_list1 = ["father", "grandparesnts", "mother"];
for (let i = 0; i < guest_list1.length; i++) {
    console.log("Dear , " +
        guest_list1[i] +
        ",\n\nit is a great pleasure to come on dinner \n\nThankYou\n ");
}
let absent_guest = "father";
let new_guest = "sibblings";
guest_list1[0] = new_guest;
for (let i = 0; i < guest_list1.length; i++) {
    console.log("Dear , " +
        guest_list1[i] +
        ",\n\nit is a great pleasure to come on dinner \n\nThankYou\n ");
}
console.log(`Dear, ${absent_guest} is not coming to the dinner`);
// question no 16
let guest_list2 = ["father", "grandparesnts", "mother"];
let absent_guest1 = "father";
let new_guest1 = "sibblings";
guest_list2[0] = new_guest;
for (let i = 0; i < guest_list2.length; i++) {
    console.log("Dear , " +
        guest_list2[i] +
        ",\n\nit is a great pleasure to come on dinner \n\nThankYou\n ");
}
console.log(`Dear, ${absent_guest} is not coming to the dinner`);
console.log("Goodnews! we find big table so we are inviting 3 more guest");
guest_list2.unshift("childrens");
guest_list2.splice(2, 0, "couzins");
guest_list2.push("friends");
for (let i = 0; i < guest_list2.length; i++) {
    console.log("Dear , " +
        guest_list2[i] +
        ",\n\nit is a great pleasure to come on dinner \n\nThankYou\n ");
}
console.log(guest_list2);
// question no 17
let guest_list3 = ["father", "grandparesnts", "mother"];
let absent_guest2 = "father";
let new_guest2 = "sibblings";
guest_list3[0] = new_guest;
//  for( let i=0; i<guest_list2.length; i++){
// console.log("Dear , " + guest_list2[i] + ',\n\nit is a great pleasure to come on dinner \n\nThankYoun\n\ ' )
//}
console.log(`Dear, ${absent_guest} is not coming to the dinner`);
console.log("Goodnews! we find big table so we are inviting 3 more guest");
guest_list2.unshift("childrens");
guest_list2.splice(2, 0, "couzins");
guest_list2.push("friends");
for (let i = 0; i < guest_list3.length; i++) {
    console.log("Dear , " +
        guest_list3[i] +
        ",\n\nit is a great pleasure to come on dinner \n\nThankYou\n ");
}
console.log("/n sorry we can not arrange big table, only two peoples will be invited");
while (guest_list3.length > 2) {
    let remove_guest = guest_list3.pop();
    console.log(`sorry Mr. ${remove_guest}, you are not invited for dinner..`);
}
for (let i = 0; i < guest_list3.length; i++) {
    console.log("Dear Mr. " +
        guest_list3[i] +
        ",\n\n you are still invited.\n\n thank you\n\n");
}
guest_list3.splice(0, 2);
console.log(guest_list3);
// question no 18
//• Store the locations in a array. Make sure the array is not in alphabetical order.
let places = [
    "Qatar",
    "Barlin",
    "Times Saquare",
    "Kulalampur",
    "California",
];
//• Print your array in its original order.
console.log("original " + places);
//• Print your array in alphabetical order without modifying the actual list.
console.log("copy " + [...places].sort());
//• Show that your array is still in its original order by printing it.
console.log("original " + places);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("copy " + [...places].sort().reverse());
//• Show that your array is still in its original order by printing it again.
console.log("original " + places);
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("original " + places.reverse());
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("original " + places.reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("original " + places.sort());
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("original " + places.sort().reverse());
//QUESTION NO 19
let guest_list4 = ["father", "grandparesnts", "mother"];
let absent_guest3 = "father";
let new_guest3 = "sibblings";
guest_list4[0] = new_guest;
//  for( let i=0; i<guest_list2.length; i++){
// console.log("Dear , " + guest_list2[i] + ',\n\nit is a great pleasure to come on dinner \n\nThankYoun\n\ ' )
//}
// console.log(`Dear, ${absent_guest} is not coming to the dinner`);
// console.log("Goodnews! we find big table so we are inviting 3 more guest");
//array main 3 guest add kia hain
guest_list4.unshift("childrens");
guest_list4.splice(2, 0, "couzins");
guest_list4.push("friends");
//yaha par main nay 6 guest kay array ko print krwaya hain
// for( let i=0; i<guest_list4.length; i++){
//     console.log("Dear , " + guest_list4[i] + ',\n\nit is a great pleasure to come on dinner \n\nThankYou\n\ ' )
// }
// sorry message to guest for not inviting
//console.log('/n sorry we can not arrange big table, only two peoples will be invited');
//yaha par main nay guest remove kia hain
while (guest_list4.length > 2) {
    let remove_guest = guest_list4.pop();
    // console.log(`sorry Mr. ${remove_guest}, you are not invited for dinner..`);
}
//humray bachay huwe do 2 invited guest
// for(let i=0; i<guest_list4.length;i++){
//     console.log('Dear Mr. ' + guest_list4[i]+ ',\n\n you are still invited.\n\n thank you\n\n')
// }
// main nay saray quest ko array say remove krdai throught splice method
guest_list4.splice(0, 2);
console.log(guest_list4);
// indicating the number of people you are inviting to dinner..
console.log(`Total number of guest are ${guest_list4.length}`);
//QUESTION NO 20
//Think of something you could store in a array.
let countries = ["London", "USA", "Pakistan", "Turkey"];
//write program that creates a list containing these items..
let country = []; // empty array store values use . push method
country.push("Canada");
country.push("Australia");
country.push("Malaysia");
console.log(country);
//QUESTION 21
//They think of something you could store in a TypeScript Object.
//object about student
let studentInfo = {
    name: "Zartash Imran",
    class: "typescript",
    rollNo: 1001,
    isStudent: true,
};
console.log(studentInfo);
// create another object;
// dresses object
let dresses = {
    name: "shalwar kameez",
    colour: "orange,black,purple",
    size: 36,
    available: true,
};
console.log(dresses);
//QUESTION NO 22
//Intentional Error: If you haven’t received an array index error in one of your programs yet,
//try to make one happen.
let newArray = ["Imran Khan", "Nawaz Shareef", "Bilawal Bhutto"];
// make intentional error by herself
console.log(newArray[4]);
//Make sure you correct the error before closing the program.
//correct error
console.log(newArray);
//QUESTION NO 23
//Conditional Tests: Write a series of conditional tests.
//test 1
let car = "subaru";
console.log("Is car == 'subaru'? I predict True.");
console.log(car == "subaru");
//test 2
console.log("Is car === 'subaru'? I predict True.");
console.log(car === "subaru");
//test 3
console.log("Is car != 'Carola'? I predict True.");
console.log(car != "Carola");
//test 4
console.log("Is car !== 'City'? I predict True.");
console.log(car !== "City");
//test 5
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= "subaru");
//test 6
console.log("Is car == 'ford'? I predict false.");
console.log(car == "ford");
//test 7
console.log("Is car === 'vitz'? I predict false.");
console.log(car === "vitz");
//test 8
console.log("Is car === 'Mira'? I predict false.");
console.log(car === "Mira");
//test 9
console.log("Is car == 'Truck'? I predict false.");
console.log(car == "Truck");
//test 10
console.log("Is car.upperCase == 'SUPARU'? I predict false.");
console.log(car.toLocaleUpperCase() == "SUPARU");
//QUESTION NO 24
//Tests for equality and inequality with strings
//CHECK Equality... Test 1
console.log("equality test with string: ", "Mango" === "Mango");
//inequality... Test 2
console.log("Inequality test with strings ", "Apple" != "Mango");
//Tests using the lower case function... Test 3
let fruits = "mango";
console.log(fruits.toLowerCase() === "mango");
// Numerical tests involving equality and inequality... Test 4
console.log("equality test with string: ", 55 === 55);
console.log("Inequality test with strings ", 55 != 57);
// Greater than and less than
console.log("Greater than test: ", 20 > 10);
console.log("Less than test: ", 10 < 20);
//greater than or equal to, and less than or equal to
console.log("Greater than equal to test: ", 20 >= 10);
console.log("Less than equal to test: ", 20 <= 20);
//Tests using "and" and "or" operators... Test 5
console.log(" AND test using &&: ", 55 === 55 && 20 > 10);
console.log("OR test using ||: ", 55 === 55 || 20 > 30);
//• Test whether an item is in a array... Test 6
let city = ["lahore", "islamabad", "karachi", "peshawar"];
console.log("Test an item in a array: ", city.includes("karachi"));
//Test whether an item is not in a array... Test 7
console.log("Test orange item is not in a array: ", !city.includes("orange"));
//QUESTION NO 25
//Alien Colors #1: Imagine an alien was just shot down in a game.
// 1)- Create a variable called alien_color
let alien_color = "green";
// 1)- • Write an if statement to test whether the alien’s color is green.
//print a message that the player just earned 5 points.
if (alien_color === "green") {
    console.log("player just earned 5 points! ");
}
// Write one version of this program that passes the if test and another that fails.
alien_color = "red";
if (alien_color === "green") {
    console.log("player just earned 5 points"); //(The version that fails will have no output.)
}
//QUESTION NO 26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//  1)- If the alien’s color is green...
let alien_colors = "green";
//print a statement that the player just earned 5 points for shooting the alien.
if (alien_colors === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
// 2)-
// If the alien’s color isn’t green,
//print a statement that the player just earned 10 points.
else {
    console.log("The player just earned 10 points");
}
// 3)-  Write one version of this program that runs the if block and another that runs the else block.
alien_colors = "red";
if (alien_colors === "green") {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("The player just earned 10 points");
}
//QUESTION NO 27
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// 1)-• If the alien is green, print a message that the player earned 5 points.
// version 1 of the program
let alien = "green";
if (alien === "green") {
    console.log(" version no 1: the player earned 5 points.");
}
else if (alien === "yellow") {
    console.log("the player earned 10 points.");
}
else if (alien === "red") {
    console.log("the player earned 15 points.");
}
else {
    console.log("Please select right colour");
}
//version 2 of the program
alien = "yellow";
if (alien === "green") {
    console.log("the player earned 5 points.");
}
else if (alien === "yellow") {
    console.log(" version no 2: the player earned 10 points.");
}
else if (alien === "red") {
    console.log("the player earned 15 points.");
}
else {
    console.log("Please select right colour");
}
//version 3 of the program
alien = "red";
if (alien === "green") {
    console.log("the player earned 5 points.");
}
else if (alien === "yellow") {
    console.log("the player earned 10 points.");
}
else if (alien === "red") {
    console.log("version no 3: the player earned 15 points.");
}
else {
    console.log("Please select right colour");
}
// question no 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let babyAge = 25;
if (babyAge < 2) {
    console.log("person is a baby");
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (babyAge >= 2 && babyAge < 4) {
    console.log("person is a toddler");
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (babyAge >= 4 && babyAge < 13) {
    console.log("person is a kid");
}
//If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (babyAge >= 13 && babyAge < 20) {
    console.log("person is a teenager");
}
//If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (babyAge >= 20 && babyAge < 65) {
    console.log("person is an adult");
}
//• If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("person is an elder");
}
// QUESTION NO 29;
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["mango", "pineapple", "orange"];
if (favorite_fruits.includes("mango")) {
    console.log("i really like mango!");
}
if (favorite_fruits.includes("pineapple")) {
    console.log("i really like pineapple!");
}
if (favorite_fruits.includes("banana")) {
    console.log("i really like banana!");
}
if (favorite_fruits.includes("orange")) {
    console.log("i really like orange!");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("i really like strawberry!");
}
// QUESTION NO 30
//Hello Admin: Make a array of five or more usernames, including the name 'admin'.
let array_users = [
    "admin",
    "username",
    "sir taha",
    "miss hina",
    "students",
];
//Imagine you are writing code that will print a greeting to each user after they log in to a website.
//Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
for (let i = 0; i < array_users.length; i++) {
    if (array_users[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`hello ${array_users[i]}  thank you for logging in again.`);
    }
}
// QUESTION NO 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
let user_names = ["ahmed", "taha", "faizan", "abdul malik", "burhan"];
if (user_names.length === 0) {
    console.log("We need to find some users!");
}
// • Remove all of the usernames from your array, and make sure the correct message is printed.
else {
    user_names = [];
    console.log("all usernames have been removed " + user_names.length);
}
// QUESTION NO 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users = ["faisal", "Ahmed", "taha khan", "saad", "rehan"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["SARA", "taha khan", "Ahmed", "Wania", "nimRa"];
// • Loop through the new_users list to see if each new username has already been used.
//If it has, print a message that the person will need to enter a new username.
//If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
new_users.forEach((newUser) => {
    let lowerCase = newUser.toLowerCase();
    if (current_users.map((c_user) => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUser} is not available! please write a different username`);
    }
    else {
        console.log(`the username ${newUser} is available`);
    }
});
// QUESTION NO : 33
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let ordinalNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
for (let num of ordinalNum) {
    let ordinalEnding;
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(` ${num} ${ordinalEnding}`);
}
//QUESTION NO 34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array,
//and then use a for loop to print the name of each pizza.
let favorite_pizza = ["chicken ", "fatija ", "tandori "];
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just
//the name of the pizza. For each pizza you should have one line of output containing a simple
//statement like I like pepperoni pizza.
for (let pizza of favorite_pizza) {
    console.log(`I like ${pizza} pizza`);
}
// • Add a line at the end of your program, outside the for loop,
// that states how much you like pizza. The output should consist of three or more lines about
// the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log(` I really love pizza`);
//QUESTION NO 35
//Animals: Think of at least three different animals that have a common characteristic.
//Store the names of these animals in a list,
//and then use a for loop to print out the name of each animal. •
let animals = ["Dog", "cat", "cube"];
// Modify your program to print a statement about each animal, such as A dog would make a great pet.
for (let petAni of animals) {
    console.log(`A ${petAni} would make a great pet`);
}
//• Add a line at the end of your program stating what these animals have in common.
console.log(`   These animals have in common characteristics`);
//You could print a sentence such as Any of these animals would make a great pet!
console.log(`  These animals would make a great pet `);
// QUESTION NO 36
//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message
//that should be printed on the shirt.
//The function should print a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
function make_shirt(size, text) {
    console.log(`Creating a ${size}shirt with the message: ${text}`);
}
make_shirt("large", "hello world");
make_shirt("medium", "hello world");
make_shirt("small", "hello world");
//QUESTION NO 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
//that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
//and a shirt of any size with a different message.
function make_shirt1(size = "large", text = "I love typescript") {
    console.log(`creating ${size} shirt with the message ${text}`);
}
make_shirt1();
make_shirt1("medium");
make_shirt1("small", "I love javasript");
//QUESTION 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country.
//The function should print a simple sentence, such as Karachi is in Pakistan.
//Give the parameter for the country a default value. Call your function for three different cities,
// at least one of which is not in the default country.
function describe_city(city, country = "default country") {
    console.log(`${city} is in ${country}`);
}
describe_city("karachi", "pakistan");
describe_city("kulalumpur", "malaysia");
describe_city("california");
//QUESTION NO 39
//City Names: Write a function called city_country() that takes in the name of a city and its country.
function city_country(city, country) {
    //The function should return a string formatted like this:
    //"Lahore, Pakistan"
    return `${city}, ${country}`;
}
//Call your function with at least three city-country pairs, and print the value that’s returned.
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Kulalumpur", "Malaysia"));
console.log(city_country("Tokyo", "Japan"));
//QUESTION NO 40
// Album: Write a function called make_album() that builds a Object describing a music album.
//The function should take in an artist name and an album title,
//and it should return a Object containing these two pieces of information.
//Use the function to make three dictionaries representing different albums.
//Print each return value to show that Objects are storing the album information correctly.
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album
function make_album(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album("artist 1", "album title 1");
console.log(album1);
const album2 = make_album("artist 2", "album title 2");
console.log(album2);
const album3 = make_album("artist 3", "album title 3", 12);
console.log(album3);
//QUESTION NO 41
//Magicians: Make a array of magician’s names.
let magician = ["Harry potter", "peter boss", "john meter", "Albus graney"];
//Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
//QUESTION NO 42
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great 
// to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magician1 = ["Harry potter", "peter boss", "john meter", "Albus graney"];
function make_great(magiciasArray) {
    for (let i = 0; i < magiciasArray.length; i++) {
        magician1[i] = 'The great ' + magiciasArray[i];
    }
}
function show_magicians1(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician1);
show_magicians(magician1);
// QUESTION NO 43
//Unchanged Magicians: Start with your work from Exercise 40. 
//Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original names and one array with
// the Great added to each magician’s name.
let magician2 = ["Harry potter", "peter boss", "john meter", "Albus graney"];
function copyarray(array) {
    return [...array];
}
function make_great1(magiciasArray) {
    for (let i = 0; i < magiciasArray.length; i++) {
        magiciasArray[i] = 'The great ' + magiciasArray[i];
    }
}
function show_magicians2(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyarr = copyarray(magician2);
make_great1(copyarr);
console.log('\n\nThis is my original array ');
show_magicians2(magician2);
console.log('\n\nThis is my modified copy of the array ');
show_magicians2(copyarr);
//QUESTION NO 44 :
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.
function sandwich(item) {
    console.log('\n making your sandwich with !');
    item.forEach(element => console.log('-' + element));
    console.log('Enjoy your sandwich!\n');
}
sandwich(['cheese', 'butter', 'vegies']);
sandwich(['lettuce', 'ketchup']);
sandwich(['Ham', 'mayonese']);
//question no 45
//Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments.
//Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.
function storeCarInfo(manufacturer, model, ...extraordinaryopt) {
    const carInfo = {
        manufacturer,
        model,
        ...Object.assign({}, ...extraordinaryopt)
    };
    return carInfo;
}
let answere = storeCarInfo("honda", "civic", { color: 'black' }, { features: ['navigation', 'power window'] });
console.log(answere);
