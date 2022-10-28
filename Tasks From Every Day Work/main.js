//************** Convert to Title Case *********** */

// Write a function to convert a string to title case

// Provided test cases
//   titleCase(“I’m a little tea pot”) should return a string.
//   titleCase(“I’m a little tea pot”) should return “I’m A Little Tea Pot”.
//   titleCase(“sHoRt AnD sToUt”) should return “Short And Stout”.
//   titleCase(“HERE IS MY HANDLE HERE IS MY SPOUT”) should return “Here Is My Handle Here Is My Spout”.

// const titleCase = (str) => {
//     const arr = str.toLowerCase().split(" ")
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join(" ")
// }

// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))

// First solution
// const titleCase = (str) => {
//     const arr = str.toLowerCase().split(" ");
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join(" ")
// }

// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))

// Second solution

// const titleCase = (str) => {
//     return str
//         .toLowerCase()
//         .split(" ")
//         .map((word) => (word.charAt(0).toUpperCase() + word.slice(1)))
//         .join(' ')
// }

// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))



//************Convert the Time Input Given in 12 Hours Format to 24 *****
// Write a function which can convert the time input given in 12 hours format to 24 hours format

// convertTo24HrsFormat("12:10AM");    // 00:10
// convertTo24HrsFormat("5:00AM");     // 05:00
// convertTo24HrsFormat("12:33PM");    // 12:33
// convertTo24HrsFormat("01:59PM");    // 13:59
// convertTo24HrsFormat("11:8PM");     // 23:08
// convertTo24HrsFormat("10:02PM");    // 22:02

// const convertTo24HrsFormat = (timeText) => {
//     const timeTextLower = timeText.toLowerCase();
//     let [hours, mins] = timeTextLower.split(":");

//     if (timeTextLower.endsWith("am")) {
//         hours = hours === "12" ? "0" : hours;
//     } else if (timeTextLower.endsWith('pm')) {
//         hours = hours === "12" ? hours : String(+hours + 12);
//     }
//     return hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0);
// }

// console.log(convertTo24HrsFormat("12:33PM"));    // 12:33
// console.log(convertTo24HrsFormat("5:00AM"));     // 05:00
// console.log(convertTo24HrsFormat("01:59PM"));    // 13:59
// console.log(convertTo24HrsFormat("11:8PM"));     // 23:08
// console.log(convertTo24HrsFormat("10:02PM"));    // 22:02
// console.log(convertTo24HrsFormat("12:10AM"));    // 00:10

//****************** Mapping Data ******************/

// Map data to frontend format. The main element is location key and we need to map all data to it. We will have 5 objects at the end.

// const loc = [
//     {
//         location_key: [32, 22, 11],
//         autoassign: 1,
//     },
//     {
//         location_key: [41, 42],
//         autoassign: 1,
//     },
// ];

// const bulkConfig = [
//     {
//         dataValues: {
//             config_key: 100,
//         },
//     },
//     {
//         dataValues: {
//             config_key: 200,
//         },
//     },
// ];

// const result = loc.map((locEl, index) => {
//     return locEl.location_key.map((locationKey) => {
//         return {
//             coonfig_key: bulkConfig[index].dataValues.config_key,
//             location_key: locationKey,
//             autoassign: locEl.autoassign,
//         }
//     })
// }).reduce((arr, acc) => arr.concat(acc), []);
// console.log(result)


// [{config_key: 100, location_key: 32, autoassign: 1}, {config_key: 100, location_key: 22, autoassign: 1}]



//********** Replace Parameters in URL************** */
// Write a function to Replace parameters in url



//   const rerlaceParamsInURL = (url, replaceParams)  => {
//     return replaceParams.reduce((acc, replaceParams) => {
//        return acc.replace(":" + replaceParams.from, replaceParams.to) 
//     }, url)
//   }


// const initialUrl = "/posts/:postId/comments/:commentId";

// const resultUrl = rerlaceParamsInURL(initialUrl, [
//   { from: "postId", to: "1" },
//   { from: "commentId", to: "3" },
// ]);
// console.log(resultUrl);


// *********** Validation Messages****************

// Format backend validation message to frontend format

// const backendErrors = {
//   email: {
//     errors: [
//       {
//         message: "Can't be blank",
//       },
//     ],
//   },
//   password: {
//     errors: [
//       {
//         message: "Must contain symbols in different case",
//       },
//       {
//         message: "Must be at least 8 symbols length",
//       },
//     ],
//   },
//   passwordConfirmation: {
//     errors: [
//       {
//         message: "Must match with password",
//       },
//     ],
//   },
// };

// const humanReadableErrors = Object.entries(backendErrors).map(([field, value]) => {
//   const fieldMessages = value.errors.map(error => error.message).join(', ');
//   const capitalizedField = field.charAt(0).toUpperCase() + field.slice(1);
//   return `${capitalizedField}: ${fieldMessages}`
// })



// ["Email: Can't be blank", "Password: Must contain symbols, Must be at least 8 symbols", "passwordConfirmation: Must match with password"]

//**************  Nested List ************************** */

// Transform flat list to nested list

const flatList = [
  {
    id: 1,
    name: "lvl 1 item 1",
    parentId: null,
  },
  {
    id: 2,
    name: "lvl 1 item 2",
    parentId: null,
  },
  {
    id: 3,
    name: "lvl 2 item 3",
    parentId: 1,
  },
  {
    id: 4,
    name: "lvl 3 item 4",
    parentId: 3,
  },
  {
    id: 5,
    name: "lvl 2 item 5",
    parentId: 2,
  },
];

//TODO:
//1.Get root elements
//2. Check children if they have children
//3. If not --> return item with empty children
//4. If yes --> go to #2

const addChildren = (item) => {
  const children = flatList.filter((childItem) => childItem.parentId === item.id);
  let nestedChildren = []
  if (children.length > 0) {
    nestedChildren = children.map((child) => addChildren(child))
  }
  return Object.assign({}, item, { children: nestedChildren })
};

const nestedList = flatList.filter(item => item.parentId === null).map(addChildren);



//   [
//   {
//      id: 1,
//      children: [
//        {
//          id: 3,
//          children: [
//            {
//              id: 4,
//              children: []
//            }
//          ]
//        }
//      ]
//   },
//   {
//      id: 2,
//      children: [
//        {
//          id: 5,
//          children: []
//        }
//      ]
//   }
//   ]
