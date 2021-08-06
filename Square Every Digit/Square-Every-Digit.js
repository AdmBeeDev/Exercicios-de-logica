function squareDigits(num){
  let numero = num.toString();
  let result = "";
  for (let i of numero){
    result += i ** 2
  }
  return parseInt(result)
}