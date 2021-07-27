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

  let students = [
    { name: "chandan", score: 70 },
    { name: "samaya", score: 40 },
    { name: "ranjan", score: 50 },
  ];

  //sorting on objects with number
  //   students.sort((a, b) => {
  //     return a.score - b.score;
  //   });

  //sorting on object with string
  students.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });

  console.log(students);
}
//dateType();
arrayWork();
//checkOperator();
