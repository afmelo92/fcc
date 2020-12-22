// function telephoneCheck(str) {
//   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
//   return regex.test(str);
// }

function telephoneCheck(str) {
  var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
  return re.test(str);
}

console.log(telephoneCheck("555-555-5555"))
console.log(telephoneCheck("(555)555-5555"))
console.log(telephoneCheck("(555) 555-5555"))
console.log(telephoneCheck("5555555555"))
console.log(telephoneCheck("1 555 555 5555"))
console.log(':::::::::::::::::::::::::::::::::::::::::::')


console.log(telephoneCheck("1 555)555-5555"))
console.log(telephoneCheck("(6054756961)"))
console.log(telephoneCheck("2 (757) 622-7382"))
console.log(telephoneCheck("0 (757) 622-7382"))
console.log(telephoneCheck("-1 (757) 622-7382"))

console.log(telephoneCheck("2 757 622-7382"))
console.log(telephoneCheck("10 (757) 622-7382"))
console.log(telephoneCheck("27576227382"))
console.log(telephoneCheck("(275)76227382"))
console.log(telephoneCheck("2(757)6227382"))
console.log(telephoneCheck("2(757)622-7382"))
console.log(telephoneCheck("555)-555-5555"))
console.log(telephoneCheck("(555-555-5555"))

