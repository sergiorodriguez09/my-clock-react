import './App.css';
import CountDown from './components/CountDown/CountDown';
import DigitalClock from './components/DigitalClock/DigitalClock';
import Stopwatch from './components/Stopwatch/Stopwatch';


function App() {
  return (
    <div className="App">
      <DigitalClock></DigitalClock>
      <CountDown></CountDown>
      <Stopwatch></Stopwatch>
    </div>
  );
}

export default App;
