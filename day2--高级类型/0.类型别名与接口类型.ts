// 1. 类型别名: type
type MyString = string
type IdType = number | string

type PointType = { x: number; y: number; z?: number }
function printCoordinate(point: PointType) {
    console.log(point.x, point.y, point.z)
}

// 2. 接口类型: interface
interface Person {
    name: string
    age: number
    c?: string
    sayHello(): void
}
interface Animal {
    name: string
    age: number
    eat(food: string): void
}
function greet(person: Person | Animal) {
    console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`)
    if ('sayHello' in person) {
        person.sayHello()
    } else {
        person.eat('meat')
    }
}

// 3. 别名与接口的区别
// a. 区别一: type类型使用范围更广（可以是任意类型）, 接口类型只能用来声明对象
type Name = string
interface Person {
    name: Name
}

// b. 区别二: 在声明对象时, interface可以多次声明, 而type只能声明一次（type不允许两个相同名称的别名同时存在）
interface Person {
    name: string
}
interface Person {
    age: number
}
type Animal1 = {
    name: string
}


// c. 区别三: interface支持继承的
interface Animal {
    eat(food: string): void
}
interface Dog extends Animal {
    bark(): void
}


// d. 区别四: interface可以被类实现
interface Person {
    name: string
}
class Student implements Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    }
}


export {}
