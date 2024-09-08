import { MdOutlineMusicNote, MdOutlineMusicOff } from 'react-icons/md';
import music from '../assets/music/binks_sake.mp3';
import { useState, useEffect, useRef } from 'react';

export default function Music() {
  const [mute, setMute] = useState(true);
  const audioRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(music);

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  const changeStatus = () => {
    setIsZoomed(true);
    setMute(!mute);

    if (mute) {
      audioRef.current.play();
      audioRef.current.muted = false;
    } else {
      audioRef.current.muted = true;
    }
  };

  return (
    <>
      <button
        className={`flex items-center justify-center w-10 h-10 p-2 bg-black rounded-full  ${
          isZoomed ? 'animate-zoom' : ''
        }`}
        onClick={changeStatus}
        onAnimationEnd={() => setIsZoomed(false)}
      >
        <MdOutlineMusicOff
          className={`text-2xl transition-opacity duration-300 ease-in-out text-yellow-400 ${
            mute ? 'opacity-100' : 'opacity-0 w-0 h-0'
          }`}
        />
        <MdOutlineMusicNote
          className={`text-2xl transition-opacity duration-300 ease-in-out text-yellow-400 ${
            mute ? 'opacity-0 w-0 h-0' : 'opacity-100'
          }`}
        />
      </button>
    </>
  );
}
