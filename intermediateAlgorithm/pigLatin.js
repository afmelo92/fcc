// function translatePigLatin(str) {
//   let consonantRegex = /^[^aeiou]+/;
//   let myConsonants = str.match(consonantRegex);
//   return myConsonants !== null
//     ? str
//         .replace(consonantRegex, "")
//         .concat(myConsonants)
//         .concat("ay")
//     : str.concat("way");
// }
// console.log(translatePigLatin("consonant"))

// function translatePigLatin2(str) {
//   var pigLatin = "";
//   var regex = /[aeiou]/gi;

//   if (str[0].match(regex)) {
//     pigLatin = str + "way";
//   } else if (str.match(regex) === null) {
//     pigLatin = str + "ay";
//   } else {
//     var vowelIndice = str.indexOf(str.match(regex)[0]);

//     pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
//   }

//   return pigLatin;
// }

// console.log(translatePigLatin2("consonant"))

// function translatePigLatin3(str) {
//   if (str.match(/^[aeiou]/)) return str + "way";

//   const consonantCluster = str.match(/^[^aeiou]+/)[0];
//   return str.substring(consonantCluster.length) + consonantCluster + "ay";
// }

// console.log(translatePigLatin3("consonant"))

function translatePigLatin4(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

console.log(translatePigLatin4("consonant"))