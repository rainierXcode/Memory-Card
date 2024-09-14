import ReturnButton from './Buttons.jsx/Return';
import luffy from '../assets/cards/luffy.jpg';
import ace from '../assets/cards/ace.jpg';
import chopper from '../assets/cards/chopper.jpg';
import doflamingo from '../assets/cards/doflamingo.jpg';
import hancock from '../assets/cards/hancock.jpg';
import law from '../assets/cards/law.jpg';
import robin from '../assets/cards/robin.jpg';
import shanks from '../assets/cards/ace.jpg';
import zorro from '../assets/cards/zorro.jpg';
import { Tilt } from 'react-tilt';
import { useState } from 'react';

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.0,
  speed: 300,
  transition: true,
  axis: null,
  reset: true,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
};

function setRoundNumber(levelMode) {
  switch (levelMode) {
    case 1:
      return 5;
    case 2:
      return 7;
    case 3:
      return 9;
    default:
      return 0;
  }
}

function getPickNumber(levelMode) {
  switch (levelMode) {
    case 1:
      return 3;
    case 2:
      return 4;
    case 3:
      return 5;
    default:
      return 0;
  }
}

let cards = [
  { id: 1, name: 'luffy', src: luffy, guessed: false },
  { id: 2, name: 'ace', src: ace, guessed: false },
  { id: 3, name: 'chopper', src: chopper, guessed: false },
  { id: 4, name: 'doflamingo', src: doflamingo, guessed: false },
  { id: 5, name: 'hancock', src: hancock, guessed: false },
  { id: 6, name: 'law', src: law, guessed: false },
  { id: 7, name: 'robin', src: robin, guessed: false },
  { id: 8, name: 'shanks', src: shanks, guessed: false },
  { id: 9, name: 'zorro', src: zorro, guessed: false },
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function pickCards(cards, pickNumber) {
  const unguessedCards = cards.filter((card) => !card.guessed);
  const guessedCards = cards.filter((card) => card.guessed);

  let selectedCards = [];

  if (unguessedCards.length > 0) {
    const randomUnguessed = unguessedCards[Math.floor(Math.random() * unguessedCards.length)];
    selectedCards.push(randomUnguessed);

    const restCards = shuffle(cards.filter((card) => card.id !== randomUnguessed.id));
    selectedCards = selectedCards.concat(restCards.slice(0, pickNumber - 1));
  } else {
    selectedCards = shuffle(cards).slice(0, 3);
  }

  return shuffle(selectedCards);
}

export default function Game({ start, levelMode }) {
  const [score, setScore] = useState(0);
  const round = setRoundNumber(levelMode);

  let pickedCards = pickCards(cards, getPickNumber(levelMode));

  console.log(getPickNumber(levelMode));

  return (
    <div className={`relative  ${!start ? 'hidden' : ''}`}>
      <ReturnButton />

      <div className="flex flex-col items-end px-32 py-10 text-lg font-Playpen_Sans_Bold ">
        <div>
          <div>Score: </div>
          <div>Highest Score: </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 cursor-pointer animate-zoom gap-7">
        {pickedCards.map((card) => (
          <Tilt options={defaultOptions} key={card.id}>
            <div className="p-2 bg-[#503e39] rounded-lg">
              <img src={card.src} className="h-auto w-52 " alt="" />
            </div>
          </Tilt>
        ))}
      </div>

      <div className="flex justify-center mt-4 text-xl text-white font-Playpen_Sans_Bold">
        {score + '/' + round}{' '}
      </div>
    </div>
  );
}
