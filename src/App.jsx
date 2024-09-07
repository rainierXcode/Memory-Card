import Card from './components/Card';
import BackgroundVideo from './components/Bg';
import Loading from './components/Loading';
import Music from './components/Music';
import Logo from './components/Logo';
import ModeButton from './components/Buttons.jsx/ModeButton';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <BackgroundVideo />
          <Loading />
          <Logo />

          <div className="flex justify-center gap-4 mt-10">
            <ModeButton text="Easy" />
            <ModeButton text="Easy" />
            <ModeButton text="Easy" />
          </div>
        </div>
        <div className="px-10 py-5">
          <Music />
        </div>
      </div>
    </>
  );
}

export default App;
