//1. Write a function, `filterNumbers()` that takes in an array of mixed data
//    types and returns an array of only the numbers type in ascencding order.
//
//     Example input: `["fred", true, 5, 3]`
//     Example output: `[3, 5]`
function filterNumbers(array){
  let numArray = array.filter((number)=> typeof number === "number");
  return numArray.sort();
}
console.log(filterNumbers(["fred", true, 5, 3]));

// Write a function, `getOlder()` that takes in array of dog objects and
//    increases the value of each object's `age` property by 1.
var dogs =  [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
]
function getOlder(array){
    let newDogs = [];
  array.forEach(function(dog){
      dog.age = dog.age + 1
      newDogs.push(dog)
  })
    return newDogs;
}

console.log(getOlder(dogs));
//     Example input:
//


//     Example output
//
//         [
//           {
//             name: "Chompers",
//             breed: "Pug",
//             age: 8
//           },
//           {
//             name: "Freddy",
//             breed: "Lab",
//             age: 5
//           },
//           {
//             name: "Mr. Pig",
//             breed: "Mastif",
//             age: 11
//           }
//         ]


//Write a function, `washCars()` that takes in a array of car objects and sets
//the boolean properties of `isDirty` to false.

  //  Example input:

  var cars =  [
        {
            make: 'Volvo',
            color: 'red',
            year: 1996,
            isDirty: true
        },
        {
            make: 'Toyota',
            color: 'black',
            year: 2004,
            isDirty: false
        },
        {
            make: 'Ford',
            color: 'white',
            year: 2007,
            isDirty: true
        }
    ]
function washCars(){

}