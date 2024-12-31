interface IIndexType {
    [bbb: string]: number
}

// 类型不匹配：
// IIndexType 接口定义了一个对象类型的索引签名 [bbb: string]: number，表示该对象的所有字符串键对应的值必须是 number 类型。
// 然而，[1, 2, 3] 是一个数组（number[]），而不是一个符合 IIndexType 接口的对象。数组和具有字符串索引签名的对象在 TypeScript 中是不同的类型。
// 类型转换：
// 尽管 TypeScript 在某些情况下会自动将数字索引转换为字符串索引（例如 nums[1] 实际上被解释为 nums["1"]），但这并不能改变数组和对象之间的类型不匹配问题。
// const nums: IIndexType = [1,2,3]
// 通过数字类型访问索引的时候都会转化成string类型访问
// const a = nums["1"] // 类型为 number

const info: IIndexType = { name: 11, age: 18 }
const name = info['name']
console.log(name)

export {}
