// 1.字面量类型的定义
const name = 'why'   // 'why' 是字面量类型

// 2.字面量类型联合起来
type Gender = '男' | '女'
const gender: Gender =  '男'// 栗子: 封装请求方法

type MethodType = 'get' | 'post'
function request(url: string, method: MethodType) {}

// 3.细节
const info = {
    url: 'xxxx',
    method: 'post'   // 注意: 这里的method是string类型
}
// 下面的做法是错误: info.method获取的是string类型
// request(info.url, info.method)
request(info.url, info.method as MethodType)
export {}
