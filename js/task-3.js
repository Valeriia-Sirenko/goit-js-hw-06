class StringBuilder {
  // Конструктор, який приймає початковий рядок і зберігає його у приватній властивості #value
  constructor(initialValue) {
    this.#value = initialValue;
  }

  // Приватна властивість для зберігання рядка
  #value;

  // Метод для отримання поточного значення
  getValue() {
    return this.#value;
  }

  // Метод для додавання рядка в кінець
  padEnd(str) {
    this.#value += str;
  }

  // Метод для додавання рядка на початок
  padStart(str) {
    this.#value = str + this.#value;
  }

  // Метод для додавання рядка на початок і в кінець
  padBoth(str) {
    this.#value = str + this.#value + str;
  }
}

// Перевірка роботи
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
