function convertToRoman(num) {
  function getNumeral(digit, lowStr, midStr, nextStr) {
    switch (true) {
      case digit <= 3:
        return lowStr.repeat(digit);
      case digit === 4:
        return lowStr + midStr;
      case digit <= 8: // digits 5-8
        return midStr + lowStr.repeat(digit - 5);
      default: // digit 9
        return lowStr + nextStr
    }
  }

  let str = ""

  // Thousands
  str += "M".repeat(Math.floor(num/1000));
  num %= 1000;

  // Hundreds
  str += getNumeral(Math.floor(num/100), 'C', 'D', 'M')
  num %= 100;

  // Tens
  str += getNumeral(Math.floor(num/10), 'X', 'L', 'C')
  num %= 10;

  // Ones
  str += getNumeral(num, 'I', 'V', 'X')

  return str;
}
 
console.log(convertToRoman(36))

// var convertToRoman = function(num) {
//   var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   var romanNumeral = [
//     "M",
//     "CM",
//     "D",
//     "CD",
//     "C",
//     "XC",
//     "L",
//     "XL",
//     "X",
//     "IX",
//     "V",
//     "IV",
//     "I"
//   ];

//   var romanized = "";

//   for (var index = 0; index < decimalValue.length; index++) {
//     while (decimalValue[index] <= num) {
//       romanized += romanNumeral[index];
//       num -= decimalValue[index];
//     }
//   }

//   return romanized;
// };

