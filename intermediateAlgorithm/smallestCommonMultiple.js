const smallestCommons = arr => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sol = max;

  for (let i = max - 1; i >= min; i--) {
    if (sol % i) {
      sol += max;
      i = max;
    }
  }
  return sol;
};

console.log(smallestCommons([1, 5]))

// function smallestCommons(arr) {
//   // Sort array from greater to lowest
//   // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
//   arr.sort((a, b) => {
//     return b - a;
//   });

//   // Create new array and add all values from greater to smaller from the
//   // original array.
//   var newArr = [];
//   for (var i = arr[0]; i >= arr[1]; i--) {
//     newArr.push(i);
//   }

//   // Variables needed declared outside the loops.
//   var quot = 0;
//   var loop = 1;
//   var n;

//   // Run code while n is not the same as the array length.
//   do {
//     quot = newArr[0] * loop * newArr[1];
//     for (n = 2; n < newArr.length; n++) {
//       if (quot % newArr[n] !== 0) {
//         break;
//       }
//     }

//     loop++;
//   } while (n !== newArr.length);

//   return quot;
// }

// // test here
// console.log(smallestCommons([1, 5]))
// function smallestCommons(arr) {
//   arr = arr.sort()
//   let count = 0;
//   let max = Math.max(...arr) + 1

//   for (let i = 0; i <= arr.length; i++) {
//     if(max % arr[i] === 0) {
//       if(count === arr.length) {
//         return max
//       }
//       count++
//       max++
      
//     }
//     if(max % arr[i] !== 0) {
//       i = arr[0]
//       count = 0
//       max++
//     }
//   }
// }

// console.log(smallestCommons([1,3]))
// smallestCommons([1,5]);