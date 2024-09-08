import luffyGif from '../assets/gif/luffy.gif';

export default function Loading({ isLoading }) {
  return (
    <div
      className={isLoading ? 'fixed z-20 flex items-center justify-center w-full h-full' : 'hidden'}
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
