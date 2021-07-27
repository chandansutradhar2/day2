function checkOperator() {
  let x = "chandan";

  x !== "chandan" ? console.log("true") : console.log("false");
}

function dateType() {
  const d = new Date();
  //console.log(d);

  let d1 = new Date();

  console.log(d1.toString());
  console.log(d1.toDateString());
  console.log(d1.toISOString());
  console.log(d1.toUTCString());
}


function arrayWork() {
  //declration of arrays
  let fruits1 = new Array("apple", "mango", "pear");
  let fruits = ["apple", "mango", "pear"];
  //console.log(typeof fruits, typeof fruits1);
  //adding values to array
  let marks = [];
  marks.push([1, 2, 3, 4]);
  console.log(marks);
  fruits.push("banana");
  fruits.push("grape");
  //   console.log(fruits);
  //   console.log(fruits.pop());
  console.log(fruits);
  fruits.pop();
  console.log(fruits);
  //manipulating arrays
  //fruits[1] = "orange";
  fruits.splice(1, 0, "orange");
  console.log(fruits);
  //array filtering n sorting
  //findIndex
  let idx = fruits.findIndex((fruit) => {
    console.log(fruit);
    //let s = new String(fruit);
    //return s.includes("b");
    return fruit.includes("b");
  });

  fruits.sort();

  console.log(fruits, idx);


  const students =new Array( 
    { name: "chandan", score: 70 },
    { name: "samaya", score: 40 },
    { name: "ranjan", score: 50 },
  );

  //sorting on objects with number
  //   students.sort((a, b) => {
  //     return a.score - b.score;
  //   });
    //adding new item to array
    //in js we declare object with parenthesis
    students.push({name:'harsha',score:87});
    
  //sorting on object with string
  // students.sort((a, b) => {
  //   return a.name > b.name ? 1 : -1;
  // });

  console.log(students);
}

function constDemo() {
//  'use strict'
  // const students = ["chandan", "ranjan", "samaya"];
  // students.push("harsha");
  // console.log(students);
  // students = new Array("vinod", "aishwarya");

  //use case:
  //when we have static data which shouldnt change during runtime
 const apiEndpoint =
    "api.openweathermap.org/data/2.5/weather?";
  const apiKey = "6ed8cf0cef974d3e2246675ff6340b96";

  //TODO add axios library to fetch weather api
 // apiKey = "some new value";
  
  
}

//function example - part 1: declaration
//function overloading not supported OOB in javascript
//always define argument with name while declaring function
function generateCar(color) {
  console.log('generateCar function invoked with car color',color);
}

//function with self invocation
function showTimer() {
  let cnt = 0;
  setInterval(() => {
    cnt++;
    console.log('you have been logged in since ' + cnt * 10 + 'seconds');
    console.log(`you have been logged in since ${cnt * 10} seconds`);
    document.getElementById('msg').innerHTML = cnt * 10;
  }, 10000);
}

//part 2: invocation
generateCar('red'); //pass parameter while invocation.
showTimer();
//dateType();
//arrayWork();
//constDemo();
//checkOperator();
