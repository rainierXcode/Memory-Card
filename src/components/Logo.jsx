import logo from '../assets/images/logo.png';

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <img src={logo} alt="logo" className="w-auto h-[180px]" />
      <div className="text-6xl text-black font-Acme textLogo">Memory Game</div>
    </div>
  );
}
