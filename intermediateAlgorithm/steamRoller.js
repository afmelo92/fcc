function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))

// function steamrollArray(arr) {
//   var flattenedArray = [];

//   var flatten = function(arg) {
//     if (!Array.isArray(arg)) {
//       flattenedArray.push(arg);
//     } else {
//       for (var a in arg) {
//         flatten(arg[a]);
//       }
//     }
//   };

//   arr.forEach(flatten);
//   return flattenedArray;
// }

// function steamrollArray(arr) {
//   let newArr = []

//   for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     newArr = newArr.concat(arr[i])
//   }

//   return newArr;
// }

