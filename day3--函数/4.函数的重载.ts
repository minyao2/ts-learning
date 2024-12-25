// 1.TypeScript中函数的重载写法
// 1.1.先编写重载签名
function add(arg1: number, arg2: number): number
function add(arg1: string, arg2: string): string
// 1.2.编写通用的函数实现
function add(arg1: any, arg2: any): any {
    return arg1 + arg2
}

add(10, 20)
add('aaa', 'bbb')


// 栗子
// 1.函数的重载
function getLength(arg: string): number
function getLength(arg: any[]): number
function getLength(arg) {
  return arg.length
}
// 2.联合类型实现(可以使用联合类型实现的情况, 尽量使用联合类型)
function getLength1(arg: string | any[]) {
  return arg.length
}
// 3.对象类型
interface ILength {
  length: number
}
function getLength2(arg: ILength) {
  return arg.length
}
