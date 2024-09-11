import logo from '../../assets/images/logo.png';
export default function ReturnButton() {
  return (
    <img
      src={logo}
      alt="logo.png"
      className="absolute top-0 h-auto ml-3 transition-all duration-300 ease-in-out w-60 hover:w-64"
    />
  );
}
