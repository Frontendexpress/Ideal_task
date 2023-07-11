const obj = {
    age:20
};

const handler = {
  get: function(target, prop) {
    return "404";
  }
};

const newObj = new Proxy(obj, handler);

console.log(newObj.name); 
console.log(newObj.age); 
