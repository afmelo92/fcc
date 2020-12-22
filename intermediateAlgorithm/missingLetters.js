function fearNotLetter(str) {
  var compare = str.charCodeAt(0),
    missing;

  str.split("").map((letter, index) => {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

console.log(fearNotLetter("abce"))

// function fearNotLetter(str) {
//   for (var i = 0; i < str.length; i++) {
//     var code = str.charCodeAt(i);

//     if (code !== str.charCodeAt(0) + i) {
//       return String.fromCharCode(code - 1);
//     }
//   }
//   return undefined;
// }


// function fearNotLetter(str) {
//   let letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  
//   str = str.split('')

//   let newARR = letters.slice(letters.indexOf(str[0]), letters.indexOf(str[str.length - 1])).map((val, index) => {
//     if (val !== str[index]) {
//       return val
//     } 
//     return undefined
//   }).filter(item => item !== undefined)

//   return newARR !== [] ? newARR[0] : undefined
// }
