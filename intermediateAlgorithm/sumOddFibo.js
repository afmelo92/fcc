// function sumFibs(num) {
//   let ar = [0,1]
//   let result = [];
//   let newAr = []

//   do {
//     result = ar[0] + ar[1]
//     result > num ? newAr : newAr.push(result)
//     ar[0] = ar[1]
//     ar[1] = result

//     // console.log(result)

//   } while (result <= num);

//   return newAr.filter(item => item % 2 !== 0).reduce((curr, acc) => curr + acc) + 1
// }

function sumFibs(num) {
  if (num <= 0) return 0;

  const arrFib = [1, 1];
  let nextFib = 0;

  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

console.log(sumFibs(1000))