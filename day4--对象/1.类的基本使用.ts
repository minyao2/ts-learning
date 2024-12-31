// 1. 类的基本使用
class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}
// 实例对象
const p = new Person('John', 30)
p.greet()



// 2. 成员修饰符
// public: 公有成员，可以在任何地方访问
// private: 私有成员，只能在类的内部访问
// protected: 受保护成员，只能在类的内部和子类中访问
// readonly: 只读成员，只能在类的内部修改，不能重新赋值
class Animal {
    readonly height: string
    public name: string
    private age: number
    protected color: string
    constructor(name: string, age: number, color: string) {
        this.name = name
        this.age = age
        this.color = color
    }
    private eat() {
        console.log(`${this.name} is eating.`)
    }
}

class Dog extends Animal {
    constructor(name: string, age: number, color: string) {
        super(name, age, color)
    }
    bark() {
        console.log(`${this.name} is barking.`)
        console.log(`My color is ${this.color}.`)
        // console.log(`My age is ${this.age}.`)  // 报错，age为私有成员，只能在类的内部访问, 子类不能访问父类的私有成员
    }
}

const dog = new Dog('Rufus', 5, 'brown')
// dog.height = '1.5m' // 报错，height为只读成员，只能在类的内部修改
// dog.eat()  // 报错，eat为私有成员，只能在类的内部访问
dog.bark()
// console.log(dog.age) // 报错，age为私有成员，只能在类的内部访问



// 3. getter和setter  --> 可以在这里面加拦截器
class Car {
    private _speed: number = 0
    constructor(public brand: string) {}
    get speed() {
        return this._speed
    }
    set speed(value: number) {
        if (value < 0) {
            console.log('Invalid speed value.')
            return
        }
        this._speed = value
    }
}

const car = new Car('BMW')
car.speed = 100
console.log(car.speed) // 100
car.speed = -100 // Invalid speed value.



// 4. 参数属性
class Person2 {
    // 语法糖 --> 等同于 name: string; age: number; 然后在构造函数中初始化
    constructor(public readonly name: string, public age: number) {}
}
const p2 = new Person2('John', 30)
console.log(p2.name) // John
// p2.name = 'Mary' // 报错，name为只读成员，只能在类的内部修改


export {}
