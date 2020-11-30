// int apple = 20
//变量

var apple = 20;
var orange = "橘子";

let lemon = "柠檬";
let banana =30;

//常量
const pear = 40;
//在js里面，一切都是对象
var apple1 = {}

console.log (typeof apple1)

var apple2 = Object.create({});//内置对象
console.log(typeof apple2 + "    apple2");

var apple3 = function bigApple(){  //函数定义
    console.log("this is apple3 big apple");
}

function smallApple(){ 
    console.log("this is small apple");
}

apple3()  //调用函数
//bigApple()
smallApple()


//匿名函数
var apple4 = function (){  
    console.log("this is apple3 big apple");
}

apple4()
// es6 箭头函数
var apple5 = () =>{
    console.log("this is arrow function")
}
apple5()

var apple6 = () =>console.log("this is arrow function")
apple6()
// 箭头函数嵌套
var apple7 = ()=>{
    return()=>{
        console.log("this is arrow function apple7");
    }
}
apple7()()

var apple7 = () =>{
    return()=>{
        return()=>{
            console.log("this is arrow function apple9");
        }
    }
}
apple7()()()

 var apple10 =(x,y)=>{
     console.log("this is apple10 ==" + (x + y)
     );
     return(x,y)=>{
         console.log("this is apple11 =="+ (x+y)
         );
     }
 }
apple10(4,5)(6,8)
 var apple12 =()=>console.log("10"); console.log("13")//当箭头函数只有一行时，箭头函克缩写
 apple12()

 function apple13(){
     var name = "苹果13";
     function apple13Son(){ //定义函数 
         console.log("this is apple 13 son")
     }
     apple13Son()//调用函数
     console.log("this is apple13")
     return{
         apple13Son1:apple13Son  //键值对 
     }
 }
 apple13().apple13Son1();

 var apple14 = function(){   //定义一个匿名函数
     console.log("this is apple14....")
     return 100;
 }()
// console.log(apple14)
//  apple14();