import { MdOutlineMusicNote, MdOutlineMusicOff } from 'react-icons/md';
import music from '../assets/music/binks_sake.mp3';
import { useState, useEffect, useRef } from 'react';

export default function Music() {
  const [mute, setMute] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(music);

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  const changeStatus = () => {
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
        className="flex items-center justify-center w-10 h-10 p-2 bg-black rounded-full hover:w-[42px] hover:h-[42px] transition-all duration-100"
        onClick={changeStatus}
      >
        {mute ? (
          <MdOutlineMusicOff className="text-2xl text-yellow-400" />
        ) : (
          <MdOutlineMusicNote className="text-2xl text-yellow-400" />
        )}
      </button>
    </>
  );
}
