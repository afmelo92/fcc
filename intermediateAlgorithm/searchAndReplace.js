function myReplace(str, before, after) {
  const myArr = str.split(" ");
  const [wordToReplace] = myArr.filter(item => item === before);
  return wordToReplace[0].toUpperCase() !== wordToReplace[0]
    ? myArr.map(item => (item === before ? after : item)).join(" ")
    : myArr
        .map(item =>
          item === before ? after[0].toUpperCase() + after.slice(1) : item
        )
        .join(" ")
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))

// Add new method to the String object, not overriding it if one exists already
// String.prototype.capitalize =
//   String.prototype.capitalize ||
//   function() {
//     return this[0].toUpperCase() + this.slice(1);
//   };

// const Util = (function() {
//   // Create utility module to hold helper functions
//   function textCase(str, tCase) {
//     // Depending if the tCase argument is passed we either set the case of the
//     // given string or we get it.
//     // Those functions can be expanded for other text cases.

//     if (tCase) {
//       return setCase(str, tCase);
//     } else {
//       return getCase(str);
//     }

//     function setCase(str, tCase) {
//       switch (tCase) {
//         case "uppercase":
//           return str.toUpperCase();
//         case "lowercase":
//           return str.toLowerCase();
//         case "capitalized":
//           return str.capitalize();
//         default:
//           return str;
//       }
//     }

//     function getCase(str) {
//       if (str === str.toUpperCase()) {
//         return "uppercase";
//       }
//       if (str === str.toLowerCase()) {
//         return "lowercase";
//       }
//       if (str === str.capitalize()) {
//         return "capitalized";
//       }
//       return "normal";
//     }
//   }

//   return {
//     textCase
//   };
// })();

// function myReplace(str, before, after) {
//   const { textCase } = Util;
//   const regex = new RegExp(before, "gi");
//   const replacingStr = textCase(after, textCase(before));

//   return str.replace(regex, replacingStr);
// }

// function myReplace(str, before, after) {
//   function applyCasing(source, target) {
//     var targetArr = target.split("");
//     var sourceArr = source.split("");
//     for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
//       if (/[A-Z]/.test(sourceArr[i])) {
//         targetArr[i] = targetArr[i].toUpperCase();
//       }
//       else targetArr[i] = targetArr[i].toLowerCase();
//     }
//     return targetArr.join("");
//   }

//   return str.replace(before, applyCasing(before, after));
// }

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))

// function myReplace(str, before, after) {
//   var index = str.indexOf(before);
//   if (str[index] === str[index].toUpperCase()) {
//     after = after.charAt(0).toUpperCase() + after.slice(1);
//   } else {
//     after = after.charAt(0).toLowerCase() + after.slice(1);
//   }
//   str = str.replace(before, after);

//   return str;
// }

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))