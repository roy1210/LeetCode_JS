var reverse = function(x) {
  const str = String(x)
  const array= str.split('')
  let res
  if(array[0]==="-"){
    const modifiedArray=array.slice(1)
    res = "-" + modifiedArray.reverse().join('')
  } else {
    res= array.reverse().join('')
  }
  return Number(res)
    // .reverse().join('')
};

console.log(reverse(-123));