class Person {
    //  实例属性，只能是类的实例进行访问
    name: string = "xdl"
    static readonly age: number = 18
    // 类属性只能是类才可以访问
    static score: number = 100
    // 只读属性不能修改
    readonly gender: string = "男"

    sayHello (){
        console.log(this)
    }
    static sayHello() {
        console.log(this)
    }
}

const persion = new Person()
persion.sayHello()
Person.sayHello()

console.log("name:", persion.name)
console.log("score:", Person.score)