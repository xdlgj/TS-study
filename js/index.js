"use strict";
//ts 编译成 ES5， 不支持ES6
//主要数据类型
/**
 * 1、布尔类型（boolean）
 * 2、数字类型（number）
 * 3、字符串类型（string）
 * 4、数组类型（array）
 * 5、元祖类型（tuple）
 * 6、枚举类型（enum）
 * 7、任意类型（any）
 * 8、null 和 undefined
 * 9、void类型
 * 10、never类型
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
console.log(typeof arr2);
//元祖类型
var tup = ['1', 2];
console.log(typeof tup);
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
//任意类型
var num = 123;
num = 'hello';
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
//never类型：是其他类型（包括null和undefined）的子类型。代表不会出现的值。这意味着生命never的变量只能被never类型所赋值
// var aa:never;
// aa = (() => {
//   throw new Error('错误')
// })()
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
