//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
console.log("================= Exercise #1 =================");

let person3 = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [
    {
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt",
    },
  ],
};

function favoriteFoodDishes(object) {
  for (let key in object) {
    console.log(`${key}:`);

    if (Array.isArray(object[key])) {
      for (const item of object[key]) {
        if (item instanceof Object) {
          for (const i in item) {
            console.log(` - ${i}:`);
            console.log(`  -- ${item[i]}`);
          }
        } else {
          console.log(` - ${item}`);
        }
      }
    } else {
      console.log(` - ${object[key]}`);
    }
  }
}

favoriteFoodDishes(person3);

// ================= Exercise #1 OUTPUT =================
// pizza:
//  - Deep Dish
//  - South Side Thin Crust
// tacos:
//  - Anything not from Taco bell
// burgers:
//  - Portillos Burgers
// ice_cream:
//  - Chocolate
//  - Vanilla
//  - Oreo
// shakes:
//  - oberwise:
//   -- Chocolate
//  - dunkin:
//   -- Vanilla
//  - culvers:
//   -- All of them
//  - mcDonalds:
//   -- Sham-rock-shake
//  - cupids_candies:
//   -- Chocolate Malt

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/
console.log("================= Exercise #2 =================");

class Person {
  constructor(nameP, age) {
    this.nameP = nameP;
    this.age = age;
  }
  printInfo = () => `Person's name: ${this.nameP} \nPerson's age: ${this.age}`;

  addAge = () => this.age++;
  addAge2 = (num) => {
    num + this.age;
    console.log(num);
    console.log(this.age);
  };
}

let chandler = new Person("Chandler", 30);
let monica = new Person("Monica", 29);
console.log(chandler.printInfo());
console.log(monica.printInfo());

monica.addAge();
monica.addAge();
monica.addAge();
console.log(monica.printInfo());

// ================= Exercise #2 OUTPUT=================
// Person's name: Chandler
// Person's age: 30
// Person's name: Monica
// Person's age: 29
// Person's name: Monica
// Person's age: 32

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
console.log("================= Exercise #3 =================");

function lengthGreat(string) {
  return new Promise((resolve, reject) => {
    if (string.length > 10) {
      resolve("Big word");
    } else {
      reject("Small Number");
    }
  });
}

// lengthGreat("Length of this string is greater than 10")
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

// lengthGreat("Short")
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

// ASYNC
async function lengthGreat_async(string) {
  try {
    const asyncLengthGreat = await lengthGreat(string);
    console.log(asyncLengthGreat);

    return asyncLengthGreat;
  } catch (error) {
    console.log(error);
  }
}

lengthGreat_async("Length of this string is greater than 10");
lengthGreat_async("Short");

// ================= Exercise #3 OUTPUT =================
// Big word
// Small Number

// CODEWARS ////////////////////////////////////////////////////////////////////

console.log("================= CODEWARS #1 =================");
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
  let result = 0;
  let temp = {};
  //   { '1': 2, '2': 2, '3': 2, '4': 2, '5': 3, '20': 2, '-1': 2, '-2': 2 }

  for (const number of A) {
    if (temp[number]) {
      temp[number] += 1;
    } else {
      temp[number] = 1;
    }
  }

  for (const num in temp) {
    if (temp[num] % 2 == 1) {
      result = num;
    }
  }

  return Number(result);
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // -> 5

console.log("================= CODEWARS #2 =================");
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
  let count = 0;
  let arrayNum = num.toString().split("");

  while (arrayNum.length > 1) {
    arrayNum = arrayNum
      .reduce((acc, cur) => acc * cur)
      .toString()
      .split("");
    count++;
  }

  return count;
}
