var Student = /** @class */ (function () {
    function Student() {
        this.marksheet = [
            {
                score: 87,
                subject: "English"
            },
            {
                score: 77,
                subject: "Marathi"
            },
            {
                score: 88,
                subject: "Science"
            },
        ];
    }
    Student.prototype.printMarksheet = function () {
        console.log("markseet: ", this.marksheet);
    };
    return Student;
}());
var Customer = /** @class */ (function () {
    function Customer() {
        this.addresses = [];
    }
    Customer.prototype.addAdress = function (address) {
        this.addresses.push(address);
    };
    Customer.prototype.addToCart = function (cartItem) {
        this.cartItems === undefined ? (this.cartItems = []) : null;
        this.cartItems.push(cartItem);
    };
    Customer.prototype.checkout = function () {
        console.log("total Cart View:", this.cartItems);
    };
    return Customer;
}());
// const chandan = new Student();
// chandan.printMarksheet();
var custObj = new Customer();
custObj.addToCart("Mobile X", 18500, 2);
custObj.addToCart("Mobile Y", 1800, 1);
custObj.addToCart("Mobile Z", 500, 5);
custObj.addToCart("Mobile A", 900, 19, false);
custObj.addToCart("Mobile B", 930, 6);
custObj.checkout();
