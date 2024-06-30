// interface - типы для описания содержимого объектов или классов
interface Rect {
    // readonly - параметр не может быть изменен
    readonly id: string,
    // ? - не обязательный параметр
    color?: string,
    size: {
        width: number,
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30,
    },
    color: '#ccc'
}

// Дополнительные виды записи определения типа объекта
const rect3 = {} as Rect
const rect4 = <Rect>{}


// Наследование интерфейса

interface RectWithArea extends Rect {
    // Объект должен будет содержать все свойства из Rect, и функцию из RectWithArea которая должна вернуть тип Number
    getArea: () => number,
}

const rect5: RectWithArea = {
    id: '1234',
    size: {
        width: 20,
        height: 30,
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}


// Интерфейсы и Классы
// Часто в названиях интерфейсов используют первую букву I
interface IClock {
    time: Date,
    setTime(date: Date): void
}

// Класс реализует интерфейс через ключевое слово - implements
class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

// Интерфейс для объектов с динамическими ключами

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}


