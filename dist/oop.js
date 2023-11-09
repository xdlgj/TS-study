"use strict";
class Person {
    constructor() {
        //  实例属性，只能是类的实例进行访问
        this.name = "xdl";
        // 只读属性不能修改
        this.gender = "男";
    }
    sayHello() {
        console.log(this);
    }
    static sayHello() {
        console.log(this);
    }
}
Person.age = 18;
// 类属性只能是类才可以访问
Person.score = 100;
const persion = new Person();
persion.sayHello();
Person.sayHello();
console.log("name:", persion.name);
console.log("score:", Person.score);
