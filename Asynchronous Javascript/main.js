// ********* Write an example of fetching data with XMLHttpRequest.

// const xhr = new XMLHttpRequest()

// xhr.open("GET", "https://api.github.com/users/galsepo/repos");
// xhr.send();

// xhr.onload = function () {
//     if (xhr.status !== 200) {
//         console.log("Error" + xhr.status + xhr.statusText)
//     } else {
//         console.log("Success", xhr.response)
//     }
// };

// xhr.onerror = function () {
//     console.log("xhr request failed")
// };

// **************** Fetch API **************************
// ********* Write an example of fetching data with fetch API

// fetch('https://api.github.com/users/galsepo/repos"')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log("Success", data);
//     })
//     .catch((error) => {
//         console.log(error)
//     })

// ************** Basic Callback **************
//  Write an asynchronous function which executes callback after finishing it's asynchronous task
// What problem callbacks solve?

// const asyncFn = callback => {
//     setTimeout(() => {
//         callback("done")
//     }, 2000)
// }

// asyncFn((message) => {
//     console.log('callback', message)
// })

// what problem callback solve.

// And actually, there are two important points.
// First of all, Colback, allow us to make some assume control staff and wait for the result because actually here we're just providing the function from outside.
// And it will be called later and not immediately.
// This is the main purpose of the callback.
// And secondly, it's important to remember that inside our asynchronous function of we don't know what this callback.
// This is why we can build shareable things.
// This callback can do whatever in different cases.
// For example, on the one page, we want to fetch data and maybe render this data, and on another page, we want to fetch this data and calculate the total number of posts or something like this, which actually means callback is a generic function.
// This is why we can easily share our asynchronous function without specific implementation of our callback.


// ******************  Parallel Async Array ****************

// Execute the given list of asynchronous functions in parallel and return the results as an array to the callback

// const asyncFunc1 = (callback) => {
//     setTimeout(() => {
//         callback(1);
//     }, 3000);
// };

// const asyncFunc2 = (callback) => {
//     setTimeout(() => {
//         callback(2);
//     }, 2000);
// };

// const asyncFunc3 = (callback) => {
//     setTimeout(() => {
//         callback(3);
//     }, 1000);
// };

// asyncParallel = (asyncFuncs, callback) => {
//     const resultArr = new Array(asyncFuncs.length);
//     let resultCounter = 0;

//     asyncFuncs.forEach((asyncFunc, index) => {
//         asyncFunc((value) => {
//             resultArr[index] = value;
//             resultCounter++
//             if (resultCounter >= asyncFuncs.length) {
//                 callback(resultArr);
//             }
//         })
//     })
// }

// asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], (result) => {
//     console.log(result); // 1, 2, 3 (prints results of each asynchronous function in order)
// });

// *********** Convert Callback to Promise ****************
// Create a promise function to be able to use callback function via promise approach

// const asyncFunc = (callback) => {
//     setTimeout(() => {
//         callback(1);
//     }, 3000);
// };

// const promisifyAsyncFunc = () => {
//     return new Promise(resolve => {
//         asyncFunc((data) => {
//             resolve(data)
//         })
//     })
// }
// promisifyAsyncFunc().then((result) => console.log(result));

// ************** Map Data in Promises **********************
// You have 2 functions which return promises. Map data from users and userStatuses to get array of users with id, name, isActive

const users = [
    {
        id: 1,
        name: "Jack",
    },
    {
        id: 2,
        name: "John",
    },
    {
        id: 3,
        name: "Mike",
    },
];
const userStatuses = [
    {
        id: 1,
        isActive: true,
    },
    {
        id: 2,
        isActive: true,
    },
    {
        id: 3,
        isActive: false,
    },
];

const getUsers = () => {
    return new Promise((resolve) => {
        resolve(users);
    });
};

const getUserStatuses = () => {
    return new Promise((resolve) => {
        resolve(userStatuses);
    });
};

//solution 1
// getUsers().then((users) => {
//     getUserStatuses().then((userStatuses) => {
//         const mappedUsers = users.map((user) => {
//             const isActive = userStatuses.find((userStatus) => userStatus.id === user.id).isActive;
//             return { ...user, isActive };
//         })
//         console.log("mappedUsers", mappedUsers)
//     })
// })

//solution 2

// const mapUsers = (users, userStatuses) => {
//     return users.map((user) => {
//         const isActive = userStatuses.find((userStatus) => userStatus.id === user.id).isActive;
//         return { ...user, isActive };
//     })
// }

// Promise.all([getUsers(), getUserStatuses()])
//     .then(([users, userStatuses]) => mapUsers(users, userStatuses))
//     .then((mappedUsers) => {
//         console.log('mappedUsers', mappedUsers)
//     });

//****************Rewrite Mapping Data in Async Await     *********** */

// You have 2 functions which return promises. Map data from users and userStatuses to get array of users with id, name, isActive
// Rewrite previous task in async await

// const getMappedUsers = async () => {
//     try {
//         const users = await getUsers();
//         const userStatuses = await getUserStatuses();
//         const mappedUsers = users.map((user) => {
//             const isActive = userStatuses.find((userStatus) => userStatus.id === user.id).isActive;
//             return { ...user, isActive };
//         });
//         console.log('mappedUsers', mappedUsers);
//     } catch (err) {
//         console.log('err', err)
//     }
// };

// getMappedUsers();

// ************ Design Request Manager ************************
// Design a utility which takes URL and a value for attempts which will attempt to make a fetch request. If on failure it tries again with increasing delay for number of times which user has requested


const requestManager = (url, options = {}, attempts = 3) => {
    return new Promise((resolve, reject) => {
        fetch(url, options)
            .then(resolve)
            .catch((error) => {
                const isLastAttempt = attempts === 1
                if (isLastAttempt) {
                    return reject(error)
                }
                setTimeout(() => {
                    requestManager(url, options, attempts - 1)
                        .then(resolve)
                        .catch(reject)
                }, 3000)
            })
    })
}
requestManager("https://foo.com")
    .then(response => {
        console.log('response', response);
    })
    .catch((err) => {
        console.log('err', err)
    })