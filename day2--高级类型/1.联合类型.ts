let aa: number | string = 123;
aa = 'abc';
// 1.使用的时候要特别的小心,需要类型缩小
if(typeof aa === 'string') {
    console.log((aa as string).length);
} else {
    console.log(aa);
}


// 2.举个栗子: 打印id
function printID(id: number | string) {
    console.log('您的ID:', id)

    // 类型缩小
    if (typeof id === 'string') {
        console.log(id.length)
    } else {
        console.log(id)
    }
}

printID('abc')
printID(123)

export {}
