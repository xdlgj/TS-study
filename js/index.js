"use strict";
//主要数据类型
/**
 * 1、布尔类型（boolean）
 * 2、数字类型（number）
 * 3、字符串类型（string）
 * 4、数组类型（array）
 * 5、元祖类型（tuple）
 * 6、枚举类型（enum）
 * 7、任意类型（any）
 * 8、unknown: 类型安全的any
 * 9、null 和 undefined
 * 10、void类型
 * 11、never类型
 * 12、字面量 let a: 10; a只能等于10
 * 13、object {}
 * 说明：当变量声明和赋值一起完成的时候数据类型可以省略
 */
//布尔类型（boolean） true false
var flag = true;
//数字类型, 整型和浮点型不进行区分
var a = 123;
//字符串类型
var str = 'this is ts';
console.log(str);
//数组类型
var arr = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4]; //范型
console.log(typeof arr2); // object
//元祖类型
var tup = ['1', 2];
console.log(typeof tup); // object
//枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
console.log(f);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 5] = "blue";
    Color[Color["orange"] = 6] = "orange";
})(Color || (Color = {}));
var c = Color.orange;
console.log(c); // 6
//任意类型，一个变量设置类型为any后相当于对该变量关闭TS的类型检测，不建议使用
//声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式any）
var num;
num = true;
var num22;
num22 = "hello";
console.log('num:', typeof num); //boolean
console.log('num22:', typeof num22); //string
//any和unknown的区别:
//any类型的变量可以赋值给任意变量
var aa;
aa = num;
// aa = num22 Type 'unknown' is not assignable to type 'string'
//解决办法一
if (typeof num22 === 'string') {
    aa = num22;
}
//解决办法二, 告诉解析器 num2为string，即使不是也无所谓
aa = num22;
aa = num22;
//null 和 undefined 其他（never类型）数据类型的子类型
var num2;
//console.log(num2) // 输出undefined 报错
var num3;
console.log(num3); //输出undefined 正确
//一个元素可能是number类型 可能是null 可能是undefined
var num4;
console.log(num4); //undefined
num4 = null;
//void类型： ts中的void表示没有任何类型，一般用于定义方法时候没有返回值
function run() {
    console.log('run');
}
run();
//never类型：是其他类型（包括null和undefined）的子类型。代表不会出现的值。这意味着声明 never的变量只能被never类型所赋值,  返回抛出异常
// var aa:never;
// aa = (() => {
//   throw new Error('错误')
// })()
//object {}用来指定对象中可以包含哪些属性
//语法：{属性名：属性值,属性名：属性值}
var obj;
//Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'.
//解决办法：age?:, 属性名后面添加问号表示属性是可以选择的
//[propName: string]: unknown 表示任意属性名为string，属性值为unknown的k-v
obj = { name: 'xdl' };
var obj2;
obj2 = { name: 'xdl', age: 3, gender: '男' };
var func;
func = function (n1, n2) {
    return n1 + n2;
};
var k;
/**
 * 函数
 */
//函数声明法
function run2() {
    return '123';
}
//匿名函数
var _ = function () {
    console.log('aa');
};
//可选参数 ？注意： 默认参数必须配置在参数的最后面
function getInfo(name, age) {
    if (age) {
        return name + " ---- " + age;
    }
    else {
        return name + "---\u4FDD\u5BC6";
    }
}
alert(getInfo('xdl'));
//默认参数
function getInfo2(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return name + " ---- " + age;
    }
    else {
        return name + "---\u4FDD\u5BC6";
    }
}
alert(getInfo2('xdl'));
//剩余参数, ...运算符的使用
function sum(a, b, c, d) {
    return a + b + c + d;
}
function sum2() {
    var res = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        res[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, res_1 = res; _a < res_1.length; _a++) {
        var val = res_1[_a];
        sum += val;
    }
    return sum;
}
alert(sum2(1, 2, 3, 4));
function getMessage(str) {
    if (typeof str === 'string') {
        return 'name: ' + str;
    }
    else {
        return 'age: ' + str;
    }
}
alert(getMessage('xdl'));
