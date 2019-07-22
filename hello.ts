// 指定数据类型
// stirng number boolean any(任意值)
//声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
//undefined 类型的变量只能被赋值为 undefined，null 类型的变量只能被赋值为 null。

function sayHello(person: string) {
    return 'Hello, ' + person;
}
// sayHello(13); 会提示只能传参string

let myUser:string = "tianmeng"
let user = "Json";
// user = 13; 类型推断机制，赋值13时会报错

let alias:any = "xixi"; //类型不确定时 any

let somepeople: number|string; //联合类型  联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

let man: boolean = true;

//自定义类型，使用class或者interface
class Foods {
    content: string;
    amount: number;
}
var apple: Foods = new Foods();
apple.content = "apple";
apple.amount = 26;

interface Person {   //定义对象的类型
    readonly id: number;  //只读属性  只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
    name: string;
    age?: number; //可选属性
    [propName: string]: any;  //任意属性  一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
}
let tom: Person = {
    id: 12,
    name: 'Tom',
    age: 25
};



//定义数组
let febei: number[] = [1, 2, 3, 4];

let fibonacci: (number|string)[] = [1, '1', 2, 3, 5];

let fibonacc: Array<number> = [1, 1, 2, 3, 5];  //数组泛型

interface NumberArray { //接口定义数组
    [index: number]: number;
}
let fibonaccj: NumberArray = [1, 1, 2, 3, 5];

//定义函数
//在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
let mySum: (x:number, y:string) => number = function (x:number, y:string): number {
    return x
}


interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}


