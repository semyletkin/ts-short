// Enum, это перечисления, которые позволяют разработчику определить набор именованных констант
// Enum - вспомогательная сущьность которая позволяет лучше структурировать код если присутствуют однотипные элементы

enum Membership {
    Simple,
    Standard,
    Premium
}

// Если не присвоено значение вернет индекс
const membership  = Membership.Standard // 1
// По индексу можно получить ключ
const membershipReverse = Membership[2] // Premium

console.log(membership)
console.log(membershipReverse)

enum SocialMedia {
    FB = 'FB',
    IG = 'Instagram',
    X = 'X'
}

// Если присвоено значение вернет значение
const social = SocialMedia.IG // Instagram
console.log(social)
