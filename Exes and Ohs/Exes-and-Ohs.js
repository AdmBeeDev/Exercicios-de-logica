function XO(str) {
  let eleX = [];
  let eleO = [];
  for (let ele = 0; ele <= str.length; ele += 1) {
    if (str[ele] == 'x' || str[ele] == 'X') {
      eleX.push(ele);
    }else if (str[ele] == 'o' || str[ele] == 'O') {
      eleO.push(ele);
    }
  }
  if (eleX.length !== eleO.length) return false;
  return true; 
}