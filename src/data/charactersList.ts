import { King } from '../components/king';
import { Advisor } from '../components/advisor';
import { Fighter } from '../components/fighter';
import { Squire } from '../components/squire';

export const character1 = new King('Joffrey', 'Baratheon', 20, 2);
export const character2 = new Fighter('Jaime', 'Lannister', 40, 'espada', 8);
export const character3 = new Fighter('Daenerys', 'Targaryen', 21, 'dragon', 9);
export const character4 = new Advisor('Tyrion', 'Lannister', 32, 'Daenerys');
export const character5 = new Squire('Bronn', 'Desconocido', 43, 'Jaime', 8);

export const allCharacters: any[] = [
  character1,
  character2,
  character3,
  character4,
  character5,
];
