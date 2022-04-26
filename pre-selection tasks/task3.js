//Define an object happiness within 5 properties. 
//Each property should have default integer value, representing its priority. 
//Then create a function that returns a list of property names sorted by priority (highest is on top).

const happiness = {
    "health": 1,
    "related people": 2,
    "hobbies": 4,
    "work": 3,
    "material goods": 5
};

function happinessPriority() {
    sortedObject = Object.keys(happiness)
        .sort(function (a, b) {
            return happiness[a] - happiness[b]
        });
    return sortedObject;
}

console.log(happinessPriority());