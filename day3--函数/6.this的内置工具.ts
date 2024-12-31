// 1.ThisParameterType: 获取某个类型中的this的类型
function foo(this: { name: string }, info: { name: string }) {
    console.log(this, info)
}
type FooType = typeof foo  // 获取foo函数的类型
type FooThisType = ThisParameterType<FooType> // { name: string }


// 2.OmitThisParameter：删除this参数类型，剩余函数类型
type pureFooType = OmitThisParameter<FooType> // (info: { name: string }) => void


// 3.ThisType: 用于绑定一个上下文的this
interface IState {
    name: string
    age: number
}
interface IStore {
    state: IState
    eating: () => void
    running: () => void
}
const store: IStore & ThisType<IState> = {    // IStore & ThisType<IState>  --> this 指向IState
    state: {
        name: 'why',
        age: 18
    },
    eating: function () {
        console.log(this.name)  // this指向state, 所以可以访问到name属性, 输出'why'
    },
    running: function () {
        console.log(this.name) // this指向state, 所以可以访问到name属性, 输出'why'
    }
}

store.eating.call(store.state)

export {}
