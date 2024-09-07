import ace from '../assets/cards/ace.jpg';
import chopper from '../assets/cards/chopper.jpg';
import doflamingo from '../assets/cards/doflamingo.jpg';
import hancock from '../assets/cards/hancock.jpg';
import law from '../assets/cards/law.jpg';
import luffy from '../assets/cards/luffy.jpg';
import robin from '../assets/cards/robin.jpg';
import shanks from '../assets/cards/shanks.jpg';
import zorro from '../assets/cards/zorro.jpg';

export default function Card() {
  const initialCards = [
    { id: 1, name: 'ace', src: ace },
    { id: 2, name: 'chopper', src: chopper },
    { id: 3, name: 'doflamingo', src: doflamingo },
    { id: 4, name: 'hancock', src: hancock },
    { id: 5, name: 'law', src: law },
    { id: 6, name: 'luffy', src: luffy },
    { id: 7, name: 'robin', src: robin },
    { id: 8, name: 'shanks', src: shanks },
    { id: 9, name: 'zorro', src: zorro },
  ];
  return (
    <div>
      {initialCards.map((card) => {
        return <img src={card.src} alt="" />;
      })}
    </div>
  );
}
