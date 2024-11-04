// map ve forEach methodları
// map ve forEach methodları, bir dizinin her bir elemanı üzerinde işlem yapmamızı sağlar.
// Bu iki method arasındaki fark, map methodunun yeni bir dizi döndürmesi ve forEach methodunun dizi döndürmemesidir.

// örnek 1: meyveler dizisinin her bir elemanını yazdırır
const meyveler = ["elma", "armut", "muz", "çilek", "kivi"];

// map methodu
const yeniMeyveler = meyveler.map((meyve) => {
  console.log(meyve);
  return meyve;
});

console.log(yeniMeyveler); // ["elma", "armut", "muz", "çilek", "kivi"]

// map methodu ile tüm meyveleri büyük harf yapar
const buyukHarfMeyveler = meyveler.map((meyve) => {
  return meyve.toUpperCase();
});

console.log(buyukHarfMeyveler); // ["ELMA", "ARMUT", "MUZ", "ÇILEK", "KIVI"]

// forEach methodu
const yeniMeyveler2 = meyveler.forEach((meyve) => {
  console.log(meyve);
});

console.log(yeniMeyveler2); // undefined
