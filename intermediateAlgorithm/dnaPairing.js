// function pairElement(str) {
//   var pairs = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C"
//   };
//   var arr = str.split("");
//   return arr.map(x => [x, pairs[x]]);
// }

console.log(pairElement("ATCG"))

function pairElement(str) {
  var paired = [];

  var search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

