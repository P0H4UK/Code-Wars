function solution(str){
    let arr = [];
    for(let a of str) arr.push (a);
    arr.reverse();
    return arr.join (''); 
  }