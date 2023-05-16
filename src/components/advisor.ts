import { Character } from '../models/character';
import { Fighter } from './fighter';
import { King } from './king';
import { Squire } from './squire';

export class Advisor extends Character {
  advisedCharacter;
  constructor(
    name: string,
    house: string,
    age: number,
    advisedCharacter: King | Squire | Fighter
  ) {
    super(name, house, age);
    this.advisedCharacter = advisedCharacter;
    this.speech = 'No sé por qué, pero creo que voy a morir pronto';
  }
}
