/* eslint-disable max-params */
import { Character } from '../models/character';
import { Fighter } from './fighter';

export class Squire extends Character {
  served;
  flattery;
  constructor(
    name: string,
    house: string,
    age: number,
    served: Fighter,
    flattery: number
  ) {
    super(name, house, age);
    this.served = served;
    this.flattery = flattery;
    this.speech = 'Soy un loser';
  }
}
