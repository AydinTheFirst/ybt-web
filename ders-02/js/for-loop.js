for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

const meyveler = ["elma", "armut", "muz", "çilek", "kivi"];

// burada meyveler dizisinin elemanlarını yazdırır
// bu yöntem geleneksel bir yöntemdir
for (let i = 0; i < meyveler.length; i++) {
  console.log(meyveler[i]); // elma, armut, muz, çilek, kivi
}

// burada meyveler dizisinin elemanlarını yazdırır
// bu yöntem daha kolay bir yöntemdir
for (const meyve of meyveler) {
  console.log(meyve); // elma, armut, muz, çilek, kivi
}

// burada meyveler dizisinin index'lerini yazdırır
for (const meyve in meyveler) {
  console.log(meyve); // 0, 1, 2, 3, 4
}
