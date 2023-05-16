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

/* `<li class="character col">
    <div class="card character__card">
      <img src="/joffrey.jpg" alt="Joffrey Baratheon" class="character__picture card-img-top" />
      <div class="card-body">
        <h2 class="character__name card-title h4"> </h2>
        <div class="character__info">
          <ul class="list-unstyled">
            <li>Edad:  años</li>
            <li>
              Estado:
              <i class="fas fa-thumbs-down"></i>
              <i class="fas fa-thumbs-up"></i>
            </li>
          </ul>
        </div>
        <div class="character__overlay">
          <ul class="list-unstyled">
            <li>Años de reinado: </li>
          </ul>
          <div class="character__actions">
            <button class="character__action btn">habla</button>
            <button class="character__action btn">muere</button>
          </div>
        </div>
      </div>
      <i class="emoji">👑</i>
    </div>
  </li>
  <div class="comunications">
      <p class="comunications__text display-1">Una frase que dice alguien</p>
      <img class="comunications__picture" src="/public/no-one.jpg" alt="Nombre y familia del que habla" />
    </div>`; */
