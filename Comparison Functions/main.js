// ***************** Implement Shallow Comparison **************************
// Design a shallow comparison function
// const typeOf = (input) => {
//     const rawObject = Object.prototype.toString.call(input).toLowerCase();
//     const typeOfRegex = /\[object (.*)]/g;
//     const type = typeOfRegex.exec(rawObject)[1];
//     return type;
// };

// const shallowCompare = (source, target) => {
//     if (typeOf(source) !== typeOf(target)) {
//         return false;
//     }

//     if (typeOf(source) === "array") {
//         if (source.length !== target.length) {
//             return false;
//         }
//         return source.every((el, index) => el === target[index]);
//     } else if (typeOf(source) === "object") {
//         return Object.keys(source).every((key) => source[key] === target[key]);
//     } else if (typeOf(source) === "date") {
//         return source.getTime() === target.getTime();
//     }

//     return source === target;
// };


//******************** Implement Deep comparison***************** */
// Design deep comparison function

// const typeOf = (input) => {
//     const rawObject = Object.prototype.toString.call(input).toLowerCase();
//     const typeOfRegex = /\[object (.*)]/g;
//     const type = typeOfRegex.exec(rawObject)[1];
//     return type;
// };
// const deepCompare = (source, target) => {
//     if (typeOf(source) !== typeOf(target)) {
//       return false;
//     }

//     if (typeOf(source) === "array") {
//       if (source.length !== target.length) {
//         return false;
//       }

//       return source.every((entry, index) => deepCompare(entry, target[index]));
//     } else if (typeOf(source) === "object") {
//       if (Object.keys(source).length !== Object.keys(target).length) {
//         return false;
//       }

//       return Object.keys(source).every((key) =>
//         deepCompare(source[key], target[key])
//       );
//     } else if (typeOf(source) === "date") {
//       return source.getTime() === target.getTime();
//     }

//     return source === target;
//   };

//*************** Create Memoization Function************ */
// Design a memoization function which adds 10 to provided value and take it from cache if it was already calculated.

// const memoizeAdd = () => {
//     let cache = {}
//     return (value) => {
//         if (value in cache) {
//             console.log("fetching from cache")
//             return cache[value];
//         } else {
//             console.log("calculating results")
//             const result = value + 10;
//             cache[value] = result;
//             return result;
//         }
//     }
// }
// const newAdd = memoizeAdd()
// console.log(newAdd(9))// output: 19 calculated
// console.log(newAdd(9))// output: 19 cashe
// console.log(newAdd(9))// output: 19 cashe