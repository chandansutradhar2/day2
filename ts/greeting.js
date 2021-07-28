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
    var products;
}
var obj = new Greeting();
console.log(obj.wish("night"));
obj.showType(null);
