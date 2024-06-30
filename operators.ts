interface Person {
    name: string
    age: number
}

// Перечисление ключей интерфейса с помощью - keyof
type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'
// key = 'wrong type' // ошибка

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

// Exclude - Исключить определенные ключи (применить все кроме перечисленных типов)
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>
// Pick - Выбрать определенные ключи (применить только перечисленные типы)
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>
