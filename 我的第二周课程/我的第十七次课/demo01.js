//第一题
var nut = function () {
    console.log("this is nut-1");
    return "this is nut-2";
}
nut()
//  结果是：this is nut-1

//第二题
var lichee = function () {
    console.log("this is lichee-1");
    return "this is lichee-2";
}()
//结果是：this is lichee-1 
var lichee = function () {
    console.log("this is lichee-1");
    return "this is lichee-2";
}
lichee()
//结果是：this is lichee-1

//第三题
var watermelon = function () {
    console.log("this is watermelon-1");
    return function pear() {
        console.log("this is pear-1");
    }
}
watermelon()()  //让pear 也能运行出来

//第四题
let banana = function banana() {
    console.log("this is banana-1");
    return () => function () { console.log("this is Anonymous function") }()
}()()
//结果是：this is banana-1
//       this is Anonymous function

// 第五题
let grape = function redGrape() {
    return {
        name: "my name is red grape",
        printMyName: () => {
            return () => {
                return Object.create({
                    name: "my name is grape nut",
                    printMyGrapeNut: function () {
                        console.log("this is MyGrapeNut");
                    }
                })
            }
        }
    }
}
grape().printMyName()().printMyGrapeNut()


// 第六题
var redPlum = () => {
    return 100
}
var bluePlum = (blue) => {
    return 200 * blue()
}
var plum = (plum2, plum1) => {
    let result = plum1(plum2)
    console.log(result);
}
plum(redPlum, bluePlum)
//结果是：20000

//第七题
let red = function redApple() {
    return () => {
        return function () {
            return () => {
                return function () {
                    console.log("this is red apple")
                    return "this is blue apple"
                }
            }
        }
    }
}
let apple = function redApple() {
    console.log(red()()()()())
}()


    //第八道题目
    (function (x) {
        x()
        console.log("this is yellow orange")
        console.log(function blueOrange() {
            console.log("this is blue orange")
        }())

    })(function () {
        console.log("this is orange")
        return "this is red orange"
    })
//结果是：this is orange
//       this is yellow orange
//       this is blue orange

//第九题
var blackOrange = () => function () {
    console.log("this is small orange")
    return function () {
        console.log("this is big orange")
    }()
}()
blackOrange()()

//第十题
let blackberry = function () {
    console.log("this is blackberry")
    return {
        smallBlackberry: () => {
            console.log("this is smallBlackberry")
            return () => {
                console.log("this is smallBlackberry nut ")
                return 9999
            }
        }
    }
}()
console.log(blackberry.smallBlackberry()())


//第十一题
function bigNut(func) {
    let smallNut = function (s) {
        s()
        console.log("this is small nut")
        return 200
    }
    let middleNut = function (m) {
        m()
        console.log("this is middle nut")
        return 300
    }
    return func(smallNut, middleNut)
}
function redNut(x, y) {
    function blueNut() {
        console.log("this is blueNut")
    }
    function yellowNut() {
        console.log("this is yellowNut")
    }
    return () => {
        console.log(x(blueNut) + y(yellowNut))
    }
}
bigNut(redNut)()

//第十二题
var haw = (x, y) => {
    return () => {
        x(y)
    }
}
function lichee(li) {
    console.log(li())
}
function nut() {
    console.log("this is nut");
    return "this is lichee"
}
haw(lichee, nut)()
