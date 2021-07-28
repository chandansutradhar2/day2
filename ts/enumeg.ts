enum ROLE {
    "admin" = "admin",
    "customer"="customer"
}

interface User {
  firstName: string;
  lastName: string;
  role: ROLE;
}
// admin, instructor, student
class Auth {
 
    login(email: string, password: string) {
    //todo code to login...
    let userObj: User = {
      firstName: "chandan",
      lastName: "naresh",
      role: ROLE.customer,
    };
    return userObj;
  }

    redirect(role:any) {
      role=="admin"?console.log('redirecting to admin console..'):console.log('redirecting to customer app')
  }

  showError() {}
}

class SignUp {
  doRegister() {}

  showError() {}

  showLoading() {}
}

const obj = new Auth();
let result = obj.login("chandan@gmail.com", "Passw0rd");
if (result) {
    obj.redirect(result.role);
}
