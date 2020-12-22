function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    return { name, orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM)) };
  });
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]))


// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
//   var newArr = [];

//   for (var elem in arr) {
//     var orbitalPer = Math.round(
//       2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
//     );
//     newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
//   }

//   return newArr;
// }


// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
//   var a = 2 * Math.PI;
//   var newArr = [];

//   var getOrbPeriod = (obj) => {
//     var c = Math.pow(earthRadius + obj.avgAlt, 3);
//     var b = Math.sqrt(c / GM);
//     var orbPeriod = Math.round(a * b);
//     return {name: obj.name, orbitalPeriod: orbPeriod};
//   };

//   for (var elem in arr) {
//     newArr.push(getOrbPeriod(arr[elem]));
//   }

//   return newArr;
// }
