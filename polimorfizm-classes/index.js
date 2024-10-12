class Person {
  constructor(name, age, gender, organe) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.organe = organe;
  }
}

class Veshka {
  constructor(membran, left, right) {
    this.membran = membran;
    this.left = left;
    this.right = right;
  }
}

class Qeliza {
  constructor(membran, citoplazma) {
    this.membran = membran;
    this.citoplazma = citoplazma;
  }
}

class Zemra extends Qeliza {
  constructor(membran, citoplazma, vena, neurone) {
    super(membran, citoplazma);
    this.vena = vena;
    this.neurone = neurone;
  }
}

class Truri extends Qeliza {
  constructor(membran, citoplazma, inde) {
    super(membran, citoplazma);
    this.inde = inde;
  }
}

let zemra = new Zemra(true, true, true, true);
let truri = new Truri(true, true, true);
let veshkat1 = new Veshka(true, true, false);
let veshkat2 = new Veshka(true, true, true);

let organe1 = [zemra, truri, veshkat1];
let organe2 = [zemra, truri, veshkat2];

const ana = new Person("Ana", 20, "female", organe1);
const beni = new Person("Beni", 22, "male", organe2);
console.log(ana);
console.log(beni);