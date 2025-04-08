const user = {
    name: "Mina",
    age: 25,
    role: "Developer",
    getInfo() {
      return `${this.name} is ${this.age} years old and works as a ${this.role}.`;
    },
    [Symbol.iterator]() {
      const entries = Object.entries(this).filter(
        
        
        ([key,value])=> typeof value !== 'function'
    
    ); 

      let index = 0;
  
      return {
        next() {
          if (index < entries.length) {
            const [key, value] = entries[index++];
            return { value: `${key}: ${value}`, done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };

//   printing the user object
  for (const entry of user) {
    console.log(entry);
  }
  


  function* fibonacci(n) {
    let a = 1, b = 1;
    while (n > 0) {
      yield a;
      [a, b] = [b, a + b];
      n--;
    }
  }
  for (let num of fibonacci(10)) {
    console.log(num);
  }
