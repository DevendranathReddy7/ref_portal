import './App.css';
import Player from './components/Player';
import TimerChallenge from './components/TimerChallenge';

function App() {
  return (
    <>
      <div id="content">
        <h1>The <em>Almost</em> Final Countdown</h1>
        <header>
          <p> Stop the timer once you estimate that time is (almost) up</p>
        </header>
        <Player />

        <div id="challenges">
          <TimerChallenge title='Easy' targetTime={1} />
          <TimerChallenge title='Medium' targetTime={5} />
          <TimerChallenge title='Tough' targetTime={10} />
          <TimerChallenge title='Pros only' targetTime={15} />
        </div>
      </div>
    </>
  );
}

export default App;
