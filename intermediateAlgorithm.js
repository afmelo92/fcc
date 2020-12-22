function spinalCase(str) {
  // return str.split(/(?=[A-Z])|\W/).map(item => item.trim().replace(/[^A-Za-z]/, '').toLowerCase()).join('-')

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
console.log(spinalCase('AllThe-small Things'))
// function whatIsInAName(collection, source) {
//   var srcKeys = Object.keys(source);

//   return collection.filter((obj) => {
//     return srcKeys.every((key) => {
//       return obj.hasOwnProperty(key) && obj[key] === source[key];
//     });
//   });

  // var srcKeys = Object.keys(source);

  // return collection.filter((obj) => {
  //   return srcKeys
  //     .map((key) => {
  //       return obj.hasOwnProperty(key) && obj[key] === source[key];
  //     })
  //     .reduce((a, b) => {
  //       return a && b;
  //     });
  // });
// }

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))
// function destroyer(arr, ...rest) {
//   let newArr = arr.filter((item, pos, self) => !rest.includes(item) && self.indexOf(item) == pos)
//   return newArr
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))

// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter(item => !arr1.includes(item) || !arr2.includes(item));
// }

// function diffArray(arr1, arr2) {
//   let newArr = []

//   function onlyFirst(first, second) {
//     for(let i = 0; i < first.length; i++) {
//       if (!second.includes(first[i])) {
//         newArr.push(first[i])
//       }
//     }
//   }
  
//   onlyFirst(arr1,arr2)
//   onlyFirst(arr2, arr1)

//   return newArr;
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))

// function sumAll(arr) {
//   var sum = 0;
//   for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(sumAll([5,10])); // 10

