//函数新特性
//1——Rest and Spread操作符 声明任意数量的方法参数
// function func1(...args) {
//     args.forEach(function (arg) {
//         console.log(arg);
//     })
// }
// func1(1, 2, 3);
//
// func1(7, 8, 9, 10, 11);
//
// //反过来使用
// function func2(a, b, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
//
// var args1 = [1, 2]
// func2(...args1)
// var args2 = [7, 8, 9, 10, 11]
// func2(...args2)

//2——generator *声明 控制函数的执行过程 手工暂停和恢复代码执行  适合场景？
// function* doSomething() {
//     console.log("start");
//     yield;
//     console.log("finish")
// }

//doSomething()这样不起任何作用  需要将这个方法声明成一个变量

// var func1 = doSomething();
// func1.next();
// func1.next();
//
//
// function* getStockPrice(stock) {
//     console.log(stock)
//     while (true) {
//         yield Math.random()*100;
//     }
// }
// var priceGenerator = getStockPrice("IBM");
// var limitPrice = 15;
// var price = 100;
// while (price>limitPrice){
//     price = priceGenerator.next().value;
//     console.log(`the generator return ${price}`)
// }
// console.log(`buying at ${price}`)

//3——destructuring   析构表达式 初始化变量，传参结合rest

//使用对象
function getStock() {
    return {
        code: "IBM",
        price : 100,
        date: {
            date1: 23,
            date2: 30
        }
    }
}

// var {code, price} = getStock();  //属性名要一致，跟取值顺序无关，对应属性值
// var {code: codex, price} = getStock(); //使用：来取别名
var {date: {date2: hhhh}} = getStock(); //嵌套取值
console.log(hhhh)

//使用数组
var array1 = [1, 2, 3, 4];
var [num1, num2, ...others] = array1; //取值对应下标




