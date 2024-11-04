// fonksiyonlar
// fonksiyonlar bir işi yapmak için kullanılan yapılardır.
// fonksiyonları kullanarak kod tekrarını önleyebiliriz.
// fonksiyonlar bir işi yapar ve bir değer döndürebilir.

// fonksiyon tanımlama
function fonksiyon() {
  console.log("Merhaba dünya");
}

// fonksiyon çağırma
fonksiyon();

// fonksiyonlara parametre gönderme
function fonksiyon2(parametre) {
  console.log(parametre);
}

// fonksiyonu parametre ile çağırma
fonksiyon2("Merhaba dünya");

// fonksiyonlardan değer döndürme
function fonksiyon3() {
  return "Merhaba dünya";
}

// fonksiyonu çağırma ve değeri kullanma
const sonuc = fonksiyon3();
console.log(sonuc);

// fonksiyonlara parametre gönderme ve değer döndürme
function fonksiyon4(parametre) {
  return parametre;
}

// fonksiyonu parametre ile çağırma ve değeri kullanma
const sonuc2 = fonksiyon4("Merhaba dünya");
console.log(sonuc2);

// fonksiyonlara birden fazla parametre gönderme ve değer döndürme
function fonksiyon5(parametre1, parametre2) {
  return parametre1 + parametre2;
}

// fonksiyonu parametre ile çağırma ve değeri kullanma
const sonuc3 = fonksiyon5(1, 2);
console.log(sonuc3);

// callback fonksiyonlar
// callback fonksiyonlar, bir fonksiyona parametre olarak gönderilen ve o fonksiyonun içinde çağrılan fonksiyonlardır.

// callback fonksiyon tanımlama
function fonksiyon6(callback) {
  callback();
}

// callback fonksiyon çağırma
fonksiyon6(function () {
  console.log("Merhaba dünya");
});

// arrow fonksiyonlar
// arrow fonksiyonlar, ES6 ile gelen yeni bir fonksiyon tanımlama yöntemidir.
// arrow fonksiyonlar, function anahtar kelimesi yerine => işaretini kullanır.

// arrow fonksiyon tanımlama
const fonksiyon7 = () => {
  console.log("Merhaba dünya");
};

// arrow fonksiyon çağırma
fonksiyon7();

// arrow fonksiyonlara parametre gönderme
const fonksiyon8 = (parametre) => {
  console.log(parametre);
};

// arrow fonksiyonu parametre ile çağırma
fonksiyon8("Merhaba dünya");
