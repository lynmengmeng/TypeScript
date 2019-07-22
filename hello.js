// 指定数据类型
// stirng number boolean any(任意值)
//声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
//undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。
function sayHello(person) {
    return 'Hello, ' + person;
}
// sayHello(13); 会提示只能传参string
var myUser = "tianmeng";
var user = "Json";
// user = 13; 类型推断机制，赋值13时会报错
var alias = "xixi"; //类型不确定时 any
var somepeople; //联合类型  联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
var man = true;
//自定义类型，使用class或者interface
var Foods = /** @class */ (function () {
    function Foods() {
    }
    return Foods;
}());
var apple = new Foods();
apple.content = "apple";
apple.amount = 26;
var tom = {
    id: 12,
    name: 'Tom',
    age: 25
};
//定义数组
var febei = [1, 2, 3, 4];
var fibonacci = [1, '1', 2, 3, 5];
var fibonacc = [1, 1, 2, 3, 5]; //数组泛型
var fibonaccj = [1, 1, 2, 3, 5];
//定义函数
//在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
var mySum = function (x, y) {
    return x;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
