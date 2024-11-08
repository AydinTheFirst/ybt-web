# Web Programlama - Ders 2

### Hazırlık

- Typescript kurulumu
  - `npm i -g pnpm`
  - `pnpm i -g typescript`
  - `pnpm i -g tsx`
- Code runner execution path düzelt
  - Vscode Ayarlar > Code runner:executor map > "typescript": "tsx"

### Typescript

- Giriş

  - Typescript kısaca javascript'in steroid almış halidir
  - Bu temelde TypeScript'in JavaScript'in üstüne sözdizimi ekleyerek geliştiricilerin türler eklemesine olanak sağladığı anlamına gelir.

- Neden TS Kullanmalıyız?

  - Javascript tip belirtme yönünden eksik bir dildir. Bu beraberinde bir çok hatayı tetikler.
  - JS'de fonksiyon parametleri veya değişkenler bilgi içermez ne olarak kullandığını anlamak zordur.
  - TS sayesinde bu verilere bir tip belirtir ve kullanırız.
  - Örneğin, TypeScript bir sayı bekleyen bir fonksiyona bir dize geçirildiğinde hata bildirecektir. JavaScript ise bildirmeyecektir.
  - TypeScript derleme zamanı tür denetimi kullanır. Yani belirtilen türlerin eşleşip eşleşmediğini kodu çalıştırırken değil, çalıştırmadan önce denetler.

- Kurulum

  - `npm i -g typescript`
  - `tsc --init`
  - `tsc`

## TypeScript Veri Tipleri

- tsconfig.json dosyası

  ```json
  {
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "strict": true,
      "esModuleInterop": true,
      "noImplicitAny": true,

      "outDir": "./dist",
      "rootDir": "./src"
    },

    "include": ["src/**/*"],
    "exclude": ["node_modules"]
  }
  ```

- Tip tanımlaması (explicit/implicit)

  - string
  - number
  - boolean

  ```typescript
  let a: number = 5;
  let b = 5;
  ```

- Özel tipler (any/unknown)

  - any: Herhangi bir türü temsil eder, ancak güvenli değildir
  - unknown: Herhangi bir türü temsil eder, ancak any'den daha güvenlidir

  ```typescript
  let a: any = 5;

  let b: unknown = 5;
  ```

- Diziler (array)

  ```typescript
  let list: number[] = [1, 2, 3];
  let list: Array<number> = [1, 2, 3];
  ```

- Tuple (demet)

  ```typescript
  let x: [string, number];
  x = ["hello", 10];
  ```

- Enum (sıralı)

  ```typescript
  enum Color {
    Red,
    Green,
    Blue,
  }
  ```

- Void (boş)

  ```typescript
  function warnUser(): void {
    console.log("This is my warning message");
  }
  ```

- Null ve Undefined (null/undefined)

  ```typescript
  let u: undefined = undefined;
  let n: null = null;
  ```

- Never (asla)

  ```typescript
  function error(message: string): never {
    throw new Error(message);
  }
  ```

- Object (object)

  ```typescript
  declare function create(o: object | null): void;
  create({ prop: 0 });
  ```

- Type assertions (tip dönüşümü)

  ```typescript
  let someValue: any = "this is a string";
  let strLength: number = (someValue as string).length;
  ```

- Type Aliases

  ```typescript
  type Name = string;
  type NameResolver = () => string;
  type NameOrResolver = Name | NameResolver;

  function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
      return n;
    } else {
      return n();
    }
  }

  getName("John");
  getName(() => "John");
  ```

- Interfaces

  ```typescript
  interface Person {
    name: string;
    age: number;
  }

  interface Employee extends Person {
    salary: number;
  }

  let employee: Employee = {
    name: "John",
    age: 30,
    salary: 5000,
  };
  ```

- Classes

  ```typescript
  class Greeter {
    greeting: string;
    constructor(message: string) {
      this.greeting = message;
    }

    greet() {
      return "Hello, " + this.greeting;
    }
  }
  ```

- Functions

  ```typescript
  function add(x: number, y: number): number {
    return x + y;
  }

  let myAdd = function (x: number, y: number): number {
    return x + y;
  };
  ```

- Generics

  ```typescript
  function identity<T>(arg: T): T {
    return arg;
  }

  let output = identity<string>("myString");
  ```
