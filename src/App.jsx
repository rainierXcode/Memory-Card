import BackgroundVideo from './components/Bg';
import Loading from './components/Loading';
import Music from './components/Music';
import Logo from './components/Logo';
import ModeButton from './components/Buttons.jsx/ModeButton';
import { useState, useEffect } from 'react';
import Game from './components/Game';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className={!loading ? 'flex-1' : 'hidden'}>
          {/* <Logo /> */}

          {/* <div className="flex justify-center gap-4 mt-16">
            <ModeButton text="Easy" />
            <ModeButton text="Easy" />
            <ModeButton text="Easy" />
          </div> */}

          <Game />
        </div>
        <div className={!loading ? 'px-10 py-5' : 'hidden'}>
          <Music />
        </div>

        <BackgroundVideo />
        <Loading isLoading={loading} />
      </div>
    </>
  );
}

export default App;
