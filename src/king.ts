import { Character } from './character';

export class King extends Character {
  kingYears;
  constructor(name: string, house: string, age: number, kingYears: number) {
    super(name, house, age);
    this.kingYears = kingYears;
    this.speech = 'Vais a morir todos';
  }
}
