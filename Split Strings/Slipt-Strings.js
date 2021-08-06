function solution(str){
  if (!str) return [];
  return (str.length % 2 ? str + '_' : str).match(/../g);
}