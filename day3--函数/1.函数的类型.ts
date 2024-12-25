function add(x: number, y: number): number {
    return x + y
}

// 1. foo本身就是一个标识符，也会有自己的类型，类型是(x: number, y: number) => number  -->这就是函数的类型
const foo = (x: number, y: number) => {
    return x + y
}
// 2. 函数类型的表示方法
type FnType = (x: number, y: number) => number
const fn: FnType = (x, y) => {
    return x + y
}

// 3. 函数类型表达式
type CalcFn = (x: number, y: number) => number

function calc(fn: CalcFn) {
    const num1 = 1
    const num2 = 2
    return fn(num1, num2)
}

function add2(x: number, y: number): number {
    return x + y
}
calc(add2)
// 匿名函数
calc(function (x, y) {
    return x - y
})

// 4. TypeScript对于传入的函数类型的多余的参数会被忽略掉(the extra arguments are simply ignored.)
type FnType2 = (x: number, y: number) => number
function cacl1(fn: FnType2) {
    return fn(1, 2)
}
function add3(x: number): number {
    return x
}
cacl1(add3) // 3
// 5. TS对于很多类型的检测报不报错, 取决于它的内部规则
//    TS版本在不断更新: 在进行合理的类型检测的情况, 让ts同时更好用(好用和类型检测之间找到一个平衡)
//    举一个栗子:
interface IPerson {
    name: string
    age: number
}

const p = {
    name: 'why',
    age: 18,
    height: 1.88,
    address: '广州市'
}

const info: IPerson = p
// 这里会报错, 因为p中多了个height属性, 而IPerson中没有定义height属性，上面不会报错是因为没有新鲜感，
// const info1: IPerson = {
//     name: 'why',
//     age: 18,
//     height: 1.88,
//     address: '广州市'
// }

export {}
