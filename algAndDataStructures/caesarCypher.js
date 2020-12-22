function rot13(str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'

  return str.toLowerCase().split('').map((item) => {
    if(!item.match(/[^A-Za-z]/)) {
     if(alpha.indexOf(item) - 13 >= 0) {
       return alpha[alpha.indexOf(item) - 13].toUpperCase()
     }
     
      return alpha[alpha.length + (alpha.indexOf(item) - 13)].toUpperCase()
    }
     return item
 }).join('')
}

console.log(rot13("SERR PBQR PNZC"))