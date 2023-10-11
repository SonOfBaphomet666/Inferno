

function Dog(name,asdas) {
    this.name = name;
    this.asdas = asdas;
  }
  
  let beagle = new Dog("Snoopy", 23);
  
  Dog.prototype.isPrototypeOf(beagle);  // yields true
  
  // Fix the code below so that it evaluates to true
  Object.prototype.isPrototypeOf(Dog.prototype);

  console.log(beagle)