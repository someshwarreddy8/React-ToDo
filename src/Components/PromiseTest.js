
const prom = new Promise((resolve, reject) => {
    const age = 20;
    if (age >= 21) {
        resolve("eligible");

    } else {
        reject("not eligible");
    }
});

console.log(prom.then(data => console.log(data)).catch(err => console.log(err)));

