// Работаем с классами так же как в ES6

class Typescript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}

// Идентичная короткая запись класса Car
class Car2 {
    readonly numberOfWheels: number = 4

    // Если мы определили свойство как параметр конструктора (model). то компилятор самостоятельно создаст свойство в классе и в конструкторе присвоет в него значение
    constructor(readonly model: string) {}
}

// Модификаторы класса

class Animal {
    // protected - доступно только в классе в котором объявлено и в класе который наследует (не в созданном объекте а именно в классе)
    protected voice: string = ''

    // По дефолту исользуется public (если без модификатора)
    public color: string = 'black'

    constructor() {
        this.go()
    }

    // Так же можно использовать для методов
    // private - доступно только в классе в котором объявлено
    private go() {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)


// Абстрактные классы

// Абстрактный класс это оболочка и он не создается при компиляции в js
abstract class Component {
    // абстрактный метод - должен быть описан в классе который будет наследовать абстрактный класс
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('render')
    }
    info(): string {
        return 'info'
    }
}


