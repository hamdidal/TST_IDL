const handler = {
  get: (target, property) => {
    return "404";
  },
};

const obj = new Proxy({}, handler);

console.log(obj.name);
console.log(obj.age);
console.log(obj.address);
