function solution(number){
  let soma = 0;
  
  for(let i = 1; i < number; i += 1) {
    if (i % 3 === 0 && i % 5 === 0){
      soma += i
    }else if(i % 3 === 0 && i > 0) {
          soma += i;
    }else if(i % 5 === 0 && i > 0) {
        soma += i;
    }
  }
  return soma;
}
