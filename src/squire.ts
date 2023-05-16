/* eslint-disable max-params */
import { Character } from './character';

export class Squire extends Character {
  served;
  flattery;
  constructor(
    name: string,
    house: string,
    age: number,
    served: string,
    flattery: number
  ) {
    super(name, house, age);
    this.served = served;
    this.flattery = flattery;
    this.speech = 'Soy un loser';
  }
}
