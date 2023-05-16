import { King } from '../components/king';
import { Advisor } from '../components/advisor';
import { Fighter } from '../components/fighter';
import { Squire } from '../components/squire';
import { AllTypes } from '../types/types';

export const createCharacters = () => {
  const allCharacters: AllTypes[] = [];

  const character1 = new King('Joffrey', 'Baratheon', 20, 2);
  const character2 = new Fighter('Jaime', 'Lannister', 40, 'espada', 8);
  const character3 = new Fighter('Daenerys', 'Targaryen', 21, 'dragon', 9);
  const character4 = new Advisor('Tyrion', 'Lannister', 32, character3);
  const character5 = new Squire('Bronn', 'Desconocido', 43, character2, 8);

  allCharacters.push(
    character1,
    character2,
    character3,
    character4,
    character5
  );

  return allCharacters;
};
