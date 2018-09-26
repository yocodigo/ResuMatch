export default function (str1){
  const arr = str1.split(' ')
  const obj = arr.reduce((map, item) => {
    if(!map[item]){
      map[item] = true
    }
    return map
  }, {})
  return function(str2){
    return str2.split(' ').reduce((acc, item) => {
      if(obj[item]){
        acc += 1
      }
      return acc
    }, 0) * 100 / arr.length
  }
}