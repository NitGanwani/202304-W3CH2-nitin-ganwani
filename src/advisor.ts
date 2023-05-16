import { Character } from './character';

export class Advisor extends Character {
  advisedCharacter;
  constructor(
    name: string,
    house: string,
    age: number,
    advisedCharacter: string
  ) {
    super(name, house, age);
    this.advisedCharacter = advisedCharacter;
    this.speech = 'No sé por qué, pero creo que voy a morir pronto';
  }
}
