var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var heading = "Typescript Types !!!";
var hea = document.querySelector('h1');
hea.textContent = heading;
// using let type of string
var name1 = "nimisha";
var sen = "my name  is ".concat(name1, " \nand learning TypeScript");
var para = document.getElementById('p1');
para.textContent = sen;
//other types are
var ls1 = [1, 2, 3, 4]; // list of mubers
var ls2 = [1, 2, 3, 4]; // array of numbers
var per1 = ['nimi', 22, true]; //tuples are specified
var para1 = document.getElementById('p2');
para1.textContent = per1;
//union array
var arr1 = ['nimisha', 21, true];
arr1[0] = 2;
console.log(arr1);
//Enum type
var color;
(function (color) {
    color["red"] = "rose";
    color["green"] = "leafs";
    color["blue"] = "blueberries";
})(color || (color = {}));
;
var c = color.green; // enum will give sequence value
var para2 = document.getElementById('p3');
para2.textContent = "green colour are in ".concat(c);
//type inference
var a; // any type
a = 10; // we can assign boolean value next as well
a = true;
//functions
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(5, 29)); //add(5,"10"); string not assign to number
var para3 = document.getElementById('p4');
para3.textContent = add(20);
var para4 = document.getElementById('p5');
//classs and acess modifiers
var employee = /** @class */ (function () {
    function employee(name) {
        this.empname = name;
    }
    employee.prototype.greet = function () {
        para4.textContent = "good to see you ".concat(this.empname);
    };
    return employee;
}());
var em1 = new employee('priya');
console.log(em1.empname);
em1.greet();
//inhertance of above class
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(mgname) {
        return _super.call(this, mgname) || this;
    }
    manager.prototype.delgate = function () {
        console.log('manger taks');
    };
    return manager;
}(employee));
var m1 = new manager('anju');
m1.delgate();
m1.greet();
console.log(m1.empname);
