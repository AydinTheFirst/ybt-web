// const ile değişken tanımlama
// const ile tanımlanan değişkenlerin değeri değiştirilemez
const metin = "Bu bir metindir"; // string
const sayi = 1; // number
const dogru = true; // boolean
const yanlis = false; // boolean
const dizi = [1, 2, 3]; // array
const obje = { key: "value" }; // object

// let ile değişken tanımlama
// let ile tanımlanan değişkenlerin değeri değiştirilebilir
let degisken; // değişken tanımladık ama değer atamadık
degisken = 1; // number
degisken = "Bu bir metindir"; // string
degisken = true; // boolean
degisken = false; // boolean
degisken = [1, 2, 3]; // array
degisken = { key: "value" }; // object

// tanımlanan değişkenin türünü öğrenme
console.log(typeof metin); // string
console.log(typeof sayi); // number
console.log(typeof dogru); // boolean
console.log(typeof yanlis); // boolean
console.log(typeof dizi); // object
console.log(typeof obje); // object
console.log(typeof degisken); // object

// tanımlanan değişkeni kullanma
console.log(metin); // Bu bir metindir
console.log(sayi); // 1
console.log(dogru); // true
console.log(yanlis); // false
console.log(dizi); // [1, 2, 3]
console.log(obje); // { key: "value" }
