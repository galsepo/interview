// ****** Closures **********

// const privateCounter = () => {
//     let count = 0
//     const getCounter = (value = 1) => {
//         return count = count + value;
//     }
//     return getCounter
// }

// const counter = privateCounter()

// console.log(counter())
// console.log(counter())
// console.dir(counter)


// const privateCounter = () => {
//     let count = 0;
//     const counter = (value = 1) => {
//         return count = count + value
//     }
//     return counter;
// }
// const counter = privateCounter();

// console.log(counter())
// console.log(counter())
// console.dir(counter)

// const privateCounter = () => {
//     let count = 0;
//     const counter = (value = 1) => {
//         return count = count + value;
//     }
//     return counter;
// }
// const counter = privateCounter();


// console.log(counter());
// console.log(counter());
// console.dir(counter);


// *************** Currying *************

// const multiplay = (num1) => {
//     return num2 => {
//         return num1 * num2
//     };
// }

// const myltiplay = (num1) => (num2) => num1 * num2
// console.log(myltiplay(2)(3))

// const curriedSum = ((a, b, c) => a + b + c)
// console.log(curriedSum(7, 8, 9))

// const addCurry = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c
//         }
//     }
// }
// console.log(addCurry(2)(3)(5))

// const curridSumTwo = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c
//         }
//     }
// }
// console.log(curridSumTwo(7)(8)(9))

// *********** Concatenating Arrays ************

// Write a function which can concatenate 2 arrays
// const append = (arr, el, e) => {
//     return [...arr, el, e];
// }
// console.log(append([1, 2], 3, 4))

// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['d', 'f', 'e', 'g'];

// const arr3 = [...arr1, ...arr2]

// console.log(arr3)

const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 20,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
        age: 10,
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
        age: 45,
    },
];

// ************ Mapping Users to Get Usernames ***************

const names = users
    .sort((user1, user2) => (user1.age < user2.age ? -1 : 1))
    .map((user) => user.name)


console.log("names", names)
 // ********************* Check if User With Such Name Exists ****************

// const isNameExists = (name, users) => {
//     let exists = false;
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].name === name) {
//             exists = true;
//         }
//     }
//     return exists;
// }

// const isNameExists = (name, arr) => arr.somer((el) => el.name === name)

// ************* Remove All Duplicates in the Array ***********************

// const uniqueArr = (arr) => {
//     const result = [];
//     arr.forEach((item) => {
//         if (!result.includes(item)) {
//             result.push(item)
//         }
//     });
//     return result;
// }


// [3, 5, 1].sort((a, b) => (a < b ? 1 : -1)) 
  
// *********** Sorting the array *************

// Sort the array of numbers
// Sort array of objects by author's lastname

// const books = [
//     { name: "Harry Potter", author: "Joanne Rowling" },
//     { name: "Warcross", author: "Marie Lu" },
//     { name: "The Hunger Games", author: "Suzanne Collins" },
// ];


// books.sort((book1, book2) => {
//     const authorLastName1 = book1.author.split(" ")[1];
//     const authorLastName2 = book2.author.split(" ")[1];
//     return authorLastName1 < authorLastName2 ? -1 : 1;
// })
// console.log(books)
 
// ********** Writing Range Function *******************

// const range = (start, end) => {
//     let result = []
//     for (let i = start; i <= end; i++) {
//         result.push(i)
//     }
//     return result;
// }
// console.log(range(15, 25))

// ************* Writing Shuffle Function ********************

// const shuffleItems = (items) => {
//     return items
//         .map((item) => ({ sort: Math.random(), value: item }))
//         .sort((item1, item2) => item1.sort - item2.sort)
//         .map((a) => a.value)
// };

// ******* Find the Number of Occurences of Minimum Value in List ***********

// const arr = [5, 3, 8, 13, 5, 8, 3];

// const minValue = Math.min(...arr)
// const minArr = arr.filter((el) => el === minValue)

// console.log(minArr.length)

// function getItem() {
//     console.log(this);
// }
// getItem()


// ************* This ********************

//  What will be logged here?

// Task 1
// function getItem() {
//   console.log(this);
// }

// getItem();
//window

// Task 2
// const item = {
//   title: "Ball",
//   getItem() {
//     console.log("this", this);
//   },
// };

//this Item {title: "Ball"}

// item.getItem();

// Task 3
// class Item {
//   title = "Ball";
//   getItem() {
//     function someFn() {
//       console.log("this", this);
//     }
//     someFn();
//   }
// }

// const item = new Item();
// item.getItem();

//this undefined


// ************* Classes ********************
// Design a class for employee which takes id and name in during construction of object and has a salary property

// class Employee {
//     constructor(id, name) {
//         if (!id || !name) {
//             throw new Error("Employee id and name are mandatory")
//         }
//         this.id = id;
//         this.name = name;
//     }
//     setSalary(salary) {
//         this.salary = salary;
//     }
//     getId() {
//         return this.id;
//     }
//     getName() {
//         return this.name;
//     }
//     getSalary() {
//         return this.salary;
//     }
// }

// const employee = new Employee(1, 'Gala');
// employee.setSalary(10000);
// // Design a class for manager which is employee and can have department property

// class Manager extends Employee {
//     setDepartament(name) {
//         this.departament = name;
//     }
//     getDepartment() {
//         return this.departament
//     }
// }


// const manager = new Manager(1, "Gala")
// manager.setSalary(90000);
// manager.setDepartament("It")


// ************* Implement Debounce Function ********************
// Create debounce function


// setTimeout(() => {
//     console.log("Delayed for 1 second.");
//   }, 1000)

// const debonce = (func, timeout = 300) => {
//     let timer;
//     return (...args) => {
//         console.log("inner fn", args);
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             func.apply(this, args)
//         }, timeout)
//     }
// }

// const saveInput = (name) => {
//     console.log('saveInput', name);
// }
// const processChange = debonce(saveInput, 2000);
// processChange("Hello");
// processChange("Hello");
// processChange("Hello");
// processChange("Hello");
// processChange("Hello");

// ************* Throttle function ********************
//Create throttle function

// const throttle = (func, timeout = 300) => {
//     let isWaiting = false;
//     return (...args) => {
//         if (!isWaiting) {
//             func.apply(this, args)
//             isWaiting = true;
//             setTimeout(() => {
//                 isWaiting = false;
//             }, timeout)
//         }
//     }
// }

// const saveInput = (name) => {
//     console.log('saveInput', name);
// }
// const processChange = throttle(saveInput, 2000);
// processChange("Hello 2000");
// setTimeout(() => {
//     processChange("Hello 1000");
// }, 1000);
// setTimeout(() => {
//     processChange("Hello 1200");
// }, 1200);
// setTimeout(() => {
//     processChange("Hello 2400");
// }, 2400);
