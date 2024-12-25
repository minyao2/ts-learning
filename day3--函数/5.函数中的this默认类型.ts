// 在没有对TS进行特殊配置的情况下，this默认是any类型

// 1.对象中函数中的this
const obj= {
    name: 'why',
    eating(){
        // 默认情况下, this是any类型
        console.log(this.name)
    }
}
obj.eating()  //  'why'
// obj.eating.call({})

// 2.普通的函数
function eat(){
    // 默认情况下, this是any类型
    console.log(this.name)
}
eat()  // undefined 或 空字符串（取决于浏览器环境）


// 3.在设置配置选项(编译选项compilerOptions, noImplicitThis设置为true, 不允许模糊的this存在)
// 3.1 对象中的函数中的this
const obj1 = {
    name: 'why',
    studying: function (this: {}) {
        // 默认情况下, this是any类型
        console.log(this, 'studying')
    }
}
obj1.studying.call({})

// 3.2 普通的函数
function foo(this: { name: string }, info: { name: string }) {
    console.log(this, info)
}
foo.call({ name: 'why' }, { name: 'kobe' })


export {}
