//Create a function(s) that fulfills array with 10 random integer values and returns a multiply of 3 greatest values.

function randomIntMultiply() {
    const array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    const maxMultiply = Math.max(...array) * 3;
    return (maxMultiply);
}

console.log(randomIntMultiply());