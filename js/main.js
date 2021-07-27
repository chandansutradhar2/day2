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

dateType();
//checkOperator();
