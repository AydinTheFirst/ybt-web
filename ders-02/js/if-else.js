// if-else statement koşul yapısı
// if-else statement, bir koşulu kontrol eder ve koşul doğruysa belirtilen işlemi yapar, yanlışsa başka bir işlemi yapar.

// örnek 1: sayı 1'e eşitse "Sayı 1'e eşittir." yazdır, değilse "Sayı 1'e eşit değildir." yazdır
const sayi = 1;

if (sayi === 1) {
  console.log("Sayı 1'e eşittir.");
} else {
  console.log("Sayı 1'e eşit değildir.");
}

// if, else-if, else statement koşul yapısı
// if, else-if, else statement, bir koşulu kontrol eder ve koşul doğruysa belirtilen işlemi yapar, yanlışsa başka bir koşulu kontrol eder ve o koşul doğruysa belirtilen işlemi yapar, yanlışsa başka bir işlemi yapar.

if (sayi === 1) {
  console.log("Sayı 1'e eşittir.");
} else if (sayi === 2) {
  console.log("Sayı 2'ye eşittir.");
} else {
  console.log("Sayı 1 ve 2'ye eşit değildir.");
}
