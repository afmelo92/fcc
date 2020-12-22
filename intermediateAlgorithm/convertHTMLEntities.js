function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

console.log(convertHTML("Dolce & Gabbana"))

// function convertHTML(str) {
//   const htmlEntities = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;"
//   };

//   return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
// }


// function convertHTML(str) {
//   var temp = str.split("");

//   for (var i = 0; i < temp.length; i++) {
//     switch (temp[i]) {
//       case "<":
//         temp[i] = "&lt;";
//         break;
//       case "&":
//         temp[i] = "&amp;";
//         break;
//       case ">":
//         temp[i] = "&gt;";
//         break;
//       case '"':
//         temp[i] = "&quot;";
//         break;
//       case "'":
//         temp[i] = "&apos;";
//         break;
//     }
//   }

//   temp = temp.join("");
//   return temp;
// }

