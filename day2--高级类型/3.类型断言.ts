// 获取DOM元素 <img class="img"/>
const imgEl = document.querySelector("img")   // HTMLImageElement | null
if (imgEl !== null) { // 类型缩小
  imgEl.src = "xxx"
  imgEl.alt = "yyy"
}

// 使用类型断言
const imgEl1 = document.querySelector('.img') as HTMLImageElement  //HTMLElement 不会知道是img元素
imgEl1.src = 'xxx'
imgEl1.alt = 'yyy'


// 类型断言的规则: 断言只能断言成更加具体的类型, 或者 不太具体(any/unknown) 类型
// TS类型检测来说是正确的, 但是这个代码本身不太正确
const age: number = 25
const age1 = age as any  // 先断言成 any 类型, 然后再断言成 string 类型
const age2 = age1 as string
console.log(age2.split(''))


// 非空类型断言
// 定义接口
interface IPerson {
  name: string
  age: number
  friend?: {
    name: string
  }
}
const info: IPerson = {
  name: 'why',
  age: 18
}
// 访问属性: 可选链: ?.
console.log(info.friend?.name)

// 属性赋值:
// 解决方案一: 类型缩小
if (info.friend) {
  info.friend.name = 'kobe'
}

// 解决方案二: 非空类型断言(有点危险, 只有确保friend一定有值的情况, 才能使用)
info.friend!.name = 'james'

export {}
