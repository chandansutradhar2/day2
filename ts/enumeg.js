var ROLE;
(function (ROLE) {
    ROLE["admin"] = "admin";
    ROLE["customer"] = "customer";
})(ROLE || (ROLE = {}));
// admin, instructor, student
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.prototype.login = function (email, password) {
        //todo code to login...
        var userObj = {
            firstName: "chandan",
            lastName: "naresh",
            role: ROLE.customer
        };
        return userObj;
    };
    Auth.prototype.redirect = function (role) {
        role == "admin" ? console.log('redirecting to admin console..') : console.log('redirecting to customer app');
    };
    Auth.prototype.showError = function () { };
    return Auth;
}());
var SignUp = /** @class */ (function () {
    function SignUp() {
    }
    SignUp.prototype.doRegister = function () { };
    SignUp.prototype.showError = function () { };
    SignUp.prototype.showLoading = function () { };
    return SignUp;
}());
var obj = new Auth();
var result = obj.login("chandan@gmail.com", "Passw0rd");
if (result) {
    obj.redirect(result.role);
}
