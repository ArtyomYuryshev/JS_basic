//Implement a function addWithDelay() which will work with parameters according to the conditions below:
// 1.If all parameters are positive numbers, it should return within 1000ms timeframe 
//a Promise containing a sum of all the numbers provided as parameters 
// 2.If any parameter is represented by a negative number, 
//function should return an error message “Error! Some parameter is a negative number!" using “reject()” option

const array = [0, 777, 1]; // edit the array if you want to check with negative

function addWithDelay(param) {
    const isNegativeExist = param.some(x => x < 0); //don't know why, but if I check that all the parameters are positive, it doesn't work.

    const sum = param.reduce((a, b) => a + b, 0);

    return new Promise(function (resolve, reject) {
        (!isNegativeExist) ? setTimeout(() => resolve(sum), 1000) : reject()
    })
        .then(result => console.log(result))
        .catch(function () {
            console.log("Error! Some parameter is a negative number!");
        });
}

addWithDelay(array);