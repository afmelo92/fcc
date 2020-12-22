function uniteUnique(...arrays) {
  let newArr = [...arrays].flat()
  // let newArr = [].concat(...arrays)

  return newArr.filter((item, pos) => {
    return newArr.indexOf(item) == pos;
  })

  // return [...new Set(newArr)]
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))

// function uniteUnique() {
//   var concatArr = [];
//   var i = 0;
//   while (arguments[i]) {
//     concatArr = concatArr.concat(arguments[i]);
//     i++;
//   }

//   return concatArr.filter(function(item, pos) {
//     return concatArr.indexOf(item) == pos;
//   });
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
