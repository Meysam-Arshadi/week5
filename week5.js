// // // // // function isEven(num) {
// // // // //   return num % 2 === 0;
// // // // // }

// // // // // console.log(isEven(13));

// // // // // function moreThanSixGoals(a, b) {
// // // // //   return a + b > 6;
// // // // // }
// // // // // console.log(moreThanSixGoals(5, 2));

// // // // // let myMood = true;

// // // // // function myMode(mode) {
// // // // //   if (mode === "happy") {
// // // // //     return "Good job, you're doing great!";
// // // // //   } else if (mode === "sad") {
// // // // //     return "Every cloud has a silver lining";
// // // // //   } else if (typeof mode === "number") {
// // // // //     return "Beep beep boop";
// // // // //   } else {
// // // // //     return "I am sorry, I'm still learning about feelings!";
// // // // //   }
// // // // // }

// // // // // console.log(myMode(9));

// // // // // function userNameChecker(userName, userType) {
// // // // //   if (userName === "admin" || userType === "manager") {
// // // // //     return "username valid";
// // // // //   }
// // // // //   if (
// // // // //     userName.charAt(-1) === userName.charAt(-1).toUpperCase() &&
// // // // //     userName.length > 4 &&
// // // // //     userName.length < 10
// // // // //   ) {
// // // // //     return "Username Valid";
// // // // //   } else {
// // // // //     return "Not valid";
// // // // //   }
// // // // // }

// // // // // console.log(userNameChecker("SajhU", "Sa"));

// // // // // function putNamesTogether(firstName, secondName) {
// // // // //   return firstName + secondName;
// // // // // }
// // // // // console.log(putNamesTogether("Sahar", " Khanoom"));

// // // // // function sayHello(user) {
// // // // //   console.log(`Hello ${user}`);
// // // // // }

// // // // // sayHello("meysam"); //no value for user param

// // // // // let fruits = ["orange", "banana", "apple", "mango"];

// // // // // fruits[2] = "peach"; //changes existing value
// // // // // fruits[4] = "strawberry"; //adds new value

// // // // // console.log(fruits); //what will this output?

// // // // // let fruits = [];
// // // // // console.log(fruits.length); //outputs?
// // // // // fruits = ["orange", "banana", "apple", "mango"];
// // // // // console.log(fruits.length); //outputs?

// // // // // fruits[4] = "strawberry";
// // // // // console.log(fruits.length); //outputs?

// // // // // const fruits = ["banana", "apple", "strawberry", "kiwi", "fig", "orange"];
// // // // // console.log(fruits[2], fruits[3], fruits[4]);
// // // // // console.log(fruits[fruits.length - 1]);

// // // // let myArray = ["study", "clean", "shop", "sleep"];

// // // // function toDoList() {
// // // //   return "Don't forget to " + myArray[myArray.length - 1];
// // // // }

// // // // console.log(toDoList());

// // // // // ------------------------

// // // // let tasks = ["study", "coding", "reading", "playstation", "eating"];

// // // // function randomTask(myArr) {
// // // //   const randomNumber = Math.random() * myArr.length;
// // // //   //   console.log("randomNumber", randomNumber); //2.4810389389479823
// // // //   // const wholeRandom = Math.floor(randomNumber)
// // // //   const wholeRandom = ~~randomNumber;
// // // //   //   console.log("wholeRandom", wholeRandom);
// // // //   const task = myArr[wholeRandom];
// // // //   return task;
// // // // }
// // // // randomTask(tasks);

// // // // function sumN(n) {
// // // //   let sum = 0;
// // // //   let i = 0;
// // // //   while (i < n) {
// // // //     sum += i;
// // // //     i++;
// // // //   }
// // // //   return sum;
// // // // }
// // // // console.log(sumN(5));

// // // const stocks = ["aapl", "msft", "amzn", "googl", "tsla"];

// // // function showStocks(arr) {
// // //   if (arr.length === 0) {
// // //     return "Empty portfolio";
// // //   } else {
// // //     let i = 0;
// // //     while (i < arr.length) {
// // //       console.log(arr[i].toUpperCase());
// // //       i++;
// // //     }
// // //   }
// // // }

// // // showStocks(stocks);
// // // for (let i = 0; i < 3; i++) {
// // //   console.log(i);
// // // }

// // // function sumN(n) {
// // //   let sum = 0;
// // //   for (let i = 0; i < n; i++) sum += i;
// // //   return sum;
// // // }
// // // console.log(sumN(5));
// // // sum += i;

// // // const stocks = ["aapl", "msft", "amzn", "googl", "tsla"];

// // // function showStocks(arr) {
// // //   if (arr.length === 0) {
// // //     return "Empty portfolio";
// // //   } else {
// // //     for (let items of stocks)
// // //     console.log((items.addS()).toUpperCase());
// // //   }
// // // }

// // // showStocks(stocks);

// // // function addS()

// // const closingPricesLast5Days = [
// //   [179.19, 180.33, 176.28, 175.64, 172.99], // AAPL
// //   [340.69, 342.45, 334.69, 333.2, 327.29], // MSFT
// //   [3384.44, 3393.39, 3421.37, 3420.74, 3408.34], // AMZN
// //   [2951.88, 2958.13, 2938.33, 2928.3, 2869.45], // GOOGL
// //   [1101.3, 1093.94, 1067.0, 1008.87, 938.53], // TSLA
// // ];

// // // function calculateChange(prices) {
// // //   let myArr = [];
// // //   for (let x of prices) {
// // //     let firstDay = price[0];
// // //     let lastDay = price[x.length - 1];
// // //     let difference = lastDay - firstDay;
// // //     myArr.push(Number(difference.toFixed(2)));
// // //   }
// // //   return myArr;
// // // }
// // // calculateChange(closingPricesLast5Days);

// // // console.log(calculateChange(closingPricesLast5Days));

// // function calculateAverage(arr) {
// //   let sum = 0;
// //   for (let price of arr) {
// //     sum += price;
// //   }
// //   const average = sum / arr.length;
// //   return average;
// // }

// // function calculateAllAverages(myPortfolio) {
// //   const myArr = [];
// //   for (let stock of myPortfolio) {
// //     const average = calculateAverage(stock);
// //     const formattedAverage = Number(average.toFixed(2));
// //     myArr.push(formattedAverage);
// //   }
// //   return myArr;
// // }
// // const result = calculateAllAverages(closingPricesLast5Days);
// // console.log("🐙 ~ result", result);

// // let todo = ["order dog food", "do the dishes"];

// // let myArray = todo.push("clean bedroom");
// // console.log(todo);

// // let mySecondArray = todo.unshift("pay council tax");
// // console.log(todo);

// // let removeElement = todo.splice(1, 1);
// // console.log(todo);

// // let removeAndAdd = todo.splice(1);
// // console.log(todo);

// let fruits = ["orange", "apple", "banana"];

// let replace = fruits.splice(1, 1, "kiwi", "mango");
// console.log(fruits);

// let addToStart = fruits.splice(0, 0, "peaches");
// console.log(fruits);

let aroundMe = ["Shayan", "Majid", "Sami", "Harry"];
console.log(aroundMe.sort());

function myFunction(name, arrayOfNames) {
  if (arrayOfNames.includes(name)) {
    return name + " is sitting at the table with " + arrayOfNames;
  } else {
    return name + " in not sitting with " + arrayOfNames;
  }
}

console.log(myFunction("meysam", aroundMe));
