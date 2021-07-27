credential = {
  email: "",
  password: "",
};

function validate(elementId, span) {
  let val = document.getElementById(elementId).value;
  console.log(document.getElementById("login"));
  if (val.length <= 0) {
    document.getElementById(span).style.display = "inline";
    document.getElementById("login").disabled = true;
  } else {
    document.getElementById(span).style.display = "none";
    document.getElementById("login").disabled = false;
  }
}

function login() {
  credential.email = document.getElementById("email").value;
  credential.password = document.getElementById("password").value;

  console.log(credential);
  let user = mockAPIRequest(credential);
  console.log(user);
}

function mockAPIRequest(credentials) {
  return {
    fName: "chandan",
    lName: "naresh",
    hobbies: ["reading", "painting"],
    carOwned: "Tiago",
    age: 38,
    company: "Eduramp",
    address: "some address",
  };
}
