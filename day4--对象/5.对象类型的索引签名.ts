// 索引签名允许你通过任意字符串键访问对象的属性
// 但这并不意味着你可以通过数字索引访问对象的属性。如果你需要通过数字索引访问数据，请考虑使用数组或适当的数据结构。
interface MyArr {
  [index: number]: string;
}

const arr: MyArr = ["Echo", "James", "John", "Steven"];
console.log(arr[0]); // Echo
console.log(arr[1]); // James
console.log(arr[2]); // John
console.log(arr[3]); // Steven


interface ICollection {
    // 索引签名
    [index: string]: number

    length: number
  }

  const names: number[] = [111, 222, 333]
  console.log(names[0])
  console.log(names[1])
  console.log(names[2])

  function iteratorCollection(collection: ICollection) {
    console.log(collection[0])
    console.log(collection[1])
  }

  // iteratorCollection(names)
  // const tuple: [string, string] = ["why", "18"]
  // iteratorCollection(tuple)

  iteratorCollection({ name: 111, age: 18, length: 10 })  // 输出 undefined, undefined 如果是console.log(collection[name]) 输出111

  export {}
