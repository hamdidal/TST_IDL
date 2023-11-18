Promise.resolve(1)
  .then((value) => {
    console.log("Promise 1 resolved with:", value);
    return value + 1;
  })
  .then((value) => {
    console.log("Promise 2 resolved with:", value);
    return value + 1;
  })
  .then((value) => {
    console.log("Promise 3 resolved with:", value);
  });
