import luffyGif from '../assets/gif/luffy.gif';
import { useState, useEffect } from 'react';

export default function Loading() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={loading ? 'fixed z-10 flex items-center justify-center w-full h-full' : 'hidden'}
    >
      <div className="flex flex-col items-center justify-center">
        <img src={luffyGif} alt="Luffy_Gif" className="w-40 h-auto aspect-square animate-bounce" />
        <div className="text-2xl text-white shadow-md font-TradeWinds loadingStroke animate-bounce">
          Loading ...
        </div>
      </div>
    </div>
  );
}
