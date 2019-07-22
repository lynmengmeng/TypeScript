//循环语法 forEach() for in   for of
var myArray = [1, 2, 3, 4]
myArray.desc = "four number";
// myArray.forEach(value => console.log(value))  //打印的值  不支持break 忽略属性值

//打印的属性的名字 —— 键
for (var n in myArray) {
    // console.log(n);
    // console.log(myArray[n])
}

//for of 是打印的值  支持break 可以遍历数组 对象 字符串
for (var n of myArray) {
    if(n>2) break;
    console.log(n);
}

