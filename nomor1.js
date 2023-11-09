function minimal(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  
  console.log(minimal(1, 4)); // 1
  console.log(minimal(3, 2)); // 2
  console.log(minimal(3, 3)); // 3
  