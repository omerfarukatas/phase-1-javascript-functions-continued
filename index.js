// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

// console.log((function (baseNumber) {
//     return baseNumber + 3;
//   })(2));

// function outer(greeting, msg = "It's a fine day to learn") {
// const innerFunction = function (name, lang = "Python") {
//     return `${greeting}, ${name}! ${msg} ${lang}`;
// };
// return innerFunction("student", "JavaScript");
// }

// outer("Hello");

// LETS MAKE THE outer RETURN THE FUNCTION ITSELF, RATHER THAN THE RESULT OF CALLING innerFunction

// function outer(greeting, msg = "It's a fine day to learn") {
// const innerFunction = function (name, lang = "Python") {
//     return `${greeting}, ${name}! ${msg} ${lang}`;
// };
// return innerFunction; //LOOK HERE! IT IS NOW AN ANONYMOUS FUNCTION
// }

// outer("hello")("student", "JavaScript") // CHAINING ON THE SECOND PARANTHESIS HERE

//////////////////////////////

// const array = (function(thingToAdd){
//     const base = 3;
//     return [
//         function () {
//             return base + thingToAdd;
//         },
//         function () {
//             return base;
//         }
//     ];
// })((2));

// function demoChain(name){
//     const part1 = "hi";
//     return function (){
//         const part2 = "there";
//         return function (){
//             console.log(`${part1.toUpperCase()} ${part2} ${name}`);
//         };
//     };
// }

// demoChain("Dr. Stephen Strange")()(); // WHY EXACTLY DO WE NEED THE 2 EMPTY SET OF PARANTHESES

function wrapAdjective (flair = "*"){
    return function innerFunctionCurrent (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`
    }
};