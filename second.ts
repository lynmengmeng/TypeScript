//参数新特性
//指定参数类型
var myname: string = "tianmeng";

// function test(): void {
//      return ""  指定void表示不返回参数
// }

function testtwo(name: string): string {
    return "test"
}

//默认参数  默认参数放后面
function testthree(a: string, b: string, c: string = "tianmeng") {
    console.log(a);
    console.log(b);
    console.log(c);
}
testthree("x", "y", "z")
testthree("q", "p");

//可选参数  可选参数放必选参数后面
function testfour(a: string, b?: string, c: string = "tianmeng") {
    console.log(a);
    console.log(b);
    console.log(c);
}
testfour("x");


//重载
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

//断言   <类型>值   或者  值 as 类型     （类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的：）
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}

