// objects (nesneler) - key-value pairs (anahtar-değer çiftleri)

// nesne tanımlama
const nesne = {
  key: "value",
};

// nesne kullanma
console.log(nesne); // { key: "value" }

// nesne içindeki değeri kullanma
console.log(nesne.key); // value

const person = {
  name: "John",
  age: 30,
  isMarried: false,
  children: ["Alice", "Bob"],
  address: {
    city: "New York",
    country: "USA",
  },
};

console.log(person.name); // John
console.log(person.age); // 30
