// 1.string 是ts提供的字符串类型
// 2.String 是js中字符串的包装类型

// 标识符的类型注解
const name: string = 'kobe'  // 字符串类型
const age: number = 18       // 数字类型
const isTrue: boolean = true     // 布尔类型
const hhh: undefined = undefined // undefined类型表示未定义值
const nnn: null = null   // null类型表示空值
const xxx: any = 'xxx'  // any类型表示任意类型，可以赋值任意类型的值



// never类型表示永远不会有返回值的函数
const ccc: never = undefined as never
// 1. 封装框架/工具库的时候可以使用一下never
// 2. 其他时候在扩展工具的时候, 对于一些没有处理的case, 可以直接报错
function handleMessage(message: string | number | boolean) {
    switch (typeof message) {
        case 'string':
            console.log(message.length)
            break
        case 'number':
            console.log(message)
            break
        case 'boolean':
            console.log(Number(message))
            break
        default:
            const check: never = message
    }
}


// unknown类型默认情况下在上面进行任意的操作都是非法的
// 要求必须进行类型的校验(缩小), 才能根据缩小之后的类型, 进行对应的操作
const ddd: unknown = 'ddd'
if(typeof ddd === 'string') {
    console.log(ddd.toUpperCase())
}

// 数组类型 --> 在真实的开发中, 数组一般存放相同的类型, 不要存放不同的类型  string[] | Array<number>
const arr: number[] = [1, 2, 3]


// 元组类型 --> 元组类型可以将多个类型组合成一个类型, 并指定每个类型的数据结构
// 元组数据结构中可以存放不同的数据类型, 取出来的item也是有明确的类型
const tuple: [string, number, boolean] = ['hello', 123, true]
const [str, num, bool] = tuple
console.log(str, num, bool)


// 对象类型  type | interface
const obj: { name: string, age: number } = { name: 'kobe', age: 18 }
type Person = { name: string, age: number }
const person: Person = { name: 'kobe', age: 18 }
interface IPerson { name: string, age: number }
const person2: IPerson = { name: 'kobe', age: 18 }


// 函数类型
const fn: (a: number, b: number) => number = (a, b) => a + b
// 匿名函数是否需要添加类型注解呢? 最好不要添加类型注解，
// 函数作为参数传递时候，不会严格匹配参数类型，参数类型如果多了，会报错，参数类型少了，不会报错。
const names: string[] = ['abc', 'cba', 'nba']
names.forEach(function (item, index, arr) {
    console.log(item, index, arr)
})
// void类型表示没有返回值的函数
// 1.在TS中如果一个函数没有任何的返回值, 那么返回值的类型就是void类型
// 2.如果返回值是void类型, 那么我们也可以返回undefined(TS编译器允许这样做而已)
const yyy: void = undefined
function sum(num1: number, num2: number): void {
    console.log(num1 + num2)
    // return 123 错误的做法
}
// 了解即可: 基于上下文类型推导的函数中的返回值如果是void类型, 并且不强制要求不能返回任何的东西
names.forEach((item: string, index: number, arr: string[]) => {
    console.log(item)
    return 123
})


// 枚举类型
enum Direction {
    Left = 1,
    Right = 2,
    Top = 3,
    Bottom = 4
}
let dire1: Direction = Direction.Left  // 1
// let dire2: Direction = Direction[2]    // Left


export {}
