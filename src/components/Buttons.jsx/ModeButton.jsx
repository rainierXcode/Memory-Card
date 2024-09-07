export default function ModeButton({ text }) {
  return (
    <button className="px-8 py-3 text-lg text-yellow-300 transition-colors duration-150 bg-black rounded-md shadow-md font-TradeWinds hover:text-black hover:bg-yellow-300">
      {text}
    </button>
  );
}
