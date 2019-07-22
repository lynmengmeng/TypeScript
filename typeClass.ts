//类  构造函数  类的继承
class Person {
    // constructor(name: string) { //构造函数，外部无法访问，只有在实例化时调用一次
    //     console.log("hhhh")
    //     this.name = name //实例化时必须给一个name
    // }
    // name;

    //等同于
    constructor(public name:string){ //public声明了一个name属性
        console.log("hhh")
    }

    eat() {
        console.log("im eating");
    }
}

// var p1 = new Person("tian");
// p1.name = "tianmeng";
// p1.eat();

//访问控制符 public公共的（默认的，内外都可访问）   private私有的（只有在类的内部可以访问）  protected受保护的（内部和子类可以访问，外部不行）


//extends声明一种继承关系
class Emloyee extends Person{
    constructor(name: string, code: string) {
        super(name); //子类的构造函数必须要调用父类的构造函数
        this.code = code;
        console.log("xixi")
    }
    code: string;

    work() {
        super.eat();
        this.doWork();

    }

    doWork(){
        console.log("i am working")
    }

}
var e1 = new Emloyee("name", "1");
e1.work();


//super  1.调父类的构造函数 2.调父类的其它方法

//接口  声明一些属性检查类型
interface Goodslist {
    content: string;
    num: number;
}

class tabel {
    constructor (public redtabel: Goodslist) {

    }
}
var tabel1 = new tabel({
    content: '12',
    num: 12
})


interface Animal {
    eat();
}
class Sheep implements Animal{ //implements 类必须实现接口的方法
    eat() {
        console.log("i eat grass")
    }
}


//模块 就是文件，一个文件就是一个模块 两个关键字 export 和import 导出和导入
//可以引入 属性 方法  类


//注解
//类型定义文件（*.d.ts） 比如需要用jQuery  来自github DefinitelyTypes  或者工具typings
