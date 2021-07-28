// admin, instructor, student
var SignIn = /** @class */ (function () {
    function SignIn() {
    }
    SignIn.prototype.doLogin = function (email, password) {
        //todo code to login...
        var userObj = {
            firstName: "chandan",
            lastName: "naresh",
            role: "admin"
        };
        return userObj;
    };
    SignIn.prototype.redirect = function () { };
    SignIn.prototype.showError = function () { };
    return SignIn;
}());
var SignUp = /** @class */ (function () {
    function SignUp() {
    }
    SignUp.prototype.doRegister = function () { };
    SignUp.prototype.showError = function () { };
    SignUp.prototype.showLoading = function () { };
    return SignUp;
}());
var obj = new SignIn();
var result = obj.doLogin("chandan@gmail.com", "Passw0rd");
console.log(result);
