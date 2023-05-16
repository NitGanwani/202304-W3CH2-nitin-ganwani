export class Character {
  static series = 'Game of Thrones';
  name;
  house;
  age;
  alive;
  speech;
  constructor(name: string, house: string, age: number) {
    this.name = name;
    this.house = house;
    this.age = age;
    this.alive = true;
    this.speech = '';
  }

  kill() {
    this.alive = false;
  }

  talk() {
    return this.speech;
  }
}
