// 抽象类只有抽象方法，不能实例化，只能被继承
// 可以让子类实现抽象类中的抽象方法，从而实现多态
// 抽象方法必须出现在抽象类中, 类前面也需要加abstract
abstract class Animal {
  abstract makeSound(): string;
}

class Dog extends Animal {
  constructor(public name: string) {
    super()
  }
  makeSound() {
    return this.name + 'dog'
  }
}

class Cat extends Animal {
  constructor(public name: string) {
    super()
  }
  makeSound() {
    return this.name + 'cat'
  }
}

// 通用的函数
function getAnimalSound(animal: Animal) {
  return animal.makeSound()
}
const animal1 = new Dog('dog1')
const animal2 = new Cat('cat2')
// 抽象类不能被实例化
// const animal3 = new Animal() // 报错
getAnimalSound(animal1) // dog1dog
getAnimalSound(animal2) // cat2cat

