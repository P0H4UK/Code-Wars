function positiveSum(arr) {
    let sum = 0;
    for(let a of arr ) {
      if (a > 0) sum = sum + a;
    } 
    return sum;
  }