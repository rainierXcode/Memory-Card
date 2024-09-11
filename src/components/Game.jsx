import ReturnButton from './Buttons.jsx/Return';
import luffy from '../assets/cards/luffy.jpg';
import { Tilt } from 'react-tilt';

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

export default function Game() {
  return (
    <div className="relative">
      <ReturnButton />

      <div className="flex justify-center cursor-pointer pt-52">
        <Tilt options={defaultOptions}>
          <div className="p-2 bg-[#503e39] rounded-lg">
            <img src={luffy} className="h-auto w-52 " alt="" />
          </div>
        </Tilt>
      </div>
    </div>
  );
}
