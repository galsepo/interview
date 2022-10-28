// **************** Fibonacci *******************************
// Design a function which returns a fibonacci sequence value
// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms. Hence, the nth term is the sum of (n-1)th term and (n-2)th term.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144;


// const fibonacci = n => {
//     if (n === 0) {
//         return 0
//     }
//     else if (n < 2) {
//         return 1
//     }
//     else {
//         return fibonacci(n - 2) + fibonacci(n - 1);
//     }
// }


// ****************************** Palindrome ************************
// Write a function which checks if string is a palindrome

// const isPalindrome = (str) => {
//     return str === str.split("").reverse().join("");
// };

//********** Anagram ********************* */
// Write a function which checks if string is an anagram

// Anagrams are words that have the same characters in the same quantity. This means that two strings are anagrams if we can rearrange one to get the other.
// Here are some examples of words that are anagrams.
// “listen” and “silent”
// “rail safety” and “fairy tales”
// “dormitory” and “dirty room”
// “the eyes” and “they see”

// const isAnagram = (str1, str2) => {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     const lowerStr1 = str1.toLowerCase();
//     const lowerStr2 = str2.toLowerCase();

//     if (lowerStr1 === lowerStr2) {
//         return false;
//     }
//     const sortedStr1 = lowerStr1.split("").sort().join("");
//     const sortedStr2 = lowerStr2.split("").sort().join("");
//     return sortedStr1 === sortedStr2;
// };

//*************** Finding vowels ************************ */
// Write a function which counts vowels in a string
// one solition
// const findVowels = str => {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++
//         }
//     }
//     return count;
// }

// two solution
// const findVowels = (str) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return str
//         .toLowerCase()
//         .split("")
//         .reduce((acc, char) => {
//             return vowels.includes(char) ? acc + 1 : acc;
//         }, 0)
// }
