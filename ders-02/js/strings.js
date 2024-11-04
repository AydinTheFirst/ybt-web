// strings (metinler) ile ilgili işlemler

// metin tanımlama
const metin = "Bu bir metindir"; // string

// metin uzunluğu
console.log(metin.length); // 15

// metin içindeki karakterler
console.log(metin[0]); // B

// metin içindeki karakterler
console.log(metin.charAt(0)); // B

// substring
console.log(metin.substring(0, 2)); // Bu

// toUpperCase
console.log(metin.toUpperCase()); // BU BIR METINDIR

// toLowerCase
console.log(metin.toLowerCase()); // bu bir metindir

// replace
console.log(metin.replace("Bu", "Şu")); // Şu bir metindir // Bu yerine Şu yazdırır

// split
console.log(metin.split(" ")); // ["Bu", "bir", "metindir"] // boşluklara göre ayırır

// trim
console.log("  Bu bir metindir  ".trim()); // Bu bir metindir // boşlukları temizler

// template literals
const ad = "John";
const yas = 30;

console.log(`Merhaba, benim adım ${ad} ve ben ${yas} yaşındayım.`); // Merhaba, benim adım John ve ben 30 yaşındayım.
