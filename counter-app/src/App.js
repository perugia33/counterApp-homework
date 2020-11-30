import CounterComponent from './Components/CounterComponent';
import './App.css';

function App() {
  
  return (
    <div>
      <CounterComponent startingCount= {1} countRate= {3} />
      <CounterComponent startingCount= {2} countRate= {2} />
      <CounterComponent startingCount= {4} countRate= {1} />

    </div>
    
  );     

}

export default App;
