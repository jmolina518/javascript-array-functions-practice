const characters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
  },
];

//***MAP***
//1. Get array of all names
const names = characters.map((character) => character.name);
//2. Get array of all heights
const allHeights = characters.map((character) => character.height);
//3. Get array of objects with just name and height properties
const minifiedRecords = characters.map((character) => ({
  name: character.name,
  height: character.height,
}));
//4. Get array of all first names
const firstNames = characters.map((character) => character.name.split(' ')[0]);
console.log(firstNames);

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
const massGreaterThan100 = characters.filter(
  (character) => character.mass > '100'
);
//2. Get characters with height less than 200
const heightLessThan200 = characters.filter(
  (character) => character.height < '200'
);
//3. Get all male characters
const allMaleChars = characters.filter(
  (character) => character.gender == 'male'
);
//4. Get all female characters
const allFemaleChars = characters.filter(
  (character) => character.gender == 'female'
);

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
const allBlueEyes = characters.every(
  (character) => character.eye_color === 'blue'
);
//2. Does every character have mass more than 40?
const allMassMoreThan40 = characters.every((character) => character.mass > 40);
//3. Is every character shorter than 200?
const allShorterThan200 = characters.every(
  (character) => character.height < 200
);
//4. Is every character male?
const allMale = characters.every((character) => character.gender === 'male');

//***SOME***
//1. Is there at least one male character?
const oneMaleCharacter = characters.some(
  (character) => character.gender === 'male'
);
//2. Is there at least one character with blue eyes?
const oneBlueEyes = characters.some(
  (character) => character.eye_color === 'blue'
);
//3. Is there at least one character taller than 210?
const oneTallerThan210 = characters.some((character) => character.height > 210);
//4. Is there at least one character that has mass less than 50?
const oneMassLessThan50 = characters.some((character) => character.mass < 50);
