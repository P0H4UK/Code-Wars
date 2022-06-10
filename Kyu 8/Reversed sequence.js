const reverseSeq = n => {
    return Array(n).fill(n).map((n,i) => n-i);
  };