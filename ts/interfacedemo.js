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
var ADDRESS_TYPE;
(function (ADDRESS_TYPE) {
    ADDRESS_TYPE["home"] = "home";
    ADDRESS_TYPE["office"] = "office";
    ADDRESS_TYPE["other"] = "other";
})(ADDRESS_TYPE || (ADDRESS_TYPE = {}));
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
    Customer.prototype.deliverShipment = function (address) {
        //check if it can be delivered or not
        var deliveryList = this.getAllDeliveryPoint();
        var result = deliveryList.findIndex(function (code) {
            return code == address.pincode;
        });
        console.log(result);
        switch (address.addressType) {
            case "home":
                console.log("Delivering to customer home");
                break;
            case "office":
                console.log("Delivering to customer office");
                break;
            case "other":
                console.log("Delivering to customer other address");
                break;
            default:
                console.log("Not sure where to deliver");
                break;
        }
    };
    Customer.prototype.isDeliverable = function () {
        //todo: communicate with RESTAPI to return true or false
    };
    Customer.prototype.getAllDeliveryPoint = function () {
        //code to fetch list from server
        var pincodes = [
            "401101",
            "401107",
            "401098",
            "847473",
            "766601",
            "049483",
        ];
        return pincodes;
        //TODO : fetch list from server - backend API
    };
    return Customer;
}());
var chandan = new Student();
chandan.printMarksheet();
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
    street: "PK Street",
    addressType: ADDRESS_TYPE.other
};
custObj.addAdress(add);
custObj.getAddress();
custObj.deliverShipment(add);
