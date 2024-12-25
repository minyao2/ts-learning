// 一 函数的调用签名
// 1.函数类型的表达式
type FnType = (a: number, b: string) => boolean

// 2.函数的调用签名（从对象的角度来看这个函数，可以有其他的一些属性）
interface IFnType {
    name: string
    // 调用签名, 函数可以调用
    (a: number, b: string): boolean
}

const fn: IFnType = (a, b) => {
    return true
}
fn.name = 'test'
fn(1, '2')

// 开发中如何选择:
// 1.如果只是描述函数类型本身(函数可以被调用), 使用函数类型表达式(Function Type Expressions)
// 2.如果在描述函数作为对象可以被调用, 同时也有其他属性时, 使用函数调用签名(Call Signatures)


// 二 函数的构造签名
// 1.函数的构造签名描述了函数可以被new调用, 并且可以返回一个实例
interface IConstructorFnType {
    new (): Person
}
function createFn(fn: IConstructorFnType) {
    return new fn()
}
class Person {}
createFn(Person)

export {}
