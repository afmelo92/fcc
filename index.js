function chunkArrayInGroups(arr, size) {

  let newArr = []

  
    for(let i = 0; i < arr.length; i = i + size) {
      newArr.push(arr.slice(i, i + size))
    }
  
  
  return newArr;
}

const ninja = chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g"], 2);

// function mutation(arr) {
//   return arr[1]
//     .toLowerCase()
//     .split("")
//     .every(function(letter) {
//       return arr[0].toLowerCase().indexOf(letter) != -1;
//     });
// }

// const ninja = mutation(["Mary", "Aarmy"])

// console.log(ninja)

// function mutation(arr) {
  
//   let word1 = arr[0].toLowerCase()
//   let word2 = arr[1].toLowerCase().split('').filter((v,i) => arr[1].indexOf(v) === i)
//   let count = 0

//   console.log(word2)
//   console.log(word1)

//   for (let i = 0; i < word2.length; i++) {
//     if(word1.includes(word2[i])) {
//       count++
//     }
//   }

//   if(count === word2.length) {
//     return true
//   }

//   return false
// }


// function getIndexToIns(arr, num) {
//   arr = arr.sort((a,b) => a-b)

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) return i;
//   }

//   return arr.length;
// }

// const ninja = getIndexToIns([10, 20, 30, 40, 50], 35)

// console.log(ninja)

// function bouncer(arr) {
//   let aux = arr.filter(val => {
//     if(!!val) {
//       return val
//     }
//   })

//   return aux;
// }

// function bouncer(arr) {
//   return arr.filter(Boolean);
// }

// const ninja = bouncer([7, "ate", "", false, 9]);

// console.log(ninja)

// function bouncer(arr) {
//   let newArray = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i]) newArray.push(arr[i]);
//   }
//   return newArray;
// }

// function frankenSplice(arr1, arr2, n) {
//   let localArr = arr2.slice();
//   localArr.splice(n, 0, ...arr1);
//   return localArr;
// }

// function frankenSplice(arr1, arr2, n) {

//   let aux = arr2.slice(0, n)

//   aux.push(...arr1)

//   let aux2 = arr2.slice(n, n.length)
  
//   aux.push(...aux2)

//   return aux;
// }

// const ninja = frankenSplice([1, 2, 3], [4, 5, 6], 1)
// const ninja2 = frankenSplice([1, 2, 3], [4, 5], 1)
// console.log(ninja)
// console.log(ninja2)



// Exemplo para extrair 'Laranja' e 'Limao' do array frutas
// var frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'];
// var citricos = frutas.slice(1, 3);

// citricos contem ['Laranja','Limao']

// console.log(citricos)

// const titleCase = (str) => {
//   var convertToArray = str.toLowerCase().split(" ");
//   var result = convertToArray.map(function(val) {
//     return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//   });
//   return result.join(" ");
// }

// function titleCaseReturns(str) {
//   return str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
// }

// const ninja = titleCase("I'm a little tea pot");
// const ninjaReturn = titleCaseReturns("I'm a little tea pot");

// console.log(ninja)
// console.log(ninjaReturn)

