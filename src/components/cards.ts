import { Component } from './component';
import { AllTypes } from '../types/types';
export class Card extends Component {
  constructor(selector: string, character: AllTypes) {
    super(selector);
    this.template = this.createTemplate(character);
    this.render();
  }

  createTemplate(character: AllTypes) {
    const checkDifferences = (character: AllTypes) => {
      if ('kingYears' in character) {
        return `<li>Años de reinado: ${character.kingYears}</li>`;
      }

      if ('advisedCharacter' in character) {
        return `<li>Asesora a: ${character.advisedCharacter}</li>`;
      }

      if ('weapon' in character) {
        return `<li>Arma: ${character.weapon}</li>
              <li>Destreza: ${character.skill}</li>`;
      }

      if ('flattery' in character) {
        return `<li>Peloteo: ${character.flattery}</li>
        <li>Sirve a: ${character.served}</li>`;
      }
    };

    const renderEmojis = (character: AllTypes) => {
      if ('kingYears' in character) {
        return `<i class="emoji">👑</i>`;
      }

      if ('advisedCharacter' in character) {
        return `<i class="emoji">🎓</i>`;
      }

      if ('weapon' in character) {
        return `<i class="emoji">🗡</i>`;
      }

      if ('flattery' in character) {
        return `<i class="emoji">🛡</i>`;
      }
    };

    return `
      <li class="character col">
        <div class="card character__card">
          <img src="/${character.name.toLowerCase()}.jpg" alt="${
      character.name
    } ${character.house}" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${character.name} ${
      character.house
    }</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Edad: ${character.age}</li>
                <li class="character-status>
                  Estado:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
              ${checkDifferences(character)}
              </ul>
              <div class="character__actions">
                <button class="character__action btn">habla</button>
                <button class="character__action btn">muere</button>
              </div>
            </div>
          </div>
          ${renderEmojis(character)}
        </div>
      </li>
    `;
  }
}
