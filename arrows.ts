//箭头函数 匿名函数
var myArray = [1, 2, 3, 4, 5];

console.log(myArray.filter(value => value%2 == 0))

//消除this关键字
function getStock(name:string){
    this.name  = name;

    setInterval(function(){
        console.log(`name is : ${this.name}`);
    },1000);
}

var stock = new getStock("LU"); //name is:

// function getStock2(name:string) {
//     this.name = name;
//     setInterval(()=>{
//         console.log("name is :" + this.name);
//     }, 1000);
// }
//
// var stock2 = getStock2("hahha")
