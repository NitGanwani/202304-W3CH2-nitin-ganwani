/* eslint-disable no-new */
import './style.css';
import { List } from './components/list';
import { Card } from './components/cards';
import { createCharacters } from './data/charactersList';

new List('.app');

const characters = createCharacters();

characters.map((character) => new Card('.characters-list', character));
