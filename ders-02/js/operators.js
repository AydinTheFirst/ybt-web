// aritmetik operatörler
let a = 10;
let b = 5;
let c = 2;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
console.log(a ** c); // 100
console.log(a + b * c); // 20
console.log((a + b) * c); // 30
console.log(++a); // 11
console.log(--a); // 10
console.log(a); // 10
console.log(b); // 5
console.log(c); // 2
console.log(a++); // 10
console.log(a); // 11

// karşılaştırma operatörleri
console.log(a === b); // false eşit mi
console.log(a !== b); // true eşit değil mi
console.log(a > b); // true büyük mü
console.log(a < b); // false küçük mü
console.log(a >= b); // true büyük eşit mi
console.log(a <= b); // false   küçük eşit mi

// mantıksal operatörler
console.log(a > b && a < c); // false ve
console.log(a > b || a < c); // true veya
console.log(!(a > b)); // false değil
console.log(!!(a > b)); // true değilin değili
console.log((a > b && a < c) || a === b); // false
console.log(a > b && (a < c || a === b)); // false
console.log((a > b && a < c) || a === b); // false

// atama operatörleri
let x = 1;
let y = 2;
let z = 3;

x += 1; // x = x + 1
y -= 1; // y = y - 1
z *= 2; // z = z * 2
console.log(x); // 2
console.log(y); // 1
console.log(z); // 6
