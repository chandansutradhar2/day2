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
    Customer.prototype.getAddress = function () {
        console.log("Addresses are", this.addresses);
    };
    Customer.prototype.checkout = function () {
        console.log("total Cart View:", this.cartItems);
    };
    return Customer;
}());
// const chandan = new Student();
// chandan.printMarksheet();
var custObj = new Customer();
custObj.addToCart({
    price: 899,
    productName: "Mobile X",
    qty: 89,
    inStock: true
});
custObj.checkout();
var add = {
    bldg: "15",
    city: "Thane",
    flatNo: "101",
    locality: "Mira Road",
    pincode: "401107",
    state: "MH",
    street: "PK Street"
};
custObj.addAdress(add);
custObj.getAddress();
