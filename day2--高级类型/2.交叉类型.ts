// 交叉类型: 两种(多种)类型要同时满足
type NewType = number & string // 没有意义，只是为了演示交叉类型

// 交叉类型一般是用于多个复杂类型的组合
interface IKun {
    name: string
    age: number
}
interface ICoder {
    name: string
    coding: () => void
}
type InfoType = IKun & ICoder
const info: InfoType = {
    name: 'why',
    age: 18,
    coding: function () {
        console.log('coding')
    }
}
