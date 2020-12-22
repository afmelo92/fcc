const uniqueArray = a.filter(function(item, pos, self) {
  return self.indexOf(item) == pos;
})

// or

const uniq = [...new Set(array)];