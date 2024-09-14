import BackgroundVideo from './components/Bg';
import Loading from './components/Loading';
import Music from './components/Music';
import Logo from './components/Logo';
import ModeButton from './components/Buttons.jsx/ModeButton';
import { useState, useEffect } from 'react';
import Game from './components/Game';

function App() {
  const [loading, setLoading] = useState(true);
  const [levelMode, setLevelMode] = useState(0);

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
          <Logo start={isStart(levelMode)} />

          <div className={`flex justify-center gap-4 mt-16 ${isStart(levelMode) ? 'hidden' : ''}`}>
            <ModeButton text="Easy" level={1} setLevelMode={setLevelMode} />
            <ModeButton text="Medium" level={2} setLevelMode={setLevelMode} />
            <ModeButton text="Hard" level={3} setLevelMode={setLevelMode} />
          </div>

          {isStart(levelMode) && <Game start={isStart(levelMode)} levelMode={levelMode} />}
        </div>
        <div className={!loading ? 'px-10 py-5' : 'hidden'}>
          <Music />
        </div>

        <BackgroundVideo start={isStart(levelMode)} />
        <Loading isLoading={loading} />
      </div>
    </>
  );
}

function isStart(level) {
  return level !== 0;
}

export default App;
