const inputArray = [1, 2, 3, 4];

const output = document.getElementById("output");

//console.log(output);

//promise defination

let myPromise = new Promise((resolve, reject) => {

  setTimeout(() => resolve(inputArray), 1000);

});

myPromise

  .then((arr) => {

    const filterArr = arr.filter((elem) => elem % 2 == 0);

    output.textContent = filterArr.join(",");

    return filterArr;

  })

  .then((arr) => {

    setTimeout(() => {

      const MultiplyArr = arr.map((elem) => elem * 2);

      output.textContent = MultiplyArr.join(",");

    }, 2000);

  })

  .catch((error) => console.log(error));





