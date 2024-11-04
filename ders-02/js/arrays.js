// arrays (diziler) - array oluşturma listeler

const meyveler = ["Elma", "Armut", "Çilek"];

// index numarası ile erişim sağlama
// index numarası 0'dan başlar
const elma = meyveler[0]; // Elma
const armut = meyveler[1]; // Armut
const cilek = meyveler[2]; // Çilek

// length
// dizinin eleman sayısını verir
console.log(meyveler.length); // 3

// push
// dizinin sonuna eleman ekler
meyveler.push("Muz");

// pop
// dizinin sonundaki elemanı siler
meyveler.pop();

// shift
// dizinin başındaki elemanı siler
meyveler.shift();

// unshift
// dizinin başına eleman ekler
meyveler.unshift("Kivi");

// join
// diziyi birleştirir
console.log(meyveler.join(", ")); // Kivi, Armut, Çilek
