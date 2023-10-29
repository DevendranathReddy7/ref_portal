import './App.css';
import Player from './components/Player';

function App() {
  return (
    <>
      <div id="content">
        <h1>The <span className='em'>Almost</span> Final Countdown</h1>
        <header>
          <p> Stop the timer once you estimate that time is (almost) up</p>
        </header>
        <Player />
      </div>
      <div id="challenges"></div>
    </>
  );
}

export default App;
