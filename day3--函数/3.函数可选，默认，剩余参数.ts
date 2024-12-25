// 1.可选参数
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0)
}

console.log(add(1, 2)) // 3
console.log(add(1, 2, 3)) // 6
console.log(add(1, 2, undefined)) // 3

// 2.默认参数
function add2(a: number, b: number, c: number = 0) {
  return a + b + c
}

console.log(add2(1, 2)) // 3
console.log(add2(1, 2, 3)) // 6

// 3.剩余参数
function add3(...args: number[]) {
  return args.reduce((acc, cur) => acc + cur, 0)
}

console.log(add3(1, 2, 3)) // 6
console.log(add3(1, 2, 3, 4, 5)) // 15

export {}
