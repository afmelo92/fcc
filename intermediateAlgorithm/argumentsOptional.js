function addTogether(first, second) {
  if (typeof first !== "number") {
    return undefined;
  }
  const sum = second =>
    typeof second === "number" ? first + second : undefined;
  return typeof second === "undefined" ? second => sum(second) : sum(second);
}

console.log(addTogether(2))


// function addTogether() {
//   var checkNum = function(num) {
//     if (typeof num !== "number") {
//       return undefined;
//     } else return num;
//   };

//   if (arguments.length > 1) {
//     var a = checkNum(arguments[0]);
//     var b = checkNum(arguments[1]);
//     if (a === undefined || b === undefined) {
//       return undefined;
//     } else {
//       return a + b;
//     }
//   } else {
//     var c = arguments[0];
//     if (checkNum(c)) {
//       return function(arg2) {
//         if (c === undefined || checkNum(arg2) === undefined) {
//           return undefined;
//         } else {
//           return c + arg2;
//         }
//       };
//     }
//   }
// }


