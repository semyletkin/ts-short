// tsc types.ts - консольная команда чтобы скомпилировать ts файл в js, tsc (тайпскрипт компилятор) - в консоле появляется после глобально установленного пакета (npm install -g typescript)
// node types.js - запустить скомпилированый файл

// Types:

// Boolean
const isFetching: boolean = true
const isLoading: boolean = false

// Number
const int: number = 42
const float: number = 4.2
const num: number = 3e10

// String
const message: string = 'Hello'

// Array

// Simple
// Массив чисел
const numberArray: number[] = [1,1,2,3,5,8,13]
// Массив строк
const words: string[] = ['word1', 'word2']

// Generic
// Массив чисел
const numberArray2: Array<number> = [1,1,2,3,5,8,13]

// Tuple
// Массив чисел и строк
const contact: [string, number] = ['name', 123]

// Any (позволяет определить любой тип без ошибок)
let variable: any = 42
variable = 'string'
variable = []


// Типы в функциях

// sayMyName(name: string) - тип параметра, : void - тип возвращаемого значения (void пустота)
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('name')


// Never
// Первый случай использования - функция прерывается и не доходит до конца
function throwError(message: string): never {
    throw new Error(message)
}

// Второй случай использования - функция не доходит до конца из за вечного цикла
// function infinite(): never {
//     while (true) {}
// }


// Type - создание собственных типов через алиас
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

// Так же есть типы null и undefined, используются как дефолтные (но возвращаемое пустое значение функций нужно использовать - void)
type SomeType = string | null | undefined
