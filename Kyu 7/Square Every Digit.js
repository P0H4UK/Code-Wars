function squareDigits(num){
    return Number(String(num).split('').map(item => item*item).join(''));
  }