// classes (sınıflar)
// Sınıfların kullanım alanı genellikle nesne yönelimli programlama (OOP) kavramları ile ilgilidir.
// Sınıflar, nesnelerin özelliklerini ve metodlarını tanımlamak için kullanılır.
// Sınıflar, bir yapı oluşturmak için kullanılır ve bu yapıya göre nesneler oluşturulur.
// Sınıflar, ES6 ile birlikte gelmiştir.

// Sınıf Tanımlama
class Person {
  // constructor metodu
  constructor(name, age) {
    // this anahtar kelimesi sınıfın kendisini ifade eder ve sınıf içindeki özelliklere erişmek için kullanılır.
    this.name = name;
    this.age = age;
  }

  // showInfos metodu
  showInfos() {
    console.log(`İsim: ${this.name} Yaş: ${this.age}`);
  }
}

const person = new Person("Ayşe", 30);
const person1 = new Person("Mustafa", 25);

console.log(person.age);
console.log(person1.showInfos());

// Sınıf İfadeleri
// Sınıflar, değişkenlere atanabilir.
const Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfos() {
    console.log(`İsim: ${this.name} Yaş: ${this.age}`);
  }
};

// Extend (Kalıtım)

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfos() {
    console.log(`İsim: ${this.name} Yaş: ${this.age}`);
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    // super anahtar kelimesi, üst sınıfın constructor metodunu çağırmak için kullanılır.
    super(name, age);
    this.salary = salary;
  }

  showInfos() {
    console.log(`İsim: ${this.name} Yaş: ${this.age} Maaş: ${this.salary}`);
  }
}

const emp = new Employee("Ahmet", 30, 4000);
console.log(emp.showInfos());

const Animal = class {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} konuşuyor.`);
  }
};

const Dog = class extends Animal {
  constructor(name, bark) {
    super(name);
    this.bark = bark;
  }

  speak() {
    console.log(`${this.name} havlıyor.`);
  }
};
