function pegaRG(rg) {
  const value = rg.replace(/[\D]\.[\D]{3}\.[\D]-[\D]/gi, '');

  return value
}


console.log(pegaRG('2.3A2.134.214'))