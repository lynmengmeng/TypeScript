// 字符串新特性
//多行字符串
var content = `aaa
    bbb
    ccc`;
//字符串模板
var myname = "tianmeng";
var getName = function () {
    return "tianmeng";
}
console.log(`hello ${myname}`);
console.log(`hello ${getName()}`);
console.log(`<div>
    <span>${myname}</span>
    <span>${getName()}</span>
    <div>xxx</div>
    </div>`);

//自动拆分字符串
function test(template, name, age) {
    console.log(template)
    console.log(name)
    console.log(age)
}

var myname = "zhan liang"
var getAge = function () {
    return 18;
}
//使用字符串模板调用方法时不能写圆括号
test`hello my name is ${myname}, I'm ${getAge()}`




