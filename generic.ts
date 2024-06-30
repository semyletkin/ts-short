const arrayOfNumbers: Array<number> = [1,1,2,3,5]
const arrayOfStrings: Array<string> = ['str1','str2']

// <T> T[]  -  динамический тип с помощью которого могут быть обработаны массивы с разными типами данных
function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)
