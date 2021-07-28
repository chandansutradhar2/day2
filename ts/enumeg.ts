interface User {
  firstName: string;
  lastName: string;
  role: string;
}
// admin, instructor, student
class SignIn {
  doLogin(email: string, password: string) {
    //todo code to login...
    let userObj: User = {
      firstName: "chandan",
      lastName: "naresh",
      role: "admin",
    };
    return userObj;
  }

  redirect() {}

  showError() {}
}

class SignUp {
  doRegister() {}

  showError() {}

  showLoading() {}
}

const obj = new SignIn();
let result = obj.doLogin("chandan@gmail.com", "Passw0rd");
console.log(result);
