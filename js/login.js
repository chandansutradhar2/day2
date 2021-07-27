credential = {
  email: "",
  password: "",
};

function validateEmail() {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!regex.test(document.getElementById("email").value)) {
    document.getElementById("err_email").style.display = "inline";
    document.getElementById("err_email").innerHTML = "Invalid Email Id";
  } else {
    document.getElementById("err_email").style.display = "none";
  }
}

function validatePassword() {}

function validate(elementId, span) {
  let val = document.getElementById(elementId).value;
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
