credential = {
  email: "",
  password: "",
};

function validateEmail() {
  Math.min(1, 2, 3, 4, 5, 7, 9);

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
  let user = makeAPIRequest();
  console.log(user);
}

function makeAPIRequest() {
  var options = {
    hostname: "https://hansenacademy.myabsorb.com",
    path: "/api/Rest/v1/Authenticate",
    method: "POST",
    body: {
      UserName: credential.email,
      Password: credential.password,
      privateKey: "c05e8e12-eb94-4766-80d4-1c59440d1072",
    },
    headers: {
      "Content-Type": "application/json",
    },
  };

  var req = https.request(options, (res) => {
    console.log("statusCode:", res.statusCode);
    console.log("headers:", res.headers);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (e) => {
    console.error(e);
  });

  req.write(postData);
  req.end();
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
