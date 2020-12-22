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

function rot13(str) {
  return str.replace(/[A-Z]/g, L =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}

function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return str
    .split('')
    .map(char => {  
      const pos = alphabet.indexOf(char);      
      return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
    })
    .join('');
}


console.log(rot13("SERR PBQR PNZC"))