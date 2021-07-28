var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    Greeting.prototype.wish = function (timestamp) {
        return "Hey, Good " + timestamp;
    };
    Greeting.prototype.showType = function (sampleType) {
        var somevar = "";
        if (typeof sampleType == "string") {
            console.log("String type");
        }
        else if (typeof sampleType == "number") {
            console.log("Number type");
        }
        else if (typeof sampleType == "boolean") {
            console.log("Boolean type");
        }
        else {
            console.log(typeof sampleType);
        }
    };
    return Greeting;
}());
function arrayExample() {
    var products; //arrayname : datatype [];
    var marks;
    var databaseResponse;
    //init array
    //at declartion time
    var prdts = ["p1", "p2", "p3"];
    products = ["pr1", "pr2", "pr3"];
    products.push("p4");
    products.forEach(function (ele) {
        console.log(ele);
    });
    console.log(products.length);
}
// let obj = new Greeting();
// console.log(obj.wish("night"));
// obj.showType(null);
arrayExample();
